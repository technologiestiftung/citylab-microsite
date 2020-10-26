<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchorTags="true"
    />


    <section class="section is-medium schedule">
      <div class="container">
        <h1 style="margin-top: 100px;" class="title" v-html="content.jobs.title[lang]" />
        <h2 style="margin-bottom: 100px !important;" class="subtitle" v-html="content.jobs.description[lang]" />
        
        <div class="tile exhibit-wrapper" v-for="(item, itemIndex) in jobs" :key="itemIndex">
          <div class="tile-wrapper">
            <div class="wrapper-details">
              
              <div class="columns">
                <div class="column">
                  <p class="name">{{ item.headline[lang] }}</p>
                  <p class="publisher--expanded">{{ item.worktype[lang] }}</p>
                  <p class="description">{{ item.description[lang] }}</p>
                </div>
                <div class="column is-one-third">
                  <a
                  style="width:100%;"
                  class="button is-color-secondary is-normal"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ content.jobs.buttontext[lang] }}
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 style="margin: 50px 0px 50px 0px !important;" class="subtitle" v-html="content.jobs.contact_info[lang]" />
      </div>
    </section>
    <Footer :lang="lang" :content="content" />
    <Matomo />
  </div>
</template>

<script>
import { content } from "../assets/content.js";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import Matomo from "../components/Matomo.vue";

export default {
  components: {
    Navigation,
    Footer,
    Matomo,
  },
  computed: {
    jobs() {
      return this.content.jobs.jobs;
    },
  },
  data() {
    return {
      lang: "en",
      content: content,
      direct: "/jobs",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style/style.scss";

.wrap {
  flex-wrap: wrap;
}

.subtitle {
  font-size: 24px;
  color: $color-primary;
}



.tile-wrapper {
  padding: 10px 20px 10px 20px;
  display: flex;
  margin-bottom: 15px;
  
  flex-direction: column;
  overflow: auto;
  background: rgba(47, 47, 162, 0.05);
  transition: background 0.125s ease-in-out;
  p.description {
    display: block;
  }

  span.expand {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding-left: 0;
    flex-direction: column-reverse;
  }
}


.exhibit-wrapper {
  display: flex !important;
  flex-direction: column;
}


.name {
  line-height: 120%;
  color: $color-primary;
}

.title {
  color: $color-secondary;
}

.tile {
  
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  .wrapper-details {
    margin: 15px 0 15px 0;
    

    .description {
      color: rgba(47, 47, 162, 1);
      display: block;

      @media screen and (max-width: 680px) {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 20px;
      width: 100%;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    p.name {
      margin-bottom: 0px;
      color: rgba(47, 47, 162, 1);
      font-weight: normal;
      font-size: 2rem;
      line-height: 120%;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem !important;
      }
    }

    p.description {
      margin: 10px 10px 10px 0;
      color: rgba(47, 47, 162, 1);
    }


    p.publisher--expanded {
      font-size: 1rem;
      color: rgba(47, 47, 162, 0.5);
    }

    span.expand {
      color: rgba(47, 47, 162, 0.5);
      font-size: 16px;
      width: fit-content;
      margin-bottom: 5px;
    }
  }
}
</style>
