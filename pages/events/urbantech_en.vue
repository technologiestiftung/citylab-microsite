<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/urbantech_hero.jpg'" :title="'Urban Tech Startup and City Lunch'" 
    :subTitle="'Presentation of the urban tech landscape'" 
    :subSubTitle="'04.03.2020, 12-1.30 pm, CityLAB Berlin Event space'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">How many Start-ups in the field of urban tech come from Berlin? 
          What are the possible impacts these companies could have on the city in terms of the Berlin strategy for 2030?</p>

        <p>These are the questions that we at Urban Impact asked ourselves as part of our project "Berlin Urban Tech Map" at CityLAB Berlin. 
          In order to collect meaningful data, we set up a cooperation with <a href="https://dealroom.co">Dealroom</a> and 
          <a href="https://www.berlin.de/sen/wirtschaft/">Berlin Senate Department for Economics</a> who are already operating the Startup Map Berlin and built upon their data. 
          We are also happy to receive support by <a href="https://www.berlin-partner.de">Berlin Partner</a>'s Smart City Network.</p>

        <p>To cluster and maintain the 100+ companies we identified - of which some even support aspects of the Berlin 2030 strategy (StEK) - we set up 5 main categories:
          <br>
           <b> - Mobility</b> (Shared Mobility, City Logistics, AV/EV, Public Transport)<br>
            <b> - Infrastructure and Utilities</b> (Energy, Waste, Urban Farming, Buildings) <br>
            <b> - Enabling Urban Tech IoT <br>
                - Gov / Civic Tech <br>
                - Livability </b><br><br>
                During the event at CityLAB Berlin we will be sharing more detailed insights from our market study and invite many of the mapped movers and shakers. 
                So we hope to see you there to discuss with us over lunch the world of urban tech in Berlin!</p>

        <h3 class="title"></h3>
        <p><b>Agenda:</b><br>
            12:00 - Presentation of the Urban Tech Landscape by Urban Impact <br>
            12:30 - Open Q&A and Discussion, Lunch and Networking along thematic tables <br>
            13:30 - End of Event"</p>
          

        <p>The Event will be held in English and German.</p><br />


        <div class="summary-wrapper is-medium">
          <h4>More information</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Website</h5>
              <span class="summary-text"><a href=https://www.urbanimpact.eu>https://www.urbanimpact.eu</a> </span>
            </div>
            <div class="content-block">
              <h5>Organizer</h5>
              <span class="summary-text">CityLAB & Urban Impact</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">04.03.2020, 12-1.30 pm</span>
            </div>
            <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:hello@urbanimpact.eu" class="summary-text">Urban Impact</a>
            </div>
            <div class="content-block">
              <h5>Adress</h5>
              <span class="summary-text">Platz der Luftbrücke 4, Gebäude H2rund, 12101 Berlin</span>
            </div>
          </div>
        </div>

      <p>Free entry with a registration</p>

      <div class="flex-container btn" style="margin-top:30px!important;display:inline">
<a href="https://www.eventbrite.co.uk/e/urban-tech-startup-city-lunch-tickets-91134027329?aff=SocialMedia" target="_blank" class="button is-color-secondary is-normal">Register now</a>
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
        direct: '/events/urbantech'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'Urban Tech Startup & City Lunch - ',
        meta: [
          { hid: 'description', name: 'description', content: 'Urban Tech Startup & City Lunch (2020-03-04 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "Urban Tech Startup & City Lunch"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/urbantech_hero.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "Urban Tech Startup & City Lunch (2020-03-04 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "CityLAB Berlin"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/urbantech_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "Urban Tech Startup & City Lunch"},
          { hid: 'twitter:description', name: 'twitter:description', content: "Urban Tech Startup & City Lunch (2020-03-04 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/urbantech_hero.jpg"},
          { hid: 'name', itemprop: 'name', content:"Urban Tech Startup & City Lunch"},
          { hid: 'description', itemprop: 'description', content: "Urban Tech Startup & City Lunch (2020-03-04 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/urbantech_hero.jpg"},
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


