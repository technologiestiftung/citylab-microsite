<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />
    <HeroLight
      :image="heroImageUrl"
      :title="title"
      :subTitle="subtitle"
      :subSubTitle="subsubtitle"
    />
    <section class="section is-medium event-content">
      <div class="container">
        <div
          v-if="
            summaryAvailable.introHeadline > 0 ||
            summaryAvailable.introContent > 0
          "
          class="content-wrapper"
        >
          <h4 v-if="summaryAvailable.introHeadline > 0" class="title">
            {{ headlineIntro }}
          </h4>
          <p
            v-html="contentIntro"
            v-if="summaryAvailable.introContent > 0"
            class="event-intro"
          ></p>
        </div>

        <div
          v-if="
            summaryAvailable.blockOneContent > 0 ||
            summaryAvailable.BlockOneHeadline > 0
          "
          class="content-wrapper"
        >
          <h4 v-if="summaryAvailable.blockOneHeadline > 0" class="title">
            {{ headlineBlockOne }}
          </h4>
          <p
            v-html="contentBlockOne"
            v-if="summaryAvailable.blockOneContent > 0"
            class="event-intro"
          ></p>
        </div>

        <div
          v-if="
            summaryAvailable.blockTwoContent > 0 ||
            summaryAvailable.BlockTwoHeadline > 0
          "
          class="content-wrapper"
        >
          <h4 v-if="summaryAvailable.blockTwoHeadline > 0" class="title">
            {{ headlineBlockTwo }}
          </h4>
          <p
            v-html="contentBlockTwo"
            v-if="summaryAvailable.blockTwoContent > 0"
            class="event-intro"
          ></p>
        </div>

        <div
          v-if="
            summaryAvailable.blockThreeContent > 0 ||
            summaryAvailable.BlockThreeHeadline > 0
          "
          class="content-wrapper"
        >
          <h4 v-if="summaryAvailable.blockThreeHeadline > 0" class="title">
            {{ headlineBlockThree }}
          </h4>
          <p
            v-html="contentBlockThree"
            v-if="summaryAvailable.blockThreeContent > 0"
            class="event-intro"
          ></p>
        </div>

        <div
          v-if="
            summaryAvailable.blockFourContent > 0 ||
            summaryAvailable.BlockFourHeadline > 0
          "
          class="content-wrapper"
        >
          <h4 v-if="summaryAvailable.blockFourHeadline > 0" class="title">
            {{ headlineBlockFour }}
          </h4>
          <p
            v-html="contentBlockFour"
            v-if="summaryAvailable.blockFourContent > 0"
            class="event-intro"
          ></p>
        </div>

        <div class="logo-wrapper">
          <a
            :href="link"
            v-if="link.length > 0"
            target="_blank"
            class="button is-color-secondary is-normal"
            >{{ lang == "en" ? "To the project" : "Zum Projekt" }}</a
          >
        </div>
      </div>
    </section>
    <Footer :lang="lang" :content="getContent" />
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import HeroLight from "../../components/HeroLight.vue";
import Footer from "../../components/Footer.vue";
import { getSpreadsheet } from "../../modules/getSpreadsheet";

import { content } from "../../assets/content.js";

