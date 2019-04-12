<template>
    <section ref="hero" :style="{ backgroundImage: `url(${bgUrl})`}"  class="hero is-color-primary">
        <section class="hero-content section is-medium">
            <!-- v-html="`${content[lang]['hero']['claim']}`" -->
            <vue-typed-js 
                :strings="wordsArr" 
                :loop="true"
                :typeSpeed="100"
                :backDelay="4000"
            >
                <h1 style="width: 100%;" class="title">
                    {{ content[lang]['hero']['claim_01'] }} 
                    <span class="typing"></span> 
                    {{ content[lang]['hero']['claim_02'] }} 
                    <br class="condBreak"/>
                    {{ content[lang]['hero']['claim_03'] }}
                </h1>
            </vue-typed-js>
        </section>
        <!-- <Three :config="config" /> -->
    </section>
</template>

<script>
    import VueTypedJs from 'vue-typed-js';
    import Vue from 'vue';

    Vue.use(VueTypedJs);

    export default {
        components: {
            // Three
        },
        name: 'Hero',
        computed: {
        },
        props: ['lang', 'content'],
        data() {
            return {
                config: {},
                backgroundUrl: 'images/hero_img_03.jpg',
            }
        },
        computed: {
            wordsArr() {
                const arr = this.content[this.lang]['hero']['words_arr'];
                return arr;
            },
            bgUrl() {
                return this.lang == 'de' ? 'images/hero_img_03.jpg' : '../images/hero_img_03.jpg';
            }
        },
        methods: {
            setDimensions() {
                this.config.width = this.$refs.hero.clientWidth;
                this.config.height = this.$refs.hero.clientHeight;
            },
        },
        mounted() {
            // this.setDimensions()
        },
        updated() {
            // this.setDimensions()
        },
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";
    @import "../assets/style/vue-typed-js.scss";

    .hero {
        height: 600px;
        background: $blue;
        background-position: center;
        background-size: cover;

        &::before{
            background-color: rgba($color-primary, 0.5);
            content: '';
            display: block;
            height: 600px;
            position: absolute;
            width: 100%;
        }

        &-content {
            padding-top: 20rem !important;
            z-index: 10;
            
            h1.title {
                font-size: $size-1 !important;
                max-width: 900px;
                margin: 0 auto;

                @include mobile {
                    font-size: $size-3 !important;
                    width: 100%;
                }

                @include tablet {
                    font-size: $size-1 !important;
                }

                @include desktop {
                    font-size: $size-1 !important;
                }
            }
        }
    }

    .condBreak {
        display: none;
    }

    @include tablet {
        .condBreak {
            display: block;
        }
    }

    span.typing {
        font-style: italic;
    }
</style>


