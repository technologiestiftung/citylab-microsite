<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false" />
		<HeroLight :image="'https://citylab-berlin.org/images/hero_img_mobility_symposium.jpg'" :title="eventContent[lang]['title']" :subTitle="eventContent[lang]['subTitle']" :subSubTitle="eventContent[lang]['subSubTitle']" />
        <section class="section is-medium event-content">
            <div class="container">
				<p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

        <h4 class="title">Preliminary Program</h4>

        <ul>
          <li v-for="item in program">
						<strong>{{ item.time }}</strong>
						<span class="speaker">{{ item.name }}</span>
            <span class="title">{{ item.title }}</span>
					</li>
        </ul>

				<div id="eventbrite-notice">
					For the ordering of tickets we use Eventbrite. For the ordering eventbrite's <a href="https://www.eventbrite.com/l/LegalTerms/">legal terms</a>, <a href="https://www.eventbrite.com/support/articles/en_US/Troubleshooting/eventbrite-privacy-policy?lg=en_US">privacy policy</a> and <a href="https://www.eventbrite.co.uk/support/articles/en_US/Troubleshooting/eventbrite-cookie-policy?lg=en_GB">cookie policy</a> applies.
				</div>

				<style>
					#eventbrite-widget-container-68243631539 iframe{
						height:100% !important;
					}
				</style>

				<div id="eventbrite-widget-container-68243631539"></div>

				<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

				<script type="text/javascript">
				    var exampleCallback = function() {
				        console.log('Order complete!');
				    };

				    window.EBWidgets.createWidget({
				        // Required
				        widgetType: 'checkout',
				        eventId: '68243631539',
				        iframeContainerId: 'eventbrite-widget-container-68243631539',

				        // Optional
				        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
				        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
				    });
				</script>

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

        <div id="financial-support">
          <p v-html="eventContent[lang]['financialSupport']"></p>
        </div>

				<img id="organiser-logos" src="https://citylab-berlin.org/images/events/mobilitysymposium-organiser-logos.svg" alt="Organisers" />

        <h3 class="title">Call for Papers</h3>

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
				lang: 'en',
				content: content,
        		eventContent: eventContent,
				direct: '/events/mobilitysymposium'
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
      },
			program() {
        return this.eventContent[this.lang].program
      }
    },
		head () {
			return {
				title: 'Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019) - ',
				meta: [
					{ hid: 'description', name: 'description', content: 'Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)' },
					{ hid: 'fb:app_id', property: 'fb:app_id', content: '487094758334595'},
					{ hid: 'og:type', property: 'og:type',  content: "website"},
					{ hid: 'og:title', property: 'og:title',  content: "Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ hid: 'og:image', property: 'og:image',  content: "https://citylab-berlin.org/images/events/mobilitysymposium_social_media.jpg"},
					{ hid: 'og:description', property: 'og:description',  content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ hid: 'og:site_name', property: 'og:site_name',  content: "CityLAB Berlin"},
					{ hid: 'article:author', property: 'article:author',  content: "Sebastian Meier"},
					{ hid: 'twitter:card', name: 'twitter:card', content:"summary"},
					{ hid: 'twitter:site', name: 'twitter:site',  content: "@TSBBerlin"},
					{ hid: 'twitter:creator', name: 'twitter:creator',  content: "@seb_meier"},
					{ hid: 'twitter:url', name: 'twitter:url', content: "https://www.citylab-berlin.org/events/mobilitysymposium"},
					{ hid: 'twitter:title', name: 'twitter:title', content: "Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ hid: 'twitter:description', name: 'twitter:description', content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ hid: 'twitter:image', name: 'twitter:image', content: "https://citylab-berlin.org/images/events/mobilitysymposium_social_media.jpg"},
					{ hid: 'name', itemprop: 'name', content:"Urban Mobility Symposium - Karten, Daten, Geovisualisierung (11.10.2019 - CityLAB Berlin)"},
					{ hid: 'description', itemprop: 'description', content: "The symposium focusses on the processing, analysis and presentation of spatial information in the context of urban mobility. From cartographic applications and products for visual analysis, communication and presentation of mobility data, to geoinformatics solutions for multimodal routings or traffic flow optimization. A desirable, but not compelling focus is on approaches that deal with new innovations for more sustainable mobility solutions."},
					{ hid: 'image', itemprop: 'image', content: "https://citylab-berlin.org/images/events/mobilitysymposium_social_media.jpg"},
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


