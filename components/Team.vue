<template>
    <section class="section">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['team']['title'] }}
            </h2>

            <div class="tile is-ancestor">
                <div v-for="person in teamArr" class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image is 1by1">
                            <img :src="`${person.img_url}`">
                        </figure>
                        <p>{{ person.name }}</p>
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

<style>

</style>


