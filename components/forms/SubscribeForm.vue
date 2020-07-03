<template>
  <form method="POST" v-on:submit.prevent="handleSubmit()">
    <fieldset>
      <div>
        <label for="first_name">{{ this.content['form']['last_name'] }}</label>
        <input
          type="text"
          name="first_name"
          :placeholder="this.content['form']['first_name']"
          v-model="first_name"
        />
      </div>
      <div>
        <label for="last_name">{{ this.content['form']['last_name'] }}</label>
        <input
          type="text"
          name="last_name"
          :placeholder="this.content['form']['last_name']"
          v-model="last_name"
        />
      </div>
      <div>
        <label for="email">{{ this.content['form']['mail'] }}</label>
        <input
          type="email"
          name="email"
          :placeholder="this.content['form']['mail']"
          v-model="email"
          required
        />
      </div>
      <div class="mandatory">{{ this.content['mandatory'] }}</div>
      <div class="agb">
        <input type="checkbox" name="agb" required />
        <span v-html="this.content['form']['agb']"></span>
        <span v-html="this.content['form']['unsubscribe']"></span>
      </div>
      <input class="button is-color-secondary is-normal" type="submit" :value="this.content['form']['button']" />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "SubscribeForm",
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null
    };
  },
  props: ["content"],
  methods: {
    handleSubmit: function(e) {
      this.$emit("submit-data", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
      });
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

  fieldset {
    padding: 0;
    margin: 0;
    border: none;

    label, .mandatory {
      font-size: $size-7;
      font-weight: $weight-bold;
    }

    label {
      display: none;
    }

    >* {
      max-width: 100%;
      margin-top: $spacing-m;
    }
  }

  input[type="text"], input[type="email"] {
    background: $color-primary--lightest;
    border: none;
    font-size: $size-medium;
    width: 100%;
    padding: $spacing-s;
    color: $text;
  }
  .agb {
    display: inline-block;
    color: $color-primary;
    font-size: $size-7;
    line-height: 140%;
  }
}
</style>
