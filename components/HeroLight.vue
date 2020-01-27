<template>
    <section ref="hero" :style="{ backgroundImage: `url(${image})`}"  class="hero is-color-primary">
        <section class="hero-content section is-medium">
            <h1 style="width: 100%;" class="title">{{ title }}</h1>
            <h2 style="width: 100%;" class="title" v-if="subTitle">{{ subTitle }}</h2>
            <h3 style="width: 100%;" class="title" v-if="subSubTitle" v-html="subSubTitle"></h3>
        </section>
    </section>
</template>

<script>
    export default {
        components: {
            // Three
        },
        name: 'Hero',
        computed: {
        },
        props: ['image', 'title', 'subTitle', 'subSubTitle'],
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
            
            h1.title, h2.title, h3.title {
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

            h1.title{
              font-family: 'National ExtraBold';
            }

            h2.title {
              font-size: 2rem !important;
              padding-bottom:40px;
            }
            
            h3.title {
              font-size: $size-1*0.5 !important;
              @include mobile {
                  font-size: $size-3*0.5 !important;
                  width: 100%;
              }

              @include tablet {
                  font-size: $size-1*0.5 !important;
              }

              @include desktop {
                  font-size: $size-1*0.5 !important;
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


