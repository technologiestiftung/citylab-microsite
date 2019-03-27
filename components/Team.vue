<template>
    <section id="team" class="section team">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['team']['title'] }}
            </h2>

            <div class="tile is-ancestor wrap fourPerRow">
                <div v-for="person in teamArr" class="tile is-parent fourth">
                    <article class="tile is-child box">
                        <figure class="image is 1by1">
                            <img :src="`${person.img_url}`">
                        </figure>
                        <p>{{ person.name }}</p>
                        <p>{{ person.title }}</p>
                        <p>{{ person.twitter }}</p>
                        <p>{{ person.mail }}</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Team',
        props: ['content', 'lang', 'direct'],
        computed: {
            teamArr() {
                return this.content[this.lang]['team']['member']
            }
        },
        mounted() {
            console.log(this.teamArr)
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .wrap {
        flex-wrap: wrap;
    }

    .tile.fourth {
        flex: 0 0 25% !important;

        @include mobile {
            flex: 0 0 33% !important;
        }
    }
</style>


