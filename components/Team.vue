<template>
  <section id="team" class="section team is-medium">
    <div class="container">
      <h2 class="title">
        {{ content[lang]['team']['title'] }}
      </h2>

      <div class="tile wrap team-wrapper">
        <div v-for="person in teamArr" class="tile is-parent fourth">
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
              <a
                v-if="contentAvailable(person.twitter)"
                class="twitter"
                target="_blank"
                :href="`https://twitter.com/${person.twitter}`"
                >@{{ person.twitter }}</a
              >
              <a
                v-if="contentAvailable(person.mail)"
                class="mail"
                :href="`mailto:${person.mail}`"
                >E-Mail</a
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Team',
    props: ['content', 'lang', 'direct'],
    computed: {
      teamArr() {
        return this.content[this.lang]['team']['member'];
      },
    },
    mounted() {},
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

<style lang="scss">
  @import '../assets/style/style.scss';

  .wrap {
    flex-wrap: wrap;
  }

  figure {
    position: relative;
  }

  .team-wrapper {
    display: flex !important;
  }

  .wrapper-details {
    margin-top: $spacing-s;
    display: flex;
    flex-direction: column;

    .name {
      color: $color-primary;
    }

    .title {
      color: $color-primary--medium;
      font-weight: normal;
      font-size: $size-6;
      margin-bottom: $spacing-s !important;
    }

    a.twitter,
    a.mail {
      color: $color-tertiary !important;
      text-decoration: underline;
    }

    .mail {
      margin-bottom: $spacing-s;
    }
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
