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
        <h1 class="title" style="margin-top: 100px;">
          {{ content[lang]['funding_details']['title'] }}
        </h1>
        <h2 class="subtitle">
          {{ content[lang]['funding_details']['subtitle'] }}
        </h2>

        <p>
          <strong>{{ content[lang]['funding_details']['who_q'] }}</strong>
        </p>
        <p class="answer" v-html="content[lang]['funding_details']['who_a']" />
        <p>
          <strong>{{ content[lang]['funding_details']['when_q'] }}</strong>
        </p>
        <p class="answer" v-html="content[lang]['funding_details']['when_a']" />
        <p>
          <strong>{{ content[lang]['funding_details']['what_q'] }}</strong>
        </p>
        <p class="answer" v-html="content[lang]['funding_details']['what_a']" />
        <p>
          <strong>{{ content[lang]['funding_details']['how_much_q'] }}</strong>
        </p>
        <p
          class="answer"
          v-html="content[lang]['funding_details']['how_much_a']"
        />
        <p>
          <strong>{{ content[lang]['funding_details']['how_q'] }}</strong>
        </p>
        <p class="answer" v-html="content[lang]['funding_details']['how_a']" />
        <p>
          <strong>{{ content[lang]['funding_details']['schedule_q'] }}</strong>
        </p>
        <p
          class="answer"
          v-html="content[lang]['funding_details']['schedule_a']"
        />
        <br >
        <p>
          <i>{{ content[lang]['funding_details']['last_updated'] }} </i>
        </p>

        <Matomo />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
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
        lang: 'en',
        content: content,
        direct: '/funding_details',
      };
    },
    computed: {
      pointsArr() {
        return this.content[this.lang]['funding_details']['points'];
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';
  h1.title,
  h3.title {
    color: $color-secondary;
    margin-bottom: 1.5rem;
  }
  h2.subtitle {
    margin-top: 0 !important;
  }
</style>
