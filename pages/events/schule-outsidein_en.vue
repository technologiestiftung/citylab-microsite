<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/schule-outsidein_hero.jpg'" :title="'school*OUT-SIDE-IN'" :subTitle="'Student design proposals for the new berlin school'" :subSubTitle="'18-29.11.2019 CityLAB Berlin Foyer'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Berlin is in urgent need for new schools, the sooner the better. 
          The available spaces can no longer meet the demand. 
          The Berlin "Schulbauoffensive" (School Building Offensive) is planning to build more than 60 schools by 2026. 
          This situation offers the chance to develop and test new pedagogical concepts and the all-day use of the classrooms spatially. 
          How will the typology of the school change in this process?</p>


        <h3 class="title"></h3>
        <p>
          Big building lots for new schools in Berlin are hard to find, so that new ideas on how to cope with the increasing scarcity of available space are required. 
          How can new concepts for school buildings contribute to urban density and a social and functional diversity in the city?<br />
        </p>

        <h3 class="title"></h3>
        <p>Using this initiative and the occurring questions as a starting point, architecture students of BTU Cottbus-Senftenberg developed a concept 
          and presented a design proposal for a school building on a building lot in the inner city of Berlin. 
          The school, intended as part of a city block, is combined with other uses and opens "OUT-SIDE-IN" to the neighborhood and city. 
          The CityLAB Berlin presents the results of the design seminar.</p>

        <img src="https://citylab-berlin.org/images/events/schule-outsidein-organiser-logo.jpg" alt="Organisatoren" />

        <div class="summary-wrapper is-medium">
          <h4>More information</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Phone number</h5>
              <span class="summary-text">+49 (0) 355 694 245</span>
            </div>
            <div class="content-block">
              <h5>Organizer</h5>
              <span class="summary-text">BTU Cottbus - Senftenberg</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">18-29.11.2019</span>
            </div>
            <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:wulfa@b-tu.de" class="summary-text">wulfa@b-tu.de</a>
            </div>
            <div class="content-block">
              <h5>Adress</h5>
              <span class="summary-text">Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin</span>
            </div>
          </div>
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
        lang: 'en',
        content: content,
        direct: '/events/schule-outsidein'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'Summer School 2019 - Data-driven Urban Innovation',
        meta: [
          { hid: 'description', name: 'description', content: 'school*OUT-SIDE-IN (2019-11-18 to 2019-11-29 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "school*OUT-SIDE-IN"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/schule_outsidein_social_media.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "school*OUT-SIDE-IN (2019-11-18 to 2019-11-29 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "BTU Cottbus-Senftenberg"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/schule-outsidein_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "school*OUT-SIDE-IN"},
          { hid: 'twitter:description', name: 'twitter:description', content: "school*OUT-SIDE-IN (2019-11-18 to 2019-11-29 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/schule_outsidein_social_media.jpg"},
          { hid: 'name', itemprop: 'name', content:"Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'description', itemprop: 'description', content: "school*OUT-SIDE-IN (2019-11-18 to 2019-11-29 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/schule_outsidein_social_media.jpg"},
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
        background: $color-tertiary;
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
            color: $color-tertiary;
            font-size: $size-5;
            margin-bottom: 20px;
        }

        span {
            color: $color-tertiary;
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
		color: $color-tertiary;
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


