<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct"/>
        <section class="section downloads">
            <div class="container">
                <h1 class="title">
                    {{ content[lang]['downloads']['title'] }}
                </h1>
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
    
    export default {
        components: {
			Navigation,
			Footer,
		},
		data() {
			return {
				lang: 'en',
				content: content,
				direct: '/downloads'
			}
		},
    }
</script>

<style lang="scss">
    
</style>


