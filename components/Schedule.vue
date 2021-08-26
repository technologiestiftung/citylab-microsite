<template>
  <section class="section schedule is-medium dark" id="schedule">
    <div class="container">
      <h2 class="title">{{ content[lang]["schedule"]["title"] }}</h2>
      <h2 class="subtitle">{{ content[lang]["schedule"]["subtitle"] }}</h2>

      <div class="schedule-wrapper">
        <a
          class="event-tile"
          v-if="
            entry.visible != 'FALSE' && dateIsUpcoming(entry.date) && index < 5
          "
          :href="entry['link']"
          v-for="(entry, index) in data"
        >
          <article class="dates-item" style="width: 100%;">
            <div class="date-wrapper">
              <span class="date-month"> {{ entry.month }} </span>
              <span class="date-day"> {{ entry.day }} </span>
            </div>

            <div style="margin-right: 0px; width: 240px;" class="date-wrapper">
              <span class="date-time"> {{ entry.time }} </span>
            </div>

            <h2 class="subtitle">{{ entry.title }}</h2>

            <h2 class="subtitle format">{{ entry.format }}</h2>

            <a :href="entry['link']" class="arrow-right">→</a>
          </article>
        </a>
      </div>

      <Button
        :label="lang == 'de' ? 'Alle Veranstaltungen' : 'All events'"
        :direct="directAllEvents"
      />
    </div>
  </section>
</template>

<script>
import Button from "./Button";
import { getSpreadsheet } from "../modules/getSpreadsheet";

export default {
  name: "Schedule",
  props: ["content", "lang", "direct", "links"],
  computed: {
    itemsArr() {
      return this.content[this.lang]["schedule"]["items"];
    },
  },
  components: {
    Button,
  },
  data() {
    return {
      entries: null,
      otherEvents: this.content[this.lang].otherevents,
      data: [],
      directs: {
        de: {
          all: "/all_events",
        },
        en: {
          all: "/all_events_en",
        },
      },
    };
  },
  computed: {
    isVisible(val) {
      let swtch = val == "FALSE" ? false : true;
      return swtch;
    },
    buttonText() {
      return this.lang == "en" ? "More info" : "Mehr Infos";
    },
    directAllEvents() {
      return this.directs[this.lang]["all"];
    },
  },
  mounted() {
    getSpreadsheet(`data/spreadsheet-data/events.json`).then((events) => {
      this.entries = events;

      this.otherEvents.forEach((entry) => {
        let obj = {
          day: this.getDay(entry.date),
          month: this.getMonth(entry.date),
          format: entry.format,
          date: entry.date,
          time: entry.time,
          title: entry.title,
          link: entry.link,
        };
        this.data.push(obj);
      });

      events.forEach((entry) => {
        let obj = {
          format: entry.format,
          dirname: entry.dirName,
          date: entry.date,
          day: this.getDay(entry.date),
          month: this.getMonth(entry.date),
          time: entry.dateTime,
          title: entry.eventName,
          link: this.createEventLink(entry.dirName),
          visible: entry.visible,
        };
        this.data.push(obj);
      });

      this.data = this.data.filter((event) => {
        return this.dateIsUpcoming(event.date);
      });
      this.data = this.data.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    });
  },
  methods: {
    dateIsUpcoming(date) {
      const today = new Date();
      const eventDate = new Date(date);

      eventDate.setHours(23, 59, 59);

      const upcoming = today.getTime() <= eventDate.getTime();

      return upcoming;
    },
    getDay(date) {
      let dat = new Date(date);
      return dat.getDate();
    },
    getMonth(date) {
      let dat = new Date(date);
      const mlistEn = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const mlist = [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ];
      let monthCurrent =
        this.lang == "en" ? mlistEn[dat.getMonth()] : mlist[dat.getMonth()];
      return monthCurrent;
    },
    createEventLink(dirname) {
      return `/events/${dirname}`;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";

.schedule {
  background: $color-primary--lightest;

  h2.subtitle {
    color: white !important;
  }

  &.dark {
    background: $color-primary;

    .container {
      h2.title {
        color: white !important;
      }
    }

    .event-tile {
      transition: $time-s ease transform;

      .arrow-right {
        transition: $time-s ease transform;
        color: white;
        opacity: 0.75;
      }

      &:hover {
        .arrow-right {
          transform: translateX(5px);
          transition: $time-s ease transform;
          color: white;
          opacity: 1;
        }
      }

      &:nth-of-type(odd) {
        .dates-item {
          background: #4142af;
        }
      }

      .date-wrapper {
        .date-time {
          color: white;
        }

        .date-month {
          color: white;
        }

        .date-day {
          color: white;
        }
      }

      .dates-item {
        color: white;
      }
    }
  }

  .event-tile {
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

  h2.title {
    color: $color-secondary;
  }

  .arrow-right {
    font-size: 2rem;
    margin-right: 15px;
    color: $color-primary;
    font-weight: normal;
    transition: $time-s ease transform;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  .dates-item {
    padding: 0.75rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // border-top: 1px solid $color-primary--medium;
    align-items: center;

    @include mobile {
      padding: 0.85rem;
    }

    .subtitle {
      margin-bottom: 0px;
      width: 450px;

      @include mobile {
        font-size: 1rem;
        line-height: 1.2rem;
      }
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
    min-width: 35px;
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
        font-size: 1rem;
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
        font-size: $size-5;
      }
    }

    .date-day {
      font-size: $size-3;
      line-height: 1.75rem;
      text-align: center;
      color: $color-primary;

      @include mobile {
        line-height: 1.2rem;
        font-size: $size-4;
      }
    }
  }
}
</style>
