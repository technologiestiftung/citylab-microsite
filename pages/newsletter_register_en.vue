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
          {{ content[lang]["register"]["title"] }}
        </h1>
        <SubscribeForm :content="formContent" @submit-data="handleSubscribe"  />
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
import SubscribeForm from "../components/forms/SubscribeForm";

import subscriptionHandling from '../mixins/subscriptionHandling.js';

export default {
  name: "NewsletterRegisterDe",
  mixins: [ subscriptionHandling ],
  components: {
    Navigation,
    Matomo,
    Footer,
    SubscribeForm
  },
  data() {
    return {
      content: content,
      lang: "en",
      direct: "/newsletter_register_de"
    };
  },
  computed: {
    formContent() {
      return this.content[this.lang]["register"];
    }
  },
  methods: {
    handleSubscribe(data) {
      this.subscribe(data, this.content[this.lang]["register"]["token"])
    }
  }
};
</script>

<style lang="scss"></style>
