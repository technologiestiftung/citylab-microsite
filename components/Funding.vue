<template>
  <section id="funding" class="section funding is-medium">
    <div class="container">
      <h1 class="title">
        {{ content[lang]['funding']['title'] }}
      </h1>

      <h2 class="subtitle">
        {{ content[lang]['funding']['opencall'] }}
      </h2>
      <nuxt-link
        style="margin-top: 30px;"
        class="button is-color-secondary is-normal"
        :to="directFundingDetails"
      >
        {{ lang == 'de' ? 'Mehr erfahren' : 'Learn more' }}
      </nuxt-link>
      <!-- <a :href="`${content[lang]['funding']['form_url']}`" class="button is-color-secondary is-normal">{{ content[lang]['funding']['cta'] }}</a> -->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Funding',
    props: ['content', 'lang'],
    data() {
      return {
        directs: {
          de: {
            all: '/funding_details',
          },
          en: {
            all: '/funding_details_en',
          },
        },
      };
    },
    computed: {
      bulletsArr() {
        return this.content[this.lang]['call']['bullets'];
      },
    },
    computed: {
      directFundingDetails() {
        return this.directs[this.lang]['all'];
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';

  .funding {
    background: $color-tertiary;

    .container {
      .title {
        color: white;
      }

      .subtitle {
        color: white;
      }
    }

    ul.content {
      list-style-type: disc;
      list-style-position: inside;
      padding-left: 0px;

      li.intro {
        margin-top: 0.75rem;
      }
    }

    .bullet-list {
      margin-bottom: 2.5rem !important;
    }

    .intro {
      font-size: $size-4;
      line-height: $size-3;
      color: $color-tertiary;
    }

    .projects {
      background: $color-primary--lightest;
    }
  }
</style>
