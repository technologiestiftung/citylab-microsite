<template>
  <section v-if="renderIt" id="announcement" class="section">
    <div class="container">
      <h2 class="subtitle announcement__title">{{ title }}</h2>
    </div>
  </section>
</template>

<script>
import { content } from "../assets/content";
export default {
  props: {
    lang: String,
  },
  computed: {
    renderIt() {
      return content.announcements ? true : false;
    },
    title() {
      return content.announcements.title[this.lang];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.section#announcement {
  background-color: #2f2fa2;
}
.announcement__title {
  color: white !important;
  font-size: 1.6rem !important;
  text-align: center;
}
</style>
