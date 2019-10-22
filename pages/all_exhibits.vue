<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>

        <section class="section is-medium schedule">
            <div class="container">
                <h1 style="margin-top: 100px" class="title">{{this.content[this.lang].exhibition.link}}</h1>

                <h2 class="subtitle">
					{{this.content[this.lang].exhibition.subtitleAbout}}
				</h2>

                <div class="tile wrap exhibit-wrapper">
                        <div class="tile-wrapper" :id="`tile-${exhibitIndex}`" @click="toggleExpandClass(exhibitIndex)" v-if="exhibit.date.length < 2" v-for="(exhibit, exhibitIndex) in data">
                            <div class="wrapper-details">
                                <div>
                                    <p class="name">{{ exhibit.name }}</p>

                                    <div class="flex-row--expanded">
                                        <div class="link-wrapper" v-for="(link, index) in exhibit.link">
                                            <a v-if="link.length > 0" class="publisher--expanded" :href="link">{{ exhibit.publisher[index] }}</a>
                                            <p v-if="link.length == 0" class="publisher--expanded">{{ exhibit.publisher[index] }}</p>
                                        </div>
                                    </div>

                                    <p class="description">{{ exhibit.description }}</p>
                                </div>
                                <span class="expand">
                                    {{ since }} 
                                    {{exhibit.date[0]}}  
                                    <span v-if="exhibit.date.length > 1">
                                        - {{exhibit.date[1]}}
                                    </span>
                                </span>
                            </div>
                            <figure class="image is 1by1">
                                <img class="exhibit-img" :src="`../images/exhibits/${exhibit.imgName}`">
                            </figure>
                        </div>
                </div>

                <h1 style="margin-top: 50px" class="title">{{this.content[this.lang].exhibition.pastExhibits}}</h1>

                <div class="tile wrap exhibit-wrapper">
                        <div class="tile-wrapper" :id="`tile-${exhibitIndex}`" @click="toggleExpandClass(exhibitIndex)" v-if="exhibit.date.length == 2" v-for="(exhibit, exhibitIndex) in data">
                            <div class="wrapper-details">
                                <div>
                                    <p class="name">{{ exhibit.name }}</p>

                                    <div class="flex-row--expanded">
                                        <div class="link-wrapper" v-for="(link, index) in exhibit.link">
                                            <a v-if="link.length > 0" class="publisher--expanded" :href="link">{{ exhibit.publisher[index] }}</a>
                                            <p v-if="link.length == 0" class="publisher--expanded">{{ exhibit.publisher[index] }}</p>
                                        </div>
                                    </div>

                                    <p class="description">{{ exhibit.description }}</p>
                                </div>
                                <span class="expand">
                                    {{ since }} 
                                    {{exhibit.date[0]}}  
                                    <span v-if="exhibit.date.length > 1">
                                        - {{exhibit.date[1]}}
                                    </span>
                                </span>
                            </div>
                            <figure class="image is 1by1">
                                <img class="exhibit-img" :src="`../images/exhibits/${exhibit.imgName}`">
                            </figure>
                        </div>
                </div>
            </div>
        </section>

		<Footer :lang="lang" :content="content"/>
		<Matomo/>
    </div>
</template>

<script>
    import axios from 'axios';
	import {
  		content as content
	} from '../assets/content.js';

    import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Matomo from '../components/Matomo.vue';

    export default {
        components: {
			Navigation,
			Footer,
			Matomo
        },
        computed: {
            teamArr() {
                return this.content[this.lang]['team']['member']
            },
            imageUrl() {
                return `images/projects/${this.dirname}_tile.jpg`
            },
            directAllProjects() {
                return this.directs[this.lang]['all'];
            },
            sheetId() {
                return this.directs[this.lang]['sheetId'];
            },
            since() {
                const content = this.lang == 'de' ? 'Ausgestellt seit:' : 'Exhibited since:'
                return content;
            }
        },
		data() {
			return {
				lang: 'de',
                content: content,
                entries: null,
                direct: '/all_exhibits_en',
                data: [],
                directs: {
                    de: {
                        all: '/all_exhibits',
                        projects: 'projects',
                        sheetId: 4
                    },
                    en: {
                        all: '/all_exhibits_en',
                        exhibits: 'projects_en',
                        sheetId: 5
                    }
                }
			}
        },
        methods: {
            toggleExpandClass(id) {
                const elm = document.getElementById(`tile-${id}`)
                elm.classList.toggle('expanded')
            }
        },
        created() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/4/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;
                this.entries = entries;

                entries.forEach(entry => {
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
                    }

                    if (entry.gsx$exhibitname.$t.length > 0) {
                        this.data.push(obj);
                    }
                })
            })      
        }
    }
</script>

<style lang="scss" scoped>

    @import "../assets/style/style.scss";

    .wrap {
        flex-wrap: wrap;
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
        transition: all .25s ease-in-out;

        &:hover {
            background: $color-primary--light;
            transition: all .25s ease-in-out;
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
        transition: background .125s ease-in-out;
        cursor: pointer;

        p.description {
            display: none;
        }

        span.expand {
            display: none
        }

        &.expanded {
            .flex-row--expanded {
                display: block;
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

        &:hover {
            background: rgba(47, 47, 162, 0.1);
            transition: background .125s ease-in-out;
        }
    }

    .link-wrapper {

        &:first-of-type {
            margin-top: 5px;
        }
        
        margin-bottom: 5px;
        height: 30px;
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
            margin: 15px 0 0 0;
            padding-bottom: 15px;
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

            .publisher {
                color: rgba(47, 47, 162, .5);
                font-size: 1rem;

                &--expanded {
                    cursor: pointer;
                    color: rgba(47, 47, 162, .5);
                    font-size: 1rem;

                    &:hover {
                        color: rgba(47, 47, 162, 1)
                    }
                }

            }

            a.publisher--expanded {
                border-bottom: 1px solid rgba(47, 47, 162, .5);
                padding-bottom: 3px;

                &:hover {
                    border-bottom: 1px solid rgba(47, 47, 162, 1);
                }
            }

            span.expand {
                color: rgba(47, 47, 162, .5);
                font-size: 16px;
                width: fit-content;

            }
        }

        &.third {

            padding: 10px;
            flex: 0 0 100% !important;

            @include mobile {
                flex: 0 0 50% !important;
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


