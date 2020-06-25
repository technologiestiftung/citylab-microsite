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
          {{ content[lang]['board']['title'] }}
        </h1>

        <div class="tile board-wrapper wrap">
          <div v-for="person in boardArr" class="tile is-parent fourth">
            <article class="tile is-child">
              <figure class="image is 1by1">
                <img :src="`${person.img_url}`">
              </figure>
              <div class="wrapper-details">
                <p class="name">
                  {{ person.name }}
                </p>
                <p class="title">
                  {{ person.title }}
                </p>
              </div>
            </article>
          </div>
        </div>

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
        direct: '/board',
      };
    },
    computed: {
      boardArr() {
        return this.content[this.lang]['board']['member'];
      },
    },
    methods: {
      contentAvailable(field) {
        if (field.length > 0) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/style/style.scss';

  h1.title,
  h3.title {
    color: $color-secondary;
  }

  .wrapper-details {
    margin-top: 10px;
    .name {
      color: $color-primary;
    }

    p.title {
      margin-bottom: 0px;
      color: rgba(47, 47, 162, 0.5);
      font-weight: normal;
      font-size: 1rem;
      margin-bottom: 0px !important;
    }
  }

  .wrap {
    flex-wrap: wrap;
  }

  .board-wrapper {
    display: flex;
  }

  .tile.fourth {
    flex: 0 0 100% !important;

    @include mobile {
      flex: 0 0 50% !important;
    }

    @include tablet {
      flex: 0 0 33% !important;
    }

    @include desktop {
      flex: 0 0 25% !important;
    }
  }
</style>
