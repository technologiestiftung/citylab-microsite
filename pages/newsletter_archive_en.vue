<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />
    <section class="section is-medium">
      <div class="container">
        <h1 class="title" style="margin-top: 100px;">
          {{ content[lang]["news"]["title"] }}
        </h1>

        <h2 class="subtitle">
          {{ content[lang]["news"]["p1"] }}
        </h2>

        <div class="schedule-wrapper">
          <a
            class="nl-tile"
            target="_blank"
            v-if="entry.url.length > 0"
            :href="entry['url']"
            v-for="entry in newsData"
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

        <section class="columns newsletter">
          <div class="column">
            <div>
              <h1 class="title">
                Newsletter Signup
              </h1>
              <h2 class="subtitle">
                Would you like to be informed about current CityLAB events and
                projects? Subscribe to our monthly newsletter and stay up to
                date.
              </h2>
            </div>
          </div>
          <div class="column">
            <div class="register-wrapper">
              <SubscribeForm
                :content="formContent"
                @submit-data="handleSubscribe"
              />
            </div>
          </div>
        </section>

        <h1 class="title" style="margin-top: 100px;">
          {{ content[lang]["newsletter_archive"]["title"] }}
        </h1>

        <h2 class="subtitle">
          {{ content[lang]["newsletter_archive"]["p1"] }}
        </h2>

        <div class="schedule-wrapper">
          <a
            class="nl-tile"
            target="_blank"
            v-if="entry.url.length > 0"
            :href="entry['url']"
            v-for="entry in newsletterArchiveData"
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
import axios from "axios";
import { content } from "../assets/content.js";

import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";
import SubscribeForm from "../components/forms/SubscribeForm";

import subscriptionHandling from "../mixins/subscriptionHandling.js";

export default {
  name: "NewsletterArchive",
  components: {
    Navigation,
    Footer,
    Matomo,
    SubscribeForm
  },
  mixins: [subscriptionHandling],
  data() {
    return {
      lang: "en",
      content: content,
      entries: null,
      newsData: [],
      newsletterArchiveData: [],
      direct: "/newsletter_archive",
    };
  },
  computed: {
    formContent() {
      return this.content[this.lang]["register"];
    },
  },
  methods: {
    getData(dataArray, sheetPageNumber) {
      // TODO: wrap that

      let url =
        `https://spreadsheets.google.com/feeds/list/1xldCara-dp26yWVU8rL7Acig4IHKqtPRtTZX3HYoaA8/` +
        sheetPageNumber +
        `/public/values?alt=json`;
      axios.get(url).then((res) => {
        let entries = res.data.feed.entry;
        this.entries = entries;

        entries.forEach((entry) => {
          const date = entry.gsx$date.$t;
          const year = date.match(/(\d+)/)[0];
          let month = date.match(/[^\s]+/)[0];

          let dict = {
            Januar: "January",
            Februar: "February",
            März: "March",
            April: "April",
            Mai: "May",
            Juni: "June",
            Juli: "July",
            August: "August",
            September: "September",
            Oktober: "October",
            November: "November",
            Dezember: "December",
          };

          if (this.lang == "en") month = dict[month];

          let obj = {
            date: entry.gsx$date.$t,
            year: year,
            month: month,
            title: entry["gsx$title" + this.lang].$t,
            subtitle: entry["gsx$subtitle" + this.lang].$t,
            url: entry["gsx$url" + this.lang].$t,
          };
          dataArray.push(obj);
        });
      });
    },
    handleSubscribe(data) {
      this.subscribe(data, this.content[this.lang]["register"]["token"]);
    },
  },
  created() {
    this.getData(this.newsData, 7);
    this.getData(this.newsletterArchiveData, 6);
  },
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";
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

section.newsletter {
  margin-top: 100px;
  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}

.register-wrapper {
  box-shadow: 0 2px 60px 0 rgba(47, 47, 162, 0.1);
  padding: 30px;
  background: white;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
