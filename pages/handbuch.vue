<template>
	<div>
    <Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
    <section class="section hero is-medium">
        <div class="container">
          <div class="columns">
            <div class="column is-5 text">
              <div>
                <h1 class="title">
                  {{ this.hero['title'] }}
                </h1>
                <p>{{ this.hero['subtitle'] }}</p>
                <div class="logos tile is-ancestor">
                  <figure class="tile is-parent">
                    <img
                      :src="this.hero['logos']['citylab']['img_url']"
                      :alt="this.hero['logos']['citylab']['alt']"
                    >
                  </figure>
                  <figure class="tile is-parent">
                    <img
                      :src="this.hero['logos']['p4t']['img_url']"
                      :alt="this.hero['logos']['p4t']['alt']"
                    >
                  </figure>
                </div>
                <button
                  class="button is-color-secondary is-medium"
                  @click="scrollToDownload"
                >
                  {{ this.hero['cta'] }}
                </button>
              </div>
            </div>
            <div class="column is-7 hero-image">
              <figure>
                <img :src="this.hero['img_url']" :alt="this.hero['title']">
              </figure>
            </div>
          </div>
        </div>
    </section>
    <section class="section summary is-medium">
        <div class="container">
            <h2 class="title">
              {{ this.summary['title'] }}
            </h2>
            <div class="tile wrap is-ancestor">
              <article
                v-for="item in this.summary['list']"
                :key="item.title"
                class="tile is-6 is-child columns is-mobile"
              >
                <figure class="column is-2"><img :src="item['img_url']" :alt="item['title']"></figure>
                <div class="column">
                  <h3 class="subtitle">{{item.title}}</h3>
                  <p>{{item.description}}</p>
                </div>
              </article>
            </div>
        </div>
    </section>
    <section class="section methods is-medium">
        <div class="container">
            <h2 class="title">
              {{ this.methods['title'] }}
            </h2>
            <div class="tile wrap is-ancestor">
              <article
                v-for="item in this.methods['list']"
                :key="item.title"
                class="tile is-6 is-child columns is-mobile"
              >
                <figure class="column is-3">
                  <img :src="item['img_url']" :alt="item['title']">
                </figure>
                <div class="column">
                  <h3>{{item.title}}</h3>
                  <p>{{item.description}}</p>
                </div>
              </article>
            </div>
        </div>
    </section>
    <section class="section contributors is-medium">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <h2 class="title">
              {{ this.contributors['title'] }}
              </h2>
              <p v-html="this.contributors['description']"></p>
              <div class="container editors">
                <h3>{{ this.contributors['editors']['title'] }}</h3>
                <p>
                  <span
                    v-for="editor in this.contributors['editors']['list']"
                    :key="editor"
                  >
                  {{ editor }}
                  </span>
                </p>
              </div>
              <div class="container authors">
                <h3>{{ this.contributors['authors']['title'] }}</h3>
                <p>
                  <span
                    v-for="author in this.contributors['authors']['list']"
                    :key="author"
                  >
                  {{ author }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section ref="download" id="download" class="section is-medium">
      <div class="container">
        <div class="columns">
          <div class="column is-7">
            <h2 class="title">
              {{ this.download['title'] }}
            </h2>
            <p v-html="this.download['description']"></p>
            <a
              class="button is-color-secondary is-medium"
              :href="this.download['fullResource']" download>{{ this.download['cta'] }}</a>
            <ul>
              <li
                v-for="resource in this.download['resources']"
                :key="resource['resourceTitle']"
              >
                <a
                  :href="resource['url']"
                  :download="resource['resourceTitle']"
                >
                  {{ resource['title'] }}
                </a>
                <br>
                <span>{{ resource['description'] }}</span>
              </li>
            </ul>
          </div>
          <div class="column is-5">
            <HandbuchSubscribe :lang="lang" :content="content" />
          </div>
        </div>
      </div>
    </section>
    <Footer :lang="lang" :content="content"/>
    <Matomo />
	</div>
</template>

<script>
	import {
  		content as content
  } from '../assets/content.js';
  
  import Button from '../components/Button.vue';
  import HandbuchSubscribe from '../components/handbuch/HandbuchSubscribe.vue';
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import Matomo from '../components/Matomo.vue';

	export default {
		components: {
      Navigation,
      Footer,
      Button,
      HandbuchSubscribe,
      Matomo
    },
		data() {
			return {
				lang: 'de',
				content: content,
				direct: '/handbuch_en'
			}
    },
    head() {
      return {
        title: `${this.hero['title']} | `,
        meta: [
          { hid: 'description', name: 'description', content: `${this.hero['subtitle']} (${this.isbn})` },
          { hid: 'og:title', property: 'og:title', content: `${this.hero['title']} | CityLAB Berlin` },
          { hid: 'og:description', property: 'og:description', content: `${this.hero['subtitle']}` },
          { hid: 'og:image', property: 'og:image', content: "https://citylab-berlin.org/images/handbuch/handbuch_social_media.jpg" },
          { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
          { hid: 'og:site_name', property: 'og:site_name', content: `${this.hero['title']} | CityLAB Berlin` },
          { hid: 'twitter:image:alt', property: 'twitter:image:alt', content: `${this.hero['title']} | CityLAB Berlin` },
          { hid: 'twitter:image', property: 'twitter:image', content: "https://citylab-berlin.org/images/handbuch/handbuch_social_media.jpg" },
        ]
      }
    },
    computed: {
      isbn() { return this.content[this.lang]['innovationshandbuch']['isbn']; },
      hero() { return this.content[this.lang]['innovationshandbuch']['hero']; },
      summary() { return this.content[this.lang]['innovationshandbuch']['summary']; },
      methods() { return this.content[this.lang]['innovationshandbuch']['methods']; },
      contributors() { return this.content[this.lang]['innovationshandbuch']['contributors']; },
      download() { return this.content[this.lang]['innovationshandbuch']['download']; }
    },
    methods: {
      scrollToDownload: function() {
        const yCoord = this.$refs.download.getBoundingClientRect().top;
        
        window.scrollTo({
          top: yCoord,
          behavior: "smooth"
        });
        return false;
      }
    }
	}
</script>

<style lang="scss" scoped>
  @import "../assets/style/style.scss";

  .section:not(.hero) {
    @media screen and (min-width: $tablet) {
      padding-top: 6rem !important;
      padding-bottom: 6rem !important;
    }
  }

  .wrap {
    flex-wrap: wrap;
  }
  
  .title {
    font-size: $size-3;
    color: $color-secondary;
  }

  p {
    font-size: $size-medium;
  }

  section.hero {
    margin-top: 100px;
    .title {
      font-size: $size-1;
      color: $text;
      font-weight: $weight-bold;
    }
    p {
      font-size: $size-medium;
    }
    .hero-image {
      figure {
        margin-top: $spacing-m;
        margin-left: 0;
        @media screen and (min-width: $tablet) {
          margin-top: 0;
          margin-left: $spacing-m;
        }
      }
    }
    .logos {
      margin-top: $spacing-m;
      img {
        width: 100%;
        max-width: 180px;
      }
    }
    .text {
      display: flex;
      align-items: center;
    }
  }

  section.summary {
    background: $color-primary--lightest;
    .title, .subtitle {
      color: $text;
    }
    .subtitle {
      font-weight: $weight-bold;
    }
    article {
      >* {
        margin-top: $spacing-m;
      }
      img {
        width: auto;
        max-height: 60px;
      }
    }
  }

  section.methods {
    article {
      >* {
        margin-top: $spacing-m;
      }
      h3 {
        font-size: $size-medium;
        font-weight: $weight-bold;
      }
      figure {
        display: flex;
        align-items: center;
      }
    }
  }

  section.contributors {
    background-color: $color-primary;
    .title, p {
      color: $white;
    }
    h3 {
      font-size: $size-medium;
    }
    .editors, .authors {
      margin-top: $spacing-m;
      color: $white;
      h3 {
        font-weight: $weight-bold;
      }
      span {
        display: block;
      }
    }
  }

  section#download {
    p {
      color: $text;
    }
    a {
      margin-top: $spacing-m;
    }
    ul li {
      font-size: $size-medium;
      margin-top: $spacing-m;

      a {
        color: $color-secondary;
        text-decoration: underline;

        &:hover {
          color: $color-secondary--medium;
        }
      }
      span {
        color: $text;
      }
    }
  }
</style>