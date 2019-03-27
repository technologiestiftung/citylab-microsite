<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
            <h2 class="subtitle">
                {{ content[lang]['hero']['subtitle'] }}
            </h2>
            <h1 class="title">
                {{ content[lang]['hero']['claim'] }}
            </h1>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
        computed: {
        },
        props: ['lang', 'content']
    }
</script>

<style lang="scss">
    @import "../assets/style/style.scss";
    .hero {
        height: 500px;
        background: $blue;
        margin-top: 52px;
        font-family: 'National';
        font-weight: 800;
        font-style: bold;
    }
</style>


