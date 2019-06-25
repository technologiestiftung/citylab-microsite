    <template>
        <section id="topics" class="section is-medium">
            <div class="container">
                <div id="slider">
                    <input checked="" type="radio" name="slider" id="slide1" selected="false">
                    <input type="radio" name="slider" id="slide2" selected="false">
                    <input type="radio" name="slider" id="slide3" selected="false">
                    <input type="radio" name="slider" id="slide4" selected="false">
                    <input type="radio" name="slider" id="slide5" selected="false">
                    <div id="slides">
                        <div id="overflow">
                        <div id="imgWrapper" class="inner">
                            <article v-for="item in topicsArr" class="slide">
                                <div class="content-container">
                                    <div>
                                        <h2 class="title" v-html="`${item.title}`"></h2>
                                        <p class="teaser">{{item.text}}</p>
                                    </div>
                                </div>
                                <div v-on:touchstart="handleTouch(selectCurrent)" class="image-container-topics">
                                    <div class="overlay"></div>
                                    <img :src="item.img_url" alt="item.title" />
                                </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    <div class="labels-wrapper">
                        <label for="slide1"></label>
                        <label for="slide2"></label>
                        <label for="slide3"></label>
                        <label for="slide4"></label>
                        <label for="slide5"></label>
                    </div>
                </div>
            </div>
        </section>
    </template>

    <script>
    export default {
        name: 'Topics',
        props: ['content', 'lang'],
        computed: {
            topicsArr() {
                return this.content[this.lang]['topics'];
            }
        },
        data() {
            return {
                timeoutArr: [],
                toggled: false,
                selectCurrent: 1
            }
        },
        methods: {
            loopSlides() {
                window.activeTimers = 1;
                this.clearTimeouts();

                if (!this.toggled) {
                    for (var i=1;i<=5;i++) {
                        ((ind) => {
                            const timeout = setTimeout(() => {
                                document.getElementById(`slide${ind}`).checked = true;
                                this.selectCurrent = ind; 

                                if (ind == 5) {
                                    this.loopSlides();
                                }
                            }, 6500 * ind);
                            this.timeoutArr.push(timeout); 
                        })(i);
                    }
                }
            },
            clearTimeouts() {
                this.timeoutArr.forEach(id => {
                    clearTimeout(id); // will do nothing if no timeout with id is present
                })
                this.timeoutArr.length = 0;
            },
            handleTouch(id) {
                this.toggled = true;

                document.querySelectorAll('.overlay').forEach(container => {
                    container.classList.add('toggled');
                    setTimeout(() => {
                        container.classList.remove('toggled');
                    }, 200);
                })

                if (id == 5) {
                    document.getElementById(`slide${5}`).checked = true;
                    this.selectCurrent = 1;
                } else {
                    document.getElementById(`slide${id}`).checked = true;
                    this.selectCurrent = id + 1;
                }
            }
        },
        mounted() {
            if (window.activeTimers == undefined) {
                this.loopSlides();
            }
        },
    }
    </script>

    <style lang="scss" scoped>
        @import "../assets/style/style.scss";

        .overlay {
            width: 100%;
            height: 96.5%;
            position: absolute;
            top: 0;
            left: 0;
            background: $color-primary;
            opacity: 0.0;
            transition: opacity .25s ease;

            &.toggled {
                opacity: 0.4;
                transition: opacity .25s ease;
            }
        }

        .slide {

            display: flex;
            justify-content: space-between;
            flex-direction: column;

            
        .content-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
            
        @include tablet {
            flex-direction: row;
            max-width: 900px;

            .content-container {
                width: 55%;
                margin-right: 40px;
            }

            .image-container-topics {
                width: 40%;
            }
        }
        
        .image-container-topics {
            img {
                width: 100%;
                height: 100%;
            }
            width: 100%;
            height: 100%;
            overflow: auto;
            float: left;
            position: relative;
        }
        .title {
            // font-size: $size-2;
            font-weight: normal;
            text-align: left;
            color: $color-secondary;
        }
        .teaser {
            text-align: left;
            color: $color-tertiary;
            margin-bottom: 40px;
            height: 120px;

            @include tablet {
                height: 140px;
            }

            @include tablet {
                margin-bottom: 0px;
                height: auto;
            }
        }
        
        }

        * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
        }

        #slider {
            max-width: 900px;
            text-align: center;
            margin: 0 auto;
        }

        #overflow {
            width: 100%;
            overflow: hidden;
        }

        #slides .inner {
            width: 500%;
        }

        #slides .inner {
            transform: translateZ(0);
            transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        }

        #slides article {
            width: 20%;
            float: left;
        }

        #slide1:checked ~ #slides .inner {
            margin-left: 0;
        }

        #slide2:checked ~ #slides .inner {
            margin-left: -100%;
        }

        #slide3:checked ~ #slides .inner {
            margin-left: -200%;
        }

        #slide4:checked ~ #slides .inner {
            margin-left: -300%;
        }

        #slide5:checked ~ #slides .inner {
            margin-left: -400%;
        }

        input[type="radio"] {
            display: none;
        }

        label {
            background: $color-primary--medium;
            display: inline-block;

            cursor: pointer;
            width: 10px;
            height: 10px;
            border-radius: 5px;
        }

        #slide1:checked ~ .labels-wrapper > label[for="slide1"],
        #slide2:checked ~ .labels-wrapper > label[for="slide2"],
        #slide3:checked ~ .labels-wrapper > label[for="slide3"],
        #slide4:checked ~ .labels-wrapper > label[for="slide4"],
        #slide5:checked ~ .labels-wrapper > label[for="slide5"] {
            background: $color-primary;
        }

        .labels-wrapper {
            width: 80px;
            margin: 0 auto;

            @include tablet {
                margin: 0;
            }
        }
    </style>


