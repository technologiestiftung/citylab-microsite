<template>
    <section class="section">
        <div class="wrapper-mobile is-medium">
            <h2 v-html="contentTeaser['title']" class="title"></h2>
        </div>

        <div class="preview container" :id="`preview-${id}`" >
            <div class="wrapper">
                <h2 class="title" v-html="contentTeaser['title']"></h2>
                <h2 class="subtitle">
                    {{ contentTeaser['description'] }}
                </h2>

                <Button :label="contentTeaser['btn']" :direct="contentTeaser['direct']"/>
            </div>
            <img :src="contentTeaser['imgUrl']"/>
        </div>

        <div class="wrapper-mobile is-medium">
            <h2 class="subtitle">
                {{ contentTeaser['description'] }}
            </h2>

            <Button :label="contentTeaser['btn']" :direct="contentTeaser['direct']"/>
        </div>
    </section>
</template>

<script>
    import Button from './Button';
    export default {
        props: {
          lang: String,
          content: Object,
          direct: String,
          topic: String,
          subtopic: String,
          id: String
        },
        components: {
            Button
        },
        name: 'Teaser',
        computed: {
            contentTeaser: function() { return this.content[this.lang][this.topic][this.subtopic] },
        },
        methods: {
            adjustHeight() {
                const elm = document.getElementById(`preview-${this.id}`);
                const height = (elm.offsetWidth / 100) * 56.9;
                elm.style.height = `${height}px`;
            },

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
    @import "../assets/style/style.scss";
    .section {
        padding: 3.5rem 0rem;
    }

    .container {
        animation: sweep .5s ease-in-out;

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
                padding: .75rem 1.25rem 1.5rem 1.25rem;

                grid-column: 3 / 8;
                grid-row: 2;

                align-self: center;
                justify-self: center;

                z-index: 1;

                h2.title {
                  color: $color-secondary;
                }

                h2.subtitle {
                  margin-top: 1rem;
                  margin-bottom: .5rem !important;
                }

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

        h2.title {
          color: $color-secondary;
        }

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


