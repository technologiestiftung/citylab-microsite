<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['codeofconduct']['title'] }}
                </h1>

				<ol>
					<li style="margin-bottom: 20px;" v-for="point in pointsArr">{{point}}</li>
				</ol>

				<Matomo/>
            </div>
        </section>
		<Footer :lang="lang" :content="content"/>
	</div>
</template>

<script>
	import { 
  		content as content
	} from '../assets/content.js';

    import Navigation from '../components/Navigation.vue';
	import Footer from '../components/Footer.vue';
	import Matomo from '../components/Matomo.vue';
    
    export default {
        components: {
			Navigation,
			Footer,
			Matomo
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


