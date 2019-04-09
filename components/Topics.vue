    <template>
        <section id="projects" class="section is-medium">
            <div class="container">
                <div id="slider">
                    <input checked="" type="radio" name="slider" id="slide" selected="false">
                    <input type="radio" name="slider" id="slide2" selected="false">
                    <input type="radio" name="slider" id="slide3" selected="false">
                    <input type="radio" name="slider" id="slide4" selected="false">
                    <input type="radio" name="slider" id="slide5" selected="false">
                    <div id="slides">
                        <div id="overflow">
                        <div class="inner">
                            <article v-for="item in topicsArr" class="slide">
                                <div class="content-container">
                                    <div>
                                        <h2 class="title" v-html="`${item.title}`"></h2>
                                        <p class="teaser">{{item.text}}</p>
                                    </div>
                                </div>
                                <div class="image-container">
                                    <img :src="item.img_url" alt="item.title" />
                                </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    <div class="labels-wrapper">
                        <label for="slide"></label>
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
    }
    </script>

    <style lang="scss" scoped>
        @import "../assets/style/style.scss";

        .slide {

            .content-container {
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

        display: flex;
        justify-content: space-between;
        
        .image-container {
            img {
                width: 100%;
                // height: auto;
            }
            width: 55%;
            float: left;
            margin-right: 15px;
        }
        .title {
            font-size: $size-2;
            font-weight: normal;
            text-align: left;
            color: $color-secondary;
        }
        .teaser {
            text-align: left;
            color: $color-tertiary;
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

        #slide:checked ~ .labels-wrapper > label[for="slide"],
        #slide2:checked ~ .labels-wrapper > label[for="slide2"],
        #slide3:checked ~ .labels-wrapper > label[for="slide3"],
        #slide4:checked ~ .labels-wrapper > label[for="slide4"],
        #slide5:checked ~ .labels-wrapper > label[for="slide5"] {
            background: $color-primary;
        }

        .labels-wrapper {
            width: 80px;
        }
    </style>


