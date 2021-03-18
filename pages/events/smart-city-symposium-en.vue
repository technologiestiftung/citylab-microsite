<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/smart-city-symposium_hero.jpg'" :title="'International Smart City Symposium'" :subTitle="'Redefining the Smart City'" :subSubTitle="'23-24.03.2021, 13-18 Uhr, Hopin'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">Berlin's new <a href="https://www.citylab-berlin.org/smart_city/">Smart City Strategy</a> is to be developed in a participatory and dialogue-based 
        <a href="https://www.notion.so/Wie-gehen-wir-es-an-abb29170ca8747e2bc3756f7dbdc0e83">process</a>. 
        The strategy intentionally takes a step away from a purely technological focus and moves instead toward a focus on co-design and inclusion; as part of this approach, the strategy includes active dialogue with Berlin's diverse urban society.</p>

        <p>Following our Call for Civil Society Engagement, which gave civil society actors the opportunity to organize their own workshops in the context of the smart city process, 
            we are now pleased to announce an international online symposium that we are organising together with the Berlin Senate Chancellery and the <a href="https://www.hertie-school.org/en/centre-for-digital-governance">Centre for Digital Governance at the Hertie School</a>.</p>

        <p>The symposium will provide an overview of the current state of research on smart cities and provide an opportunity to hear from and discuss with leading experts from the smart city realm. 
            The event offers all who are interested in the topic of smart cities a <b>forum in which to learn about, present on and discuss current research, strategies and success stories from this field.</b></p>

        <h3 class="title"></h3>
        <p>In addition to the keynote talks, there will be four workshops covering <b>Data Governance, Administrative Capacity, Citizen Centricity and Inter-sectoral Collaboration.</b> 
        In each workshop, participants will hear input from a panel of experts on the respective topic and then be able to take part in a discussion. 
        The findings from this symposium will be incorporated into Berlin's smart city strategy.</p>

        <h3 class="title"></h3>
      
        <p>More information on the schedule and the respective workshops can be found in the <b><a href="https://www.citylab-berlin.org/docs/Symposium_Agenda.pdf"> agenda</a></b>.</p> 
          

        <p>Please note this event will be held in English.</p><br />


        <div class="summary-wrapper is-medium">
          <h4>More Information</h4>
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
              <h5>Organizer</h5>
              <span class="summary-text">CityLAB Berlin & Hertie School - Centre for Digital Governance</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">23-24.03.2021, 13-18 </span>
            </div>
        <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:info@citylab-berlin.org" class="summary-text">info@citylab-berlin.org</a>
            </div>
            <div class="content-block">
              <h5>Address</h5>
              <span class="summary-text">Hopin</span>
            </div>
          </div>
        </div>

      <p>Free entry with a registration</p>

      <div class="flex-container btn" style="margin-top:30px!important;display:inline">
<a href="https://hopin.com/events/international-smart-city-symposium" target="_blank" class="button is-color-secondary is-normal">Register now</a>
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
        direct: '/events/smart-city-symposium'
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


