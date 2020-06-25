<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">
          {{ this.unsubscribedMessage['title'] }}
        </h1>
        <h2 class="subtitle">
          {{ this.unsubscribedMessage['subtitle'] }}
        </h2>
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
  import { content } from '../../assets/content.js';

  import Navigation from '../../components/Navigation.vue';
  import Footer from '../../components/Footer.vue';

  export default {
    components: {
      Navigation,
      Footer,
    },
    data() {
      return {
        lang: 'de',
        content: content,
        direct: '/newsletter_status/unsubscribed_en',
      };
    },
    computed: {
      unsubscribedMessage() {
        return this.content[this.lang]['register']['unsubscribeSuccess'];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;
  }
</style>
