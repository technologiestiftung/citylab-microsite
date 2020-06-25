<template>
  <section id="partners" class="section partners">
    <div class="container">
      <h2 class="title">
        {{ content[lang]['partners']['title'] }}
      </h2>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article
            v-for="partner in partnersArr"
            class="tile is-child partners"
          >
            <figure class="image">
              <img :src="`${partner['logo_url']}`" >
            </figure>
            <p class="subtitle">
              {{ partner['title'] }}
            </p>
            <div class="content">
              {{ partner['text'] }}
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Partners',
    props: ['content', 'lang', 'direct'],
    computed: {
      partnersArr() {
        return this.content[this.lang]['partners']['items'];
      },
    },
  };
</script>

<style lang="scss" scoped></style>
