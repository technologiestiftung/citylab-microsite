<template>
    <div>
        <Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" v-html="this.content[this.lang]['register']['success']['title']" style="margin-top: 100px"></h1>

                <h2 class="subtitle" v-html="this.content[this.lang]['register']['success']['subtitle']"></h2>

                <p v-html="this.content[this.lang]['register']['success']['p1']"></p>


                <p v-html="this.content[this.lang]['register']['success']['p2']"></p>
            </div>
        </section>
        <Footer style="position: fixed; bottom: 0px; width: 100%;" :lang="lang" :content="content"/>
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
				direct: '/legalnote_en'
			}
		},
    }
</script>

<style>

</style>


