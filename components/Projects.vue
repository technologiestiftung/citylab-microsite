<template>
        <section id="team" class="section team is-medium">
        <div class="container">
            <h2 class="title">Projects<h2/>
        </div>

</template>

<script>
    export default {
        name: 'Projects',
        props: ['content', 'lang', 'direct'],
        computed: {
            teamArr() {
                return this.content[this.lang]['team']['member']
            }
        },
    }
</script>

<style lang="scss">

</style>


