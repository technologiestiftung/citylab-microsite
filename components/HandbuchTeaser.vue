<template>
  <section id="handbuch-teaser" class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure>
            <img
              :src="this.handbuch['hero']['img_url']"
              :alt="this.handbuch['teaser']['title']"
            />
          </figure>
        </div>
        <div class="column text">
          <div>
            <h2 class="title">
              {{ this.handbuch['teaser']['title'] }}
            </h2>
            <p class="subtitle">
              {{ this.handbuch['teaser']['subtitle'] }}
            </p>
            <Button
              type="external"
              :label="this.handbuch['teaser']['cta']"
              :direct="this.handbuch['teaser']['link']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Button from './Button';
  export default {
    name: 'HandbuchTeaser',
    components: {
      Button,
    },
    props: ['lang', 'content'],
    computed: {
      handbuch() {
        return this.content[this.lang]['innovationshandbuch'];
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../assets/style/style.scss';

  section {
    background: $color-primary--lightest !important;
  }

  .text {
    display: flex;
    align-items: center;
  }

  h2.title {
    color: $text !important;
    font-weight: $weight-bold;
  }

  p.subtitle {
    color: $text;
    margin-top: 0px !important;
    font-size: $size-4;
    line-height: $size-3;
  }

  figure {
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
  }
</style>
