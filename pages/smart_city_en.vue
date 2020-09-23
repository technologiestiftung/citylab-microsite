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
        <Matomo />
      </div>
    </section>
    <section class="section is-medium downloads">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="tile column is-ancestor">
              <div class="tile is-6 is-parent">
                <div class="tile">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="content.smartcity.downloads.main.url"
                  >
                    <figure class="image is-128x128">
                      <svg
                        class="document"
                        height="128"
                        viewBox="0 0 21 21"
                        width="128"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#2a2e3b"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          transform="translate(4 3)"
                        >
                          <path
                            d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"
                          />
                          <path d="m2.5 7.5h5" />
                          <path d="m2.5 9.5h7" />
                          <path d="m2.5 11.5h3" />
                          <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3" />
                        </g>
                      </svg>

                      <!-- <img
                        :src="content.smartcity.downloads.main.img.url"
                        :alt="content.smartcity.downloads.main.img.alt[lang]"
                      /> -->
                    </figure>
                  </a>
                </div>
                <div class="tile is-vertical is-parent is-8">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-title__downloads"
                    :href="content.smartcity.downloads.main.url"
                  >
                    <h3
                      class="title title__downloads"
                      v-html="content.smartcity.downloads.title[lang]"
                    />
                  </a>
                  <div class="content">
                    <p v-html="content.smartcity.downloads.description[lang]" />
                  </div>
                </div>
              </div>
              <div class="tile is-5 is-parent">
                <ul class="list__downloads">
                  <li
                    v-for="(item, itemIndex) in additionalDownloads"
                    :key="itemIndex"
                    class="list-item__downloads"
                  >
                    <a
                      class="button is-color-secondary is-normal button__downloads"
                      :href="item.url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure class="image is-32x32">
                      <svg
                        class="document"
                        height="32"
                        viewBox="0 0 21 21"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#2a2e3b"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          transform="translate(4 3)"
                        >
                          <path
                            d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"
                          />
                          <path d="m2.5 7.5h5" />
                          <path d="m2.5 9.5h7" />
                          <path d="m2.5 11.5h3" />
                          <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3" />
                        </g>
                      </svg>
                    </figure>
                    {{item.text[lang]}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      lang: "en",
      content: content,
      direct: "/smart_city",
    };
  },
  computed: {
    headTitle() {
      return this.content.smartcity.hero.title[this.lang];
    },
    headSubtitle() {
      return this.content.smartcity.hero.subTitle[this.lang];
    },
    additionalDownloads() {
      return this.content.smartcity.downloads.additional;
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
          content: "/images/smartcity/smart_city_social_ media.jpg",
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
            "https://citylab-berlin.org/images/handbuch/handbuch_social_media.jpg",
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

p {
  font-size: $size-medium;
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
.section.downloads {
  background-color: $color-primary;
  color: $white;
}
.section.downloads > * p {
  color: $white;
}
h3.title__downloads {
  color: $white !important;
  transition: text-decoration 0.2s ease-in;
}
h3.title__downloads:hover {
  text-decoration: underline;
}
ul.list__downloads {
  margin: auto;
}
li.list-item__downloads {
  padding-bottom: 1rem !important;
}
a.button__downloads {
  width: 100%;
  font-size: 20px !important;
  background-color: #f64c72;
  justify-content: left;
}
svg.document {
  transition: all 0.2s ease-in-out;
}
svg.document > * path {
  fill: $white;
}
svg.document:hover {
  transform: scale(1.1);
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
</style>
