<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />

    <section class="section is-medium schedule">
      <div class="container">
        <h2
          class="subtitle"
          style="margin-top: 100px !important;"
          v-html="this.content[this.lang].exhibition.subtitleAbout"
        />

        <h1 style="margin-top: 100px;" class="title">
          {{ this.content[this.lang].exhibition.link }}
        </h1>

        <div class="tile wrap exhibit-wrapper">
          <div
            v-for="(exhibit, exhibitIndex) in data"
            v-if="exhibit.date.length < 2 && exhibit.visible == 'TRUE'"
            :id="`tile-${exhibitIndex}`"
            class="tile-wrapper"
            @click="toggleExpandClass(exhibitIndex)"
          >
            <div class="wrapper-details">
              <div>
                <p class="name">
                  {{ exhibit.name }}
                </p>

                <div class="flex-row--expanded">
                  <div
                    v-for="(link, index) in exhibit.link"
                    class="link-wrapper"
                  >
                    <a
                      v-if="link.length > 0"
                      class="publisher--expanded"
                      :href="link"
                      target="_blank"
                      >{{ exhibit.publisher[index] }}</a
                    >
                    <p v-if="link.length == 0" class="publisher--expanded">
                      {{ exhibit.publisher[index] }}
                    </p>
                  </div>
                </div>

                <p class="description" v-html="exhibit.description" />
              </div>

              <span class="expand">
                <span v-if="exhibit.date.length > 1">{{
                  content[lang].exhibition.from
                }}</span>
                <span v-if="exhibit.date.length < 2">{{
                  content[lang].exhibition.since
                }}</span>
                {{ exhibit.date[0] }}
                <span v-if="exhibit.date.length > 1">
                  - {{ exhibit.date[1] }}
                </span>
              </span>

              <div :id="`more-${exhibitIndex}`" class="more-info-wrapper">
                <svg
                  width="10px"
                  height="16px"
                  viewBox="0 0 14 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Artboard-Copy-7"
                      transform="translate(-411.000000, -1935.000000)"
                      stroke="#2E2FA2"
                      stroke-width="4"
                    >
                      <polyline
                        id="Path-Copy-2"
                        transform="translate(417.000000, 1945.500000) rotate(-270.000000) translate(-417.000000, -1945.500000) "
                        points="408 1950 416.807988 1941 426 1950"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <figure class="image is 1by1">
              <img
                class="exhibit-img"
                :src="`../images/exhibits/${exhibit.imgName}`"
              />
              />
            </figure>
          </div>
        </div>

        <h1 style="margin-top: 75px;" class="title">
          {{ this.content[this.lang].exhibition.pastExhibits }}
        </h1>

        <div class="tile wrap exhibit-wrapper">
          <div
            v-for="(exhibit, exhibitIndex) in data"
            v-if="exhibit.date.length == 2 && exhibit.visible == 'TRUE'"
            :id="`tile-${exhibitIndex}`"
            class="tile-wrapper"
            @click="toggleExpandClass(exhibitIndex)"
          >
            <div class="wrapper-details">
              <div>
                <p class="name">
                  {{ exhibit.name }}
                </p>

                <div class="flex-row--expanded">
                  <div
                    v-for="(link, index) in exhibit.link"
                    class="link-wrapper"
                  >
                    <a
                      v-if="link.length > 0"
                      class="publisher--expanded"
                      :href="link"
                      target="_blank"
                      >{{ exhibit.publisher[index] }}</a
                    >
                    <p v-if="link.length == 0" class="publisher--expanded">
                      {{ exhibit.publisher[index] }}
                    </p>
                  </div>
                </div>

                <p class="description">
                  {{ exhibit.description }}
                </p>
              </div>
              <span class="expand">
                <span v-if="exhibit.date.length > 1">{{
                  content[lang].exhibition.from
                }}</span>
                <span v-if="exhibit.date.length < 2">{{
                  content[lang].exhibition.since
                }}</span>
                {{ exhibit.date[0] }}
                <span v-if="exhibit.date.length > 1">
                  - {{ exhibit.date[1] }}
                </span>
              </span>

              <div :id="`more-${exhibitIndex}`" class="more-info-wrapper">
                <svg
                  width="10px"
                  height="16px"
                  viewBox="0 0 14 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Artboard-Copy-7"
                      transform="translate(-411.000000, -1935.000000)"
                      stroke="#2E2FA2"
                      stroke-width="4"
                    >
                      <polyline
                        id="Path-Copy-2"
                        transform="translate(417.000000, 1945.500000) rotate(-270.000000) translate(-417.000000, -1945.500000) "
                        points="408 1950 416.807988 1941 426 1950"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <figure class="image is 1by1">
              <img
                class="exhibit-img"
                :src="`../images/exhibits/${exhibit.imgName}`"
              />
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <Footer :lang="lang" :content="content" />
    <Matomo />
  </div>
</template>

