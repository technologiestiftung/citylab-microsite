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
      :image="'https://citylab-berlin.org/images/events/schule-outsidein_hero.jpg'"
      :title="'schule*OUT-SIDE-IN'"
      :sub-title="'Studentenentwürfe zur neuen Berliner Schule'"
      :sub-sub-title="'18-29.11.2019 CityLAB Berlin Foyer'"
    />
    <section class="section is-medium event-content">
      <div class="container">
        <p class="event-intro">
          Neue Schulen werden gebraucht, am besten sofort, der Platz reicht
          nicht mehr für die Nachfrage aus. Die Berliner „Schulbauoffensive“,
          mit einem geplanten Neubau von mehr als 60 Schulen bis 2026, bietet
          die Chance neue pädagogische Konzepte und die ganztägige Nutzung der
          Schulräume zu entwickeln und zu erproben. Wie wird sich die Typologie
          der Schule in diesem Prozess verändern?
        </p>

        <p>
          Baugrundstücke für neue Schulen sind in Berlin nicht beliebig
          vermehrbar und auch hier sind neue Ideen gefordert, wie man mit der
          zunehmenden Verknappung der zur Verfügung stehenden Flächen umgehen
          kann. kann. kann. Wie kann der Schulbau zu einer urbanen Dichte sowie
          einer sozialen und funktionalen Vielfalt in der Stadt beitragen?
        </p>

        <h3 class="title" />
        <p>
          Ausgehend von dieser Situation und Fragestellung entwickelten
          Architekturstudierende der BTU Cottbus-Senftenberg Entwürfe für einen
          komplexen, innerstädtischen Schulstandort. Die Schule wird als
          Stadtbaustein mit weiteren Nutzungen kombiniert und weitergedacht
          öffnet sich so „OUT-SIDE-IN“ für die Stadt. Im CityLAB Berlin sind die
          Ergebnisse des Entwurfsseminars ausgestellt.
        </p>
        <br >

        <img
          src="https://citylab-berlin.org/images/events/schule-outsidein-organiser-logo.jpg"
          alt="Organisatoren"
        />

        <div class="summary-wrapper is-medium">
          <h4>Zusammenfassung</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Eröffnung</h5>
              <span class="summary-text">18.11.2019, 18 Uhr</span>
            </div>
            <div class="content-block">
              <h5>Veranstalter</h5>
              <span class="summary-text">BTU Cottbus - Senftenberg</span>
            </div>
            <div class="content-block">
              <h5>Datum</h5>
              <span class="summary-text">18-30.11.2019</span>
            </div>
            <div class="content-block">
              <h5>Besuchszeiten</h5>
              <span class="summary-text">Mi-Sa 10-17 Uhr</span>
            </div>
            <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:wulfa@b-tu.de" class="summary-text">wulfa@b-tu.de</a>
            </div>
            <div class="content-block">
              <h5>Adresse</h5>
              <span class="summary-text">Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin</span>
            </div>
          </div>
        </div>

        <p>Eintritt ohne Anmeldung</p>

        <Matomo />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
  </div>
</template>

<script>
  import { content } from '../../assets/content.js';

  import Navigation from '../../components/Navigation.vue';
  import HeroLight from '../../components/HeroLight.vue';
  import Footer from '../../components/Footer.vue';
  import Matomo from '../../components/Matomo.vue';

  export default {
    components: {
      Navigation,
      HeroLight,
      Footer,
      Matomo,
    },
    data() {
      return {
        lang: 'de',
        content: content,
        direct: '/events/schule-outsidein_en',
      };
    },
    computed: {},
    head() {
      return {
        title: 'schule*OUT-SIDE-IN - ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'schule*OUT-SIDE-IN (2019-11-18 bis 2019-11-29 - CityLAB Berlin)',
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: '487094758334595',
          },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          {
            hid: 'og:title',
            property: 'og:title',
            content: 'schule*OUT-SIDE-IN',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://citylab-berlin.org/images/events/schule-outsidein_social_media.jpg',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content:
              'schule*OUT-SIDE-IN (2019-11-18 bis 2019-11-29 - CityLAB Berlin)',
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'CityLAB Berlin',
          },
          {
            hid: 'article:author',
            property: 'article:author',
            content: 'BTU Cottbus - Senftenberg',
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content:
              'https://www.citylab-berlin.org/events/schule-outsidein_en',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content:
              'schule*OUT-SIDE-IN (2019-11-18 bis 2019-11-29 - CityLAB Berlin)',
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content:
              'school*OUT-SIDE-IN (2019-11-18 bis 2019-11-29 - CityLAB Berlin)',
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content:
              'https://citylab-berlin.org/images/events/schule-outsidein_social_media.jpg',
          },
          { hid: 'name', itemprop: 'name', content: 'schule*OUT-SIDE-IN' },
          {
            hid: 'description',
            itemprop: 'description',
            content:
              'schule*OUT-SIDE-IN (2019-11-18 bis 2019-11-29 - CityLAB Berlin)',
          },
          {
            hid: 'image',
            itemprop: 'image',
            content:
              'https://citylab-berlin.org/images/events/schule-outsidein_social_media.jpg',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import '../../assets/style/style.scss';
  h1.title,
  h3.title {
    color: $color-secondary;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    span {
      font-size: $size-5;
    }
  }

  .col {
    flex-direction: column;

    a {
      width: 130px;
      margin-bottom: 30px;
    }
  }

  .summary-text {
    line-height: 20px;
    margin-top: 5px;
    display: inline-block;
  }

  p {
    a {
      color: #393a60 !important;
      text-decoration: underline;
      transition: opacity 0.25s ease-in-out;

      &:hover {
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
      }
    }
  }

  .summary-wrapper {
    color: white;
    margin-bottom: 50px;
    margin-top: 60px;
    background: $color-primary;
    padding: $spacing-m;

    h4 {
      font-size: $size-3;
      line-height: 0.75;
      width: 100%;
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

  .content-wrapper {
    padding-bottom: 0;
  }

  h5.title {
    color: $color-secondary !important;
    font-size: $size-4;
    padding-bottom: 0px;
    margin-bottom: 10px !important;
  }

  .name-list li,
  .time-list li {
    color: $color-primary;
    font-size: $size-5;
    padding-bottom: 5px;
  }

  .name-list,
  .time-list {
    margin-bottom: 20px;
  }

  .event-content p.copyright {
    font-size: 14px;
  }

  .journal-logos {
    height: 60px;
    margin-right: 50px;
  }

  #organiser-logos {
    max-width: 80%;
    width: 600px;
  }

  .col a {
    width: 180px;
    margin-right: 2em;
    float: left;
  }

  .button.is-color-secondary {
    margin-top: 30px;
    min-width: 180px;
    margin-right: 3em;
    background: $color-secondary;
  }
</style>
