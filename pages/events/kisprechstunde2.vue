<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg'" :title="'KI-Sprechstunde vol. II'" :subTitle="'Hack The Crisis Berlin'" :subSubTitle="'15.04.2020, 13.30-15.30 Uhr'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Für eure Projekte im Rahmen von <a target="_blank" href="https://hackthecrisis.citylab-berlin.org">Hack the Crisis Berlin</a> bietet das CityLab in Zusammenarbeit mit Birds on Mars ab 8. April eine wöchentliche KI-Sprechstunde an. Dabei habt ihr die Möglichkeit, eure Ideen von der Konzeption bis zur Umsetzung detailliert mit den Experten der Berliner KI-Agentur zu besprechen und von deren Fachwissen und ihrer praktischen Erfahrung zu profitieren.</p>

        <p>Egal, ob es sich um eine grobe Skizze, erste Code-Schnipsel oder einen fortgeschrittenen Prototypen handelt, wir beleuchten euer Projekt unter Data Science- und KI-Gesichtspunkten, überlegen mit euch, welche Daten für eine Umsetzung benötigt werden, wo man sie findet, und mit welchen Mitteln man die Implementierung schnell auf die Beine bringt.</p>

        <p>Schickt eure Fragen mit einer kurzen Projektbeschreibung gerne auch schon im Vorfeld an <a href="mailto:sebastian@birdsonmars.com">Sebastian von Birds on Mars</a></p>

        <p>Die Sprechstunde findet per Videokonferenz statt, Details werdet ihr im hackthecrisis <a href="https://join.slack.com/t/hackthecrisis-berlin/shared_invite/zt-cuwrelh0-~zlO_TY67TvmKVrORdsu2w">Slack-Channel</a> unter '#0_Ankündigen' finden.</p>


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
              <span class="summary-text">15.04.2020, 13:30 - 15:30 Uhr</span>
            </div>
        <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:sebastian@birdsonmars.com" class="summary-text">Sebastian</a>
            </div>
            <div class="content-block">
              <h5>Adresse</h5>
              <span class="summary-text">Videokonferenz</span>
            </div>
          </div>
        </div>

      <p> Eintritt frei mit Anmeldung </p>

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
        direct: '/events/kisprechstunde_en'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'KI Sprechstunde - ',
        meta: [
          { hid: 'description', name: 'description', content: 'KI Sprechstunde vol. II (2020-04-15 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "KI Sprechstunde vol. II"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "KI Sprechstunde vol. II (2020-04-15 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "CityLAB Berlin"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/AIforberlin2_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "KI Sprechstunde vol. II"},
          { hid: 'twitter:description', name: 'twitter:description', content: "KI Sprechstunde vol. II (2020-04-15 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/AIforberlin2_hero.jpg"},
          { hid: 'name', itemprop: 'name', content:"KI Sprechstunde"},
          { hid: 'description', itemprop: 'description', content: "KI Sprechstunde vol. II (2020-04-15 - CityLAB Berlin)"},
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


