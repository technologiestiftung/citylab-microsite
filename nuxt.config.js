import pkg from './package'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
import axios from 'axios';

export default {
  generate: {
	routes: function () {
	return axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
		.then((res) => {
			let entries = res.data.feed.entry;
			const eventRoutes = entries.map((entry) => {
				return '/events/' + entry.gsx$dirname.$t
			})
      
			return eventRoutes;
		})
	}
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
	titleTemplate: '%sCityLAB',
	script: [
	  { src: 'https://citylab-berlin.org/matomo.js' }
	],
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  { hid: 'description', name: 'description', content: pkg.description },
	  { property: 'og:title', content: "CityLAB Berlin" },
	  { property: 'og:description', content: "CityLAB Berlin" },
	  { property: 'og:image', content: "https://citylab-berlin.org/images/social-graph.jpg" },
	  { property: 'og:url', content: "https://citylab-berlin.org" },
	  { property: 'twitter:card', content: "summary_large_image" },
	  { property: 'og:site_name', content: "CityLAB Berlin" },
	  { property: 'twitter:image:alt', content: "CityLAB Berlin" },
	  { property: 'twitter:image', content: "https://citylab-berlin.org/images/social-graph.jpg" },
	],
	link: [
	  { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' },
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
	'@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	// '~/plugins/fontawesome.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
	// Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
	[
	  'nuxt-fontawesome', {
	  component: 'font-awesome-icon', 
	  imports: [
		//import 2 icons from set 
		// please note this is PRO set in this example, 
		// you must have it in your node_modules to actually import
		{
		  set: '@fortawesome/free-solid-svg-icons',
		  icons: ['faEnvelope', 'faBicycle', 'faNewspaper', 'faStamp', 'faUserSecret', 'faGenderless', 'faGlobeEurope']
		}
	  ]
	}]
  ],

  /*
  ** Build configuration
  */
  build: {
	analyze: true,
	extractCSS: true,
	html: {
	  minify: {
		collapseBooleanAttributes: true,
		decodeEntities: true,
		minifyCSS: true,
		minifyJS: true,
		processConditionalComments: true,
		removeEmptyAttributes: true,
		removeRedundantAttributes: true,
		trimCustomFragments: true,
		useShortDoctype: true
	  }
	},
	postcss: {
	  preset: {
		features: {
		  customProperties: false
		}
	  },
	},
	/*
	** You can extend webpack config here
	*/
	extend(config, ctx) {
		// Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
		// for more information about purgecss.
		config.plugins.push(
		  new PurgecssPlugin({
			paths: glob.sync([
			  path.join(__dirname, './pages/**/*.vue'),
			  path.join(__dirname, './layouts/**/*.vue'),
			  path.join(__dirname, './components/**/*.vue')
			]),
			whitelist: ['html', 'body']
		  })
		)
	}
  }
}
