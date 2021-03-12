<template>
  <!--
   In this page we try a different approach to handle the content ask @fabianmoronzirfas about it.

No seperation by language in the content. Since the locations of the parts are so far away from each other. We try a  separate object that has the structure:

smartcity {
  hero:{
    title: {
      en:"",
      de: ""
    }
  }
 }
 This way we can export it from a separate file and we can edit the content next to each other.

 See ../assets/content/smartcity.js" which is imported into ../assets/content.js
-->
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />
    <HeroLight
      :image="content.smartcity.hero.img.url"
      :title="content.smartcity.hero.title[lang]"
      :sub-title="content.smartcity.hero.subTitle[lang]"
      :sub-sub-title="content.smartcity.hero.subSubTitle[lang]"
    />
    <section class="section is-medium">
      <div class="container">
        <h1 class="title" v-html="content.smartcity.title[lang]" />
        <h2 class="subtitle" v-html="content.smartcity.subtitle[lang]" />
        <p v-html="content.smartcity.description[lang]" />
        <h3 class="title" style="margin-top: 40px;">
          {{ content.smartcity.timeline.upcoming.title[lang] }}
        </h3>
        <ul class="timeline">
          <li
            v-for="step in content.smartcity.timeline.upcoming.steps"
            :key="step.title[lang]"
          >
            <span>{{ step.date }}</span>
            <h4 v-html="step.title[lang]"></h4>
            <p v-html="step.description[lang]" />
          </li>
        </ul>
        <details style="margin-top: 40px;">
          <summary class="title">
            {{ content.smartcity.timeline.past.title[lang] }}
          </summary>
          <ul class="timeline">
            <li
              v-for="step in content.smartcity.timeline.past.steps"
              :key="step.title[lang]"
            >
              <span>{{ step.date }}</span>
              <h4 v-html="step.title[lang]"></h4>
              <p v-html="step.description[lang]" />
            </li>
          </ul>
        </details>
        <Matomo />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import Navigation from "../components/Navigation.vue";
import HeroLight from "../components/HeroLight.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";
export default {
  components: {
    Navigation,
    Footer,
    Matomo,
    HeroLight,
  },
  data() {
    return {
      lang: "de",
      content: content,
      direct: "/smart_city_en",
    };
  },
  computed: {
    headTitle() {
      return this.content.smartcity.hero.title[this.lang];
    },
    headSubtitle() {
      return this.content.smartcity.hero.subTitle[this.lang];
    },
  },
  head() {
    return {
      title: `${this.headTitle} | `,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.headSubtitle}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.headTitle} | CityLAB Berlin`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.headSubtitle}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://citylab-berlin.org/images/smartcity/smart_city_social_ media.jpg",
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: `${this.headTitle} | CityLAB Berlin`,
        },
        {
          hid: "twitter:image:alt",
          property: "twitter:image:alt",
          content: `${this.headTitle} | CityLAB Berlin`,
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content:
            "https://citylab-berlin.org/images/smartcity/smart_city_social_ media.jpg",
        },
      ],
    };
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
h2.subtitle {
  margin-top: 0 !important;
}

.title {
  font-size: $size-3;
  color: $color-secondary;
}

section.hero {
  margin-top: 100px;
  .title {
    font-size: $size-1;
    color: $text;
    font-weight: $weight-bold;
  }
  p {
    font-size: $size-medium;
  }
  .hero-image {
    figure {
      margin-top: $spacing-m;
      margin-left: 0;
      @media screen and (min-width: $tablet) {
        margin-top: 0;
        margin-left: $spacing-m;
      }
    }
  }
  .logos {
    margin-top: $spacing-m;
    img {
      width: 100%;
      max-width: 180px;
    }
  }
  .text {
    display: flex;
    align-items: center;
  }
}
.button {
  &--wrapper {
    width: 100%;
    a {
      font-size: 20px !important;
    }
  }

  background: #f64c72 !important;
  @include transition;

  &:hover {
    background: #f97996 !important;
    @include transition;
  }
}

summary.title {
  font-size: $size-3;
  color: $color-secondary;
}

ul.timeline {
  padding-left: $spacing-m;
  border-left: 1px solid $color-primary;

  li {
    margin-top: $spacing-l;
  }

  span {
    color: $color-primary;
  }

  span::before {
    content: url(/images/smartcity/icon_step.svg);
    width: 24px;
    position: absolute;
    left: calc(8px - #{$spacing-m});
  }

  h4 {
    font-size: $size-4;
    color: $color-primary;
  }

  p {
    margin-top: $spacing-s;
    color: $text;
  }
}
</style>
