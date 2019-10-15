<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/hero_img_summer_school.jpg'" :title="TITLE" :subTitle="SUBTITLE" :subSubTitle="SUBSUBTITLE">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
        <p class="event-intro">INTROTEXT</p>

        <h3 class="title">ZWISCHENÜBERSCHRIFT</h3>
        <p>FLIESSTEXT</p>

        <h3 class="title">ZWISCHENÜBERSCHRIFT</h3>
        <p>FLIESSTEXT</p>

        <img src="https://citylab-berlin.org/images/events/summerschool-organiser-logos.svg" alt="Organisatoren" />

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
        },
    head () {
      return {
        title: 'Summer School 2019 - Data-driven Urban Innovation',
        meta: [
          { hid: 'description', name: 'description', content: 'Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-19 - CityLAB Berlin)' },
          { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: "Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/summerschool_social_media.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-19 - CityLAB Berlin)"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "Sebastian Meier"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:site', name: 'twitter:site',  content: "@TSBBerlin"},
          { hid: 'twitter:creator', name: 'twitter:creator',  content: "@seb_meier"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/schule-outsidein_en"},
          { hid: 'twitter:title', name: 'twitter:title', content: "Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'twitter:description', name: 'twitter:description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-19 - CityLAB Berlin)"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/summerschool_social_media.jpg"},
          { hid: 'name', itemprop: 'name', content:"Summer School 2019 - Data-driven Urban Innovation"},
          { hid: 'description', itemprop: 'description', content: "Summer School 2019 - Data-driven Urban Innovation (2019-9-9 to 2019-9-19 - CityLAB Berlin)"},
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
</style>


