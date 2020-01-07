<template>
    <div>
		<Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    Data privacy
                </h1>

				<p class="content">
					Please refer to the <a href="/dataprivacy" title="Öffnet internen Link im aktuellen Fenster" class="external-link-new-window">German section</a>.&nbsp;
				</p>
				
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

<style lang="scss" scoped>
	@import "../assets/style/style.scss";
    h1.title, h3.title {
		color: $color-secondary;
	}
    ul {
		padding-left: 40px;
		list-style: circle;
	}
</style>


