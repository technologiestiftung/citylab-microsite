<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/hero_img_summer_school.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']" :subSubTitle="eventContent[lang]['subSubTitle'] + '<br /><a href=\'#apply\' class=\'applyButton\'>Apply now</a>'">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

        <h3 class="title">{{ eventContent[lang]['universitiesTitle'] }}</h3>
        <div class="universities-list">
          <div v-for="university in universitiesArr">
            <img :src="'https://citylab-berlin.org/images/events/summerschool-logo-' + university.img + '.jpg'" :alt="university.title.split('<')[0]" :srcset="'https://citylab-berlin.org/images/events/summerschool-logo-' + university.img + '.jpg 1x, https://citylab-berlin.org/images/events/summerschool-logo-' + university.img + '@2x.jpg 2x'" />
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

        <h3 class="title">{{ eventContent[lang]['scheduleTitle'] }}</h3>
        <ul class="schedule-list">
          <li v-for="item in scheduleArr">
            <span class="schedule-title"><span>{{ item.time }}, {{ item.day }} - </span><strong>{{ item.title }}</strong></span>
            <ul>
              <li v-for="contentItem in item.content">- {{ contentItem }}</li>
            </ul>
          </li>
        </ul>

        <div id="apply">
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
          { hid: 'description', name: 'description', content: 'Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/summerschool_social_media.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "Sebastian Meier"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:site', name: 'twitter:site',  content: "@TSBBerlin"},
          { hid: 'twitter:creator', name: 'twitter:creator',  content: "@seb_meier"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/summerschool"},
          { hid: 'twitter:title', name: 'twitter:title', content: "Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'twitter:description', name: 'twitter:description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/summerschool_social_media.jpg"},
          { hid: 'name', itemprop: 'name', content:"Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'description', itemprop: 'description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-20 - CityLAB Berlin)"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/summerschool_social_media.jpg"},
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

  #apply{
    padding-top:70px;
  }

  ul.schedule-list>li{
    padding-bottom:30px;
    font-size: $size-5;
  }

  .schedule-title{
    text-decoration:underline;
  }

  .schedule-title span{
    font-style:italic;
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

  #organiser-logos{
    max-width:80%;
    width:600px;
  }

  .applyButton{
    border-radius:4px;
    background-color:white;
    color:#2F2FA2 !important;
    border:2px solid white;
    margin-top:20px;
    display:inline-block;
    font-size:1.2rem !important;
    padding:5px 10px 9px 10px;
    &:hover{
      background:transparent;
      color:white !important;
    }
  }

  .universities-list{
    padding-top:30px; 

    h4{
      padding-top:10px !important;
      color:black !important;
      margin-bottom: 0 !important;
      padding-bottom:10px !important;
      font-size: 24px;
    }
    p{
      padding-bottom:10px;
    }
    &>div>strong, &>div>span{
      font-size:1.25rem;
    }
    &>div{
      padding-bottom:60px;
    }
    a{
      text-decoration:underline;
      color:black !important;
      &:hover{
        color:#3273dc !important;
      }
    }
  }

  .universities-list>div{
  }


</style>


