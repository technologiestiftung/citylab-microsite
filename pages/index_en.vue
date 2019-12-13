<template>
	<div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
		<TeaserIntro :content='content' :lang='lang' topic="hero" subtopic="intro"/>
		<!-- <Hero :lang="lang" :content="content" :direct="direct"/> -->
		<Topics :lang="lang" :content="content" :direct="direct" />
		<Paragraph :content='content' :lang='lang' topic="collaborate" subtopic="paragraph"/>
		<Projects :lang="lang" :content="content"/>
		<Teaser :content='content' :lang='lang' id="exhibition" topic="exhibition" subtopic="teaser"/>
		<Schedule v-if="eventsVisible" :lang="lang" :content="content" :direct="direct" :links="links"/>
		<Newsletter :lang="lang" :content="content" :direct="direct"/>
		<!-- <Partners :lang="lang" :content="content" :direct="direct"/> -->
		<!-- <Cta :lang="lang" :content="content"/> -->
		<Footer :lang="lang" :content="content"/>

		<button @click="topFunction()" id="myBtn" class="arrow-up top">↑</button>
	</div>
</template>

<script>
	import { content as content } from '../assets/content.js';
	import { links as links } from '../assets/links.js';

	import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Cta from '../components/Cta.vue';
	import Teaser from '../components/Teaser.vue';
	import Topics from '../components/Topics.vue';
	import TeaserIntro from '../components/TeaserIntro.vue';
	import Partners from '../components/Partners.vue';
	import Projects from '../components/Projects.vue';
	import Schedule from '../components/Schedule.vue';
	import Newsletter from '../components/Newsletter.vue';
	import Paragraph from '../components/Paragraph.vue';

	import axios from 'axios';
	import { mapState } from 'vuex';

	import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

	export default {

		components: {
			Navigation,
			Cta,
			Schedule,
			Paragraph,
			Footer,
			Topics,
			Partners,
			TeaserIntro,
			Teaser,
			Projects,
			Newsletter,
		},
		data() {
			return {
				lang: 'en',
				content: content,
				links: links,
				direct: '/',
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

					if (!this.offset) {
						window.scrollTo(window.scrollX, window.scrollY - 75);
						this.setOffset(true);
					} else if (this.offset) {
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

	.arrow-up {
		font-size: 40px !important;
		color: $color-primary;
		padding: 0px 44px 57px 16px;
		border-radius: 100px;
		margin-right: 30px;
		margin-bottom: 30px;
		background: #F4F4FA;
		border: none;
		transition: all .125s ease-in-out;

		&:hover {
			background: $color-primary;
			color: white !important;
			transition: all .125s ease-in-out;
		}
	}
</style>
