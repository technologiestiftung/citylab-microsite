<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />
    <section class="section is-medium">
      <div class="container">
        <h1 class="title" style="margin-top: 100px">
          {{ content[lang]["register"]["formunsubscribe"]["title"] }}
        </h1>

        <h2 class="subtitle">
          {{ content[lang]["register"]["formunsubscribe"]["p1"] }}
        </h2>
        <UnsubscribeForm :content="formContent" @submit-data="unsubscribe"/>
      </div>
      <Matomo />
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";
import UnsubscribeForm from "../components/forms/UnsubscribeForm.vue";

export default {
  components: {
    Navigation,
    Matomo,
    Footer,
    UnsubscribeForm
  },
  data() {
    return {
      content: content,
      lang: "de",
      direct: "/newsletter_unsubscribe_en"
    };
  },
  computed: {
    formContent() {
        return this.content[this.lang]["register"]['formunsubscribe'];
    }
  },
  methods: {
    unsubscribe(data) {
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
        "unsubscribe:send",
        {
          recipient: {
            email: data.email
          }
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
</script>

<style lang="scss">
</style>
