<template>
    <div>
		<Navigation :scrolled="true" :lang="lang" :content="content" :direct="direct" :anchorTags="false"/>
        <section class="section is-medium">
            <div class="container">
                <h1 class="title" style="margin-top: 100px">
                    {{ content[lang]['dataprivacy']['title1'] }}
                </h1>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['reason']['title'] }}
				</h3>

				<p class="content">
					{{ content[lang]['dataprivacy']['reason']['p1'] }}
				</p>

				<p class="content">
					{{ content[lang]['dataprivacy']['reason']['p2'] }}
				</p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['responsible']['title'] }}
				</h3>

				<p class="content">
					{{ content[lang]['dataprivacy']['responsible']['p1'] }}
				</p>

				<p class="content" v-html="content[lang]['dataprivacy']['responsible']['p2']"></p>

				<p class="content" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['responsible']['p3'] }}
				</p>

				<a style="margin-bottom: 5px" :href="`mailto:${content[lang]['dataprivacy']['responsible']['mail_url']}`" class="content"> 
					{{ content[lang]['dataprivacy']['responsible']['mail_name'] }} 
				</a>

				<br/>

				<a style="cursor: auto;" :href="`mailto:${content[lang]['dataprivacy']['responsible']['site_url']}`" class="content"> 
					{{ content[lang]['dataprivacy']['responsible']['site_name'] }} 
				</a>

				<br/><br/>

				<p class="content">
					{{ content[lang]['dataprivacy']['responsible']['p4'] }}
				</p>

				<p class="content" v-html="content[lang]['dataprivacy']['responsible']['p5']"></p>

				<p style="margin-bottom: 5px" class="content">
					{{ content[lang]['dataprivacy']['responsible']['p6'] }}
				</p>

				<a style="cursor: auto;" :href="`mailto:${content[lang]['dataprivacy']['responsible']['mail_url']}`" class="content"> 
					{{ content[lang]['dataprivacy']['responsible']['mail_name'] }} 
				</a>

				<br/><br/>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['general']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['general']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['general']['p2']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['general']['ul1']"></ul>

				<p class="content" v-html="content[lang]['dataprivacy']['general']['p3']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['general']['ul2']"></ul>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['revocation']['title'] }}
				</h3>
				
				<p class="content" v-html="content[lang]['dataprivacy']['general']['p1']"></p>
				
				<p class="content" v-html="content[lang]['dataprivacy']['general']['p2']"></p>
				
				<p class="content" v-html="content[lang]['dataprivacy']['general']['p3']"></p>
				
				<p class="content" v-html="content[lang]['dataprivacy']['general']['p4']"></p>

                <h1 class="title">
                    {{ content[lang]['dataprivacy']['title2'] }}
                </h1>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['websites']['title'] }}
				</h3>
				
				<p class="content" v-html="content[lang]['dataprivacy']['websites']['p1']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['websites']['ul1']"></ul>

				<p class="content" v-html="content[lang]['dataprivacy']['websites']['p2']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['websites']['p3']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['websites']['p4']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['websites']['ul2']"></ul>

				<p class="content" v-html="content[lang]['dataprivacy']['websites']['p6']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['websites']['ul3']"></ul>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['cookies']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['cookies']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['cookies']['p2']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['cookies']['p3']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['cookies']['p4']"></p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['analyse']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p2']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['analyse']['ul1']"></ul>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p4']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p5']"></p>

				<iframe style="border: 0; height: 200px; width: 600px;" src="https://piwik.technologiestiftung-berlin.de/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=de"></iframe>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p6']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['analyse']['p7']"></p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['newsletter']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p2']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p3']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p4']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p5']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p6']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p7']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['newsletter']['p8']"></p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['events']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['events']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['events']['p2']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['events']['p3']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['events']['p4']"></p>

				<h3 class="title is-5" style="margin-bottom: 5px">
					{{ content[lang]['dataprivacy']['thirds']['title'] }}
				</h3>

				<p class="content" v-html="content[lang]['dataprivacy']['thirds']['p1']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['thirds']['p2']"></p>

				<ul class="content" v-html="content[lang]['dataprivacy']['thirds']['ul1']"></ul>

				<p class="content" v-html="content[lang]['dataprivacy']['thirds']['p3']"></p>

				<p class="content" v-html="content[lang]['dataprivacy']['thirds']['p4']"></p>

				
            </div>
			<Matomo/>
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


