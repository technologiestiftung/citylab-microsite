<template>
  <div>
    <Navigation
      :scrolled="true"
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="false"
    />
    <HeroLight
      :image="'https://citylab-berlin.org/images/events/verwaltungspreis_hero.jpg'"
      :title="eventContent[lang].title"
      :sub-title="eventContent[lang].subTitle"
      :sub-sub-title="eventContent[lang].subSubTitle"
    />
    <section class="section is-medium event-content">
      <div class="container">
        <h4 class="title">
          {{ eventContent[lang].headline }}
        </h4>
        <p class="event-intro" v-html="eventContent[lang].paragraphOne" />
        <p class="event-intro" v-html="eventContent[lang].paragraphTwo" />
        <a
          href="https://www.youtube.com/watch?v=2MP1i8LJtpE&feature=youtu.be"
          target="_blank"
          rel="noopener noreferrer"
          class="youtube-thumbnail"
        >
          <figure class="image">
            <img
              src="/images/events/verwaltungspreis2020/aufzeichnung.jpg"
              alt="Vorschau der Aufzeichnung der Präsentation"
            /></figure
        ><figcaption>Aufzeichnung</figcaption></a>
        <div class="content-wrapper">
          <p class="event-intro" v-html="eventContent[lang].paragraphThree" />
        </div>
        <div class="content-wrapper">
          <div class="presentations">
            <a href="/docs/verwaltungspreis2020/projekt2.pdf"
              ><figure>
                <img
                  src="/images/events/verwaltungspreis2020/projekt2.jpg"
                  alt="Projekt 2"
                />
              </figure>
              <figcaption>Projekt 2</figcaption></a
            >
            <a href="/docs/verwaltungspreis2020/projekt3.pdf"
              ><figure>
                <img
                  src="/images/events/verwaltungspreis2020/projekt3.jpg"
                  alt="Projekt 3"
                />
              </figure>
              <figcaption>Projekt 3</figcaption></a
            >
          </div>
          <div class="presentations" style="margin-top: 30px;">
            <a href="/docs/verwaltungspreis2020/projekt4.pdf"
              ><figure>
                <img
                  src="/images/events/verwaltungspreis2020/projekt4.jpg"
                  alt="Projekt 4"
                />
              </figure>
              <figcaption>Projekt 4</figcaption></a
            >
            <a href="/docs/verwaltungspreis2020/projekt5.pdf"
              ><figure>
                <img
                  src="/images/events/verwaltungspreis2020/projekt5.jpg"
                  alt="Projekt 5"
                />
              </figure>
              <figcaption>Projekt 5</figcaption></a
            >
            <a href="/docs/verwaltungspreis2020/projekt6.pdf"
              ><figure>
                <img
                  src="/images/events/verwaltungspreis2020/projekt6.jpg"
                  alt="Projekt 6"
                />
              </figure>
              <figcaption>Projekt 6</figcaption></a
            >
          </div>
        </div>
        <Matomo />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
import { content } from "../../assets/content.js";

import { content as eventContent } from "../../assets/events/verwaltungspreis.js";

import Navigation from "../../components/Navigation.vue";
import HeroLight from "../../components/HeroLight.vue";
import Footer from "../../components/Footer.vue";
import Matomo from "../../components/Matomo.vue";

export default {
  components: {
    Navigation,
    HeroLight,
    Footer,
    Matomo,
  },
  data() {
    return {
      lang: "de",
      content: content,
      eventContent: eventContent,
      direct: "/events/verwaltungspreis",
    };
  },
  head() {
    return {
      title: eventContent[this.lang].title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${eventContent[this.lang].subTitle} (${
            eventContent[this.lang].subSubTitle
          })`,
        },
        { hid: "fb:app_id", property: "fb:app_id", content: "487094758334595" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:title",
          property: "og:title",
          content: eventContent[this.lang].title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://citylab-berlin.org/images/events/verwaltungspreis_social_media.jpg",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${eventContent[this.lang].subTitle} (${
            eventContent[this.lang].subSubTitle
          })`,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "CityLAB Berlin",
        },
        {
          hid: "article:author",
          property: "article:author",
          content: "CityLAB Berlin",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@citylabberlin",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@citylabberlin",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://www.citylab-berlin.org/events/verwaltungspreis",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: eventContent[this.lang].title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${eventContent[this.lang].subTitle} (${
            eventContent[this.lang].subSubTitle
          })`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://citylab-berlin.org/images/events/verwaltungspreis_social_media.jpg",
        },
        {
          hid: "name",
          itemprop: "name",
          content: eventContent[this.lang].title,
        },
        {
          hid: "description",
          itemprop: "description",
          content: `${eventContent[this.lang].subTitle} (${
            eventContent[this.lang].subSubTitle
          })`,
        },
        {
          hid: "image",
          itemprop: "image",
          content:
            "https://citylab-berlin.org/images/events/verwaltungspreis_social_media.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/style/style.scss";
h1.title,
h3.title {
  color: $color-secondary;
}

.content-wrapper {
  margin-top: 30px;
}

.youtube-thumbnail {
  display: block;
  width: 75%;
}

@media screen and (min-width: 768px) {
  .youtube-thumbnail {
    width: 50%;
  }
}

.event-content p {
  color: $color-primary;
  font-size: $size-5;
  padding-bottom: 40px;
}

h4.title {
  color: $color-secondary !important;
  font-size: $size-3;
  padding-bottom: 20px;
}

h5.title {
  color: $color-secondary !important;
  font-size: $size-4;
  padding-bottom: 0px;
  margin-bottom: 10px !important;
}

.presentations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
@media screen and (min-width: 768px) {
  .presentations {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
