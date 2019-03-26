<template>
	<section class="container">
		<Navigation :lang="lang" :content="content" :direct="direct"/>
		<Hero :lang="lang" :content="content" :direct="direct"/>
		<MissionStatement :lang="lang" :content="content" :direct="direct"/>
	</section>
</template>

<script>
	import { 
  		content as content
	} from '../assets/content.js';

	import Navigation from '../components/Navigation.vue';
	import Hero from '../components/Hero.vue';
	import MissionStatement from '../components/MissionStatement.vue';

	export default {
		components: {
			Navigation,
			Hero,
			MissionStatement
		},
		data() {
			return {
				lang: 'ger',
				content: content,
				direct: '/index_en'
			}
		}
		
	}
</script>

<style>
</style>
