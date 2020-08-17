<template>
    <div>
        <Navigation :lang="lang" :languageVisible="false" :content="content" :direct="direct" :anchorTags="true"/>
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

                <div v-if="logo == 'TRUE'" class="content-wrapper">
                    <img class="logos" :src="logoUrl" alt="">
                </div>

                <div class="summary-wrapper is-medium">
                    <h4>{{dict[lang]['summary']['title']}}</h4>

                    <div class="flex-container">
                        <div v-if="summaryAvailable.website > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['website']}}</h5>
                            <a class="summary-text" :href="`${websiteSummary}`">{{websiteSummary}}</a>
                        </div>

                        <div v-if="summaryAvailable.phone > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['phone']}}</h5>
                            <span class="summary-text">{{phoneSummary}}</span>
                        </div>

                        <div v-if="summaryAvailable.organiser > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['organizer']}}</h5>
                            <span class="summary-text">{{organiserSummary}}</span>
                        </div>

                        <div v-if="summaryAvailable.date > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['date']}}</h5>
                            <span class="summary-text">{{dateSummary}}</span>
                        </div>

                        <div v-if="summaryAvailable.mail > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['mail']}}</h5>
                             <a class="summary-text" :href="`mailto: ${mailSummary}`">{{mailSummary}}</a>
                        </div>

                        <div v-if="summaryAvailable.address > 0" class="content-block">
                            <h5>{{dict[lang]['summary']['address']}}</h5>
                            <span class="summary-text">{{addressSummary}}</span>
                        </div>
                    </div>

                </div>

                <div style="margin-top: 30px !important;" class="flex-container col">
                    <!-- registerInfo kommt aus Google Spreadsheet -->
                    <span v-html="registerInfo"></span> 
                </div>

                <div style="margin-top: 30px !important; display: inline" class="flex-container btn">
                    <a v-if="this.summaryAvailable.registerLink > 0" :href="registerLink" target="_blank" class="button is-color-secondary is-normal">{{ lang == 'en' ? 'Register now' : 'Jetzt registrieren' }}</a>
                    <!-- Download for calendar button -->
                    <a class="button is-color-secondary is-normal" style="display" @click="save('CLB_Event.ics', calData)">Download für iCal</a>         
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
                    dirname: params.event,
                    data: null,
                    lang: 'en',
                    content: content,
                    direct: `/events/${params.event}`,
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
                        registerLink: 0,
                    },
                    dict: {
                        "de": {
                            "summary": {
                                "title": "Zusammenfassung",
                                "website": 'Webseite',
                                'phone': 'Telefon',
                                'organizer': 'Veranstalter',
                                'date': 'Datum',
                                'mail': 'E-Mail',
                                'address': 'Adresse'
                            }
                        },
                        "en": {
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
            
            head () {
                return {
                    title: `${this.title} - ${this.subtitle} (${this.dateSummary}) - `,
                    meta: [
                        { hid: 'description', name: 'description', content: `${this.title} - ${this.subtitle} (${this.dateSummary}) -  CityLAB Berlin)` },
                        { hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
                        { hid: 'og:url', property: 'og:url',  content:  `https://www.citylab-berlin.org/events/${this.dirname}`},
                        { hid: 'og:type', property: 'og:type',  content: "website"},
                        { hid: 'og:title', property: 'og:title',  content: `${this.title} - ${this.subtitle} (${this.dateSummary}) -  CityLAB Berlin)`},
                        { hid: 'og:image', property: 'og:image',  content: `https://citylab-berlin.org/images/events/${this.dirname}_social_media.jpg`},
                        { hid: 'og:description', property: 'og:description',  content: this.socialDescription},
                        { hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
                        { hid: 'article:author', property: 'article:author',  content: "CityLAB Berlin"},
                        { hid: 'twitter:card', name: 'twitter:card', content:"summary"},
                        { hid: 'twitter:site', name: 'twitter:site',  content: "@citylabberlin"},
                        { hid: 'twitter:creator', name: 'twitter:creator',  content: "@citylabberlin"},
                        { hid: 'twitter:url', name: 'twitter:url', content: `https://www.citylab-berlin.org/events/${this.dirname}`},
                        { hid: 'twitter:title', name: 'twitter:title', content: `${this.title} - ${this.subtitle} (${this.dateSummary}) -  CityLAB Berlin)`},
                        { hid: 'twitter:description', name: 'twitter:description', content: this.socialDescription},
                        { hid: 'twitter:image', name: 'twitter:image', content: `https://citylab-berlin.org/images/events/${this.dirname}_social_media.jpg`},
                        { hid: 'name', itemprop: 'name', content:this.socialDescription},
                        { hid: 'image', itemprop: 'image', content: `https://citylab-berlin.org/images/events/${this.dirname}_social_media.jpg`},
                    ]
                }
            },
            components: {
                Navigation,
                HeroLight,
                Footer
            },
            computed: {
                heroImageUrl() {

                    return `https://citylab-berlin.org/images/events/${this.dirname}_hero.jpg`
                },
                getContent() {
                    return this.content;
                },
                getLanguage() {
                    if (this.data != null) { return this.data.gsx$eventlanguage.$t } else { return }
                },
                title() {
                    if (this.data != null) { return this.data.gsx$eventname.$t } else { return }
                },

                startDate() {
                    if (this.data != null) { 
                        const date = this.data.gsx$date.$t;
                        const startTime = this.data.gsx$starttime.$t;
                        const newDate = `${date.substring(0,4)}${date.substring(5,7)}${date.substring(8,10)}T${startTime.substring(0,2)}${startTime.substring(3,5)}00`
                        return newDate;
                        } else { return }
                },

                endDate() {
                    if (this.data != null) { 
                        const date = this.data.gsx$date.$t;
                        const endTime = this.data.gsx$endtime.$t;
                        const newDate = `${date.substring(0,4)}${date.substring(5,7)}${date.substring(8,10)}T${endTime.substring(0,2)}${endTime.substring(3,5)}00`
                        return newDate;
                        } else { return }
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
                registerLink() {
                    if (this.data != null) { return this.data.gsx$registerlink.$t } else { return }
                },
                registerInfo() {
                    if (this.data != null) { return this.data.gsx$registerinfo.$t } else { return }
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
                socialDescription() {
                    if (this.data != null) { return this.data.gsx$socialdescription.$t } else { return }
                },
                logo() {
                    if (this.data != null) { return this.data.gsx$logo.$t } else { return }
                },
                logoUrl() {
                    return `https://citylab-berlin.org/images/events/${this.dirname}_logo.png`
                },
                

                // Schreibweise Concat mit Hilfe von Stringliterals
                calData() {
                    return `BEGIN:VCALENDAR\n
VERSION:2.0\n
CALSCALE:GREGORIAN\n
TZID:Europe/Berlin\n
TZNAME:MESZ\n
BEGIN:VEVENT\n
LOCATION:CityLAB Berlin\\nPlatz der Luftbrücke 4\\n12101 Berlin\n
GEO:52.483814;13.388565\n
METHOD:PUBLISH\n
TZID:Europe/Berlin\n
DTSTART:${this.startDate}\n
DTEND:${this.endDate}\n
SUMMARY:${this.title}\n
URL;VALUE=URI:https://www.citylab-berlin.org/\n
TRANSP:OPAQUE\n
BEGIN:VALARM\n
TRIGGER:-PT1H\n
ATTACH;VALUE=URI:Chord\n
ACTION:AUDIO\n
END:VALARM\n
END:VEVENT\n
END:VCALENDAR`
                },

                //ab hier Code für calendar import
                calendarImp() {
                    if (this.data != null) { return this.data.gsx$calendarimp.$t } else { return }
                }

            },
            methods: {
                getLength(data) {
                    return data.length;
                },

                save(filename, data) {
                    var blob = new Blob([data], {type: 'text/csv'});
                    if (window.navigator.msSaveOrOpenBlob) {
                            window.navigator.msSaveBlob(blob, filename);
                    } else{
                        var elem = window.document.createElement('a');
                        elem.href = window.URL.createObjectURL(blob);
                        elem.download = filename;
                        document.body.appendChild(elem);
                        elem.click();
                        document.body.removeChild(elem);
                    }
                }
            },
            beforeCreate() {
                axios.get(`https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/3/public/values?alt=json`)
                    .then((res) => {
                        // set event entry to data which matches with dirname
                        this.data = res.data.feed.entry.filter((entry) => {return entry.gsx$dirname.$t == this.dirname}) ;
                        this.data = this.data[0];
                        this.lang = this.data.gsx$eventlanguage.$t;


                        this.summaryAvailable.address = this.getLength(this.data.gsx$addresssummary.$t);
                        this.summaryAvailable.phone = this.getLength(this.data.gsx$phonesummary.$t);
                        this.summaryAvailable.mail = this.getLength(this.data.gsx$mailsummary.$t);
                        this.summaryAvailable.website = this.getLength(this.data.gsx$websitesummary.$t);
                        this.summaryAvailable.date = this.getLength(this.data.gsx$datesummary.$t);
                        this.summaryAvailable.organiser = this.getLength(this.data.gsx$organisersummary.$t);

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

                        this.summaryAvailable.registerLink = this.getLength(this.data.gsx$registerlink.$t);

                        //ab hier: calendar import 
                        this.summaryAvailable.calendarImp = this.data.gsx$calendarimp.$t;                        
                    })

            }, //close beforeCreate()
            mounted() {

            } //close mounted
    } //close export default
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

        span {
            font-size: $size-5;
        }
    }

    .col {
        flex-direction: column;

        a {
            width: 130px;
            margin-bottom: 30px;
        }
    }

    .summary-text {
        line-height: 20px;
        margin-top: 5px;
        display: inline-block;
    }

    p {
        a {
            color: #393A60 !important;
            text-decoration: underline;
            transition: opacity .25s ease-in-out;

            &:hover {
                opacity: .5;
                transition: opacity .25s ease-in-out;
            }
        }
    }
    
    .summary-wrapper {
        color: white;
        margin-bottom: 50px;
        margin-top: 60px;
        background: $color-primary;
        padding: $spacing-m;

        h4 {
            font-size: $size-3;
            line-height: .75;
            width: 100%;
        }

        .content-block {
            font-size: $size-6;
            width: 33%;
            margin-top: 20px;

            a {
                color: white;
                opacity: .5;
            }

            h5 {
                margin-bottom: -3px;
            }

            @include tablet-only {
                width: 50%;
            }

            @include mobile {
                width: 100%;
            }

            span.summary-text {
                color: white;
                opacity: .5;
                font-size: 16px;
            }
        }
    }

	.event-content {
        p {
            color: $color-primary;
            font-size: $size-5;
            margin-bottom: 20px;
        }

        span {
            color: $color-primary;
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

    .content-wrapper {
        padding-bottom: 0;
    }
    

	h5.title{
		color: $color-secondary !important;
		font-size: $size-4;
		padding-bottom:0px;
		margin-bottom:10px !important;
	}

	.name-list li,
	.time-list li{
		color: $color-primary;
        font-size: $size-5;
		padding-bottom:5px;
	}

	.name-list, .time-list{
		margin-bottom:20px;
	}

	.event-content p.copyright{
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

    .col a{
    width: 180px;
    margin-right: 2em;
    float: left;

    }

    .button.is-color-secondary{
        margin-top: 30px;
        min-width: 180px;
        margin-right: 3em;
    }

    form * {

    }

</style>



