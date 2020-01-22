<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/entitycity_hero.jpg'" :title="'Entity:City'" :subTitle="'Exhibition opening: Student projects'" :subSubTitle="'12.02.2020, 6 pm,  CityLAB Berlin Exhibition space'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">During the winter term 2019/20, the interdisciplinary teams of design (<a href="https://kh-berlin.de">Weissensee School of Art and Design</a>) 
        and <a href="https://www.mi.fu-berlin.de/en/inf/index.html">computer science</a> (<a href="https://www.fu-berlin.de/en/index.html">Freie Universität Berlin</a>) students researched current challenges in Berlin's urban space like mobility, 
        culture identity or to road safety and everyday stressors. Data from residents and urban systems served as the basis for the development of neo-analog products. 
        These products return actions into the tangible and physical urban space, to improve or create new forms of participation and interaction.</p>

        <h3 class="title"></h3>
        <p>The semester project was supervised under the direction of <a href="https://www.mi.fu-berlin.de/en/inf/groups/hcc/members/professor/mueller-birn.html">Prof. Dr. Claudia Müller-Birn</a> 
        (<a href="https://www.mi.fu-berlin.de/en/inf/groups/hcc/">Human-Centered Computing</a>, FU Berlin), <a href="https://kh-berlin.de/personen/show/thomas-ness-4374.html">Prof. Thomas Ness</a> 
        (<a href="https://interaktion-produktdesign-khb.de">Embodied Interactions</a>, khb) and lecturer  <a href="https://kh-berlin.de/personen/show/judith-glaser-2091.html">Judith Glaser</a> (MA Design)
        and is part of <a href="https://www.matters-of-activity.de/en/">"Matters of Activity. Image Space Material"</a> Cluster of Excellence Humboldt-Universität zu Berlin.</p>

        <h3 class="title"></h3>
        <p>The exhibition will be on display until February 15th.</p><br />

        <img src="https://citylab-berlin.org/images/events/entitycity_organiser_logo.jpg" alt="Organisatoren" />

        <div class="summary-wrapper is-medium">
          <h4>More information</h4>
          <div class="flex-container">
            <div class="content-block">
              <h5>Opening</h5>
              <span class="summary-text">12.02.2020, 6 pm</span>
            </div>
            <div class="content-block">
              <h5>Organizer</h5>
              <span class="summary-text">Weissensee School of Art and Design</span>
            </div>
            <div class="content-block">
              <h5>Date</h5>
              <span class="summary-text">12-15.02.2020</span>
            </div>
           <div class="content-block">
              <h5>Opening times</h5>
              <span class="summary-text">Th-Sat 10am-5pm</span>
            </div>
            <div class="content-block">
              <h5>E-Mail</h5>
              <a href="mailto:wiesener@kh-berlin.de" class="summary-text">wiesener@kh-berlin.de</a>
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
        title: 'school*OUT-SIDE-IN - ',
        meta: [
          { hid: 'description', name: 'description', content: 'Entity:City (2020-02-12 bis 2020-02-15 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "Entity:City"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/entitycity_social_media.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "Entity:City (2020-02-12 bis 2020-02-15 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "Weißensee Kunsthochschule Berlin"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/entitycity_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "Entity:City (2020-02-12 bis 2020-02-15 - CityLAB Berlin)"},
          { hid: 'twitter:description', name: 'twitter:description', content: "Entity:City (2020-02-12 bis 2020-02-15 - CityLAB Berlin))"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/entitycity_social_media.jpg"},
          { hid: 'name', itemprop: 'name', content:"Entity:City"},
          { hid: 'description', itemprop: 'description', content: "Entity:City (2020-02-12 bis 2020-02-15 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/entitycity_social_media.jpg"},
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


