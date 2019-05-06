<template>
    <section id="call" class="section projects is-medium">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['projects']['title'] }}
            </h2>

            <p class="intro content">{{ content[lang]['projects']['opencall'] }}</p>

            <p class="intro content">{{ content[lang]['projects']['bullets_intro'] }}</p>

            <ul class="content bullet-list">
                <li class="intro bullet" v-for="partner in bulletsArr">
                    {{ partner }}
                </li>
            </ul>

            <a :href="`${content[lang]['projects']['form_url']}`" class="button is-color-secondary is-normal">{{ content[lang]['projects']['cta'] }}</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Projects',
        props: ['content', 'lang'],
        computed: {
            bulletsArr() {
                return this.content[this.lang]['projects']['bullets']
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";

    .projects {
        background: $color-primary--lightest;

        ul.content {
            list-style-type: disc;
            list-style-position: inside;
            padding-left: 0px;

            li.intro {
                margin-top: .75rem;
            }
        }

        .title {
            color: $color-secondary;
        }

        .bullet-list {
            margin-bottom: 2.5rem !important;
        }

        .intro {
            font-size: $size-4;
            line-height: $size-3;
            color: $color-tertiary;
        }

        .projects {
            background: $color-primary--lightest;
        }
    }


</style>



