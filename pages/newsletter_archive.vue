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
          {{ content[lang]['newsletter_archive']['title'] }}
        </h1>

        <h2 class="subtitle">
          {{ content[lang]['newsletter_archive']['p1'] }}
        </h2>

        <div class="schedule-wrapper">
          <a
            v-for="entry in data"
            v-if="entry.url.length > 0"
            class="nl-tile"
            target="_blank"
            :href="entry['url']"
          >
            <article class="dates-item" style="width: 100%;">
              <div class="date-wrapper">
                <span class="date-month"> {{ entry.month }} </span>
                <span class="date-day"> {{ entry.year }} </span>
              </div>

              <h2 class="subtitle">{{ entry.title }}</h2>

              <h2 class="subtitle format">{{ entry.subtitle }}</h2>

              <a :href="entry['url']" target="_blank" class="arrow-right">→</a>
            </article>
          </a>
        </div>
      </div>
    </section>
    <Matomo />
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
  import axios from 'axios';
  import { content } from '../assets/content.js';

  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import Matomo from '../components/Matomo.vue';

  export default {
    name: 'NewsletterArchive',
    components: {
      Navigation,
      Footer,
      Matomo,
    },
    data() {
      return {
        lang: 'de',
        content: content,
        entries: null,
        data: [],
        direct: '/newsletter_archive_en',
      };
    },
    created() {
      axios
        .get(
          `https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/6/public/values?alt=json`
        )
        .then((res) => {
          let entries = res.data.feed.entry;
          this.entries = entries;

          entries
            .forEach((entry) => {
              const date = entry.gsx$date.$t;
              const year = date.match(/(\d+)/)[0];
              const month = date.match(/[^\s]+/)[0];
              if (this.lang == 'de') {
                let obj = {
                  date: entry.gsx$date.$t,
                  year: year,
                  month: month,
                  title: entry.gsx$titlede.$t,
                  subtitle: entry.gsx$subtitlede.$t,
                  url: entry.gsx$urlde.$t,
                };
                this.data.push(obj);
              } else if (this.lang == 'en') {
                let obj = {
                  date: entry.gsx$date.$t,
                  year: year,
                  month: month,
                  title: entry.gsx$titleen.$t,
                  subtitle: entry.gsx$subtitleen.$t,
                  url: entry.gsx$urlen.$t,
                };
                this.data.push(obj);
              }
            })
            .catch((err) => {
              console.error(err, 'newsletter_archive.vue');
            });
        });
    },
  };
</script>

<style lang="scss">
  @import '../assets/style/style.scss';
  h1.title,
  h3.title {
    color: $color-secondary;
    margin-bottom: 1.5rem;
  }

  .nl-tile {
    transition: $time-s ease transform;
    &:hover {
      .arrow-right {
        transform: translateX(5px);
        transition: $time-s ease transform;
        color: $color-primary;
      }
    }

    &:nth-of-type(odd) {
      .dates-item {
        background: $color-primary--lightest;
      }
    }
  }

  h2.subtitle {
    margin-top: 0 !important;
  }

  .content {
    color: $color-primary;
  }

  .dates-item {
    padding: 0.75rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include mobile {
      padding: 0.85rem;
    }

    .subtitle {
      margin-bottom: 0px;
      width: 200px;

      @include mobile {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }

    h2.subtitle {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .format {
      opacity: 0.5;
      margin-left: $spacing-l;
      max-width: 150px;

      @include mobile {
        display: none;
      }
    }

    &:last-of-type {
      // border-bottom: 1px solid $color-primary--medium;
    }
  }

  .date-wrapper {
    margin-right: $spacing-l;
    display: flex;
    flex-direction: column;
    width: 70px;
    justify-content: space-around;

    @include mobile {
      margin-right: 15px;
      min-width: 50px;
    }

    .date-time {
      font-size: $size-4;
      line-height: 2rem;
      color: $color-primary;
      margin-right: $spacing-l;

      @include mobile {
        line-height: 1.2rem;
        font-size: 16px;
        margin-right: 15px;
      }
    }

    .date-month {
      font-size: $size-5;
      line-height: 1rem;
      color: $color-primary;
      text-align: center;
      opacity: 0.5;

      @include mobile {
        line-height: 1rem;
        font-size: 16px;
      }
    }

    .date-day {
      font-size: $size-3;
      line-height: 1.75rem;
      text-align: center;
      color: $color-primary;

      @include mobile {
        line-height: 1.2rem;
        font-size: 20px;
      }
    }
  }

  .arrow-right {
    font-size: 2rem;
    margin-right: 15px;
    color: $color-primary;
    font-weight: normal;
    transition: $time-s ease transform;

    @include mobile {
      margin-right: 0px;
    }
  }

  h3.title.is-5 {
    margin-top: 0 !important;
    margin-bottom: 5px;
  }

  h6.title {
    // color: $color-secondary;
    margin-top: 0 !important;
  }
</style>