export default {
  validate({ params, query, store }) {
    return true; // if the params are valid
    //return false; // will stop Nuxt.js to render the route and display the error page
  },
  async asyncData({ params, error, payload }) {
    return {
      dirname: params.project,
      lang: "en",
      content: content,
      direct: `/projects/${params.project}`,
      data: null,
      summaryAvailable: {
        website: 0,
        phone: 0,
        organiser: 0,
        address: 0,
        date: 0,
        mail: 0,
        introHeadline: 0,
        introContent: 0,
        blockOneHeadline: 0,
        blockOneContent: 0,
        blockTwoHeadline: 0,
        blockTwoContent: 0,
        blockThreeHeadline: 0,
        blockThreeContent: 0,
        blockFourHeadline: 0,
        blockFourContent: 0,
      },
    };
  },
  components: {
    Navigation,
    HeroLight,
    Footer,
  },
  computed: {
    getContent() {
      return this.content;
    },
    heroImageUrl() {
      // return `../images/projects/${this.dirname}_hero.jpg`

      if (this.data !== null) {
        const file =
          this.data.defaultImg == "TRUE" ? "default" : `${this.data.dirName}`;
        const path = `/images/projects/${file}_hero.jpg`;
        return path;
      } else {
        return "";
      }
    },
    link() {
      if (this.data != null) {
        return this.data.link;
      } else {
        return "";
      }
    },
    title() {
      if (this.data !== null) {
        return this.data.projectName;
      } else {
        return undefined;
      }
    },
    subtitle() {
      if (this.data != null) {
        return this.data.projectSubline;
      } else {
        return undefined;
      }
    },
    subsubtitle() {
      if (this.data != null) {
        return this.data.projectSubSubine;
      } else {
        return undefined;
      }
    },
    headlineIntro() {
      if (this.data != null && this.data) {
        return this.data.headlineIntro;
      } else {
        return undefined;
      }
    },
    contentIntro() {
      if (this.data != null) {
        return this.data.contentIntro;
      } else {
        return undefined;
      }
    },
    headlineBlockOne() {
      if (this.data != null) {
        return this.data.headlineBlockOne;
      } else {
        return undefined;
      }
    },
    contentBlockOne() {
      if (this.data != null) {
        return this.data.contentBlockOne;
      } else {
        return undefined;
      }
    },
    headlineBlockTwo() {
      if (this.data != null) {
        return this.data.headlineBlockTwo;
      } else {
        return undefined;
      }
    },
    contentBlockTwo() {
      if (this.data != null) {
        return this.data.contentBlockTwo;
      } else {
        return undefined;
      }
    },
    headlineBlockThree() {
      if (this.data != null) {
        return this.data.headlineBlockThree;
      } else {
        return undefined;
      }
    },
    contentBlockThree() {
      if (this.data != null) {
        return this.data.contentBlockThree;
      } else {
        return undefined;
      }
    },
    headlineBlockFour() {
      if (this.data != null) {
        return this.data.headlineBlockFour;
      } else {
        return undefined;
      }
    },
    contentBlockFour() {
      if (this.data != null) {
        return this.data.contentBlockFour;
      } else {
        return undefined;
      }
    },
    logos() {
      if (this.data !== null) {
        let arr = [];
        const urls = this.data.link.split(",");

        for (let index = 0; index < urls.length; index++) {
          let filename;
          if (this.data.logo == "TRUE") {
            filename = `/images/projects/${this.data.dirName}_logo_${
              index + 1
            }.jpg`;
          } else {
            filename = "FALSE";
          }
          const url = urls[index];
          arr.push([filename, url]);
        }

        if (urls.length > 0) {
          return arr;
        } else {
          return;
        }
      } else {
        return "";
      }
    },
  },
  beforeCreate() {
    getSpreadsheet(`/data/spreadsheet-data/projects_en.json`)
      .then((projects) => {
        // set event entry to data which matches with dirname
        this.data = projects.filter((project) => {
          return project.dirName == this.dirname;
        });
        this.data = this.data[0];

        this.summaryAvailable.introHeadline = this.getLength(
          this.data.headlineIntro
        );
        this.summaryAvailable.introContent = this.getLength(
          this.data.contentIntro
        );

        this.summaryAvailable.blockOneHeadline = this.getLength(
          this.data.headlineBlockOne
        );
        this.summaryAvailable.blockOneContent = this.getLength(
          this.data.contentBlockOne
        );

        this.summaryAvailable.blockTwoHeadline = this.getLength(
          this.data.headlineBlockTwo
        );
        this.summaryAvailable.blockTwoContent = this.getLength(
          this.data.contentBlockTwo
        );

        this.summaryAvailable.blockThreeHeadline = this.getLength(
          this.data.headlineBlockThree
        );
        this.summaryAvailable.blockThreeContent = this.getLength(
          this.data.contentBlockThree
        );

        this.summaryAvailable.blockFourHeadline = this.getLength(
          this.data.headlineBlockFour
        );
        this.summaryAvailable.blockFourContent = this.getLength(
          this.data.contentBlockFour
        );
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    getLength(data) {
      return data.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

h4.title {
  color: $color-secondary;
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
</style>
