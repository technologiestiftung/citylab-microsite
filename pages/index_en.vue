<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
		<Hero :lang="lang" :content="content" :direct="direct"/>
		<MissionStatement :lang="lang" :content="content" :direct="direct"/>
		<Tiles :lang="lang" :content="content" :direct="direct"/>
		<Topics :lang="lang" :content="content" :direct="direct" />
		<Call :lang="lang" :content="content"/>
		<Newsletter :lang="lang" :content="content" :direct="direct"/>
		<Team :lang="lang" :content="content" :direct="direct"/>
		<Schedule :lang="lang" :content="content" :direct="direct" :links="links"/>
		<!-- <Partners :lang="lang" :content="content" :direct="direct"/> -->
		<!-- <Cta :lang="lang" :content="content"/> -->
		<Footer :lang="lang" :content="content"/>

		<button @click="topFunction()" id="myBtn" class="is-color-tertiary top">
			<font-awesome-icon far :icon="arrowUp"/>
		</button>
	</div>
</template>

<script>
	import { content as content } from '../assets/content.js';
	import { links as links } from '../assets/links.js';

	import Navigation from '../components/Navigation.vue';
	import Hero from '../components/Hero.vue';
	import MissionStatement from '../components/MissionStatement.vue';
	import Team from '../components/Team.vue';
	import Call from '../components/Call.vue';
	import Footer from '../components/Footer.vue';
	import Cta from '../components/Cta.vue';
	import Topics from '../components/Topics.vue';
	import Tiles from '../components/Tiles.vue';
	import Partners from '../components/Partners.vue';
	import Schedule from '../components/Schedule.vue';
	import Newsletter from '../components/Newsletter.vue';

	import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

	export default {
		
		components: {
			Navigation,
			Hero,
			MissionStatement,
			Team,
			Call,
			Cta,
			Schedule,
			Footer,
			Topics,
			Partners,
			Newsletter,
			Tiles,
		},
		data() {
			return {
				lang: 'en',
				content: content,
				links: links,
				direct: '/'
			}
		},
		computed: {
			arrowUp() {
				return faArrowAltCircleUp;
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

	@import "../assets/style/style.scss";


	button.top {
		width: 40px;
		height: 40px;
		position: fixed;
		bottom: 10px;
		right: 10px;
		padding-top: 3px !important;
		cursor: pointer;

		&:focus {
			outline: 0;
		}

		&:hover {
			color: $color-tertiary--medium;
		}
	}

	.is-color-tertiary {
		background: none;
		color: $color-tertiary;
		border: none;
		font-size: 24px;
	}
</style>
