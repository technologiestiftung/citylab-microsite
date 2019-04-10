<template>
    <section class="section is-medium tiles">
        <div class="container">
            <div class="tile is-ancestor">

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
    name: 'Tiles',
    props: ['lang', 'content']
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";
    .tiles {
        background: $color-primary--lightest;
    }

    p.subtitle {
        font-size: $size-4;
        color: $color-primary;
    }
</style>


