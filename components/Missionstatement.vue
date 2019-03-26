<template>
    <section class="section">
        <div class="container">
            <h1 class="title">{{ content[lang]['missionStatement']['title'] }}</h1>
            <h2 class="subtitle">
                {{ content[lang]['missionStatement']['subtitle'] }}
            </h2>
            <div class="tile is-ancestor">

                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="subtitle">{{ content[lang]['missionStatement']['statement1-title'] }}</p>
                            <div class="content">{{ content[lang]['missionStatement']['statement1-text'] }}</div>
                        </article>
                    </div>
                    
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="subtitle">{{ content[lang]['missionStatement']['statement2-title'] }}</p>
                            <div class="content">{{ content[lang]['missionStatement']['statement2-text'] }}</div>
                        </article>
                    </div>

                    <div class="tile is-parent">
                        <article class="tile is-child box">
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
</style>


