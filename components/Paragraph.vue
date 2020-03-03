<template>
  <section :class="`section is-medium ${contentParagraph['style']}`">
    <div class="container">
      <div class="paragraph">
          <div class="container">
              <h1 class="title">{{ contentParagraph['title'] }}</h1>
              <h2 v-html="contentParagraph['description']" class="subtitle"></h2>
              <Button v-if="isBtn" :label="contentParagraph['btn']" :direct="contentParagraph['direct']"/>
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
        computed: {
          contentParagraph: function() { return this.content[this.lang][this.topic][this.subtopic] },
          isBtn: function() { return this.content[this.lang][this.topic][this.subtopic]['btn'].length > 0 },
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";

    .section {
      &.dark {
        background: $color-primary;

        .container {
          h1.title {
            color: white;
          }
  
          h2.subtitle {
            color: white;
          }
      }
      }

      &.bright {
        background: white;

        .container {
          h1.title {
            color: $color-secondary;
          }

          h2.subtitle {
            color: $color-primary;
          }
        }
      }

    }
    

    .container {
      h1.title {
        color: $color-secondary;
      }
      h2.subtitle {
        margin-top: 1.5rem !important;

        b {
          font-family: 'National ExtraBold' !important;
        }
      }
      animation: sweep .5s ease-in-out;
    }
</style>



