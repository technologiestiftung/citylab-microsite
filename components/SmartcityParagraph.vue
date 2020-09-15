<template>
  <section id="smart-city" class="section">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subTitle }}</h2>
      <Button
        :label="label"
        :direct="lang === 'de' ? '/smart_city' : '/smart_city_en'"
      />
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
import { content } from "../assets/content";
export default {
  components: {
    Button,
  },
  props: {
    lang: String,
  },
  computed: {
    title() {
      return content.smartcity.landing.title[this.lang];
    },
    subTitle() {
      return content.smartcity.landing.subTitle[this.lang];
    },
    label() {
      return content.smartcity.landing.button.label[this.lang];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.section#smart-city {
  > * h2 {
    font-size: 20px !important;
  }
}
</style>
