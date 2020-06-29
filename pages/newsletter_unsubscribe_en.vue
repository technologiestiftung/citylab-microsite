<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />
    <section class="section is-medium">
      <div class="container">
        <h1 class="title" style="margin-top: 100px">
          {{ content[lang]["register"]["formunsubscribe"]["title"] }}
        </h1>

        <h2 class="subtitle">
          {{ content[lang]["register"]["formunsubscribe"]["p1"] }}
        </h2>
        <UnsubscribeForm :content="formContent" @submit-data="handleUnsubscribe" />
      </div>
      <Matomo />
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";
import UnsubscribeForm from "../components/forms/UnsubscribeForm.vue";

import subscriptionHandling from '../mixins/subscriptionHandling.js';

export default {
  mixins: [ subscriptionHandling ],
  components: {
    Navigation,
    Matomo,
    Footer,
    UnsubscribeForm
  },
  data() {
    return {
      content: content,
      lang: "en",
      direct: "/newsletter_unsubscribe_de"
    };
  },
  computed: {
    formContent() {
      return this.content[this.lang]["register"]["formunsubscribe"];
    }
  },
  methods: {
    handleUnsubscribe(data) {
      this.unsubscribe(data, this.content[this.lang]["register"]["token"]);
    }
  }
};
</script>

<style lang="scss">
</style>
