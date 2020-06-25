<template>
  <section id="newsletter" class="section is-medium newsletter">
    <div class="container">
      <div>
        <h1 class="title">
          {{ content[lang]['register']['intro']['title'] }}
        </h1>

        <h2 class="subtitle" style="margin-top: 100px;">
          {{ content[lang]['register']['intro']['subtitle'] }}
        </h2>
      </div>

      <div class="register-wrapper">
        <SubscribeForm :content="formContent" @submit-data="handleSubscribe" />
      </div>
    </div>
  </section>
</template>

<script>
  import Button from './Button';
  import SubscribeForm from './forms/SubscribeForm';

  import subscriptionHandling from '../mixins/subscriptionHandling.js';

  export default {
    name: 'Newsletter',
    components: {
      Button,
      SubscribeForm,
    },
    mixins: [subscriptionHandling],
    props: ['content', 'lang', 'direct'],
    computed: {
      formContent() {
        return this.content[this.lang]['register'];
      },
    },
    methods: {
      handleSubscribe(data) {
        this.subscribe(data, this.content[this.lang]['register']['token']);
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';

  .newsletter {
    padding-bottom: 0rem !important;

    .musthave {
      label {
        font-size: 9px;
        line-height: 100%;
      }
    }

    .container {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      .title {
        color: $color-secondary;
      }

      .subtitle {
        color: $color-primary;
      }
    }

    .register-wrapper {
      box-shadow: 0 2px 60px 0 rgba(47, 47, 162, 0.1);
      min-width: 270px;
      max-width: 370px;
      padding: 30px;
      background: white;
      transform: translateY(-100px);
      margin-left: 30px;

      @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-left: 0px;
        transform: translateY(0px);
        margin: 2rem 0 4rem 0;
      }
    }
  }
</style>
