export default {
  methods: {
    subscribe(data, token) {
      const vm = this;

      !(function(e, t, n, c, r, a, i) {
        (e.Newsletter2GoTrackingObject = r),
          (e[r] =
            e[r] ||
            function() {
              (e[r].q = e[r].q || []).push(arguments);
            }),
          (e[r].l = 1 * new Date()),
          (a = t.createElement(n)),
          (i = t.getElementsByTagName(n)[0]),
          (a.async = 1),
          (a.src = c),
          i.parentNode.insertBefore(a, i);
      })(
        window,
        document,
        "script",
        "https://static.newsletter2go.com/utils.js",
        "n2g"
      );
      n2g("create", token);

      n2g(
        "subscribe:send",
        {
          recipient: data
        },
        function(response, messages) {
          if (response.status == 201) {
            // successful signup
            const routeData = vm.$router.resolve({
              path: `/newsletter_status/confirm_${vm.lang}`
            });
            window.open(routeData.href, "_blank");
          } else if (response.status == 200) {
            // duplicate subscription
            const routeData = vm.$router.resolve({
              path: `/newsletter_status/duplicatemail_${vm.lang}`
            });
            window.open(routeData.href, "_blank");
          } else {
            // error while subscribing
            const routeData = vm.$router.resolve({
              path: `/newsletter_status/error_${vm.lang}`
            });
            window.open(routeData.href, "_blank");
          }
        },
        function(response, messages) {
          // error while subscribing
          const routeData = vm.$router.resolve({
            path: `/newsletter_status/error_${vm.lang}`
          });
          window.open(routeData.href, "_blank");
        }
      );
    },
    unsubscribe(data, token) {
      const vm = this;

      !(function(e, t, n, c, r, a, i) {
        (e.Newsletter2GoTrackingObject = r),
          (e[r] =
            e[r] ||
            function() {
              (e[r].q = e[r].q || []).push(arguments);
            }),
          (e[r].l = 1 * new Date()),
          (a = t.createElement(n)),
          (i = t.getElementsByTagName(n)[0]),
          (a.async = 1),
          (a.src = c),
          i.parentNode.insertBefore(a, i);
      })(
        window,
        document,
        "script",
        "https://static.newsletter2go.com/utils.js",
        "n2g"
      );
      n2g("create", token);

      n2g(
        "unsubscribe:send",
        {
          recipient: data
        },
        function(response, message) {
          if (response.status == 201) {
            // unsubscribe successful
            const routeData = vm.$router.resolve({
              path: `/newsletter_status/unsubscribed_${vm.lang}`
            });
            window.open(routeData.href, "_blank");
          } else {
            // error while unsubscribing
            const routeData = vm.$router.resolve({
              path: `/newsletter_status/error_${vm.lang}`
            });
            window.open(routeData.href, "_blank");
          }
        },
        function(data) {
          // error while unsubscribing
          const routeData = vm.$router.resolve({
            path: `/newsletter_status/error_${vm.lang}`
          });
          window.open(routeData.href, "_blank");
        }
      );
    }
  }
};
