<template>
  <nuxt-link style="margin-top: 30px;" class="button is-color-secondary  is-normal" :to="direct">
    {{ label }}
  </nuxt-link>
</template>

<script>
  export default {
    Name: 'Button',
    props: {
      label: String,
      direct: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/style.scss";
  .button {
    @include transition;
      opacity: 1;
    &:hover {
      opacity: .75;
      @include transition;
    }
  }
</style>