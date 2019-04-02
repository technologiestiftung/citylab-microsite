<template>
    <section id="team" class="section team is-medium">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['team']['title'] }}
            </h2>

            <div class="tile is-ancestor wrap fourPerRow">
                <div v-for="person in teamArr" class="tile is-parent fourth">
                    <article class="tile is-child">
                        <figure class="image is 1by1">
                            <img :src="`${person.img_url}`">
                            <div class="overlay"></div>
                        </figure>
                        <div class="wrapper-details">
                            <p class="name">{{ person.name }}</p>
                            <p class="title">{{ person.title }}</p>
                            <a class="twitter" target="_blank" :href="`https://twitter.com/${person.twitter}`">@{{person.twitter}}</a>
                            <a class="mail" :href="`mailto:${person.mail}`">{{ person.mail }}</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Team',
        props: ['content', 'lang', 'direct'],
        computed: {
            teamArr() {
                return this.content[this.lang]['team']['member']
            }
        },
        mounted() {
            console.log(this.teamArr)
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .wrap {
        flex-wrap: wrap;
    }

    figure {
        position: relative;

        .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $color-primary;
            opacity: 0.4;
            transition: opacity .5s ease;

            &:hover {
                opacity: 0.6;
                transition: opacity .5s ease;
            }
        }
    }

    .wrapper-details {
        margin-top: $spacing-s;
        display: flex;
        flex-direction: column;

        .name {
            color: $color-primary;
        }

        .title {
            color: $color-primary--medium;
            font-weight: normal;
            font-size: $size-6;
            margin-bottom: $spacing-s !important;
        }

        a.twitter, a.mail {
            color: $color-tertiary !important;
            text-decoration: underline;
        }

        .mail {
            margin-bottom: $spacing-s
        }
    }


    .tile.fourth {
        flex: 0 0 25% !important;

        @include mobile {
            flex: 0 0 33% !important;
        }
    }
</style>


