<template>
	<div>
    <Navigation :lang="lang" :content="content" :direct="direct" :anchorTags="true"/>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">
          {{ this.duplicateMessage['title'] }}
        </h1>
        <h2 class="subtitle">{{ this.duplicateMessage['subtitle'] }}</h2>
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
				direct: '/newsletter_status/duplicatemail_de'
			}
    },
    computed: {
      duplicateMessage() { return this.content[this.lang]['register']['errors']['mailalreadyexists'] }
    }
	}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;
  }
</style>