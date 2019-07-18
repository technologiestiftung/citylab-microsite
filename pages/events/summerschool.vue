<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/hero_img_summer_school.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']" :subSubTitle="eventContent[lang]['subSubTitle']" />
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

        <h3 class="title">{{ eventContent[lang]['universitiesTitle'] }}</h3>
        <div class="universities-list">
          <div v-for="university in universitiesArr">
            <h4 class="title" v-html="university.title"></h4>
            <p>{{ university.content }}</p>
            <strong>Lead:</strong>&nbsp;<span>{{ university.lead }}</span><br />
            <strong>Contact:</strong>&nbsp;<span><a :href="'mailto:' + university.contactMail">{{ university.contact }}</a></span>
          </div>
        </div>

        <h3 class="title">{{ eventContent[lang]['partnerTitle'] }}</h3>
        <p>{{ eventContent[lang]['partnerText'] }}</p>
        <!--<ul class="name-list">
          <li v-for="university in universitiesArr">
            <strong>{{ chair[0] }}</strong>
            <span>{{ chair[1] }}</span>
          </li>
        </ul>-->

        <div id="applyContainer">
          <h3 class="title">{{ eventContent[lang]['applyTitle'] }}</h3>
          <p v-html="eventContent[lang]['applyText1']"></p>
          <p v-html="eventContent[lang]['applyText2']"></p>
        </div>

        <div id="locationContainer">
          <h3 class="title">{{ eventContent[lang]['locationTitle'] }}</h3>
          <p v-html="eventContent[lang]['locationText']"></p>
        </div>

        <img id="organiser-logos" src="https://citylab-berlin.org/images/events/summerschool-organiser-logos.svg" alt="Organisatoren" />

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

  import { 
      content as eventContent
  } from '../../assets/events/summerschool.js';

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
        eventContent: eventContent,
        direct: '/events/summerschool'
      }
    },
    computed: {
      scheduleArr() {
                return this.eventContent[this.lang].schedule
            },
      universitiesArr() {
                return this.eventContent[this.lang].universities
            },
      partnersArr() {
                return this.eventContent[this.lang].partners
            }
        },
    head () {
      return {
        title: 'Summer School 2019 - Data-driven Urban Innovation',
        meta: [
          { name: 'description', content: 'Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)' },
          { property: 'fb:app_id', content: '487094758334595'},
          { property: 'og:url',  content: "https://www.citylab-berlin.org/events/summerschool"},
          { property: 'og:type',  content: "website"},
          { property: 'og:title',  content: "Summer School 2019 - Data-driven Urban Innovation"},
          { property: 'og:image',  content: "https://citylab-berlin.org/images/events/summer-school_social_media.jpg"},
          { property: 'og:description',  content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { property: 'og:site_name',  content: "CityLAB Berlin"},
          { property: 'article:author',  content: "Sebastian Meier"},
          { name: 'twitter:card', content:"summary"},
          { name: 'twitter:site',  content: "@TSBBerlin"},
          { name: 'twitter:creator',  content: "@seb_meier"},
          { name: 'twitter:url', content: "https://www.citylab-berlin.org/events/summerschool"},
          { name: 'twitter:title', content: "Summer School 2019 - Data-driven Urban Innovation"},
          { name: 'twitter:description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { name: 'twitter:image', content: "https://citylab-berlin.org/images/events/summer-school_social_media.jpg"},
          { itemprop: 'name', content:"Summer School 2019 - Data-driven Urban Innovation"},
          { itemprop: 'description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { itemprop: 'image', content: "https://citylab-berlin.org/images/events/summer-school_social_media.jpg"},
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

  .event-content p{
    color: $color-tertiary;
        font-size: $size-5;
    padding-bottom:40px;
  }

  h4.title{
    color: $color-secondary !important;
    font-size: $size-3;
    padding-bottom:20px;
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
    padding-top:40px;
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

</style>


