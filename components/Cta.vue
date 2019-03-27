<template>
    <section class="section cta">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['cta']['title'] }}
            </h2>
            <h2 class="subtitle">
                {{ content[lang]['cta']['subtitle'] }}
            </h2>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['lang', 'content', 'direct'],
    }
</script>

<style lang="scss">

</style>


