<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ eventContent[lang]['title'] }}
                </h1>
				<h2>{{ eventContent[lang]['subTitle'] }}</h2>
				<h3>{{ eventContent[lang]['subSubTitle'] }}</h3>
				<p class="event-intro">{{ eventContent[lang]['intro'] }}</p>

				<h4>{{ eventContent[lang]['timeTitle'] }}</h4>
				<ul>
					<li v-for="time in timeArr">
						<strong>{{ time[0] }}</strong>
						<span>{{ time[1] }}</span>
					</li>
				</ul>

				<h4>{{ eventContent[lang]['programTitle'] }}</h4>

				<h5>{{ eventContent[lang]['chairTitle'] }}</h5>
				<ul>
					<li v-for="chair in chairArr">
						<strong>{{ chair[0] }}</strong>
						<span>{{ chair[1] }}</span>
					</li>
				</ul>

				<h5>{{ eventContent[lang]['memberTitle'] }}</h5>
				<ul>
					<li v-for="member in memberArr">
						<strong>{{ member[0] }}</strong>
						<span>{{ member[1] }}</span>
					</li>
				</ul>

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
	import Footer from '../../components/Footer.vue';
	import Matomo from '../../components/Matomo.vue';
    
    export default {
        components: {
			Navigation,
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
            }
        },
    }
</script>

<style lang="scss">
	@import "../../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
	}
</style>


