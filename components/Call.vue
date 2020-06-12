<template>
    <section id="call" class="section call is-medium">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['call']['title'] }}
            </h2>

            <p class="intro content">{{ content[lang]['call']['opencall'] }}</p>

            <p class="intro content">{{ content[lang]['call']['bullets_intro'] }}</p>

            <ul class="content bullet-list">
                <li class="intro bullet" v-for="partner in bulletsArr" v-bind:key="partner" data-testid="call-list-items">
                    {{ partner }}
                </li>
            </ul>

            <a :href="`${content[lang]['call']['form_url']}`" class="button is-color-secondary is-normal">{{ content[lang]['call']['cta'] }}</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Call',
        props: ['content', 'lang'],
        computed: {
            bulletsArr() {
                return this.content[this.lang]['call']['bullets']
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";

    .call {
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



