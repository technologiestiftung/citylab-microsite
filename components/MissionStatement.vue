<template>
    <section id="idea" class="section is-medium mission-statement">
        <div class="container">
            <h2 class="title">{{ content[lang]['missionStatement']['title'] }}</h2>
            <h2 class="subtitle" v-html="`${content[lang]['missionStatement']['subtitle']}`"></h2>
            <Button type="external" :label="content[lang]['missionStatement']['cta']" :direct="content[lang]['call']['form_url']"/>
        </div>
    </section>
</template>

<script>
    import Button from './Button';
    export default {
        name: 'MissionStatement',
        props: ['lang', 'content'],
        components: {
            Button
        }
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";

    h2.title {
        color: $color-secondary !important;
    }


    h2.subtitle {
        color: $color-primary;
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


