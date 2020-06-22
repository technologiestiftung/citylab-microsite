<template>
  <div>
    <form
      method="POST"
      v-on:submit.prevent="handleSubmit()"
    >
      <label>{{ this.content['mail'] }}</label>
      <input
        type="email"
        name="email"
        :placeholder="this.content['mail']"
        v-model="email"
        required
      />
      <input class="button is-color-secondary is-medium" type="submit" :value="this.content['button']" />
    </form>
  </div>
</template>

<script>
export default {
  name: "UnsubscribeForm",
  data() {
    return {
      email: null
    }
  },
  props: ["content"],
  methods: {
    handleSubmit: function(e) {
      this.$emit("submit-data", {
        email: this.email
      });
    }
  },
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
