<template>
  <section class="section is-medium">
    <div class="container">
      <div class="paragraph">
          <div class="container">
              <h1 class="title">{{ contentParagraph['title'] }}</h1>
              <h2 v-html="contentParagraph['description']" class="subtitle"></h2>
              <Button :label="contentParagraph['btn']" :direct="contentParagraph['direct']"/>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Button from './Button.vue'
    export default {
        components: {
          Button
        },
        name: 'Paragraph',
        props: {
          lang: String,
          content: Object,
          subtopic: String,
          direct: String,
          topic: String,
        },
        data() {
          return {
            directs: {
              de: {
                  all: '/funding_details',
              },
              en: {
                  all: '/funding_details_en',
              }
            }
          }
        },
        mounted() {
          console.log(this.lang, this.content)
        },
        computed: {
          contentParagraph: function() { return this.content[this.lang][this.topic][this.subtopic] },
        },
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";
</style>



