<template>
        <section id="team" class="section team is-medium">
            <div class="container">
                <h2 class="title">{{this.content[this.lang].projects.title}}</h2>

                <div class="tile wrap team-wrapper">
                    <a v-for="project in data" :href="`./project/${project.dirname}`">
                        <div class="tile is-parent third">
                            <article class="tile is-child">
                                <figure class="image is 1by1">
                                    <img :src="imageUrl">
                                </figure>
                                <div class="wrapper-details">
                                    <p class="name">{{ project.name }}</p>
                                    <p class="title">{{ project.subline }}</p>
                                </div>
                            </article>
                        </div>
                    </a>
                </div>
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
                return `https://citylab-berlin.org/images/projects/${this.dirname}_tile.png`
            },
        },
        data() {
            return {
                entries: null,
                data: []
            }
        },
        created() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/od6/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;

                console.log(entries);

                this.entries = entries;

                entries.forEach(entry => {
                    let obj = {
                        visible: entry.gsx$visible.$t,
                        name: entry.gsx$projectname.$t,
                        publisher: entry.gsx$publisher.$t,
                        subline: entry.gsx$projectsubline.$t,
                        dirname: entry.gsx$dirname.$t,
                    }
                    this.data.push(obj);

                })
                console.log(this.data);
            })
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .tile.third {
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
</style>


