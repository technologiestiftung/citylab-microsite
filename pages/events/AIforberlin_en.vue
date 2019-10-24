<template>
    <div>
    <Navigation :scrolled="false" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/AIforberlin_hero.jpg'" :title="'AI for Berlin'" :subTitle="'Workshop kick-off for an event series on City & AI'" :subSubTitle="'12.11.2019 CityLAB Berlin Event space'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Everybody’s talking about AI, and rightly so – the technology’s potential is enormous. 
          Particularly in the business world, we’re seeing more and more examples of this: AI is able to drive cars autonomously, 
          speak like a human being, win against the best poker players in the world, and find cancer cells faster than a doctor.
          But where is the AI for our city of Berlin?</p>

        <p>An AI that ensures greater sustainability, improves urban climate, waters our trees, optimizes cycle paths, 
          reduces fine dust – does this AI exist? Let’s look for it, or, even better, let’s develop it together!</p>

        <h3 class="title"></h3>
        <p>Together with our partner <a href= https://www.birdsonmars.com>Birds on Mars</a>, we’re starting our workshop series 
        “AI for Berlin” on Nov. 12, and we’re hoping you’ll join us! The 4-hour kick-off session starts with idea generation 
        and conception. As is so often the case, the field of AI is missing creative ideas! We want to develop 
        them together and generate a great foundation for the future working sessions of this ongoing series.</p>

        <h3 class="title"></h3>
        <p>Good ideas need to not just be conceived of but also implemented, and this no less true here. 
          In the subsequent sessions, we’ll select individual ideas as a group and then form interdisciplinary teams 
          in which we’ll implement our prototypes. Through this work, we’ll be able to initiate more comprehensive 
          and sustainable projects for our city.</p>
          
        <p>Regardless of whether you already have a concrete idea you’d like to contribute, are in love with Python programming, 
          or you simply want to have an opportunity to experience the cutting edge of urban innovation – 
          all you need for the first session is your human intelligence.</p> 
          

        <p>Come by and join us in the collective search and development of AI for Berlin. 
          The Event will be held in Englisch and German.</p><br />

        <img src="" alt="Organisatoren" />

        <div class="summary-wrapper is-medium">
          <h4>More information</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Opening</h5>
              <span class="summary-text">18.11.2019, 6 pm</span>
            </div>
            <div class="content-block">
              <h5>Organizer</h5>
              <span class="summary-text">BTU Cottbus - Senftenberg</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">12.11.2019</span>
            </div>
           <div class="content-block">
              <h5>Time</h5>
              <span class="summary-text">5 - 9 pm</span>
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
        direct: '/events/AIforberlin'
      }
    },
    computed: {
        },
    head () {
      return {
        title: 'AI for Berlin - ',
        meta: [
          { hid: 'description', name: 'description', content: 'AI for Berlin(2019-11-12 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "AI for Berlin"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/AIforberlin_hero.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "AI for Berlin (2019-11-12 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "BTU Cottbus-Senftenberg"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/AIforberlin_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "AI for Berlin"},
          { hid: 'twitter:description', name: 'twitter:description', content: "AI for Berlin (2019-11-12 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/AIforberlin_hero.jpg"},
          { hid: 'name', itemprop: 'name', content:"AI for Berlin"},
          { hid: 'description', itemprop: 'description', content: "AI for Berlin (2019-11-12 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/AIforberlin_hero.jpg"},
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


