<template>
        <section id="team" class="section team is-medium">
            <div class="container">
                <h2 class="title">{{this.content[this.lang].projects.title}}</h2>

                <div class="tile wrap team-wrapper">
                        <div v-if="i < 3" class="tile third" v-for="(project,i) in data">
                            <a :href="`./${directProject}/${project.dirname}`">
                                <article>
                                    <figure class="image is 1by1">
                                        <img class="project-img" :src="`images/projects/${project.defaultImg == 'TRUE' ? `default` : project.imgname}_tile.jpg`">
                                    </figure>
                                    <div class="wrapper-details">
                                        <p class="name">{{ project.name }}</p>
                                        <p class="title">{{ project.subline }}</p>
                                    </div>
                                </article>
                            </a>    
                        </div>
                </div>

                <nuxt-link style="margin-top: 30px;" class="button is-color-secondary  is-normal" :to="directAllProjects">
                    {{ lang ==  'de' ? 'Alle Projekte' : 'All projects' }}
                </nuxt-link>

            </div>

        </section>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Projects',
        props: ['content', 'lang', 'direct'],
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
                entries: null,
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
            axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/${this.sheetId}/public/values?alt=json`)
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
                    this.data.push(obj);
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


