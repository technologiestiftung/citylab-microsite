<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct"/>
		<Hero :lang="lang" :content="content" :direct="direct"/>
		<MissionStatement :lang="lang" :content="content" :direct="direct"/>
		<Projects :lang="lang" :content="content"/>
		<Team :lang="lang" :content="content" :direct="direct"/>
		<Footer :lang="lang" :content="content"/>

		<button @click="topFunction()" id="myBtn" class="button is-warning top">Top</button>
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
		},
		methods: {
			handleScroll () {
				this.scrollFunction();
			},
			scrollFunction() {
  				if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    				document.getElementById("myBtn").style.display = "block";
				} else {
					document.getElementById("myBtn").style.display = "none";
				}
			},
			topFunction() {
				document.body.scrollTop = 0; // For Safari
				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			}
		},
			created () {
				if (process.browser) { 
					window.addEventListener('scroll', this.handleScroll);
				}
			},
			destroyed () {
				if (process.browser) { 
					window.removeEventListener('scroll', this.handleScroll);
				}
			}
		}
</script>

<style lang="scss">
	button.top {
		position: fixed;
		bottom: 15px;
		right: 15px;
	}
</style>
