<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />
    <TeaserIntro
      :content="content"
      :lang="lang"
      topic="hero"
      subtopic="intro"
    />
    <!-- <Hero :lang="lang" :content="content" :direct="direct"/> -->
    <Ticker :lang="lang" :content="content" />
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
      :content="content"
      :lang="lang"
      id="exhibition"
      topic="exhibition"
      subtopic="teaser"
    />
    <Schedule
      v-if="eventsVisible"
      :lang="lang"
      :content="content"
      :direct="direct"
      :links="links"
    />
    <Newsletter :lang="lang" :content="content" :direct="direct" />
    <!-- <Partners :lang="lang" :content="content" :direct="direct"/> -->
    <!-- <Cta :lang="lang" :content="content"/> -->
    <Footer :lang="lang" :content="content" />

    <button @click="topFunction()" id="myBtn" class="arrow-up top">↑</button>
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import { links } from "../assets/links.js";

import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Cta from "../components/Cta.vue";
import Ticker from "../components/Ticker.vue";
import Teaser from "../components/Teaser.vue";
import Topics from "../components/Topics.vue";
import TeaserIntro from "../components/TeaserIntro.vue";
import Partners from "../components/Partners.vue";
import Projects from "../components/Projects.vue";
import Schedule from "../components/Schedule.vue";
import Newsletter from "../components/Newsletter.vue";
import Paragraph from "../components/Paragraph.vue";
import HandbuchTeaser from "../components/HandbuchTeaser.vue";

import axios from "axios";
import { mapState } from "vuex";

import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    Navigation,
    Cta,
    Schedule,
    Paragraph,
    Ticker,
    Footer,
    Topics,
    Partners,
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
  beforeCreate() {
    // TODO: wrap that

    axios
      .get(
        `https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`
      )
      .then((res) => {
        let entries = res.data.feed.entry;

        this.entries = entries;

        entries.forEach((entry) => {
          let obj = {
            time: entry.gsx$datetime.$t,
            title: entry.gsx$eventname.$t,
            visible: entry.gsx$visible.$t,
          };
          this.obj.push(obj);
        });
      });
  },
  computed: {
    arrowUp() {
      return faArrowAltCircleUp;
    },
    eventsVisible() {
      let val = false;
      this.obj.forEach((entry) => {
        if (entry.visible == "TRUE") {
          val = true;
        }
      });

      return val;
    },
    ...mapState(["offset"]),
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
    const test = this;
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";

<<<<<<< HEAD
	@import "../assets/style/style.scss";

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
=======
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
>>>>>>> ci/optimize-build-3

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
</style>
