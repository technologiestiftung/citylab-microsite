<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct"/>
		<Hero :lang="lang" :content="content" :direct="direct"/>
		<MissionStatement :lang="lang" :content="content" :direct="direct"/>
		<Projects :lang="lang" :content="content"/>
		<Team :lang="lang" :content="content" :direct="direct"/>
		<Footer :lang="lang" :content="content"/>
	</div>
</template>

<script>
	import { 
  		content as content
	} from '../assets/content.js';

	import Navigation from '../components/Navigation.vue';
	import Hero from '../components/Hero.vue';
	import MissionStatement from '../components/MissionStatement.vue';
	import Team from '../components/Team.vue';
	import Projects from '../components/Projects.vue';
	import Footer from '../components/Footer.vue';

	export default {
		components: {
			Navigation,
			Hero,
			MissionStatement,
			Team,
			Projects,
			Footer
		},
		data() {
			return {
				lang: 'en',
				content: content,
				direct: '/'
			}
		}
		
	}
</script>

<style>
</style>
