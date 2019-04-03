<template>
    <footer class="footer">
        <section class="section is-medium">
            <div class="container">

            
                <div class="columns">
                    <div class="column is-4">
                        <h6 class="title is-5">
                            {{ content[lang]['footer']['contact']['title'] }}
                        </h6>

                        <a class="flex flex-row m-b-sm" :href="directGoogleMaps">
                            <div class="icon-wrapper">
                                <font-awesome-icon far icon="bicycle" />
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['contact']['address_street'] }}
                                <br/>
                                {{ content[lang]['footer']['contact']['address_code'] }}
                            </p>
                        </a>

                        <a class="flex flex-row" :href="mailtoCitylab">
                            <div class="icon-wrapper">
                                <font-awesome-icon far icon="envelope" />
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['contact']['mail'] }}
                            </p>
                        </a>

                    </div>

                    <div class="column is-4">
                        <h6 class="title is-5">
                            {{ content[lang]['footer']['more']['title'] }}
                        </h6>
                        
                        <nuxt-link class="flex flex-row m-b-sm" :to="directDownloads">
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
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directImprint">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(1px); margin-right: 5px;" far icon="stamp"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['imprint'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directDataprivacy">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(1px); margin-right: 5px;" far icon="user-secret"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['dataprivacy'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directCodeofconduct">
                            <div class="icon-wrapper">
                                <font-awesome-icon style="transform: translateY(1px); margin-right: 5px;" far icon="genderless"/>
                            </div>
                            <p class="content">
                                {{ content[lang]['footer']['more']['codeofconduct'] }}
                            </p>
                        </nuxt-link>

                    </div>

                    <div class="column is-4">
                        <h6 class="title is-5">
                            {{ content[lang]['footer']['funding']['title'] }}
                        </h6>
                        <a class="flex flex-row m-b-sm" href="https://www.lbb.de/landesbank/de/index.html">
                            LBB
                        </a>
                        <a class="flex flex-row m-b-sm" href="#">
                            SenWEB
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
                    },
                    en: {
                        downloads: '/downloads_en',
                        press: '/press_en',
                        imprint: '/legalnote_en',
                        dataprivacy: '/dataprivacy_en',
                        code: '/codeofconduct_en',
                    }
                }
            }
        },
        computed: {
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
                return 'mailto:hello@citylabberlin.de'
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
    }

    .footer {
        padding: 0;
        background: $color-tertiary--lightest !important;
    }

    h6.title {
        color: $color-tertiary;
    }

    .column {
        a {
            color: $color-tertiary;
            opacity: 0.6;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    .icon-wrapper {
        width: 28px;
    }

    .text-light {
        color: $grey-light;
    }
</style>


