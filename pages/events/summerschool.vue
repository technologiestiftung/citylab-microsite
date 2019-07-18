<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/hero_img_summer_school.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']" :subSubTitle="eventContent[lang]['subSubTitle']" />
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

        <h4 class="title">{{ eventContent[lang]['timeTitle'] }}</h4>
        <ul class="time-list">
          <li v-for="time in timeArr">
            <strong>{{ time[0] }}</strong>
            <span>{{ time[1] }}</span>
          </li>
        </ul>

        <div v-for="paragraph in parArr">
          <h4 class="title" v-if="paragraph.type === 'title'">{{ paragraph.content }}</h4>
          <p v-if="paragraph.type === 'paragraph'" v-html="paragraph.content"></p>
        </div>

        <h4 class="title">{{ eventContent[lang]['programTitle'] }}</h4>

        <h5 class="title">{{ eventContent[lang]['chairTitle'] }}</h5>
        <ul class="name-list">
          <li v-for="chair in chairArr">
            <strong>{{ chair[0] }}</strong>
            <span>{{ chair[1] }}</span>
          </li>
        </ul>

        <h5 class="title">{{ eventContent[lang]['memberTitle'] }}</h5>
        <ul class="name-list">
          <li v-for="member in memberArr">
            <strong>{{ member[0] }}</strong>
            <span>{{ member[1] }}</span>
          </li>
        </ul>

        <img id="organiser-logos" src="https://citylab-berlin.org/images/events/summerschool-organiser-logos.svg" alt="Organisatoren" />

        <div id="applyContainer">

          <p class="apply">{{ eventContent[lang]['rights'] }}</p>

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
                return this.eventContent[this.lang].timeline
            },
      universitiesArr() {
                return this.eventContent[this.lang].paragraphs
            },
      partnersArr() {
                return this.eventContent[this.lang].chairs
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


