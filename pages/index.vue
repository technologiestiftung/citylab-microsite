<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />
    <TeaserIntro
      :content="content"
      :lang="lang"
      topic="hero"
      subtopic="intro"
    />
    <SmartcityParagraph :lang="lang" />
    <Topics :lang="lang" :content="content" :direct="direct" />
    <Paragraph
      :content="content"
      :lang="lang"
      topic="collaborate"
      subtopic="paragraph"
    />
    <Projects :lang="lang" :content="content" />
    <HandbuchTeaser :lang="lang" :content="content" />
    <Teaser
      id="exhibition"
      :content="content"
      :lang="lang"
      topic="exhibition"
      subtopic="teaser"
    />
    <Schedule :lang="lang" :content="content" :direct="direct" :links="links" />
    <Newsletter :lang="lang" :content="content" :direct="direct" />
    <Footer :lang="lang" :content="content" />

    <button id="myBtn" class="arrow-up top" @click="topFunction()">
      ↑
    </button>
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import { links } from "../assets/links.js";

import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Teaser from "../components/Teaser.vue";
import Topics from "../components/Topics.vue";
import TeaserIntro from "../components/TeaserIntro.vue";
import Projects from "../components/Projects.vue";
import Schedule from "../components/Schedule.vue";
import Newsletter from "../components/Newsletter.vue";
import Paragraph from "../components/Paragraph.vue";
import SmartcityParagraph from "../components/SmartcityParagraph.vue";
import HandbuchTeaser from "../components/HandbuchTeaser.vue";

import { mapState } from "vuex";

import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    Navigation,
    Schedule,
    Paragraph,
    SmartcityParagraph,
    Footer,
    Topics,
    TeaserIntro,
    Teaser,
    Projects,
    Newsletter,
    HandbuchTeaser,
  },
  data() {
    return {
      lang: "de",
      content: content,
      links: links,
      direct: "/index_en",
      entries: null,
      obj: [],
    };
  },
  computed: {
    arrowUp() {
      return faArrowAltCircleUp;
    },
    ...mapState(["offset"]),
  },
  mounted() {
    if (process.browser) {
      window.addEventListener("hashchange", () => {
        if (!this.offset) {
          window.scrollTo(window.scrollX, window.scrollY - 75);
          this.setOffset(true);
        } else if (this.offset) {
          window.scrollTo(window.scrollX, window.scrollY);
        }
      });

      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.scrollFunction();
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    },
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    setOffset(boolean) {
      this.$store.dispatch("SET_OFFSET", boolean);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";

@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  bottom: 0;
  width: auto;
  overflow: hidden;
  height: 4rem;
  background-color: $color-primary;
  padding-left: 100%;
  box-sizing: content-box;
  cursor: pointer;
  transition: 0.125s background-color ease-in-out;

  &:hover {
    background-color: lighten($color-primary, 10%);
    transition: 0.125s background-color ease-in-out;
  }

  .logo-transparent {
    opacity: 0.5;
    margin-right: 20px;
  }

  .ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    font-size: 20px;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    animation-iteration-count: infinite;
    animation-name: ticker;
    animation-duration: 30s;
    animation-timing-function: linear;

    .flex {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__description {
      color: white;
    }

    &__item {
      display: inline-block;
      width: fit-content;
      color: white;
      transform: translateY(-1px);

      &-flex {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
}

button.top {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding-top: 3px !important;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    color: $color-tertiary--medium;
  }
}

.arrow-up {
  font-size: 40px !important;
  color: $color-primary;
  padding: 0px 44px 57px 16px;
  border-radius: 100px;
  margin-right: 30px;
  margin-bottom: 30px;
  line-height: 120%;
  box-shadow: 0 2px 60px 0 rgba(47, 47, 162, 0.2);
  background: white;
  border: none;
  transition: all 0.125s ease-in-out;

  &:hover {
    background: $color-primary;
    color: white !important;
    transition: all 0.125s ease-in-out;
  }
}

.section#smart-city {
  > * h2 {
    font-size: 20px !important;
  }
}
</style>
