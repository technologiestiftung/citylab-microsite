<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium schedule">
            <div class="container">
                <h1 style="margin-top: 100px" class="title">{{content[this.lang]['events']['upcomingEventsTitle']}}</h1>

                <div class="schedule-wrapper">
                    <a class="event-tile" v-if="entry.visible != 'FALSE' && dateIsUpcoming(entry.date)" :href="entry['link']" v-for="entry in data">
                        <article class="dates-item" style="width: 100%;">
                            <div class="date-wrapper">
                                <span class="date-month"> {{ entry.month }} </span>
                                <span class="date-day"> {{ entry.day }} </span>
                            </div>

                            <div style="margin-right: 0px; width: 240px;" class="date-wrapper">                        
                                <span class="date-time"> {{ entry.time }} </span>                        
                            </div>

                            <h2 class="subtitle">{{ entry.title }}</h2>

                            <h2 class="subtitle format">{{ entry.format }}</h2>

                            <a :href="entry['link']" class="arrow-right">></a>
                        </article>
                    </a>
                </div>

            </div>

            <div class="container">
                <h1 style="margin-top: 100px" class="title">{{content[this.lang]['events']['pastEventsTitle']}}</h1>

                <div class="schedule-wrapper">
                    <a class="event-tile" v-if="entry.visible != 'FALSE' && !dateIsUpcoming(entry.date)" :href="entry['link']" v-for="entry in data">
                        <article class="dates-item" style="width: 100%;">
                            <div class="date-wrapper">
                                <span class="date-month"> {{ entry.month }} </span>
                                <span class="date-day"> {{ entry.day }} </span>
                            </div>

                            <div style="margin-right: 0px;" class="date-wrapper">                        
                                <span class="date-time"> {{ entry.time }} </span>                        
                            </div>

                            <h2 class="subtitle">{{ entry.title }}</h2>

                            <h2 class="subtitle format">{{ entry.format }}</h2>

                            <a :href="entry['link']" class="arrow-right">></a>
                        </article>
                    </a>
                </div>

            </div>
        </section>
		<Footer :lang="lang" :content="content"/>
		<Matomo/>
	</div>
</template>

<script>
    import axios from 'axios';
	import { 
  		content as content
	} from '../assets/content.js';

    import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Matomo from '../components/Matomo.vue';
    
    export default {
        components: {
			Navigation,
			Footer,
			Matomo
		},
		data() {
			return {
				lang: 'de',
				content: content,
                direct: '/all_events_en',
                data: [],
                entries: null
			}
        },
        computed: {
            buttonText() {
                return this.lang == 'en' ? 'More info' : 'Mehr Infos'
            },
        },
        mounted() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;

                this.entries = entries;

                entries.forEach(entry => {
                    let obj = {
                        day: this.getDay(entry.gsx$date.$t),
                        month: this.getMonth(entry.gsx$date.$t),
                        date: entry.gsx$date.$t,
                        format: entry.gsx$format.$t,
                        time: entry.gsx$datetime.$t,
                        title: entry.gsx$eventname.$t,
                        link: this.createEventLink(entry.gsx$dirname.$t),
                        visible: entry.gsx$visible.$t,
                    }
                    this.data.push(obj);
                })
            })      
        }, 
        methods: {
            dateIsUpcoming(date) {
                const today = new Date();
                const eventDate = new Date(date);

                const upcoming = today.getTime() < eventDate.getTime();

                return upcoming;
            },
            getDay(date) {
                let dat = new Date(date);
                return dat.getDate();
            },
            getMonth(date) {
                let dat = new Date(date);
                const mlistEn = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                const mlist = [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
                let monthCurrent = this.lang == 'en' ? mlistEn[dat.getMonth()] : mlist[dat.getMonth()];
                return monthCurrent;
            },
            createEventLink(dirname) {
                return `/events/${dirname}`;
            }
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .schedule { 
        // background: $color-primary--lightest;

        @include tablet {
            
        }

        .event-tile {
            transition: $time-s ease transform;
            &:hover {
                .arrow-right {
                    transform: translateX(5px);
                    transition: $time-s ease transform;
                }
            }

            &:nth-of-type(odd) {
                .dates-item {
                    background: $color-primary--lightest;
                }
            }


        }


        .arrow-right {
            font-size: 36px;
            margin-right: 15px;
            color: $color-tertiary;
            font-weight: bold;
            transition: $time-s ease transform;
        }


        &-wrapper {
            display: flex;
            flex-direction: column;
        }

        .dates-item {
            padding: .75rem 1rem 1rem 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            // border-top: 1px solid $color-primary--medium;
            align-items: center;

            @include mobile {
                padding: .85rem;
            }

            .subtitle {
                font-size: $size-4;
                margin-bottom: 0px;
                width: 450px;

                @include mobile {
                    font-size: 1rem;
                    line-height: 1.2rem;
                }
            }


            .format {
                opacity: .5;
                margin-left: $spacing-l;
                max-width: 150px;

                @include mobile {
                    display: none;
                }
            }

            &:last-of-type {
                // border-bottom: 1px solid $color-primary--medium;
            }
        }

        .date-wrapper {
            margin-right: $spacing-l;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            @include mobile {
                margin-right: 15px;
            }

            .date-time {
                font-size: $size-4;
                line-height: 2rem;
                color: $color-tertiary;
                margin-right: $spacing-l;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                    margin-right: 15px;
                }
            }

            .date-month {
                font-size: $size-4;
                line-height: 2rem;
                color: $color-tertiary;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                }
            }

            .date-day {
                font-size: $size-3;
                line-height: 1.75rem;
                text-align: center;
                color: $color-tertiary;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                }
            }
         }
    }
</style>



