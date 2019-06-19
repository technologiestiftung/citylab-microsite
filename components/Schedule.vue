<template>
    <section class="section schedule is-medium" id="schedule">
        <div class="container">
            <h2 class="title"> {{ content[lang]['schedule']['title'] }} </h2>
            <!-- <h2 class="subtitle"> {{ content[lang]['schedule']['subtitle'] }} </h2> -->
        
            <div class="schedule-wrapper">
                <article v-for="entry in data" class="dates-item">
                    <div class="date-wrapper">
                        <span class="date-month"> {{ entry.month }} </span>
                        <span class="date-day"> {{ entry.day }} </span>
                    </div>

                    <h2 class="subtitle">{{ entry.title }}</h2>

                    <a :href="entry['link']" class="button is-color-secondary is-normal">{{ entry['button'] }}</a>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {    
        name: 'Schedule',
        props: ['content', 'lang', 'direct', 'links'],
        computed: {
            itemsArr() {
                return this.content[this.lang]['schedule']['items'];
            },

        },
        data() {
            return {
                entries: null,
                data: []
            }
        },
        mounted() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;

                this.entries = entries;

                entries.forEach(entry => {

                    if (this.lang == 'de') {
                        let obj = {
                            day: entry.gsx$dateday.$t,
                            month: entry.gsx$datemonthde.$t,
                            title: entry.gsx$eventnamede.$t,
                            button: entry.gsx$buttonde.$t,
                            link: entry.gsx$eventlinkde.$t
                        }

                        this.data.push(obj);
                    }

                    if (this.lang == 'en') {
                        let obj = {
                            day: entry.gsx$dateday.$t,
                            month: entry.gsx$datemonthen.$t,
                            title: entry.gsx$eventnameen.$t,
                            link: entry.gsx$eventlinken.$t,
                            button: entry.gsx$buttonen.$t,
                        }

                        this.data.push(obj)
                    }

               
                })
            })      
        }

    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .schedule { 
        background: $color-primary--lightest;

        @include tablet {
            
        }

        &-wrapper {
            display: flex;
            flex-direction: column;
        }

        .dates-item {
            padding: 1rem $size-5 $size-5 $size-5;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            // border-top: 1px solid $color-primary--medium;
            align-items: center;

            @include mobile {
                padding: .85rem;
            }

            &:nth-of-type(odd) {
                background: $color-primary--lightest;
            }

            .subtitle {
                margin-bottom: 0px;


                @include mobile {
                    font-size: 1rem;
                    line-height: 1.2rem;
                }
            }

            &:last-of-type {
                // border-bottom: 1px solid $color-primary--medium;
            }
        }

        .date-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            @include mobile {
                margin-right: 15px;
            }

            .date-month {
                font-size: $size-4;
                line-height: 2rem;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                }
            }

            .date-day {
                font-size: $size-3;
                line-height: 1.75rem;
                text-align: center;

                @include mobile {
                    line-height: 1.2rem;
                    font-size: 1rem;
                }
            }
         }
    }
</style>


