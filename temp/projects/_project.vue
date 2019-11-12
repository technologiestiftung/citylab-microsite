<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" :languageVisible="true" />
        <HeroLight 
            :image="heroImageUrl" 
            :title="title" 
            :subTitle="subtitle" 
            :subSubTitle="subsubtitle" 
        />
        <section class="section is-medium event-content">
            <div class="container">
                <div v-if="summaryAvailable.introHeadline > 0 || summaryAvailable.introContent > 0" class="content-wrapper">
                    <h4 v-if="summaryAvailable.introHeadline > 0" class="title">{{headlineIntro}}</h4>
                    <p v-html="contentIntro" v-if="summaryAvailable.introContent > 0" class="event-intro"></p>
                </div>

                <div  v-if="summaryAvailable.blockOneContent > 0 || summaryAvailable.BlockOneHeadline > 0" class="content-wrapper">
                    <h4 v-if="summaryAvailable.blockOneHeadline > 0" class="title">{{headlineBlockOne}}</h4>
                    <p v-html="contentBlockOne" v-if="summaryAvailable.blockOneContent > 0" class="event-intro"></p>
                </div>

                <div v-if="summaryAvailable.blockTwoContent > 0 || summaryAvailable.BlockTwoHeadline > 0" class="content-wrapper">
                    <h4 v-if="summaryAvailable.blockTwoHeadline > 0" class="title">{{headlineBlockTwo}}</h4>
                    <p v-html="contentBlockTwo" v-if="summaryAvailable.blockTwoContent > 0" class="event-intro"></p>
                </div>

                <div v-if="summaryAvailable.blockThreeContent > 0 || summaryAvailable.BlockThreeHeadline > 0" class="content-wrapper">
                    <h4 v-if="summaryAvailable.blockThreeHeadline > 0" class="title">{{headlineBlockThree}}</h4>
                    <p v-html="contentBlockThree" v-if="summaryAvailable.blockThreeContent > 0" class="event-intro"></p>
                </div>

                <div v-if="summaryAvailable.blockFourContent > 0 || summaryAvailable.BlockFourHeadline > 0" class="content-wrapper">
                    <h4 v-if="summaryAvailable.blockFourHeadline > 0" class="title">{{headlineBlockFour}}</h4>
                    <p v-html="contentBlockFour" v-if="summaryAvailable.blockFourContent > 0" class="event-intro"></p>
                </div>

                <div class="logo-wrapper">
                    <a :href="logo[1]" v-for="logo in logos">
                        <img class="logo" v-if="logo[0] != 'FALSE'" :src="logo[0]"/>
                        <span v-if="logo[0] == 'FALSE'" target="_blank" class="button is-color-secondary is-normal">Link</span>
                    </a>
                </div>

            </div>
        </section>
        <Footer :lang="lang" :content="getContent"/> 
    </div>
</template>

