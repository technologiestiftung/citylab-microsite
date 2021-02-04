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
      :title="'Wie innovativ ist die Berliner Verwaltung?'"
      :sub-title="'Berliner Verwaltungspreis 2020'"
      :sub-sub-title="'26.01.2021, 14-16 Uhr, online'"
    />
    <section class="section is-medium event-content">
      <div class="container">
        <h4 class="title">
          Einige Highlights des Berliner Verwaltungspreises 2020 stellen sich
          vor.
        </h4>
        <p class="event-intro">
          2020 wurde erstmalig der Berliner Verwaltungspreis vergeben. In einer
          gemeinsam mit dem CityLAB Berlin geplanten Online-Veranstaltung am 26.
          Januar 2021 stellen sich nun ausgewählte Projekte vor. Hierbei
          erfahren die Veranstaltungsteilnehmenden wie die Projekte bei ihrer
          Arbeit vorgegangen sind und was die Beweggründe für die jeweiligen
          Entwicklungen waren.
        </p>
        <p class="event-intro">
          Die Teilnehmenden bekommen die Möglichkeit, Fragen an die
          Referentinnen und Referenten zu stellen und in einen direkten
          Austausch zu treten. <br /><br /><b>Eröffnung</b><br />Staatssekretär
          Dr. Frank Nägele<br /><b>Moderation</b><br />Carla Wansing,
          <i>Senatskanzlei </i>
        </p>
        <div class="content-wrapper">
          <!---->
          <p class="event-intro">
            <b>Folgende Projekte stellen sich vor:</b><br />
            - Onlinetools als bedarfsgerechtes Ergänzungsinstrument in der Krise
            <i>(Landesamt für Einwanderung)</i><br />
            - Steuerung der Platzkapazitäten
            <i>(Senatsverwaltung für Integration, Arbeit und Soziales)</i><br />
            - Verdienstausfall digital geltend machen – Onlineanträge ergänzen
            das Corona-Soforthilfepaket des Senats
            <i
              >(Senatsverwaltung für Finanzen gemeinsam mit Senatsverwaltung für
              Inneres)</i
            ><br />
            - Vom Antrag zur Genehmigung – Erteilung einer
            Ausnahmezulassung/Genehmigung nach der Lärmschutzverordnung
            <i>(Bezirksamt Tempelhof-Schöneberg)</i><br />
            - Arbeit 4.0 in der Berliner Verwaltung „Arbeit mal anders –
            zukunftsfähige Arbeitskultur in der Senatsverwaltung für Finanzen
            und Innolab beim Bezirksamt Neukölln“
            <i
              >(Senatsverwaltung für Finanzen gem. mit dem Bezirksamt
              Neukölln)</i
            ><br />
            - Einrichtung eines Ausbildungsbürgeramtes (ABüA) im Bezirksamt
            Friedrichshain-Kreuzberg von Berlin
            <i>(Bezirksamt Friedrichshain-Kreuzberg)</i><br />
          </p>
        </div>
        <div class="content-wrapper">
          <div class="presentations">
            <a href="/docs/verwaltungspreis2020/projekt2.pdf"
              ><figure class="">
                <img
                  src="/images/events/verwaltungspreis2020/projekt2.jpg"
                  alt=""
                /></figure
            ></a>
            <a href="/docs/verwaltungspreis2020/projekt3.pdf"
              ><figure class="">
                <img
                  src="/images/events/verwaltungspreis2020/projekt3.jpg"
                  alt=""
                /></figure
            ></a>
            <a href="/docs/verwaltungspreis2020/projekt4.pdf"
              ><figure class="">
                <img
                  src="/images/events/verwaltungspreis2020/projekt4.jpg"
                  alt=""
                /></figure
            ></a>
            <a href="/docs/verwaltungspreis2020/projekt5.pdf"
              ><figure class="">
                <img
                  src="/images/events/verwaltungspreis2020/projekt5.jpg"
                  alt=""
                /></figure
            ></a>
            <a href="/docs/verwaltungspreis2020/projekt6.pdf"
              ><figure class="">
                <img
                  src="/images/events/verwaltungspreis2020/projekt6.jpg"
                  alt=""
                /></figure
            ></a>
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

import { content as eventContent } from "../../assets/events/summerschool.js";

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
      title: "Wie innovativ ist die Berliner Verwaltung?",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Berliner Verwaltungspreis 2020",
        },
        { hid: "fb:app_id", property: "fb:app_id", content: "487094758334595" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Wie innovativ ist die Berliner Verwaltung?",
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
          content: "Berliner Verwaltungspreis 2020",
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
          content: "Wie innovativ ist die Berliner Verwaltung?",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Berliner Verwaltungspreis 2020",
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
          content: "Wie innovativ ist die Berliner Verwaltung?",
        },
        {
          hid: "description",
          itemprop: "description",
          content: "Berliner Verwaltungspreis 2020",
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
  gap: 20px;
}
@media screen and (min-width: 768px) {
  .presentations {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
