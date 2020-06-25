<template>
  <div>
    <Navigation
      :scrolled="true"
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="false"
    />
    <HeroLight
      :image="'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg'"
      :title="'AI-consultation hours'"
      :sub-title="'Hack The Crisis Berlin'"
      :sub-sub-title="'08.04.2020, 13.30-15.30'"
    />
    <section class="section is-medium event-content">
      <div class="container">
        <p class="event-intro">
          CityLab and Birds on Mars are offering weekly consultations for your
          <a target="_blank" href="https://hackthecrisis.citylab-berlin.org">Hack the Crisis Berlin</a>
          projects, starting from April 8th. Get in-detail feedback on your
          ideas by experts of the Berlin AI agency and benefit from their
          expertise and experience in practical application. Regardless of how
          mature your project is, we will have a look at it from a data science
          and ai perspective, talk about required data and where to get it, as
          well as about the means to get a prototype up and running fast.
        </p>

        <p>
          Feel free to send any questions with a short description of your
          project to
          <a href="mailto:sebastian@birdsonmars.com">Sebastian von Birds on Mars</a>. The consultation will happen via web conference, details will be
          announced in the hackthecrisis
          <a
            href="https://join.slack.com/t/hackthecrisis-berlin/shared_invite/zt-cuwrelh0-~zlO_TY67TvmKVrORdsu2w"
          >Slack-Channel</a>
          below '#0_Ankündigen'.
        </p>

        <div class="summary-wrapper is-medium">
          <h4>Summary</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Website</h5>
              <span class="summary-text"><a href="https://www.birdsonmars.com">https://www.birdsonmars.com</a>
              </span>
            </div>
            <div class="content-block">
              <h5>Organizer</h5>
              <span class="summary-text">CityLAB & Birds on Mars</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">08.04.2020, 13:30 - 15:30 Uhr</span>
            </div>
            <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:sebastian@birdsonmars.com" class="summary-text">Sebastian</a>
            </div>
            <div class="content-block">
              <h5>Address</h5>
              <span class="summary-text">Videoconference</span>
            </div>
          </div>
        </div>

        <Matomo />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
  import { content } from '../../assets/content.js';

  import Navigation from '../../components/Navigation.vue';
  import HeroLight from '../../components/HeroLight.vue';
  import Footer from '../../components/Footer.vue';
  import Matomo from '../../components/Matomo.vue';

  export default {
    components: {
      Navigation,
      HeroLight,
      Footer,
      Matomo,
    },
    data() {
      return {
        lang: 'en',
        content: content,
        direct: '/events/kisprechstunde',
      };
    },
    computed: {},
    head() {
      return {
        title: 'AI-consultation hours - ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'AI-consultation hours (2020-04-08 - CityLAB Berlin)',
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: '487094758334595',
          },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          {
            hid: 'og:title',
            property: 'og:title',
            content: 'AI-consultation hours',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'AI-consultation hours (2020-03-03 - CityLAB Berlin)',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'CityLAB Berlin',
          },
          {
            hid: 'article:author',
            property: 'article:author',
            content: 'CityLAB Berlin',
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: 'https://www.citylab-berlin.org/events/AIforberlin2_en',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'AI-consultation hours',
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: 'AI-consultation hours (2020-04-08 - CityLAB Berlin)',
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content:
              'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg',
          },
          { hid: 'name', itemprop: 'name', content: 'AI-consultation hours' },
          {
            hid: 'description',
            itemprop: 'description',
            content: 'AI-consultation hours (2020-04-08 - CityLAB Berlin)',
          },
          {
            hid: 'image',
            itemprop: 'image',
            content:
              'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import '../../assets/style/style.scss';
  h1.title,
  h3.title {
    color: $color-secondary;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    span {
      font-size: $size-5;
    }
  }

  .col {
    flex-direction: column;

    a {
      width: 130px;
      margin-bottom: 30px;
    }
  }

  .summary-text {
    line-height: 20px;
    margin-top: 5px;
    display: inline-block;
  }

  p {
    a {
      color: #393a60 !important;
      text-decoration: underline;
      transition: opacity 0.25s ease-in-out;

      &:hover {
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
      }
    }
  }

  .summary-wrapper {
    color: white;
    margin-bottom: 50px;
    margin-top: 60px;
    background: $color-primary;
    padding: $spacing-m;

    h4 {
      font-size: $size-3;
      line-height: 0.75;
      width: 100%;
    }

    .content-block {
      font-size: $size-6;
      width: 33%;
      margin-top: 20px;

      a {
        color: white;
        opacity: 0.5;
      }

      h5 {
        margin-bottom: -3px;
      }

      @include tablet-only {
        width: 50%;
      }

      @include mobile {
        width: 100%;
      }

      span.summary-text {
        color: white;
        opacity: 0.5;
        font-size: 16px;
      }
    }
  }

  .event-content {
    p {
      color: $color-primary;
      font-size: $size-5;
      margin-bottom: 20px;
    }

    span {
      color: $color-primary;
      margin-bottom: $spacing-s;
    }

    h4.title {
      color: $color-secondary !important;
      font-size: $size-3;
      margin-bottom: 0 !important;
      padding-bottom: 20px !important;
      padding-top: 50px;
    }
  }

  .content-wrapper {
    padding-bottom: 0;
  }

  h5.title {
    color: $color-secondary !important;
    font-size: $size-4;
    padding-bottom: 0px;
    margin-bottom: 10px !important;
  }

  .name-list li,
  .time-list li {
    color: $color-primary;
    font-size: $size-5;
    padding-bottom: 5px;
  }

  .name-list,
  .time-list {
    margin-bottom: 20px;
  }

  .event-content p.copyright {
    font-size: 14px;
  }

  .journal-logos {
    height: 60px;
    margin-right: 50px;
  }

  #organiser-logos {
    max-width: 80%;
    width: 600px;
  }

  .col a {
    width: 180px;
    margin-right: 2em;
    float: left;
  }

  .button.is-color-secondary {
    margin-top: 30px;
    min-width: 180px;
    margin-right: 3em;
  }
</style>
