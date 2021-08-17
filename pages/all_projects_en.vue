<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />

    <section class="section is-medium schedule">
      <div class="container">
        <h1 style="margin-top: 100px;" class="title">
          {{ this.content[this.lang].projects.titleOngoing }}
        </h1>
        <h2 class="subtitle">{{ this.content[this.lang].projects.subline1}}</h2>
        <div class="tile wrap team-wrapper">
          <div
            class="tile third"
            v-for="project in data"
            v-if="project.visible == 'TRUE' && project.finished =='FALSE'"
          >
            <a :href="`/${directProject}/${project.dirname}`">
              <article class="project-wrapper">
                <figure class="image is 1by1">
                  <v-lazy-image
                    class="lazy-img"
                    :src="`/images/projects/${
                      project.defaultImg == 'TRUE' ? `default` : project.imgname
                    }_tile.jpg`"
                    :src-placeholder="`/images/projects/${
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
        <!-- Abgeschlossene Projekte -->
        <h1 style="margin-top: 100px;" class="title">
          {{ this.content[this.lang].projects.titleFinished }}
        </h1>
        <h2 class="subtitle">{{ this.content[this.lang].projects.subline2}}</h2>

        <div class="tile wrap team-wrapper">
          <div
            class="tile third"
            v-for="project in data"
            v-if="project.visible == 'TRUE' && project.finished =='TRUE'"
          >
            <a :href="`/${directProject}/${project.dirname}`">
              <article class="project-wrapper">
                <figure class="image is 1by1">
                  <v-lazy-image
                    class="lazy-img-finished"
                    :src="`/images/projects/${
                      project.defaultImg == 'TRUE' ? `default` : project.imgname
                    }_tile.jpg`"
                    :src-placeholder="`/images/projects/${
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
      </div>
    </section>

    <Footer :lang="lang" :content="content" />
    <Matomo />
  </div>
</template>

<script>
import { content } from "../assets/content.js";

import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";
import VLazyImage from "v-lazy-image";
import { getSpreadsheet } from "../modules/getSpreadsheet";

export default {
  components: {
    Navigation,
    Footer,
    Matomo,
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
      lang: "en",
      content: content,
      entries: null,
      direct: "/all_projects",
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
    getSpreadsheet(`data/spreadsheet-data/projects_en.json`).then(
      (projects) => {
        this.entries = projects;

        projects.forEach(
          ({
            visible,
            finished,
            projectName,
            publisher,
            projectSubline,
            dirName,
            defaultImg,
          }) => {
            let obj = {
              visible: visible,
              finished: finished,
              name: projectName,
              publisher: publisher,
              subline: projectSubline,
              dirname: dirName,
              imgname: dirName,
              defaultImg: defaultImg,
            };
            if (projectName.length > 0) {
              this.data.push(obj);
            }
          }
        );
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.wrap {
  flex-wrap: wrap;
}

.lazy-img {
  width: 100% !important;
  height: auto;
}

.lazy-img-finished {
  width: 100% !important;
  height: auto;
  filter: grayscale(100%); /* Current draft standard */
  -webkit-filter: grayscale(100%); /* New WebKit */
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%); 
  -o-filter: grayscale(100%);
  filter: gray; /* IE6+ */
}

figure {
  position: relative;
}

a > article {
  background: $color-primary--lightest;
  overflow: auto;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: $color-primary--light;
    transition: all 0.25s ease-in-out;
  }
}

.team-wrapper {
  display: flex !important;
  transform: translateX(-10px);
}

.project-wrapper {
  width: 100%;
  height: 100%;
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

.name {
  line-height: 120%;
  color: $color-primary;
  font-size: 1.5rem;
}

.title {
  color: $color-secondary;
}

.tile {
  align-items: stretch;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  .wrapper-details {
    margin: 15px 20px 20px 15px;
    min-height: 60px;

    p.title {
      margin-bottom: 0px;
      color: rgba(47, 47, 162, 0.5);
      font-weight: normal;
      font-size: 1rem;
      margin-bottom: 0px !important;
    }
  }

  &.third {
    padding: 10px;
    flex: 0 0 100% !important;
    flex-wrap: wrap;

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
