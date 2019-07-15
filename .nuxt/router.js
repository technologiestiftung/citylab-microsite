import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7c7aece0 = () => interopDefault(import('../pages/all_events.vue' /* webpackChunkName: "pages/all_events" */))
const _30eefed0 = () => interopDefault(import('../pages/all_events_en.vue' /* webpackChunkName: "pages/all_events_en" */))
const _4354ece7 = () => interopDefault(import('../pages/codeofconduct.vue' /* webpackChunkName: "pages/codeofconduct" */))
const _7a71af31 = () => interopDefault(import('../pages/codeofconduct_en.vue' /* webpackChunkName: "pages/codeofconduct_en" */))
const _0fce0e05 = () => interopDefault(import('../pages/dataprivacy.vue' /* webpackChunkName: "pages/dataprivacy" */))
const _3e669153 = () => interopDefault(import('../pages/dataprivacy_en.vue' /* webpackChunkName: "pages/dataprivacy_en" */))
const _01af20dc = () => interopDefault(import('../pages/downloads.vue' /* webpackChunkName: "pages/downloads" */))
const _0524a8a6 = () => interopDefault(import('../pages/downloads_en.vue' /* webpackChunkName: "pages/downloads_en" */))
const _f269d142 = () => interopDefault(import('../pages/index_en.vue' /* webpackChunkName: "pages/index_en" */))
const _078894d2 = () => interopDefault(import('../pages/legalnote.vue' /* webpackChunkName: "pages/legalnote" */))
const _9c990934 = () => interopDefault(import('../pages/legalnote_en.vue' /* webpackChunkName: "pages/legalnote_en" */))
const _1180d84d = () => interopDefault(import('../pages/newsletter_confirm_de.vue' /* webpackChunkName: "pages/newsletter_confirm_de" */))
const _13b48475 = () => interopDefault(import('../pages/newsletter_confirm_en.vue' /* webpackChunkName: "pages/newsletter_confirm_en" */))
const _8b148060 = () => interopDefault(import('../pages/newsletter_mailalreadyexists_de.vue' /* webpackChunkName: "pages/newsletter_mailalreadyexists_de" */))
const _86ad2810 = () => interopDefault(import('../pages/newsletter_mailalreadyexists_en.vue' /* webpackChunkName: "pages/newsletter_mailalreadyexists_en" */))
const _ec008ad0 = () => interopDefault(import('../pages/newsletter_mailblocked_de.vue' /* webpackChunkName: "pages/newsletter_mailblocked_de" */))
const _e7993280 = () => interopDefault(import('../pages/newsletter_mailblocked_en.vue' /* webpackChunkName: "pages/newsletter_mailblocked_en" */))
const _11ee77d6 = () => interopDefault(import('../pages/newsletter_mailformat_de.vue' /* webpackChunkName: "pages/newsletter_mailformat_de" */))
const _0d871f86 = () => interopDefault(import('../pages/newsletter_mailformat_en.vue' /* webpackChunkName: "pages/newsletter_mailformat_en" */))
const _8c10e422 = () => interopDefault(import('../pages/newsletter_missingcaptcha_de.vue' /* webpackChunkName: "pages/newsletter_missingcaptcha_de" */))
const _87a98bd2 = () => interopDefault(import('../pages/newsletter_missingcaptcha_en.vue' /* webpackChunkName: "pages/newsletter_missingcaptcha_en" */))
const _99003242 = () => interopDefault(import('../pages/newsletter_missinginput_de.vue' /* webpackChunkName: "pages/newsletter_missinginput_de" */))
const _9498d9f2 = () => interopDefault(import('../pages/newsletter_missinginput_en.vue' /* webpackChunkName: "pages/newsletter_missinginput_en" */))
const _31db4200 = () => interopDefault(import('../pages/newsletter_register_de.vue' /* webpackChunkName: "pages/newsletter_register_de" */))
const _2d73e9b0 = () => interopDefault(import('../pages/newsletter_register_en.vue' /* webpackChunkName: "pages/newsletter_register_en" */))
const _1a927932 = () => interopDefault(import('../pages/newsletter_register_en_xxxx.vue' /* webpackChunkName: "pages/newsletter_register_en_xxxx" */))
const _34f5c4ac = () => interopDefault(import('../pages/newsletter_success_de.vue' /* webpackChunkName: "pages/newsletter_success_de" */))
const _308e6c5c = () => interopDefault(import('../pages/newsletter_success_en.vue' /* webpackChunkName: "pages/newsletter_success_en" */))
const _994ab00a = () => interopDefault(import('../pages/newsletter_unsubscribe_confirm_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_confirm_de" */))
const _94e357ba = () => interopDefault(import('../pages/newsletter_unsubscribe_confirm_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_confirm_en" */))
const _64c15c9c = () => interopDefault(import('../pages/newsletter_unsubscribe_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_de" */))
const _66f508c4 = () => interopDefault(import('../pages/newsletter_unsubscribe_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_en" */))
const _f1422550 = () => interopDefault(import('../pages/newsletter_unsubscribe_success_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_success_de" */))
const _ecdacd00 = () => interopDefault(import('../pages/newsletter_unsubscribe_success_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_success_en" */))
const _24dd032c = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _18db0ace = () => interopDefault(import('../pages/press_en.vue' /* webpackChunkName: "pages/press_en" */))
const _7f4683a8 = () => interopDefault(import('../pages/resources_en.vue' /* webpackChunkName: "pages/resources_en" */))
const _1ca1065c = () => interopDefault(import('../pages/events/mobilitysymposium.vue' /* webpackChunkName: "pages/events/mobilitysymposium" */))
const _cd8fb4c8 = () => interopDefault(import('../pages/events/mobilitysymposium_en.vue' /* webpackChunkName: "pages/events/mobilitysymposium_en" */))
const _80b58910 = () => interopDefault(import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */))
const _18abb90e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/all_events",
      component: _7c7aece0,
      name: "all_events"
    }, {
      path: "/all_events_en",
      component: _30eefed0,
      name: "all_events_en"
    }, {
      path: "/codeofconduct",
      component: _4354ece7,
      name: "codeofconduct"
    }, {
      path: "/codeofconduct_en",
      component: _7a71af31,
      name: "codeofconduct_en"
    }, {
      path: "/dataprivacy",
      component: _0fce0e05,
      name: "dataprivacy"
    }, {
      path: "/dataprivacy_en",
      component: _3e669153,
      name: "dataprivacy_en"
    }, {
      path: "/downloads",
      component: _01af20dc,
      name: "downloads"
    }, {
      path: "/downloads_en",
      component: _0524a8a6,
      name: "downloads_en"
    }, {
      path: "/index_en",
      component: _f269d142,
      name: "index_en"
    }, {
      path: "/legalnote",
      component: _078894d2,
      name: "legalnote"
    }, {
      path: "/legalnote_en",
      component: _9c990934,
      name: "legalnote_en"
    }, {
      path: "/newsletter_confirm_de",
      component: _1180d84d,
      name: "newsletter_confirm_de"
    }, {
      path: "/newsletter_confirm_en",
      component: _13b48475,
      name: "newsletter_confirm_en"
    }, {
      path: "/newsletter_mailalreadyexists_de",
      component: _8b148060,
      name: "newsletter_mailalreadyexists_de"
    }, {
      path: "/newsletter_mailalreadyexists_en",
      component: _86ad2810,
      name: "newsletter_mailalreadyexists_en"
    }, {
      path: "/newsletter_mailblocked_de",
      component: _ec008ad0,
      name: "newsletter_mailblocked_de"
    }, {
      path: "/newsletter_mailblocked_en",
      component: _e7993280,
      name: "newsletter_mailblocked_en"
    }, {
      path: "/newsletter_mailformat_de",
      component: _11ee77d6,
      name: "newsletter_mailformat_de"
    }, {
      path: "/newsletter_mailformat_en",
      component: _0d871f86,
      name: "newsletter_mailformat_en"
    }, {
      path: "/newsletter_missingcaptcha_de",
      component: _8c10e422,
      name: "newsletter_missingcaptcha_de"
    }, {
      path: "/newsletter_missingcaptcha_en",
      component: _87a98bd2,
      name: "newsletter_missingcaptcha_en"
    }, {
      path: "/newsletter_missinginput_de",
      component: _99003242,
      name: "newsletter_missinginput_de"
    }, {
      path: "/newsletter_missinginput_en",
      component: _9498d9f2,
      name: "newsletter_missinginput_en"
    }, {
      path: "/newsletter_register_de",
      component: _31db4200,
      name: "newsletter_register_de"
    }, {
      path: "/newsletter_register_en",
      component: _2d73e9b0,
      name: "newsletter_register_en"
    }, {
      path: "/newsletter_register_en_xxxx",
      component: _1a927932,
      name: "newsletter_register_en_xxxx"
    }, {
      path: "/newsletter_success_de",
      component: _34f5c4ac,
      name: "newsletter_success_de"
    }, {
      path: "/newsletter_success_en",
      component: _308e6c5c,
      name: "newsletter_success_en"
    }, {
      path: "/newsletter_unsubscribe_confirm_de",
      component: _994ab00a,
      name: "newsletter_unsubscribe_confirm_de"
    }, {
      path: "/newsletter_unsubscribe_confirm_en",
      component: _94e357ba,
      name: "newsletter_unsubscribe_confirm_en"
    }, {
      path: "/newsletter_unsubscribe_de",
      component: _64c15c9c,
      name: "newsletter_unsubscribe_de"
    }, {
      path: "/newsletter_unsubscribe_en",
      component: _66f508c4,
      name: "newsletter_unsubscribe_en"
    }, {
      path: "/newsletter_unsubscribe_success_de",
      component: _f1422550,
      name: "newsletter_unsubscribe_success_de"
    }, {
      path: "/newsletter_unsubscribe_success_en",
      component: _ecdacd00,
      name: "newsletter_unsubscribe_success_en"
    }, {
      path: "/press",
      component: _24dd032c,
      name: "press"
    }, {
      path: "/press_en",
      component: _18db0ace,
      name: "press_en"
    }, {
      path: "/resources_en",
      component: _7f4683a8,
      name: "resources_en"
    }, {
      path: "/events/mobilitysymposium",
      component: _1ca1065c,
      name: "events-mobilitysymposium"
    }, {
      path: "/events/mobilitysymposium_en",
      component: _cd8fb4c8,
      name: "events-mobilitysymposium_en"
    }, {
      path: "/events/:event?",
      component: _80b58910,
      name: "events-event"
    }, {
      path: "/",
      component: _18abb90e,
      name: "index"
    }],

    fallback: false
  })
}
