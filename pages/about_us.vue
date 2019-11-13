<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
		<Paragraph  style="margin-top: 100px" :content='content' :lang='lang' topic="aboutus" subtopic="funding"/>
		<Teaser :content='content' :lang='lang' id="coworking" topic="aboutus" subtopic="coworking"/>
		<Paragraph :content='content' :lang='lang' topic="aboutus" subtopic="funding"/>
		<Teaser :content='content' :lang='lang' id="event" topic="aboutus" subtopic="event"/>
		<Footer :lang="lang" :content="content"/>
		<Matomo/>
	</div>
</template>

<script>
	import {
  		content as content
	} from '../assets/content.js';

	import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Paragraph from '../components/Paragraph.vue';
	import Matomo from '../components/Matomo.vue';
	import Teaser from '../components/Teaser.vue';

	export default {
			components: {
		Navigation,
		Footer,
		Paragraph,
		Matomo,
		Teaser
	},
	data() {
		return {
			lang: 'de',
			content: content,
			direct: '/codeofconduct_en'
		}
	},
	computed: {
					pointsArr() {
							return this.content[this.lang]['codeofconduct']['points']
					}
			},
	}
</script>

<style lang="scss">
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
	}
</style>


