<template>
  <section
    ref="hero"
    :style="{ backgroundImage: `url(${bgUrl})` }"
    class="hero is-color-primary"
  >
    <section class="hero-content section is-medium">
      <!-- v-html="`${content[lang]['hero']['claim']}`" -->
      <vue-typed-js
        :strings="wordsArr"
        :loop="true"
        :type-speed="100"
        :back-delay="4000"
      >
        <h1 style="width: 100%;" class="title">
          {{ content[lang]['hero']['claim_01'] }}
          <span class="typing" />
          {{ content[lang]['hero']['claim_02'] }}
          <br class="condBreak" />
          {{ content[lang]['hero']['claim_03'] }}
        </h1>
      </vue-typed-js>
      <!-- <div class="info-overlay">
                <div>
                    <p v-html="content[lang]['hero']['info']"></p>
                </div>
            </div> -->
    </section>
    <!-- <Three :config="config" /> -->
  </section>
</template>

<script>
  import VueTypedJs from 'vue-typed-js';
  import Vue from 'vue';

  Vue.use(VueTypedJs);

  export default {
    name: 'Hero',
    components: {
      // Three
    },
    props: ['lang', 'content'],
    data() {
      return {
        config: {},
        backgroundUrl: 'images/hero_img_03.jpg',
      };
    },
    computed: {},
    computed: {
      wordsArr() {
        const arr = this.content[this.lang]['hero']['words_arr'];
        return arr;
      },
      bgUrl() {
        return this.lang == 'de'
          ? 'images/hero_img_03.jpg'
          : '../images/hero_img_03.jpg';
      },
    },
    mounted() {
      // this.setDimensions()
    },
    updated() {
      // this.setDimensions()
    },
    methods: {
      setDimensions() {
        this.config.width = this.$refs.hero.clientWidth;
        this.config.height = this.$refs.hero.clientHeight;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';

  .typed-element {
    display: flex;
    align-items: center;
  }

  .info-overlay {
    max-width: 900px;
    margin: 0 auto;

    div {
      background: white;
      width: fit-content;
      margin-top: 30px;
      padding: 15px;
      line-height: 120%;
      color: $color-tertiary;
      font-size: 16px;
    }
  }

  .typed-element .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }

  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }

  .hero {
    height: 600px;
    background: $blue;
    background-position: center;
    background-size: cover;

    &::before {
      background-color: rgba($color-primary, 0.5);
      content: '';
      display: block;
      height: 600px;
      position: absolute;
      width: 100%;
    }

    &-content {
      padding-top: 20rem !important;
      z-index: 10;

      h1.title {
        font-size: $size-1 !important;
        max-width: 900px;
        margin: 0 auto;

        @include mobile {
          font-size: $size-3 !important;
          width: 100%;
        }

        @include tablet {
          font-size: $size-1 !important;
        }

        @include desktop {
          font-size: $size-1 !important;
        }
      }
    }
  }

  .condBreak {
    display: none;
  }

  @include tablet {
    .condBreak {
      display: block;
    }
  }

  span.typing {
    font-style: italic;
  }
</style>
