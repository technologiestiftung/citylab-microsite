<template>
    <section class="section schedule is-medium" id="schedule">
        <div class="container">
            <h2 class="title"> {{ content[lang]['schedule']['title'] }} </h2>
            <h2 class="subtitle"> {{ content[lang]['schedule']['subtitle'] }} </h2>
        
            <div class="schedule-wrapper">
                <article v-for="item in itemsArr" class="dates-item">
                    <div class="date-wrapper">
                        <span class="date-month"> {{ item['date_month'] }} </span>
                        <span class="date-day"> {{ item['date_day'] }} </span>
                    </div>

                    <h2 class="subtitle">{{ item['title'] }}</h2>

                    <a :href="item['link']" class="button is-color-secondary is-normal">{{ item['button'] }}</a>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Schedule',
        props: ['content', 'lang', 'direct', 'links'],
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
            flex-direction: column;
        }

        .dates-item {
            padding: 1rem $size-5 $size-5 $size-5;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            // border-top: 1px solid $color-primary--medium;
            align-items: center;

            &:nth-of-type(odd) {
                background: $color-primary--lightest;
            }

            .subtitle {
                margin-bottom: 0px;
            }

            &:last-of-type {
                // border-bottom: 1px solid $color-primary--medium;
            }
        }

        .date-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .date-month {
                font-size: $size-4;
                line-height: 2rem;
            }

            .date-day {
                font-size: $size-3;
                line-height: 1.75rem;
                text-align: center;
            }
         }
    }
</style>