<script>
  import axios from 'axios';
  import { content } from '../assets/content.js';

  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import Matomo from '../components/Matomo.vue';

  export default {
    components: {
      Navigation,
      Footer,
      Matomo,
    },
    data() {
      return {
        lang: 'en',
        content: content,
        entries: null,
        direct: '/all_exhibits',
        data: [],
        directs: {
          de: {
            all: '/all_exhibits',
            exhibits: 'exhibits',
            sheetId: 4,
          },
          en: {
            all: '/all_exhibits_en',
            exhibits: 'exhibits_en',
            sheetId: 5,
          },
        },
      };
    },
    computed: {
      teamArr() {
        return this.content[this.lang]['team']['member'];
      },
      imageUrl() {
        return `images/projects/${this.dirname}_tile.jpg`;
      },
      directAllProjects() {
        return this.directs[this.lang]['all'];
      },
      sheetId() {
        return this.directs[this.lang]['sheetId'];
      },
      since() {
        const content =
          this.lang == 'de' ? 'Ausgestellt seit:' : 'Exhibited since:';
        return content;
      },
    },
    created() {
      axios
        .get(
          `https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/5/public/values?alt=json`
        )
        .then((res) => {
          let entries = res.data.feed.entry;
          this.entries = entries;

          entries.forEach((entry) => {
            let obj = {
              visible: entry.gsx$visible.$t,
              name: entry.gsx$exhibitname.$t,
              description: entry.gsx$exhibitdescription.$t,
              imgName: entry.gsx$imgname.$t,
              publisher: entry.gsx$exhibitpublisher.$t.split(','),
              link: entry.gsx$publisherlink.$t.split(','),
              date: entry.gsx$date.$t.split(','),
              // dirname: this.lang == 'de' ? entry.gsx$dirname.$t : `${entry.gsx$dirname.$t}_en`,
              // imgname: entry.gsx$dirname.$t,
              // defaultImg: entry.gsx$defaultimg.$t
            };

            if (entry.gsx$exhibitname.$t.length > 0) {
              this.data.push(obj);
            }
          });
        })
        .catch((err) => {
          console.error(err, 'all_exhibits_en.vue');
        });
    },
    methods: {
      toggleExpandClass(id) {
        const elm = document.getElementById(`tile-${id}`);
        elm.classList.toggle('expanded');
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import '../assets/style/style.scss';

  .wrap {
    flex-wrap: wrap;
  }

  .subtitle {
    font-size: 24px;
    color: $color-primary;
  }

  figure {
    position: relative;
    width: 30%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  a > article {
    background: $color-primary--lightest;
    overflow: auto;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: $color-primary--light;
      transition: all 0.25s ease-in-out;
    }
  }

  .tile-wrapper {
    margin: 15px 0 15px 0;
    display: flex;
    padding-left: 20px;
    justify-content: space-between;
    flex-direction: row;
    overflow: auto;
    margin-top: 5px;
    background: rgba(47, 47, 162, 0.05);
    transition: background 0.125s ease-in-out;
    cursor: pointer;

    p.description {
      display: none;
    }

    span.expand {
      display: none;
    }

    .flex-row--expanded {
      display: block;
      margin: 10px 0 15px 0;
    }

    &.expanded {
      .flex-row--expanded {
        display: block;
        margin: 10px 0 15px 0;
      }

      a.publisher--expanded {
        border-bottom: 1px solid rgba(47, 47, 162, 0.5);
      }

      .publisher--expanded {
        pointer-events: all !important;
        transition: border-bottom 0.25s ease-in-out;
      }

      .more-info-wrapper {
        display: none;
      }

      p.description {
        display: block;
      }

      span.expand {
        display: block;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 0;
      flex-direction: column-reverse;
    }

    .more-info-wrapper {
      position: relative;
      margin: 20px 0 24px 0;

      svg {
        transition: all 0.125s ease-in-out;
        position: absolute;
        opacity: 0.5;
      }
    }

    &:hover {
      background: rgba(47, 47, 162, 0.1);
      transition: background 0.125s ease-in-out;

      .more-info-wrapper {
        margin: 20px 0 24px 0;

        svg {
          transform: translateX(5px);
          transition: all 0.125s ease-in-out;
          opacity: 1;
        }
      }
    }
  }

  .link-wrapper {
    &:first-of-type {
      margin-top: 5px;
    }

    &:last-of-type {
      margin-bottom: 10px;
    }

    margin-bottom: 5px;
    height: 23px;
    display: flex;
    align-items: flex-end;
  }

  .exhibit-wrapper {
    display: flex !important;
    flex-direction: column;
  }

  .exhibit-img {
    width: 100px;
  }

  .flex-row {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 680px) {
      flex-direction: column;
    }

    a {
      margin-right: 10px;
    }
  }

  .content-block {
    font-size: $size-6;
    width: 33%;
    margin-top: 20px;

    a {
      color: white;
      opacity: 0.5;
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
      opacity: 0.5;
      font-size: 16px;
    }
  }

  .name {
    line-height: 120%;
    color: $color-primary;
  }

  .title {
    color: $color-secondary;
  }

  .tile {
    align-items: stretch;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;

    .wrapper-details {
      margin: 15px 0 15px 0;
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .description {
        display: none;
        &.expanded {
          display: block;
          color: rgba(47, 47, 162, 1);
        }

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

      a.publisher {
        color: rgba(47, 47, 162, 0.5);
        font-size: 1rem;

        &--expanded {
          cursor: pointer;
          color: rgba(47, 47, 162, 0.5);
          font-size: 1rem;

          &:hover {
            color: rgba(47, 47, 162, 1);
          }
        }
      }

      a.publisher--expanded {
        pointer-events: none;
        transition: border-bottom 0.25s ease-in-out;

        &:hover {
          border-bottom: 1px solid rgba(47, 47, 162, 1);
        }
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

    &.third {
      padding: 10px;
      flex: 0 0 100% !important;

      @include mobile {
        flex: 0 0 100% !important;
      }

      @include tablet {
        flex: 0 0 50% !important;
      }

      @include desktop {
        flex: 0 0 33% !important;
      }
    }
  }
</style>
