<template>
	<div>
    <Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">
          {{ this.confirmMessage['title'] }}
        </h1>
        <h2 class="subtitle">{{ this.confirmMessage['subtitle'] }}</h2>
        <p>{{ this.confirmMessage['p1'] }}</p>
        <p>{{ this.confirmMessage['p2'] }}</p>
      </div>
    </section>
    <Footer :lang="lang" :content="content"/>
	</div>
</template>

<script>
	import {
  		content as content
  } from '../../assets/content.js';
  
  import Navigation from '../../components/Navigation.vue';
	import Footer from '../../components/Footer.vue';

	export default {
		components: {
      Navigation,
      Footer
    },
		data() {
			return {
				lang: 'en',
				content: content,
				direct: '/newsletter_status/confirm_de'
			}
    },
    computed: {
      confirmMessage() { return this.content[this.lang]['register']['confirm'] }
    }
	}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;
  }
</style>