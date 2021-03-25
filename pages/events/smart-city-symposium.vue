<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="true" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/smart-city-symposium_hero.jpg'" :title="'International Smart City Symposium'" :subTitle="'Redefining the Smart City'" :subSubTitle="'23.-24.03.2021, 13-18 Uhr, Hopin'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Die neue <a href="https://www.citylab-berlin.org/smart_city/">Smart City Strategie Berlins</a> soll in einem partizipativen und dialogischen 
        <a href="https://www.notion.so/Wie-gehen-wir-es-an-abb29170ca8747e2bc3756f7dbdc0e83">Prozess</a> entstehen. 
        Weg von einer technologie-zentrierten Auffassung des Begriffs Smart City hin zu einem wertebasierten und menschzentrierten Verständnis. 
        Um diesem Anspruch gerecht zu werden richten sich verschiedene Beteiligungsformate an die gesamte Stadtgesellschaft, von Verwaltung über Wirtschaft, Wissenschaft und Zivilgesellschaft bis zu sogenannten stillen Gruppen.</p>

        <p>Nach unserem Call for Society Engagement, bei dem sich zivilgesellschaftliche Akteur:innen durch selbstorganisierte (Online)Workshops einbringen konnten, freuen wir uns nun auf das internationale Online Symposium hinzuweisen, 
            das wir zusammen mit der <a href="https://www.berlin.de/rbmskzl/">Berliner Senatskanzlei</a>, und dem <a href="https://www.hertie-school.org/en/centre-for-digital-governance">Centre for Digital Governance der Hertie School</a> veranstalten. </p>

        <h3 class="title"></h3>
        <p>Das Symposium wird einen Überblick über den aktuellen Stand der Forschung zu Smart Cities geben und mit renommierten Smart City-Wissenschaftler:innen und -Praktiker:innen diskutieren. 
            Die Veranstaltung bietet allen, die sich für Smart Cities interessieren, ein <b>Forum zum Zuhören, Lernen, Präsentieren und Diskutieren von aktueller Forschung, Strategien, Wissen und Erfolgsgeschichten.</b></p>
          
        <p>Neben Vorträgen wird es vier Workshops zu den Themen Bürgerorientierung, Zusammenarbeit zwischen Wirtschaft und Verwaltung, Data Governance und Verwaltungskapazität im Smart City-Kontext geben. 
            In jedem Workshop werden die Teilnehmer:innen Inputs von einem Expertengremium zum jeweiligen Thema hören und anschließend an einer umfassenden Diskussion teilnehmen können. 
            Die Erkenntnisse aus diesem Symposium werden mit in die Berliner Smart-City-Strategie einfließen. </p>

        <p>Mehr Informationen zum Ablauf und den jeweiligen Workshops findet man in der <b><a href="https://www.citylab-berlin.org/docs/Symposium_Agenda.pdf"> Agenda</a></b>.
        <br><br>
        Hinweis: Die Veranstaltung wird auf Englisch stattfinden.</p><br />


        <div class="summary-wrapper is-medium">
          <h4>Zusammenfassung</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Website</h5>
              <span class="summary-text"
                ><a
                  href="https://www.hertie-school.org/en/events/23-03-2021-international-smart-city-symposium"
                  style="opacity: 1;"
                  >https://www.hertie-school.org/en/events</a
                >
              </span>
            </div>
            <div class="content-block">
              <h5>Veranstalter</h5>
              <span class="summary-text">CityLAB Berlin & Hertie School - Centre for Digital Governance</span>
            </div>
            <div class="content-block">
              <h5>Datum</h5>
              <span class="summary-text">23.-24.03.2021, 13-18 Uhr</span>
            </div>
        <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:info@citylab-berlin.org" class="summary-text">info@citylab-berlin.org</a>
            </div>
            <div class="content-block">
              <h5>Adresse</h5>
              <span class="summary-text">Hopin</span>
            </div>
          </div>
        </div>

      <p>Eintritt frei, Anmeldung erforderlich </p>

      <div class="flex-container btn" style="margin-top:30px!important;display:inline">
<a href="https://hopin.com/events/international-smart-city-symposium" target="_blank" class="button is-color-secondary is-normal">Jetzt registrieren</a>
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
        direct: '/events/smart-city-symposium-en'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'International Smart City Symposium - ',
        meta: [
          { hid: 'description', name: 'description', content: 'International Smart City Symposium (2021-03-23-24)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "International Smart City Symposium"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/smart-city-symposium_social_media.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "International Smart City Symposium (2021-03-23-24)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "CityLAB Berlin"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/smart-city-symposium-en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "International Smart City Symposium"},
          { hid: 'twitter:description', name: 'twitter:description', content: "International Smart City Symposium (2021-03-23-24)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/smart-city-symposium_social_media.jpg"},
          { hid: 'name', itemprop: 'name', content:"International Smart City Symposium"},
          { hid: 'description', itemprop: 'description', content: "International Smart City Symposium (2021-03-23-24)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/smart-city-symposium_social_media.jpg"},
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


