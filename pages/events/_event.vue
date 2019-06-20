<template>
    <div>
        <!-- <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" /> -->
        <HeroLight 
            :image="'https://citylab-berlin.org/images/hero_img_mobility_symposium.jpg'" 
            :title="title" 
            :subTitle="subtitle" 
            :subSubTitle="subsubtitle" 
        />
        <section class="section is-medium event-content">
            <div class="container">
            </div>
        </section>
    </div>
</template>

<script>
    import Navigation from '../../components/Navigation.vue';
    import HeroLight from '../../components/HeroLight.vue';
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
                    direct: `/events/${params.event}`
                }
            },
            components: {
                Navigation,
                HeroLight
            },
            computed: {
                title() {
                    if (this.data != null) { return this.data.gsx$eventname.$t } else { return }
                },
                subtitle() {
                    if (this.data != null) { return this.data.gsx$subline.$t } else { return }
                },
                subsubtitle() {
                    if (this.data != null) { return this.data.gsx$subsubline.$t } else { return }
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



