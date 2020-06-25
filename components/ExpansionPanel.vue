<template>
  <section class="section is-medium expansion-panel">
    <div class="container">
      <div class="panel">
        <div
          v-for="(question, i) in contentPanel"
          :id="`panel-${i}-${subtopic}`"
          :key="`panel-${i}`"
          class="exp-panel"
          @click="
            () => {
              togglePanel(i);
            }
          "
        >
          <div class="exp-panel--header">
            <span v-html="question.title" />
            <span :id="`indicator-${i}-${subtopic}`" class="indicator">↓</span>
          </div>
          <div class="exp-panel--body">
            <p v-html="question.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ExpansionPanel',
    props: {
      lang: String,
      content: Object,
      direct: String,
      topic: String,
      subtopic: String,
      id: String,
    },
    computed: {
      contentPanel: function () {
        return this.content[this.lang][this.topic][this.subtopic].faq;
      },
    },
    methods: {
      togglePanel(id) {
        const idLabel = `panel-${id}-${this.subtopic}`;
        const indicator = document
          .getElementById(idLabel)
          .classList.contains('active')
          ? '↓'
          : '↑';
        document.getElementById(idLabel).classList.toggle('active');

        document.getElementById(
          `indicator-${id}-${this.subtopic}`
        ).innerHTML = indicator;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';

  summary::-webkit-marker-type {
    display: none !important;
  }

  .expansion-panel {
    animation: sweep 0.5s ease-in-out;
  }

  .exp-panel {
    background: $color-primary--lightest;
    color: $color-primary;
    padding: 20px;
    font-size: 24px;
    animation: sweep 0.125s ease-in-out;
    margin: 10px 0 10px 0;
    cursor: pointer;

    &:hover {
      background: $color-primary--light;
    }

    &--header {
      display: flex;
      justify-content: space-between;
    }

    &--body {
      display: none;
      animation: sweep 0.125s ease-in-out;

      a {
        color: #c7c4eb;
        padding-bottom: 3px;
        border-bottom: 1px solid #c7c4eb;

        &:hover {
          color: white !important;
          border-bottom: 1px solid white;
        }
      }
    }

    &.active {
      background: $color-primary;
      color: white;
      animation: sweep 0.125s ease-in-out;

      .exp-panel--body {
        display: block;
        animation: sweep 0.125s ease-in-out;
        color: #c7c4eb;
      }

      .exp-panel--header {
        padding-bottom: 15px;
      }
    }
  }

  details {
    background: $color-primary--lightest;
    color: $color-primary;
    padding: 15px;
    font-size: 24px;
    animation: sweep 0.125s ease-in-out;

    summary:before {
      content: '+'; /* Verwendung des "plus"-Symbols anstelle des Dreiecks */
      color: green;
      margin-right: 5px;
    }

    &[open] {
      margin: 15px 0;
      background: $color-primary;
      color: white;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      summary ~ * {
        animation: sweep 0.125s ease-in-out;
      }
    }

    summary {
      background: $color-primary;
      padding: 15px;
    }
  }

  .content {
    p {
      background: $color-primary;
      color: rgba(255, 255, 255, 0.5);
    }
  }
</style>
