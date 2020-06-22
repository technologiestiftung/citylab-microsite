<template>
  <section class="section is-medium newsletter" id="newsletter">
    <div class="container">
      <div>
        <h1 class="title">
          {{ content[lang]["register"]["intro"]["title"] }}
        </h1>

        <h2 class="subtitle" style="margin-top: 100px">
          {{ content[lang]["register"]["intro"]["subtitle"] }}
        </h2>
      </div>

      <div class="register-wrapper">
        <SubscribeForm :content="formContent" @submit-data="subscribe"  />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button";
import SubscribeForm from "./forms/SubscribeForm";

export default {
  name: "Newsletter",
  components: {
    Button,
    SubscribeForm
  },
  props: ["content", "lang", "direct"],
  computed: {
    formContent() {
      return this.content[this.lang]["register"];
    }
  },
  methods: {
    subscribe(data) {
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
      n2g("create", this.content[this.lang]["register"]["token"]);

      n2g(
        "subscribe:send",
        {
          recipient: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
          }
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
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";

.newsletter {
  padding-bottom: 0rem !important;

  .musthave {
    label {
      font-size: 9px;
      line-height: 100%;
    }
  }

  .container {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .title {
      color: $color-secondary;
    }

    .subtitle {
      color: $color-primary;
    }
  }

  .register-wrapper {
    box-shadow: 0 2px 60px 0 rgba(47, 47, 162, 0.1);
    min-width: 270px;
    max-width: 370px;
    padding: 30px;
    background: white;
    transform: translateY(-100px);
    margin-left: 30px;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      margin-left: 0px;
      transform: translateY(0px);
      margin: 2rem 0 4rem 0;
    }
  }
}
</style>
