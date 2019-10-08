<template>
    <footer class="footer">
        <section class="section is-medium">
            <div class="container">

                <div class="columns">

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['contact']['title'] }}
                        </h6>

                        <a class="flex flex-row m-b-sm" :href="directGoogleMaps">
                            <div class="icon-wrapper">
                                <font-awesome-icon far style="width: 20px; transform: translateY(2px)" :icon="bicycle"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['contact']['address_street'] }}
                                <br/>
                                {{ content[lang]['footer']['contact']['address_code'] }}
                            </p>
                        </a>

                        <a class="flex flex-row m-b-sm" :href="mailtoCitylab">
                            <div class="icon-wrapper">
                                <font-awesome-icon far style="width: 15px; transform: translateY(2px);" :icon="envelope"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['contact']['mail'] }}
                            </p>
                        </a>

                        <a class="flex flex-row m-b-sm" style="cursor: auto;">
                            <div class="icon-wrapper">
                                <font-awesome-icon far style="width: 15px; transform: translateY(2px);" :icon="phone"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['contact']['phone'] }}
                            </p>
                        </a>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['open']['columntitle'] }}
                        </h6>

                        <a class="flex flex-row m-b-sm" style="cursor: auto;">
                            <div class="icon-wrapper">
                                <font-awesome-icon far style="width: 15px; transform: translateY(2px);" :icon="doorOpen"/>
                            </div>
                            <div class="flex flex-column">
                                <p>
                                    {{ content[lang]['footer']['open']['title'] }}
                                </p>
                                <p class="content">{{ content[lang]['footer']['open']['hours'] }}</p>
                            </div>
                        </a>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['more']['title'] }}
                        </h6>

                        <!-- <nuxt-link class="flex flex-row m-b-sm" :to="directDownloads">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(2px); margin-right: 5px;" far icon="file-download"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['downloads'] }}
                            </p>
                        </nuxt-link>


                        <nuxt-link class="flex flex-row m-b-sm" :to="directPress">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(1px); margin-right: 5px;" far icon="newspaper"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['press'] }}
                            </p>
                        </nuxt-link> -->

                        <nuxt-link class="flex flex-row m-b-sm" :to="directImprint">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(1px); margin-right: 5px; width: 15px;" far :icon="stamp"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['imprint'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directDataprivacy">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(2px); margin-right: 5px; width: 15px;" far :icon="userSecret"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['dataprivacy'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directCodeofconduct">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(-2px); margin-right: 5px; width: 15px;" far :icon="genderless"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['codeofconduct'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directResources">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(2px); margin-right: 5px; width: 15px; height: 16px;" far :icon="information"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['resources'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directBoard">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(2px); margin-right: 5px; width: 15px; height: 16px;" far :icon="users"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['board'] }}
                            </p>
                        </nuxt-link>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4" style="opacity: 0;">
                            {{ content[lang]['footer']['funding']['title'] }}
                        </h6>

                        <span> {{ content[lang]['footer']['funding']['text_tsb'] }}</span>

                        <a
                        class="flex flex-row m-b-sm logo"
                        :href="`${content[lang]['footer']['funding']['href_tsb']}`"
                        >
                            <img :src="`${content[lang]['footer']['funding']['svg_tsb']}`" alt="">
                        </a>

                        <span v-if="content[lang]['footer']['funding']['text_sen'].length > 0"> {{ content[lang]['footer']['funding']['text_sen'] }}</span>

                        <a
                        class="flex flex-row m-b-sm logo"
                        :href="`${content[lang]['footer']['funding']['href_sen']}`"
                        >
                            <img :src="`${content[lang]['footer']['funding']['svg_sen']}`" alt="">
                        </a>
                    </div>

                </div>
                <p class="text-light">
                    {{ content[lang]['footer']['funding']['text'] }}
                </p>
            </div>
        </section>
    </footer>
</template>

<script>
    import {
        faBicycle,
        faEnvelope,
        faStamp,
        faUserSecret,
        faGenderless,
        faDoorOpen,
        faInfo,
        faUsers
    } from '@fortawesome/free-solid-svg-icons';

    export default {
        name: "Footer",
        props: ['content', 'lang'],
        data() {
            return {
                directs: {
                    de: {
                        downloads: '/downloads',
                        press: '/press',
                        dataprivacy: '/dataprivacy',
                        code: '/codeofconduct',
                        imprint: '/legalnote',
                        resources: '/resources',
                        board: '/board',
                    },
                    en: {
                        downloads: '/downloads_en',
                        press: '/press_en',
                        imprint: '/legalnote_en',
                        dataprivacy: '/dataprivacy_en',
                        code: '/codeofconduct_en',
                        resources: '/resources_en',
                        board: '/board_en',
                    }
                }
            }
        },
        computed: {
            doorOpen() {
                return faDoorOpen;
            },
            bicycle() {
                return faBicycle;
            },
            envelope() {
                return faEnvelope;
            },
            stamp() {
                return faStamp;
            },
            information() {
                return faInfo;
            },
            userSecret() {
                return faUserSecret;
            },
            genderless() {
                return faGenderless;
            },
            users() {
                return faUsers;
            },
            directBoard() {
                return this.directs[this.lang].board
            },
            directResources() {
                return this.directs[this.lang].resources
            },
            directCodeofconduct() {
                return this.directs[this.lang].code
            },
            directImprint() {
                return this.directs[this.lang].imprint
            },
            directDataprivacy() {
                return this.directs[this.lang].dataprivacy
            },
            directDownloads() {
                return this.directs[this.lang].downloads
            },
            directPress() {
                return this.directs[this.lang].press
            },
            directDownloads() {
                return this.directs[this.lang].downloads
            },
            directGoogleMaps() {
                return 'https://www.google.de/maps/@52.4843705,13.3836835,16.65z'
            },
            mailtoCitylab() {
                return 'mailto:info@citylab-berlin.org'
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";

    .flex {
        display: flex;
        &-row {
            flex-direction: row;
        }
        &-column {
            flex-direction: column;
        }
    }

    .footer {
        padding: 0;
        background: $color-tertiary--lightest !important;
    }

    h6.title {
        color: $color-tertiary;
    }

    .m-b-m {
        margin-bottom: 30px;
    }

    .column {
        span {
            color: $color-tertiary;
            opacity: .8;
        }

        a {
            color: $color-tertiary;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }

        a.logo {
            opacity: 1;
            margin-top: 10px;

            &:first-of-type {
                margin-bottom: 25px;
            }
        }
    }

    .icon-wrapper {
        width: 28px;
        height: 24px;
    }

    .text-light {
        color: $grey-light;
    }
</style>


