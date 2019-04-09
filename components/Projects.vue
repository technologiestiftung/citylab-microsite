<template>
    <section id="projects" class="section projects is-medium">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['projects']['title'] }}
            </h2>

            <p class="intro content">{{ content[lang]['projects']['opencall'] }}</p>

            <a class="button is-color-secondary is-normal">{{ content[lang]['projects']['cta'] }}</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Projects',
        props: ['content', 'lang'],
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";

    .title {
        color: $color-secondary;
    }

    .intro {
        font-size: $size-4;
        line-height: $size-3;
        color: $color-tertiary;
    }
    

    .projects {
        background: $color-primary--lightest;
    }


</style>



