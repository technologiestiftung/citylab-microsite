<template>
    <section class="section schedule" id="schedule">
        <div class="container">
            <h2 class="title"> {{ content[lang]['schedule']['title'] }} </h2>
            <h2 class="subtitle"> {{ content[lang]['schedule']['subtitle'] }} </h2>
        
            <div class="schedule-wrapper">
                <article v-for="item in itemsArr" class="dates">
                    <div class="date-wrapper">
                        <span class="date-month"> {{ item['date_month'] }} </span>
                        <span class="date-day"> {{ item['date_day'] }} </span>
                    </div>

                    <h2 class="subtitle">{{ item['title'] }}</h2>

                    <a href="/events/" class="button is-color-secondary is-normal">{{ content[lang]['missionStatement']['cta'] }}</a>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Schedule',
        props: ['content', 'lang', 'direct'],
        computed: {
            itemsArr() {
                return this.content[this.lang]['schedule']['items'];
            }
        }
    }
</script>

<style lang="scss">

    @import "../assets/style/style.scss";

    .schedule {
        &-wrapper {
            display: flex;
            flex-direction: row;
        }

        .date-wrapper {
            display: flex;
            flex-direction: column;

            .date-month {
            }
        }
    }
</style>


