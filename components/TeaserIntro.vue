<template>
  <section class="section intro">
    <div class="preview container" :id="`preview-${id}`">
      <div class="wrapper">
        <!-- <h2 class="title" v-html="contentTeaser['title']"></h2> -->
        <vue-typed-js
          :strings="contentTeaser['words_arr']"
          :loop="true"
          :typeSpeed="100"
          :backDelay="4000"
        >
          <h1 style="width: 100%;" class="title">
            {{ contentTeaser["claim_01"] }}
            <span class="typing"></span>
            {{ contentTeaser["claim_02"] }}
            <br class="condBreak" />
            {{ contentTeaser["claim_03"] }}
          </h1>
        </vue-typed-js>
        <h2 v-html="contentTeaser['description']" class="subtitle"></h2>

        <Button
          style="margin-bottom: 10px;"
          :label="contentTeaser['btn']"
          :direct="contentTeaser['direct']"
        />

        <nuxt-link
          class="cross-link--small"
          :to="contentTeaser['directSecond']"
        >
          {{ contentTeaser["btnSecond"] }}
        </nuxt-link>
      </div>
      <v-lazy-image
        class="lazy-img"
        :src="contentTeaser['imgUrl']"
        :src-placeholder="contentTeaser['imgUrlLazy']"
      />
      <img :src="contentTeaser['imgUrl']" />
    </div>

    <div class="wrapper-mobile is-medium">
      <!-- <h2 v-html="contentTeaser['title']" class="title"></h2> -->
      <vue-typed-js
        :strings="contentTeaser['words_arr']"
        :loop="true"
        :typeSpeed="100"
        :backDelay="4000"
      >
        <h1 style="width: 100%;" class="title">
          {{ contentTeaser["claim_01"] }}
          <span class="typing"></span>
          {{ contentTeaser["claim_02"] }}
          <br class="condBreak" />
          {{ contentTeaser["claim_03"] }}
        </h1>
      </vue-typed-js>

      <h2 v-html="contentTeaser['description']" class="subtitle"></h2>

      <Button
        style="margin-bottom: 10px;"
        :label="contentTeaser['btn']"
        :direct="contentTeaser['direct']"
      />

      <nuxt-link class="cross-link--small" :to="contentTeaser['directSecond']">
        {{ contentTeaser["btnSecond"] }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import VueTypedJs from "vue-typed-js";
import Vue from "vue";
import Button from "./Button.vue";
import VLazyImage from "v-lazy-image";

Vue.use(VueTypedJs);
export default {
  props: {
    lang: String,
    content: Object,
    direct: String,
    topic: String,
    subtopic: String,
    id: String,
  },
  components: {
    Button,
    VLazyImage,
  },
  name: "Teaser",
  computed: {
    contentTeaser: function () {
      return this.content[this.lang][this.topic][this.subtopic];
    },
  },
  methods: {
    adjustHeight() {
      const elm = document.getElementById(`preview-${this.id}`);
      const height = (elm.offsetWidth / 100) * 56.9;
      elm.style.height = `${height}px`;
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.adjustHeight();
    });
    window.addEventListener("resize", this.adjustHeight);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";
.section {
  padding: 3.5rem 0rem;

  &.intro {
    margin-top: 19px;

    @media screen and (max-width: 850px) {
      margin-top: 11px;
    }
  }
}

.lazy-img {
  width: 100% !important;
  height: auto;
}

.cross-link--small {
  border-bottom: 1px solid $color-secondary;
  padding-bottom: 5px;
  color: $color-secondary;

  &:hover {
    color: $color-secondary--medium;
    border-bottom: 1px solid $color-secondary--medium;
  }
}

.container {
  animation: sweep 0.5s ease-in-out;

  &.preview {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 1200px;

    img {
      grid-column: 1 / span 16;
      grid-row: 1 / span 3;

      width: auto;

      overflow: hidden;
    }

    div.wrapper {
      background: white;
      padding: 1.75rem 2rem 2.5rem 2rem;

      grid-column: 3 / 8;
      grid-row: 2;

      align-self: center;
      justify-self: center;

      z-index: 1;

      h1.title {
        color: $color-secondary;
        margin-bottom: 30px;
      }

      h2.subtitle {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }

      @media screen and (max-width: 1100px) {
        grid-column: 2 / 9;
      }

      @media screen and (max-width: 1000px) {
        grid-column: 2 / 10;
      }

      @media screen and (max-width: 850px) {
        display: none;
      }
    }
  }
}

.preview {
  max-width: 1200px;
  height: auto;
}

.wrapper-mobile {
  display: none;

  h2.title {
    color: $color-secondary;
  }

  @media screen and (max-width: 850px) {
    h1.title {
      color: $color-secondary !important;
      margin-bottom: 1.5rem;
    }

    display: block;
    padding: 1.5rem 1.5rem 0rem 1.5rem;
  }
}

.cross-link {
  padding-bottom: 10px;
  font-size: 24px;
  border-bottom: 1px solid;
  color: #393a60;
  cursor: pointer;
  color: rgb(246, 76, 114);

  &:hover {
    color: rgb(243, 125, 150);
  }
}
</style>
