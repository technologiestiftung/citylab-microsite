<template>
  <div class="button--wrapper">
    <a
      style="margin-top: 30px;"
      class="button is-color-secondary is-normal"
      :href="direct"
      >{{ label }}</a
    >
  </div>
</template>

<script>
export default {
  Name: "Button",
  props: {
    label: String,
    direct: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";
.button {
  &--wrapper {
    width: 100%;
    a {
      font-size: 20px !important;
    }
  }

  background: #f64c72 !important;
  @include transition;

  &:hover {
    background: #f97996 !important;
    @include transition;
  }
}
</style>
