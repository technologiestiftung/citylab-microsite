<template>
    <section id="missionstatement" class="section is-medium mission-statement">
        <div class="container">
            <h1 class="title">{{ content[lang]['missionStatement']['title'] }}</h1>
            <h2 class="subtitle" v-html="`${content[lang]['missionStatement']['subtitle']}`"></h2>
            <a class="button is-color-secondary is-normal">{{ content[lang]['missionStatement']['cta'] }}</a>

            <div class="tile is-ancestor m-t-2">

                    <div class="tile is-parent">
                        <article class="tile is-child statement">
                            <figure class="image"><img :src="`${content[lang]['missionStatement']['statement1-img_url']}`"></figure>
                            <p class="subtitle">{{ content[lang]['missionStatement']['statement1-title'] }}</p>
                            <div class="content">{{ content[lang]['missionStatement']['statement1-text'] }}</div>
                        </article>
                    </div>
                    
                    <div class="tile is-parent">
                        <article class="tile is-child statement">
                            <figure class="image"><img :src="`${content[lang]['missionStatement']['statement2-img_url']}`"></figure>
                            <p class="subtitle">{{ content[lang]['missionStatement']['statement2-title'] }}</p>
                            <div class="content">{{ content[lang]['missionStatement']['statement2-text'] }}</div>
                        </article>
                    </div>

                    <div class="tile is-parent">
                        <article class="tile is-child statement">
                            <figure class="image"><img :src="`${content[lang]['missionStatement']['statement3-img_url']}`"></figure>
                            <p class="subtitle">{{ content[lang]['missionStatement']['statement3-title'] }}</p>
                            <div class="content">{{ content[lang]['missionStatement']['statement3-text'] }}</div>
                        </article>
                    </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Missionstatement',
        props: ['lang', 'content']
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";

    h1.title {
        color: $color-secondary;
    }


    h2.subtitle {
        color: $color-tertiary;
        margin-top: 0px !important;
        font-size: $size-4;
        line-height: $size-3;
    }

    .m-t-2 {
        margin-top: 3rem !important;
    }

    .statement {
        figure {
            margin-bottom: $spacing-s;

            img {
                max-width: 300px;
                margin: 0 auto;
            }
        }
        .intro {
            font-size: $size-3;
            line-height: $size-2;
            color: $color-tertiary;
        }

        .subtitle {
            font-size: $size-4;
            color: $color-primary;
            font-weight: bold;
            text-align: center;
            position: relative;
            margin-bottom: 20px;

            &::before {
                content: "";
                position: absolute;
                left: 46%;
                bottom: 0;
                top: $spacing-l;
                height: 1px;
                width: 8%;
                border-bottom: 1px solid $color-primary;
            }
        }

        .content {
            margin: 0 auto;
            color: $color-tertiary;
            text-align: center;
            max-width: 300px;
        }
    }
</style>


