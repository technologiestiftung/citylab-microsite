<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
		<Hero :lang="lang" :content="content" :direct="direct"/>
		<MissionStatement :lang="lang" :content="content" :direct="direct"/>
		<Tiles :lang="lang" :content="content" :direct="direct"/>
		<Topics :lang="lang" :content="content" :direct="direct" />
		<Funding :lang="lang" :content="content" :direct="direct" />
    	<Call :lang="lang" :content="content"/>
		<!-- <Projects :lang="lang" :content="content"/> -->
		<Schedule v-if="eventsVisible" :lang="lang" :content="content" :direct="direct" :links="links"/>
		<Newsletter :lang="lang" :content="content" :direct="direct"/>
		<Team :lang="lang" :content="content" :direct="direct"/>
		<!-- <Partners :lang="lang" :content="content" :direct="direct"/> -->
		<!-- <Cta :lang="lang" :content="content"/> -->
		<Footer :lang="lang" :content="content"/>

		<button @click="topFunction()" id="myBtn" class="is-color-tertiary top">
			<font-awesome-icon far :icon="arrowUp"/>
		</button>
	</div>
</template>

<script>
	import pkg from '../package'
	import { content as content } from '../assets/content.js';
	import { links as links } from '../assets/links.js';

	import Navigation from '../components/Navigation.vue';
	import Hero from '../components/Hero.vue';
	import MissionStatement from '../components/MissionStatement.vue';
	import Team from '../components/Team.vue';
	import Funding from '../components/Funding.vue';
  import Call from '../components/Call.vue';
	import Footer from '../components/Footer.vue';
	import Cta from '../components/Cta.vue';
	import Topics from '../components/Topics.vue';
	import Tiles from '../components/Tiles.vue';
	import Partners from '../components/Partners.vue';
	import Projects from '../components/Projects.vue';
	import Schedule from '../components/Schedule.vue';
	import Newsletter from '../components/Newsletter.vue';

	import axios from 'axios';
	import { mapState } from 'vuex';

	import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

	export default {

		components: {
			Navigation,
			Hero,
			MissionStatement,
			Team,
      Call,
      Funding,
			Cta,
			Schedule,
			Footer,
			Topics,
			Partners,
			Projects,
			Newsletter,
			Tiles,
		},
		data() {
			return {
				lang: 'de',
				content: content,
				links: links,
				direct: '/index_en',
				entries: null,
				obj: []
			}
		},
		beforeCreate() {
            axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
            .then((res) => {
                let entries = res.data.feed.entry;

                this.entries = entries;

                entries.forEach(entry => {
                    let obj = {
                        time: entry.gsx$datetime.$t,
                        title: entry.gsx$eventname.$t,
                        visible: entry.gsx$visible.$t
                    }
					this.obj.push(obj);
                })
            })
        },
		computed: {
			arrowUp() {
				return faArrowAltCircleUp;
			},
			eventsVisible() {
				let val = false;
				this.obj.forEach(entry => {
					if (entry.visible == 'TRUE') {
						val = true;
					}
				})

				return val;
			},
			...mapState(['offset'])
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
			},
			setOffset(boolean) {
                this.$store.dispatch("SET_OFFSET", boolean);
            },
		},
		mounted() {
			if (process.browser) {

				window.addEventListener("hashchange", () => {
					console.log(window.scrollY);

					if (!this.offset) {
						console.log('without offset')
						window.scrollTo(window.scrollX, window.scrollY - 75);
						this.setOffset(true);
					} else if (this.offset) {
						console.log('it works!')
						window.scrollTo(window.scrollX, window.scrollY);
					}
				});

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
