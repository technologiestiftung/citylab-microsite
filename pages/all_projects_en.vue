<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>

        <section class="section is-medium schedule">
            <div class="container">
                <h1 style="margin-top: 100px" class="title">{{this.content[this.lang].projects.titleAll}}</h1>

                <div class="tile wrap team-wrapper">
                        <div class="tile third" v-for="project in data" v-if="project.visible == 'TRUE'">
                            <a :href="`/${directProject}/${project.dirname}`">
                                <article>
                                    <figure class="image is 1by1">
                                        <img class="project-img" :src="`https://www.citylab-berlin.org/images/projects/${project.defaultImg == 'TRUE' ? `default` : project.imgname}_tile.jpg`">
                                    </figure>
                                    <div class="wrapper-details">
                                        <p class="name">{{ project.name }}</p>
                                        <p class="title">{{ project.subline }}</p>
                                    </div>
                                </article>
                            </a>    
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
            directProject() {
                return this.directs[this.lang]['projects'];
            },
            sheetId() {
                return this.directs[this.lang]['sheetId'];
            },
        },
		data() {
			return {
				lang: 'en',
                content: content,
                entries: null,
                direct: '/all_projects',
                data: [],
                directs: {
                    de: {
                        all: '/all_projects',
                        projects: 'projects',
                        sheetId: 1
                    },
                    en: {
                        all: '/all_projects_en',
                        projects: 'projects_en',
                        sheetId: 2
                    }
                }
			}
        },
        created() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;
                this.entries = entries;

                entries.forEach(entry => {
                    let obj = {
                        visible: entry.gsx$visible.$t,
                        name: entry.gsx$projectname.$t,
                        publisher: entry.gsx$publisher.$t,
                        subline: entry.gsx$projectsubline.$t,
                        dirname: this.lang == 'de' ? entry.gsx$dirname.$t : `${entry.gsx$dirname.$t}_en`,
                        imgname: entry.gsx$dirname.$t,
                        defaultImg: entry.gsx$defaultimg.$t
                    }

                    if (entry.gsx$projectname.$t.length > 0) {
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

    .team-wrapper {
        display: flex !important;
        transform: translateX(-10px);
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
            margin: 15px;
            min-height: 60px;

            p.title {
                margin-bottom: 0px;
                color: rgba(47, 47, 162, 0.5);
                font-weight: normal;
                font-size: 1rem;
                margin-bottom: 0px !important;
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


