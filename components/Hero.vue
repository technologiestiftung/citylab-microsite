<template>
    <section ref="hero" :style="{ backgroundImage: `url(${backgroundUrl})`}"  class="hero is-color-primary">
        <section class="hero-content section is-medium">
            <h1 class="title" v-html="`${content[lang]['hero']['claim']}`"></h1>
        </section>
        <Three :config="config" />
    </section>
</template>

<script>
	import Three from '../components/Three.vue';
    export default {
        components: {
            Three
        },
        name: 'Hero',
        computed: {
        },
        props: ['lang', 'content'],
        data() {
            return {
                config: {},
                backgroundUrl: 'images/hero_img.jpg',
            }
        },
        methods: {
            setDimensions() {
                this.config.width = this.$refs.hero.clientWidth;
                this.config.height = this.$refs.hero.clientHeight;

                console.log('updated', this.config);
            }
        },
        mounted() {
            this.setDimensions()
        },
        updated() {
            this.setDimensions()
        },
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";
    .hero {
        height: 600px;
        background: $blue;
        background-position: center;
        background-size: cover;

        &::before{
            background-color: rgba($color-tertiary, 0.5);
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
                width: 70%;
                max-width: 900px;
                margin: 0 auto;

                @include mobile {
                    font-size: $size-3 !important;
                    width: 100%;
                }

                @include tablet {
                    font-size: $size-2 !important;
                }

                @include desktop {
                    font-size: $size-2 !important;
                }
            }
        }
    }
</style>


