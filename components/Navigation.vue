<template>

    <nav id="nav" :class="`navbar is-fixed-top is-medium ${toggle}`" role="navigation" aria-label="main navigation">

        <div class="container">

            <div class="navbar-brand">
                <a style="height: 50px;" class="navbar-item" :href="directHome">


                        <svg width="37px" height="42px" viewBox="0 0 37 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-15" transform="translate(0.000000, 0.305001)" fill="#FFFFFF">
                                    <path d="M16.5624664,5.80217946 L14.3554252,7.07288734 L14.2980053,14.7989646 L6.46488034,19.3089667 L6.36048981,33.3551267 L-4.54747351e-13,29.7078439 L0.129356549,12.302407 L13.9903756,4.3219008 L16.5624664,5.80217946 Z M18.1292357,6.70387983 L20.5690796,8.10804833 L20.5644156,11.1910146 L15.8679583,13.8950481 L15.9119149,7.98050616 L18.1292357,6.70387983 Z M18.3830311,26.8771269 L15.7825584,25.3859431 L15.8544951,15.7065768 L20.5616844,12.9963643 L20.5425804,25.6244201 L18.3830311,26.8771269 Z M16.820871,27.7833014 L7.92679116,32.9425605 L8.02137017,20.2165788 L14.284542,16.6104934 L14.2126217,26.2876584 L16.820871,27.7833014 Z" id="back"></path>
                                    <path d="M14.284542,16.6104934 L14.2126217,26.2876584 L22.5775532,31.084344 L28.4433807,27.6817072 L28.4345888,33.5388052 L14.6823036,41.5158788 L7.89201355,37.6220256 L8.02137017,20.2165788 L14.284542,16.6104934 Z M15.8544951,15.7065768 L21.8821761,12.2360777 L28.4608825,16.0222266 L28.4460958,25.872978 L22.5730509,29.2798015 L15.7825584,25.3859431 L15.8544951,15.7065768 Z" id="middle"></path>
                                    <path d="M22.5730509,29.2798015 L15.7825584,25.3859431 L15.9119149,7.98050616 L29.772934,0 L36.351638,3.78614753 L36.3251388,21.3025193 L22.5730509,29.2798015 Z" id="front"></path>
                                </g>
                            </g>
                        </svg>

                    <span style="margin-left: 10px" class="logo-type">CityLAB</span>
                    <span style="margin-left: 5px" class="logo-type-italic">Berlin</span>
                </a>
            </div>
            <!-- v-bind:class="{ 'is-active' : showNav }" -->
            <div id="navbarBasicExample" class="navbar-menu" >
                <div class="navbar-end">
                    <div class="anchor-tags" v-bind:class="{ 'is-active' : !scrolled }">

                        <a v-for="item in menuArr" :href="`${item.ref}`" class="navbar-item from-tablet" :class="{ 'hide' : !anchorTags }">
                            {{ item.name }}
                        </a>
                    </div>

                    <nuxt-link class="navbar-item" :to="direct">
                        <font-awesome-icon style="font-size: 24px; margin-right: 10px" far icon="globe-europe"/>
                        <span>{{ lang }}</span>
                    </nuxt-link>

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
        props: ['lang', 'content', 'direct', 'scrolled', 'anchorTags'],
        computed: {
            directHome() {
                return this.lang == 'en' ? '/index_en' : '/';
            },
            language() {
                return this.lang == 'en' ? 'language' : 'Sprache';
            },
            toggle() {
                return this.scrolled == true ? 'scrolled' : '';
            },
            menuArr() {
                return this.content[this.lang]['nav'];
            }
        },
        methods: {
            handleScroll () {
				this.scrollFunction();
            },
            scrollFunction() {
                if (!this.scrolled) {
                    const nav = document.getElementById("nav");
    
                    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                        if (!nav.classList.contains('scrolled')) {
                            nav.classList.add("scrolled");
                        }
                    } else {
                        if (nav.classList.contains('scrolled')) {
                            nav.classList.remove("scrolled");
                        }
                    }
                }
			},
        },
        created () {
			if (process.browser) { 
				window.addEventListener('scroll', this.handleScroll);
			}
        },
        mounted() {
            this.handleScroll();
            console.log(this.anchorTags);
        },
		destroyed () {
			if (process.browser) { 
				window.removeEventListener('scroll', this.handleScroll);
			}
		}
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    nav {
        background: none !important;
        transition: background .15s ease;
    }

    .navbar-menu {
        display: block !important;
    }

    .anchor-tags.is-active {
        display: flex;
    }

    .from-tablet {
        display: none !important;

        @include tablet {
            display: flex !important;
        }
    }

    .hide {
        display: none !important;
    }

    nav.scrolled {
        background: $white !important;
        transition: background .15s ease;
        border-bottom: 1px solid $color-tertiary--lightest;

        path#front {
            fill: $color-secondary;
            transition: fill .15s ease;
        }

        path#middle {
            fill: $color-primary;
            transition: fill .15s ease;
        }

        path#back {
            fill: $color-tertiary;
            transition: fill .15s ease;
        }

        .navbar {
            &-end {
                .navbar-item {
                    color: $color-primary !important;

                    &:hover {
                        background: none;
                    }
                }
            }

            &-menu {
                color: $color-tertiary;
                box-shadow: none;
            }

            &-brand {
                .logo-type {
                    color: $color-primary !important;
                    transition: color .15s ease;
                }

                .logo-type-italic {
                    color: $color-primary !important;
                    transition: color .15s ease;
                }

                @include tablet {
                    .navbar-burger {
                        color: $color-tertiary !important;
                    }
                }
            }

            #contour-last, #contour-middle, #contour-front {
                fill: $color-tertiary;
            }


        }
    }
  
    .navbar {
        padding: 1.5rem 1.5rem;
        background: none;
        // margin: 0;

        &-menu {
            color: $color-tertiary;
            box-shadow: none;
            background: none !important;
        }

        @include desktop {
            // Sizes
            &.is-medium {
            padding: .75rem 14rem;
            }
        }

        &-brand {
            margin: 0;
            align-content: flex-start;

            .navbar-item {
                background-position: left center;
                height: 43px;
            }

            .logo-type {
                color: $white;
                font-weight: 800;
                font-style: normal;
                font-size: 24px;
                line-height: 90%;

                &-italic {
                    transform: translateY(-1px);
                    margin-left: 5px;
                    color: $white;
                    font-weight: 800;
                    font-style: italic;
                    font-size: 24px;
                }
            }

            @include tablet {
                .navbar-burger {
                    color: $white;
                }
            }
        }

        &-end {
            
            .navbar-item {
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: bold;
                font-size: $size-7;
                margin-left: 10px;
                color: $white;
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


