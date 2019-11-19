<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
		<Paragraph  style="margin-top: 100px" :content='content' :lang='lang' :topic="topic" subtopic="funding"/>
		<ExpansionPanel :topic="topic" subtopic="funding" :lang="lang" :content="content" />
		<Teaser :content='content' :lang='lang' id="coworking" :topic="topic" subtopic="coworking"/>
		<ExpansionPanel :topic="topic" subtopic="coworking" :lang="lang" :content="content" />
		<Paragraph :content='content' :lang='lang' :topic="topic" subtopic="project"/>
		<Teaser :content='content' :lang='lang' id="event" :topic="topic" subtopic="event"/>
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
	import ExpansionPanel from '../components/ExpansionPanel.vue';
	import Teaser from '../components/Teaser.vue';

	export default {
		components: {
			Navigation,
			ExpansionPanel,
			Footer,
			Paragraph,
			Matomo,
			Teaser
		},
		data() {
			return {
				lang: 'en',
				content: content,
				direct: '/collaborate',
				topic: 'collaborate'
			}
		}
	}
</script>

<style lang="scss">
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
	}
</style>


