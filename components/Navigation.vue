<template>

    <nav class="navbar is-fixed-top is-medium" role="navigation" aria-label="main navigation">

            <div class="navbar-brand">
                <a class="navbar-item" :href="directHome">
                    
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
                    <a href="#missionstatement" class="navbar-item">
                        {{ content[lang]['nav']['menu1'] }}
                    </a>

                    <a href="#projects" class="navbar-item">
                        {{ content[lang]['nav']['menu2'] }}
                    </a>

                    <a href="#team" class="navbar-item">
                        {{ content[lang]['nav']['menu3'] }}
                    </a>

                    <nuxt-link class="navbar-item" :to="direct">Language: {{ lang }}</nuxt-link>

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
                showNav: false,
            }
        },
        props: ['lang', 'content', 'direct'],
        computed: {
            directHome() {
                return this.lang == 'en' ? '/index_en' : '/';
            }
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";
  
    .navbar {
        padding: 0 4rem;
        background: $white-ter;
        // margin: 0;

        &-brand {
            margin: 0;
            align-content: flex-start;
            .navbar-item {
                background-image: url('~assets/citylab_logo.svg');
                background-position: left center;
                width: 110px;
                height: 43px;
            }
        }

        &-end {
            .navbar-item {
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: bold;
                font-size: $size-7;
            }
        }

        .container {
            display: flex;
            justify-content: space-between;
        }

        &-first, &-second {
            display: flex;
            flex-direction: row;
        }

    }
</style>


