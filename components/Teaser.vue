<script>
export default {

}
</script>

<style>

</style>

<template>
    <section class="section exhibition">
        <div class="wrapper-mobile is-medium">
            <h2 class="title">
                {{ content[lang]['exhibition']['title'] }}
            </h2>
        </div>

        <div class="preview container">
            <div class="wrapper">
                <h2 class="title">
                    {{ content[lang]['exhibition']['title'] }}
                </h2>
                <h2 class="subtitle">
                    {{ content[lang]['exhibition']['subtitle'] }}
                </h2>

                <nuxt-link class="cross-link" :to="directAllExhibits">
                    {{content[lang]['exhibition']['link']}}
                </nuxt-link>
            </div>
            <img :src="content[lang]['exhibition']['imgUrl']"/>
        </div>

        <div class="wrapper-mobile is-medium">
            <h2 class="subtitle">
                {{ content[lang]['exhibition']['subtitle'] }}
            </h2>

            <nuxt-link class="cross-link" :to="directAllExhibits">
                {{content[lang]['exhibition']['link']}}
            </nuxt-link>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['lang', 'content', 'direct'],
        name: 'Teaser',
        computed: {
            directAllExhibits() {
                return this.directs[this.lang]['all'];
            }
        },
        methods: {
            adjustHeight() {
                const elm = document.querySelector('.preview');
                const height = (elm.offsetWidth / 100) * 56.9;
                elm.style.height = `${height}px`;
            },

        },
        data() {
            return {
                directs: {
                    de: {
                        all: '/all_exhibits',
                    },
                    en: {
                        all: '/all_exhibits_en',
                    }
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.adjustHeight();
            })
            window.addEventListener('resize', this.adjustHeight)
        },
    }
</script>

<style lang="scss" scoped>
    .section.exhibition {
        padding: 3.5rem 0rem;
    }

    .container {

        &.preview {
            display: grid;
            grid-template-columns: repeat(16, 1fr);
            grid-template-rows: repeat(3, 1fr);
            max-width: 1200px;

            img {
                grid-column: 1 / span 16;
                grid-row: 1 / span 3;

                width: auto;

                overflow: hidden;
            }

            div.wrapper {
                background: white;
                padding: 1rem 1.25rem 2rem 1.25rem;

                grid-column: 3 / 8;
                grid-row: 2;

                align-self: center;
                justify-self: center;

                z-index: 1;

                @media screen and (max-width: 1000px) {
                    grid-column: 2 / 9;
                }

                @media screen and (max-width: 1000px) {
                    grid-column: 3 / 9;
                }

                @media screen and (max-width: 850px) {
                    display: none;
                }
            }
        }
    }

    .preview {
        max-width: 1200px;
        height: auto;
    }

    .wrapper-mobile {
        display: none;

        @media screen and (max-width: 850px) {
            display: block;
            padding: 3.5rem 1.5rem;
        }
    }

    .cross-link {
        padding-bottom: 10px;
        font-size: 24px;
        border-bottom: 1px solid;
        color: #393A60;
        cursor: pointer;
        color: rgb(246, 76, 114);

        &:hover {
            color: rgb(243, 125, 150);
        }
    }
</style>


