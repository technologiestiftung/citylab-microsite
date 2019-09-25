<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/fixmyberlin_interview_hero.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']">
    </HeroLight>
        <section class="section is-medium event-content">
            <div class="container">
              <p v-html="eventContent[lang]['introText']"></p>
              <p><strong>{{ eventContent[lang]['q1'] }}</strong></p>
              <p>{{ eventContent[lang]['a1'] }}</p>
              <p><strong>{{ eventContent[lang]['q2'] }}</strong></p>
              <p>{{ eventContent[lang]['a2'] }}</p>
              <p><strong>{{ eventContent[lang]['q3'] }}</strong></p>
              <p v-html="eventContent[lang]['a3']"></p>

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
  } from '../../assets/events/fixmyberlin_interview.js';

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
        direct: '/events/fixmyberlin_interview'
      }
    },

           head () {
      return {
        title: 'Summer School 2019 - Data-driven Urban Innovation',
        meta: [
          { hid: 'description', name: 'description', content: 'Drei Fragen an FixMyBerlin' },
          { hid: 'og:type', property: 'og:type',  content: "website"},
          { hid: 'og:title', property: 'og:title',  content: 'Interview – FixMyBerlin'},
          { hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/fixmyberlin_socialmedia.jpg"},
          { hid: 'og:description', property: 'og:description',  content: "Drei Fragen an FixMyBerlin"},
          { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
          { hid: 'article:author', property: 'article:author',  content: "Benjamin Seibel"},
          { hid: 'twitter:card', name: 'twitter:card', content:"summary_large_image"},
          { hid: 'twitter:site', name: 'twitter:site',  content: "@TSBBerlin"},
          { hid: 'twitter:creator', name: 'twitter:creator',  content: "@bnjmnsbl"},
          { hid: 'twitter:url', name: 'twitter:url', content: "https://citylab-berlin.org/images/events/fixmyberlin_socialmedia.jpg"},
          { hid: 'twitter:title', name: 'twitter:title', content: "Drei Fragen an FixMyBerlin"},
          { hid: 'twitter:description', name: 'twitter:description', content: "Drei Fragen an FixMyBerlin"},
          { hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/fixmyberlin_socialmedia.jpg"},
          { hid: 'name', itemprop: 'name', content:"Interview – FixMyBerlin"},
          { hid: 'description', itemprop: 'description', content: "Interview – FixMyBerlin"},
          { hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/fixmyberlin_socialmedia.jpg"},
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

  .schedule-title{
    text-decoration:underline;
  }

  .schedule-title span{
    font-style:italic;
  }

  .event-content p{
    color: $color-tertiary;
    font-size: $size-5;
    margin-bottom: 20px;
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

</style>


