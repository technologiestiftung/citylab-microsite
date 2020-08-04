<template>
  <section id="team" class="section projects is-medium">
    <div class="container">
      <h2 class="title">{{ this.content[this.lang].projects.title }}</h2>
      <h2
        v-html="this.content[this.lang].projects.description"
        class="subtitle"
      ></h2>

      <div class="tile wrap team-wrapper">
        <div
          v-for="(project, i) in data"
          :key="i"
          v-if="project.featured === 'TRUE'"
          class="tile third"
        >
          <a :href="`/${directProject}/${project.dirname}`">
            <article>
              <figure class="image is 1by1">
                <v-lazy-image
                  class="lazy-img"
                  :src="`images/projects/${
                    project.defaultImg == 'TRUE' ? `default` : project.imgname
                  }_tile.jpg`"
                  :src-placeholder="`images/projects/${
                    project.defaultImg == 'TRUE' ? `default` : project.imgname
                  }_lazy_tile.jpg`"
                />
              </figure>
              <div class="wrapper-details">
                <p class="name">{{ project.name }}</p>
                <p class="title">{{ project.subline }}</p>
              </div>
            </article>
          </a>
        </div>
      </div>

      <Button
        style="margin-bottom: 10px;"
        :label="lang == 'de' ? 'Alle Projekte' : 'All projects'"
        :direct="lang == 'de' ? '/all_projects' : '/all_projects_en'"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Button from "./Button";
import VLazyImage from "v-lazy-image";
import { sheetUrls } from "../modules/sheet-urls";
// import { getSpreadsheetData } from "../modules/get-spreadsheet-data";

export default {
  name: "Projects",
  props: ["content", "lang", "direct"],
  components: {
    Button,
    VLazyImage,
  },
  computed: {
    teamArr() {
      return this.content[this.lang]["team"]["member"];
    },
    imageUrl() {
      return `images/projects/${this.dirname}_tile.jpg`;
    },
    directAllProjects() {
      return this.directs[this.lang]["all"];
    },
    directProject() {
      return this.directs[this.lang]["projects"];
    },
    sheetId() {
      return this.directs[this.lang]["sheetId"];
    },
  },
  data() {
    return {
      entries: null,
      data: [],
      directs: {
        de: {
          all: "/all_projects",
          projects: "projects",
          sheetId: 1,
        },
        en: {
          all: "/all_projects_en",
          projects: "projects_en",
          sheetId: 2,
        },
      },
    };
  },
  created() {
    // TODO: example for wrapping it
    const sheetUrl = `https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/${this.sheetId}/public/values?alt=json`;
    const responseHandler = (res) => {
      let entries = res.data.feed.entry;
      this.entries = entries;
      entries.forEach((entry) => {
        if (entry.gsx$visible.$t === "TRUE") {
          let obj = {
            visible: entry.gsx$visible.$t,
            featured: entry.gsx$featured.$t,
            name: entry.gsx$projectname.$t,
            publisher: entry.gsx$publisher.$t,
            subline: entry.gsx$projectsubline.$t,
            dirname: entry.gsx$dirname.$t,
            imgname: entry.gsx$dirname.$t,
            defaultImg: entry.gsx$defaultimg.$t,
          };
          this.data.push(obj);
        }
      });
    };
    // if (sheetUrls.includes(sheetUrl)) {
    //   getSpreadsheetData(sheetUrl, "/data/spreadsheets.json")
    //     .then(responseHandler)
    //     .catch((err) => console.error(err));
    // } else {
    axios.get(sheetUrl).then(responseHandler);
    // }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.lazy-img {
  width: 100% !important;
  height: auto;
}

.wrap {
  flex-wrap: wrap;
}

figure {
  position: relative;
}

a > article {
  height: 100%;
  background: white;
  overflow: auto;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: $color-primary--hover;
    transition: all 0.25s ease-in-out;
  }
}

.projects {
  background: $color-primary;
}

h2.title {
  color: white !important;
}

h2.subtitle {
  color: white;
}

.team-wrapper {
  display: flex !important;
  transform: translateX(-10px);
  align-items: stretch;
}

.content-block {
  font-size: $size-6;
  width: 33%;
  margin-top: 20px;

  a {
    color: $color-primary;
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
    color: $color-primary;
    opacity: 0.5;
    font-size: 16px;
  }
}

p.name {
  font-size: 1.5rem;
  color: $color-primary;
}

p.title {
  color: $color-primary--medium;
  font-size: 1rem;
}

.tile {
  align-items: stretch;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  .wrapper-details {
    margin: 15px 20px 20px 15px;
    min-height: 60px;

    h2.title {
      margin-bottom: 0px;
      color: white !important;
      font-weight: normal;
      margin-bottom: 0px !important;
    }

    h2.subtitle {
      color: white;
    }
  }

  &.third {
    padding: 10px;
    flex: 0 0 100% !important;

    @include mobile {
      flex: 0 0 100% !important;
    }

    @include tablet {
      flex: 0 0 50% !important;
    }

    @include desktop {
      flex: 0 0 50% !important;
    }
  }
}
</style>
