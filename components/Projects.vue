<template>
    <section class="section projects">
        <div class="container">
            <h2 class="title">
                {{ content[lang]['projects']['title'] }}
            </h2>
            <p class="subtitle">
                {{ content[lang]['projects']['subtitle'] }}
            </p>

            <div class="opencall box notification is-primary">
                <h2 class="subtitle">
                    Open Call
                </h2>

                <p class="content m-b-md">
                    {{ content[lang]['projects']['opencall'] }}
                </p>

                <a class="button is-white">Apply now</a>
            </div>
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


</style>



