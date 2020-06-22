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
          {{ content[lang]["register"]["title"] }}
        </h1>
        <SubscribeForm :content="formContent" @submit-data="subscribe"  />
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
import SubscribeForm from "../components/forms/SubscribeForm";

export default {
  name: "NewsletterRegisterDe",
  components: {
    Navigation,
    Matomo,
    Footer,
    SubscribeForm
  },
  data() {
    return {
      content: content,
      lang: "de",
      direct: "/newsletter_register_en"
    };
  },
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

<style lang="scss"></style>
