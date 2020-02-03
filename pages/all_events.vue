<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>   
        <section class="section is-medium schedule">
            <div class="container" style="margin-top: 100px" >
                <span id="btn-2019" class="year-btn" @click="setYear(2019)">2019</span>
                <span id="btn-2020" class="year-btn active" @click="setYear(2020)">2020</span>
            </div>
            <div v-if="dataUpcoming.length > 0" class="container" style="margin-bottom: 100px" >
                <h1 class="title">{{content[this.lang]['events']['upcomingEventsTitle']}}</h1>

                <div class="schedule-wrapper">
                    <a class="event-tile" :href="entry['link']" v-for="entry in dataUpcoming">
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

                            <a :href="entry['link']" class="arrow-right">→</a>
                        </article>
                    </a>
                </div>

            </div>

            <div v-if="dataPast" class="container">
                <h1 class="title">{{content[this.lang]['events']['pastEventsTitle']}}</h1>

                <div class="schedule-wrapper">
                    <a class="event-tile" :href="entry['link']" v-for="entry in dataPast">
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

                            <a :href="entry['link']" class="arrow-right">→</a>
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
                dataUpcoming: [],
                dataPast: [],
                year: 2020,
                otherEvents: content['de'].otherevents,
                entries: null
			}
        },
        computed: {
            buttonText() {
                return this.lang == 'en' ? 'More info' : 'Mehr Infos'
            },
        },
        watch: {
            year() {
                this.dataUpcoming = this.filterData(this.data, true);
                this.dataPast = this.filterData(this.data, false);

                console.log(this.dataUpcoming, 'waaaatch')
            }
        },
        mounted() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;

                this.entries = entries;

                entries.forEach(entry => {
                    let obj = {
                        date: entry.gsx$date.$t,
                        day: this.getDay(entry.gsx$date.$t),
                        month: this.getMonth(entry.gsx$date.$t),
                        format: entry.gsx$format.$t,
                        time: entry.gsx$datetime.$t,
                        title: entry.gsx$eventname.$t,
                        visible: entry.gsx$visible.$t,
                        link: this.createEventLink(entry.gsx$dirname.$t)

                    }
                    this.data.push(obj);
                })

                this.otherEvents.forEach(entry => {
                    let obj = {
                        day: this.getDay(entry.date),
                        month: this.getMonth(entry.date),
                        format: entry.format,
                        date: entry.date,
                        time: entry.time,
                        title: entry.title,
                        link: entry.link,
                    }
                    this.data.push(obj);
                })

                this.data = this.data.sort((a,b) => { return new Date(b.date) - new Date(a.date) });

                this.dataUpcoming = this.filterData(this.data, true);
                this.dataPast = this.filterData(this.data, false);
            })
        },
        methods: {
            filterData(d, isUpcoming) {
                return d.filter(entry => (
                    entry.visible !== 'FALSE' &&
                    (isUpcoming ? this.dateIsUpcoming(entry.date) : !this.dateIsUpcoming(entry.date)) &&
                    this.getYear(entry.date, this.year)
                ))
            },
            setYear(y) {
                this.year = y;
                const btns = document.querySelectorAll(`.year-btn`);
                btns.forEach(btn => {
                    btn.classList.remove('active');
                })
                document.getElementById(`btn-${y}`).classList.add('active');
            },
            getYear(date, year) {
                const eventDate = new Date(date);
                const eventYear = eventDate.getYear();
                return (eventYear + 1900) == year;
            },
            dateIsUpcoming(date) {
                const today = new Date();
                const eventDate = new Date(date);

                const upcoming = today.getTime() <= eventDate.getTime();

                eventDate.setHours(23,59,59)

                return upcoming;
            },
            getDay(date) {
                let dat = new Date(date);
                return dat.getDate();
            },
            getMonth(date) {
                let dat = new Date(date);
                const mlistEn = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
                const mlist = [ "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez" ];
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

        .event-tile {
            transition: $time-s ease transform;
            &:hover {
                .arrow-right {
                    transform: translateX(5px);
                    transition: $time-s ease transform;
                    color: $color-primary;
                }
            }

            &:nth-of-type(odd) {
                .dates-item {
                    background: $color-primary--lightest;
                }
            }
        }

        .year-btn {
            color: $color-primary;
            margin-right: 10px;
            transition: $time-s ease transform;
            opacity: .5;
            cursor: pointer;

            &.active {
                opacity: 1;
                transition: $time-s ease transform;
            }
        }


        .arrow-right {
            font-size: 2rem;
            margin-right: 15px;
            color: $color-primary;
            font-weight: normal;
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
            min-width: 35px;
            justify-content: space-around;

            @include mobile {
                margin-right: 15px;
                min-width: 50px;
            }

            .date-time {
                font-size: $size-4;
                line-height: 2rem;
                color: $color-primary;
                margin-right: $spacing-l;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                    margin-right: 15px;
                }
            }

            .date-month {
                font-size: $size-5;
                line-height: 1rem;
                color: $color-primary;
                text-align: center;
                opacity: .5;

                @include mobile {
                    line-height: 1rem;
                    font-size: $size-5;
                }
            }

            .date-day {
                font-size: $size-3;
                line-height: 1.75rem;
                text-align: center;
                color: $color-primary;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: $size-4;
                }
            }
         }
    }
</style>



