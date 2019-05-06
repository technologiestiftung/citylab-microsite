<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
		<HeroLight :image="'https://citylab-berlin.org/images/hero_img_mobility_symposium.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']" :subSubTitle="eventContent[lang]['subSubTitle']" />
        <section class="section is-medium event-content">
            <div class="container">
				<p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

				<h4 class="title">{{ eventContent[lang]['timeTitle'] }}</h4>
				<ul class="time-list">
					<li v-for="time in timeArr">
						<strong>{{ time[0] }}</strong>
						<span>{{ time[1] }}</span>
					</li>
				</ul>

				<div v-for="paragraph in parArr">
					<h4 class="title" v-if="paragraph.type === 'title'">{{ paragraph.content }}</h4>
					<p v-if="paragraph.type === 'paragraph'" v-html="paragraph.content"></p>
				</div>

				<h4 class="title">{{ eventContent[lang]['programTitle'] }}</h4>

				<h5 class="title">{{ eventContent[lang]['chairTitle'] }}</h5>
				<ul class="name-list">
					<li v-for="chair in chairArr">
						<strong>{{ chair[0] }}</strong>
						<span>{{ chair[1] }}</span>
					</li>
				</ul>

				<h5 class="title">{{ eventContent[lang]['memberTitle'] }}</h5>
				<ul class="name-list">
					<li v-for="member in memberArr">
						<strong>{{ member[0] }}</strong>
						<span>{{ member[1] }}</span>
					</li>
				</ul>

				<img id="organiser-logos" src="https://citylab-berlin.org/images/events/mobilitysymposium-organiser-logos.svg" alt="Organisatoren" />

				<p class="copyright">{{ eventContent[lang]['rights'] }}</p>

				<Matomo/>
            </div>
        </section>
		<Footer :lang="lang" :content="content"/>
	</div>
</template>

<script>
	import { 
  		content as content
	} from '../../assets/content.js';

  import { 
  		content as eventContent
	} from '../../assets/events/mobilitysymposium.js';

  import Navigation from '../../components/Navigation.vue';
  import HeroLight from '../../components/HeroLight.vue';
	import Footer from '../../components/Footer.vue';
	import Matomo from '../../components/Matomo.vue';
    
    export default {
        components: {
			Navigation,
			HeroLight,
			Footer,
			Matomo
		},
		data() {
			return {
				lang: 'de',
				content: content,
        eventContent: eventContent,
				direct: '/events/mobilitysymposium_en'
			}
		},
		computed: {
            timeArr() {
                return this.eventContent[this.lang].timeline
            },
			parArr() {
                return this.eventContent[this.lang].paragraphs
            },
			chairArr() {
                return this.eventContent[this.lang].chairs
            },
			memberArr() {
                return this.eventContent[this.lang].members
            }
        },
		head () {
			return {
				title: 'Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019) - ',
				meta: [
					{ name: 'description', content: 'Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)' },
					{ property: 'fb:app_id', content: '487094758334595'},
					{ property: 'og:url',  content: "https://www.citylab-berlin.org/events/mobilitysymposium"},
					{ property: 'og:type',  content: "website"},
					{ property: 'og:title',  content: "Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ property: 'og:image',  content: "https://citylab-berlin.org/images/evenets/mobilitysymposium_social_media.jpg"},
					{ property: 'og:description',  content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ property: 'og:site_name',  content: "CityLAB Berlin"},
					{ property: 'article:author',  content: "Sebastian Meier"},
					{ name: 'twitter:card', content:"summary"},
					{ name: 'twitter:site',  content: "@TSBBerlin"},
					{ name: 'twitter:creator',  content: "@seb_meier"},
					{ name: 'twitter:url', content: "https://www.citylab-berlin.org/events/mobilitysymposium"},
					{ name: 'twitter:title', content: "Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ name: 'twitter:description', content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ name: 'twitter:image', content: "https://citylab-berlin.org/images/evenets/mobilitysymposium_social_media.jpg"},
					{ itemprop: 'name', content:"Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ itemprop: 'description', content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ itemprop: 'image', content: "https://citylab-berlin.org/images/evenets/mobilitysymposium_social_media.jpg"},
				]
			}
		},
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


