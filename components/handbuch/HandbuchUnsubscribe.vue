<template>
  <div>
    <form
      method="POST"
      v-on:submit.prevent="handleSubmit()"
    >
      <label>{{ this.unsubscribe['email'] }}</label>
      <input
        type="email"
        name="email"
        :placeholder="this.unsubscribe['email']"
        v-model="email"
        required
      />
      <input class="button is-color-secondary is-medium" type="submit" :value="this.unsubscribe['button']" />
    </form>
  </div>
</template>

<script>
import Button from '../Button.vue';

export default {
  name: "HandbuchUnsubscribe",
  components: {
    Button
  },
  data() {
    return {
      email: null
    }
  },
  props: ["content", "lang"],
  computed: {
    unsubscribe() { return this.content[this.lang]['innovationshandbuch']['register']['unsubscribe']; }
  },
  methods: {
    handleSubmit: function(e) {
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
      n2g("create", this.unsubscribe['token']);

      n2g(
        "unsubscribe:send",
        {
          recipient: {
            email: this.email
          }
        },
        function(response, message) {
          if (response.status == 201) {
            // unsubscribe successful
            const routeData = vm.$router.resolve({ path: `/newsletter_status/unsubscribed_${vm.lang}` });
            window.open(routeData.href, '_blank');
          } else {
            // error while unsubscribing
            const routeData = vm.$router.resolve({ path: `/newsletter_status/error_${vm.lang}` });
            window.open(routeData.href, '_blank');
          }
        },
        function(data) {
          // error while unsubscribing
          const routeData = vm.$router.resolve({ path: `/newsletter_status/error_${vm.lang}` });
          window.open(routeData.href, '_blank');
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/style/style.scss";

  form {
    width: 100%;
    height: 100%;
    font-size: $size-medium;

    & > * {
      margin-top: $spacing-m;
    }

    label {
      display: none;
    }

    input {
      background: $color-primary--lightest;
      border: none;
      font-size: $size-medium;
      &[type=text], &[type=email] {
        width: 100%;
        padding: $spacing-s;
        color: $text;
      }
    }
  }
</style>
