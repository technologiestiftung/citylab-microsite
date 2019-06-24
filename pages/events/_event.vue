<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
        <HeroLight 
            :image="heroImageUrl" 
            :title="title" 
            :subTitle="subtitle" 
            :subSubTitle="subsubtitle" 
        />

        <section class="section is-medium event-content">
            <div class="container">
                <h4 class="title">{{headlineIntro}}</h4>
                <p class="event-intro">{{contentIntro}}</p>


                <div class="summary-wrapper is-medium">
                    <h4>{{dict[lang]['summary']['title']}}</h4>

                    <div class="flex-container">

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['website']}}</h5>
                            <span>{{websiteSummary}}</span>
                        </div>

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['phone']}}</h5>
                            <span>{{phoneSummary}}</span>
                        </div>

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['organizer']}}</h5>
                            <span>{{organiserSummary}}</span>
                        </div>

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['date']}}</h5>
                            <span>{{dateSummary}}</span>
                        </div>

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['mail']}}</h5>
                            <span>{{mailSummary}}</span>
                        </div>

                        <div class="content-block">
                            <h5>{{dict[lang]['summary']['address']}}</h5>
                            <span>{{addressSummary}}</span>
                        </div>
                    </div>
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
                console.log('lal')
                return { 
                    dirname: params.event,
                    data: null,
                    lang: 'en',
                    content: content,
                    direct: `/events/${params.event}`,
                    dict: {
                        "en": {
                            "summary": {
                                "title": "Steckbrief",
                                "website": 'Webseite',
                                'phone': 'Telefon',
                                'organizer': 'Veranstalter',
                                'date': 'Datum',
                                'mail': 'E-Mail',
                                'address': 'Adresse'
                            }
                        },
                        "de": {
                            "summary": {
                                "title": "More information",
                                "website": 'Website',
                                'phone': 'Phone',
                                'organizer': 'Organizer',
                                'date': 'Date',
                                'mail': 'Mail',
                                'address': 'Address'
                            }
                        }
                    }
                }
            },
            components: {
                Navigation,
                HeroLight,
                Footer
            },
            computed: {
                heroImageUrl() {
                    return `https://citylab-berlin.org/images/${this.dirname}-hero.jpg`
                },
                getContent() {
                    return this.content;
                },
                title() {
                    if (this.data != null) { return this.data.gsx$eventname.$t } else { return }
                },
                subtitle() {
                    if (this.data != null) { return this.data.gsx$subline.$t } else { return }
                },
                subsubtitle() {
                    if (this.data != null) { return this.data.gsx$subsubline.$t } else { return }
                },
                headlineIntro() {
                    if (this.data != null) { return this.data.gsx$headlineintro.$t } else { return }
                },
                contentIntro() {
                    if (this.data != null) { return this.data.gsx$contentintro.$t } else { return }
                },

                websiteSummary() {
                    if (this.data != null) { return this.data.gsx$websitesummary.$t } else { return }
                },
                phoneSummary() {
                    if (this.data != null) { return this.data.gsx$phonesummary.$t } else { return }
                },
                dateSummary() {
                    if (this.data != null) { return this.data.gsx$datesummary.$t } else { return }
                },
                organiserSummary() {
                    if (this.data != null) { return this.data.gsx$organisersummary.$t } else { return }
                },
                mailSummary() {
                    if (this.data != null) { return this.data.gsx$mailsummary.$t } else { return }
                },
                addressSummary() {
                    if (this.data != null) { return this.data.gsx$addresssummary.$t } else { return }
                },

            },
            beforeCreate() {
                axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
                    .then((res) => {
                        // set event entry to data which matches with dirname
                        this.data = res.data.feed.entry.filter((entry) => {return entry.gsx$dirname.$t == this.dirname}) ;
                        this.data = this.data[0];
                    })
            },
            mounted() {
                // console.log('lassl');
            }
    }
</script>

<style lang="scss">
	@import "../../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;      
    }
    
    .summary-wrapper {
        color: white;
        background: $color-tertiary;
        padding: $spacing-m;

        h4 {
            font-size: $size-3;
            line-height: .75;
            width: 100%;
        }

        .content-block {
            font-size: $size-6;
            width: 25%;
            margin-top: 20px;

            h5 {
                margin-bottom: -3px;
            }

            @include tablet-only {
                width: 33%;
            }

            @include mobile {
                width: 50%;
            }

            span {
                opacity: .5;
            }
        }
    }

	.event-content p{
		color: $color-tertiary;
        font-size: $size-5;
		padding-bottom:40px;
	}

	h4.title{
		color: $color-secondary !important;
		font-size: $size-3;
		padding-bottom:20px;
	}

	h5.title{
		color: $color-secondary !important;
		font-size: $size-4;
		padding-bottom:0px;
		margin-bottom:10px !important;
	}

	.name-list li,
	.time-list li{
		color: $color-tertiary;
        font-size: $size-5;
		padding-bottom:5px;
	}

	.name-list, .time-list{
		margin-bottom:20px;
	}

	.event-content p.copyright{
		padding-top:40px;
		font-size: 14px;
	}

	.journal-logos{
		height:60px;
		margin-right:50px;
	}

	#organiser-logos{
		max-width:80%;
		width:600px;
	}

</style>



