<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">

        <div class="container">

            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    CityLab Logo
                </a>

                <a 
                    role="button" 
                    class="navbar-burger burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample"
                    v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }"
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
                <div class="navbar-end">
                    <a class="navbar-item">
                        {{ content[lang]['nav']['menu1'] }}
                    </a>

                    <a class="navbar-item">
                        {{ content[lang]['nav']['menu2'] }}
                    </a>

                    <a class="navbar-item">
                        {{ content[lang]['nav']['menu3'] }}
                    </a>

                    <nuxt-link :to="direct">Language: {{ lang }}</nuxt-link>

                </div>
            </div> 
        </div>

    </nav>

</template>

<script>
    export default {
        name: 'Navigation',
        computed: {
        },
        data() {
            return {
                showNav: false
            }
        },
        props: ['lang', 'content', 'direct'],
        methods: {
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";
  
    .navbar {
        background: $white-ter;
        // margin: 0;

        .container {
            display: flex;
            justify-content: space-between;

            &-brand {
                margin: 0;
                align-content: flex-start;
    
            }
        }

        &-first, &-second {
            display: flex;
            flex-direction: row;
        }

    }
</style>