<script>
    import Navigation from '../../components/Navigation.vue';
    import HeroLight from '../../components/HeroLight.vue';
    import Footer from '../../components/Footer.vue';
    import axios from 'axios';

	import { 
  		content as content
    } from '../../assets/content.js'

    export default {
        validate({ params, query, store }) {
                return true // if the params are valid
                return false // will stop Nuxt.js to render the route and display the error page
        },
        async asyncData ({ params, error, payload }) {
            return { 
                dirname: params.project,
                lang: 'de',
                content: content,
                direct: `/projects_en/${params.project}`,
                data: null,
                summaryAvailable: {
                    website: 0,
                    phone: 0,
                    organiser: 0,
                    address: 0,
                    date: 0,
                    mail: 0,
                    introHeadline: 0,
                    introContent: 0,
                    blockOneHeadline: 0,
                    blockOneContent: 0,
                    blockTwoHeadline: 0,
                    blockTwoContent: 0,
                    blockThreeHeadline: 0,
                    blockThreeContent: 0,
                    blockFourHeadline: 0,
                    blockFourContent: 0,
                },
            }
        },
        components: {
            Navigation,
            HeroLight,
            Footer
        },
        computed: {
            getContent() {
                return this.content;
            },
            heroImageUrl() {
                // return `../images/projects/${this.dirname}_hero.jpg`

                if (this.data != null) { 
                    const file = this.data.gsx$defaultimg.$t == 'TRUE' ? 'default' : `${this.data.gsx$dirname.$t}`;
                    const path = `https://www.citylab-berlin.org/images/projects/${file}_hero.jpg`
                    return path;
                }
            },
            title() {
                if (this.data != null) { return this.data.gsx$projectname.$t } else { return }
            },
            subtitle() {
                if (this.data != null) { return this.data.gsx$projectsubline.$t } else { return }
            },
            subsubtitle() {
                if (this.data != null) { return this.data.gsx$projectsubsubline.$t } else { return }
            },
            headlineIntro() {
                if (this.data != null) { return this.data.gsx$headlineintro.$t } else { return }
            },
            contentIntro() {
                if (this.data != null) { return this.data.gsx$contentintro.$t } else { return }
            },
            headlineBlockOne() {
                if (this.data != null) { return this.data.gsx$headlineblockone.$t } else { return }
            },
            contentBlockOne() {
                if (this.data != null) { return this.data.gsx$contentblockone.$t } else { return }
            },
            headlineBlockTwo() {
                if (this.data != null) { return this.data.gsx$headlineblocktwo.$t } else { return }
            },
            contentBlockTwo() {
                if (this.data != null) { return this.data.gsx$contentblocktwo.$t } else { return }
            },
            headlineBlockThree() {
                if (this.data != null) { return this.data.gsx$headlineblockthree.$t } else { return }
            },
            contentBlockThree() {
                if (this.data != null) { return this.data.gsx$contentblockthree.$t } else { return }
            },
            headlineBlockFour() {
                if (this.data != null) { return this.data.gsx$headlineblockfour.$t } else { return }
            },
            contentBlockFour() {
                if (this.data != null) { return this.data.gsx$contentblockfour.$t } else { return }
            },
            logos() {
                if (this.data != null) {
                    let arr = []; 
                    const urls = this.data.gsx$link.$t.split(',');

                    for (let index = 0; index < urls.length; index++) {
                        let filename
                        if (this.data.gsx$logo.$t == 'TRUE') {
                            filename = `https://www.citylab-berlin.org/images/projects/${this.data.gsx$dirname.$t}_logo_${index + 1}.jpg`;
                        } else {
                            filename = 'FALSE'
                        }
                        const url = urls[index];
                        arr.push([filename, url]);
                    }

                    if (urls.length > 0) {
                        return arr;
                    } else {
                        return 
                    }

                } else { return }
            }
        },
        methods: {
            getLength(data) {
                return data.length;
            }
        },
        beforeCreate() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/1/public/values?alt=json`)
                .then((res) => {
                    // set event entry to data which matches with dirname
                    this.data = res.data.feed.entry.filter((entry) => {return entry.gsx$dirname.$t == this.dirname}) ;
                    this.data = this.data[0];

                    this.summaryAvailable.introHeadline = this.getLength(this.data.gsx$headlineintro.$t);
                    this.summaryAvailable.introContent = this.getLength(this.data.gsx$contentintro.$t);

                    this.summaryAvailable.blockOneHeadline = this.getLength(this.data.gsx$headlineblockone.$t);
                    this.summaryAvailable.blockOneContent = this.getLength(this.data.gsx$contentblockone.$t);
                    
                    this.summaryAvailable.blockTwoHeadline = this.getLength(this.data.gsx$headlineblocktwo.$t);
                    this.summaryAvailable.blockTwoContent = this.getLength(this.data.gsx$contentblocktwo.$t);
                    
                    this.summaryAvailable.blockThreeHeadline = this.getLength(this.data.gsx$headlineblockthree.$t);
                    this.summaryAvailable.blockThreeContent = this.getLength(this.data.gsx$contentblockthree.$t);
                    
                    this.summaryAvailable.blockFourHeadline = this.getLength(this.data.gsx$headlineblockfour.$t);
                    this.summaryAvailable.blockFourContent = this.getLength(this.data.gsx$contentblockfour.$t);
                })

        },
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/style/style.scss";

    h4.title {
        color: $color-secondary;
    }

    section.hero {
        margin-top: 75px;

        @media screen and (max-width: 1087px) {
            margin-top: 67px;
        }
    }

    .logo-wrapper {
        display: flex;
        flex-direction: row;
        margin-top: 50px;

        img {
            width: 150px;
        }
    }

	.event-content {
        p {
            color: $color-tertiary;
            font-size: $size-5;
            margin-bottom: 20px;
        }

        span {
            color: $color-tertiary;
            margin-bottom: $spacing-s;
        }

        h4.title{
            color: $color-secondary !important;
            font-size: $size-3;
            margin-bottom: 0 !important;
            padding-bottom: 20px !important;
            padding-top: 50px;
        }
    }
</style>