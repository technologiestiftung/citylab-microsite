<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['coworking']['title'] }}
                </h1>
                <h2 class="subtitle">
				          	{{ content[lang]['coworking']['subtitle'] }}
				        </h2>

				<ol>
					<li style="margin-bottom: 20px;" v-for="point in pointsArr">{{point}}</li>
          <li v-html="content[lang]['coworking']['linktext']"> </li>
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
				lang: 'en',
				content: content,
				direct: '/coworking'
			}
		},
		computed: {
            pointsArr() {
                return this.content[this.lang]['coworking']['points']
            }
        },
    }
</script>

<style lang="scss">
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
    margin-bottom: 1.5rem;
	}
  	h2.subtitle {
		margin-top: 0 !important;
	}

</style>




