<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />
    <section class="section downloads">
      <div class="container">
        <h1 class="title">
          {{ content[lang]['downloads']['title'] }}
        </h1>
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
    <Matomo />
  </div>
</template>

<script>
  import { content } from '../assets/content.js';

  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import Matomo from '../components/Matomo.vue';

  export default {
    components: {
      Navigation,
      Footer,
      Matomo,
    },
    data() {
      return {
        lang: 'de',
        content: content,
        direct: '/downloads_en',
      };
    },
  };
</script>

<style lang="scss"></style>
