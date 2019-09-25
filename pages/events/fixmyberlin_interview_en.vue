<template>
    <div>
    <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
    <HeroLight :image="'https://citylab-berlin.org/images/events/hero_img_summer_school.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']">
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


