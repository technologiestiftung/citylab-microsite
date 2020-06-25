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
          {{ this.unsubscribe['title'] }}
        </h1>
        <p>{{ this.unsubscribe['subtitle'] }}</p>
        <HandbuchUnsubscribe :content="content" :lang="lang" />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
  import { content } from '../../assets/content.js';

  import HandbuchUnsubscribe from '../../components/handbuch/HandbuchUnsubscribe.vue';
  import Navigation from '../../components/Navigation.vue';
  import Footer from '../../components/Footer.vue';

  export default {
    components: {
      HandbuchUnsubscribe,
      Navigation,
      Footer,
    },
    data() {
      return {
        lang: 'en',
        content: content,
        direct: '/handbuch_newsletter/handbuch_unsubscribe_de',
      };
    },
    computed: {
      unsubscribe() {
        return this.content[this.lang]['innovationshandbuch']['register'][
          'unsubscribe'
        ];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;
  }
</style>
