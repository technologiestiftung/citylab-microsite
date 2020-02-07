<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg'" :title="'AI for Berlin Vol. II'" :subTitle="'Workshopreihe zu KI & Stadt'" :subSubTitle="'03.03.2020, 17-21 Uhr, CityLAB Berlin Veranstaltungsraum'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Alle reden von KI. Zu Recht. Denn das Potenzial ist enorm. 
          In der Wirtschaft gibt es hierfür immer mehr Beispiele - KI fährt Autos autonom, spricht wie ein Mensch, 
          gewinnt gegen die weltbesten Poker-, Schach- und Go-Spieler und findet Krebszellen schneller als Ärzte.</p>

        <p>Aber wo ist die KI für unsere Stadt? Wo ist Berlins KI, die uns im Alltag hilft, für mehr Nachhaltigkeit sorgt, das Stadtklima verbessert, 
          unsere Bäume bewässert, Verkehr optimiert, Feinstaub reduziert… Lasst sie uns suchen und gemeinsam entwickeln!</p>

        <h3 class="title"></h3>
        <p>Mit der <b>zweiten Veranstaltung</b> unserer Workshopreihe „AI for Berlin” machen wir zusammen mit unserem Partner 
          <a href= https://www.birdsonmars.com>Birds on Mars</a> 
        und Euch am <b>3. März 2020</b> einen weiteren Schritt. 
          Nach einer ersten Sammlung von großartigen Ideen in 2019, werden wir uns um weitere Schritte zur konkreten Umsetzung kümmern. 
          Ziel ist es, die prototypische Umsetzung einzelner Ideen in interdisziplinären Teams vorzubereiten und damit umfangreichere und nachhaltige Implementierungsprojekte in der Stadt anzustoßen.</p>
          
        <p>Egal ob Du Python-begeistert bist, viel mit Daten arbeitest oder einfach als Enthusiast*in die Chance nutzen willst, 
          deine menschliche Perspektive einzubringen - für diese Session brauchst Du vor allem Deine menschliche Intelligenz. 
          Komm vorbei und mach mit bei der gemeinsamen Suche und Entwicklung von KI für Berlin!</p>

        <p>Die Veranstaltung findet in englischer und deutscher Sprache statt.</p><br />


        <div class="summary-wrapper is-medium">
          <h4>Zusammenfassung</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Website</h5>
              <span class="summary-text"><a href= https://www.birdsonmars.com>https://www.birdsonmars.com</a> </span>
            </div>
            <div class="content-block">
              <h5>Veranstalter</h5>
              <span class="summary-text">CityLAB & Birds on Mars</span>
            </div>
            <div class="content-block">
              <h5>Datum</h5>
              <span class="summary-text">03.03.2020, 17-21 Uhr</span>
            </div>
        <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:florian@birdsonmars.com" class="summary-text">Florian Dohmann</a>
            </div>
            <div class="content-block">
              <h5>Adresse</h5>
              <span class="summary-text">Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin</span>
            </div>
          </div>
        </div>

      <p> Eintritt frei mit Anmeldung </p>

      <div class="flex-container btn" style="margin-top:30px!important;display:inline">
<a href="https://www.eventbrite.de/e/ai-for-berlin-vol-ii-registration-91609324957" target="_blank" class="button is-color-secondary is-normal">Jetzt registrieren</a>
</div>

        <Matomo/>
            </div>
        </section>
    <Footer :lang="lang" :content="content"/>
  </div>
</template>

<script>
  import { 
      content as content
  } from '../../assets/content.js';

  import Navigation from '../../components/Navigation.vue';
  import HeroLight from '../../components/HeroLight.vue';
  import Footer from '../../components/Footer.vue';
  import Matomo from '../../components/Matomo.vue';
    
    export default {
        components: {
      Navigation,
      HeroLight,
      Footer,
      Matomo
    },
    data() {
      return {
        lang: 'de',
        content: content,
        direct: '/events/AIforberlin2_en'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'AI for Berlin - ',
        meta: [
          { hid: 'description', name: 'description', content: 'AI for Berlin (2020-03-03 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "AI for Berlin"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "AI for Berlin (2020-03-03 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "CityLAB Berlin"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/AIforberlin2_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "AI for Berlin"},
          { hid: 'twitter:description', name: 'twitter:description', content: "AI for Berlin (2020-03-03 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg"},
          { hid: 'name', itemprop: 'name', content:"AI for Berlin"},
          { hid: 'description', itemprop: 'description', content: "AI for Berlin (2020-03-03 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg"},
        ]
      }
    },
    }
</script>

<style lang="scss">
  @import "../../assets/style/style.scss";
  h1.title, h3.title {
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
            color: #393A60 !important;
            text-decoration: underline;
            transition: opacity .25s ease-in-out;

            &:hover {
                opacity: .5;
                transition: opacity .25s ease-in-out;
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
            line-height: .75;
            width: 100%;
        }

        .content-block {
            font-size: $size-6;
            width: 33%;
            margin-top: 20px;

            a {
                color: white;
                opacity: .5;
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
                opacity: .5;
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

        h4.title{
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
    

	h5.title{
		color: $color-secondary !important;
		font-size: $size-4;
		padding-bottom:0px;
		margin-bottom:10px !important;
	}

	.name-list li,
	.time-list li{
		color: $color-primary;
        font-size: $size-5;
		padding-bottom:5px;
	}

	.name-list, .time-list{
		margin-bottom:20px;
	}

	.event-content p.copyright{
		font-size: 14px;
	}

	.journal-logos{
		height:60px;
		margin-right:50px;
	}

	#organiser-logos{
		max-width:80%;
		width:600px;
	}

    .col a{
    width: 180px;
    margin-right: 2em;
    float: left;

    }

    .button.is-color-secondary{
        margin-top: 30px;
        min-width: 180px;
        margin-right: 3em;
    }

</style>


