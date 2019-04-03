<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct"/>
        <section class="section">
            <div class="container">
                <h1 class="title">
                    {{ content[lang]['press']['title'] }}
                </h1>
            </div>
        </section>
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
				direct: '/press_en'
			}
		},
    }
</script>

<style lang="scss">
    
</style>


