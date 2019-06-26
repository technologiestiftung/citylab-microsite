import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b98690ea = () => interopDefault(import('../pages/all_events.vue' /* webpackChunkName: "pages/all_events" */))
const _1948320d = () => interopDefault(import('../pages/all_events_en.vue' /* webpackChunkName: "pages/all_events_en" */))
const _75149e5c = () => interopDefault(import('../pages/codeofconduct.vue' /* webpackChunkName: "pages/codeofconduct" */))
const _6604e4c8 = () => interopDefault(import('../pages/codeofconduct_en.vue' /* webpackChunkName: "pages/codeofconduct_en" */))
const _7d74ce8c = () => interopDefault(import('../pages/dataprivacy.vue' /* webpackChunkName: "pages/dataprivacy" */))
const _449d0e7e = () => interopDefault(import('../pages/dataprivacy_en.vue' /* webpackChunkName: "pages/dataprivacy_en" */))
const _52fd2387 = () => interopDefault(import('../pages/downloads.vue' /* webpackChunkName: "pages/downloads" */))
const _fac316de = () => interopDefault(import('../pages/downloads_en.vue' /* webpackChunkName: "pages/downloads_en" */))
const _bb74de6c = () => interopDefault(import('../pages/index_en.vue' /* webpackChunkName: "pages/index_en" */))
const _5b5d48c7 = () => interopDefault(import('../pages/legalnote.vue' /* webpackChunkName: "pages/legalnote" */))
const _2f2d4751 = () => interopDefault(import('../pages/legalnote_en.vue' /* webpackChunkName: "pages/legalnote_en" */))
const _284644c2 = () => interopDefault(import('../pages/newsletter_confirm_de.vue' /* webpackChunkName: "pages/newsletter_confirm_de" */))
const _2a79f0ea = () => interopDefault(import('../pages/newsletter_confirm_en.vue' /* webpackChunkName: "pages/newsletter_confirm_en" */))
const _66e9de05 = () => interopDefault(import('../pages/newsletter_mailalreadyexists_de.vue' /* webpackChunkName: "pages/newsletter_mailalreadyexists_de" */))
const _691d8a2d = () => interopDefault(import('../pages/newsletter_mailalreadyexists_en.vue' /* webpackChunkName: "pages/newsletter_mailalreadyexists_en" */))
const _a2c036e6 = () => interopDefault(import('../pages/newsletter_mailblocked_de.vue' /* webpackChunkName: "pages/newsletter_mailblocked_de" */))
const _9e58de96 = () => interopDefault(import('../pages/newsletter_mailblocked_en.vue' /* webpackChunkName: "pages/newsletter_mailblocked_en" */))
const _411df100 = () => interopDefault(import('../pages/newsletter_mailformat_de.vue' /* webpackChunkName: "pages/newsletter_mailformat_de" */))
const _3cb698b0 = () => interopDefault(import('../pages/newsletter_mailformat_en.vue' /* webpackChunkName: "pages/newsletter_mailformat_en" */))
const _372bb84c = () => interopDefault(import('../pages/newsletter_missingcaptcha_de.vue' /* webpackChunkName: "pages/newsletter_missingcaptcha_de" */))
const _32c45ffc = () => interopDefault(import('../pages/newsletter_missingcaptcha_en.vue' /* webpackChunkName: "pages/newsletter_missingcaptcha_en" */))
const _22e4fb8a = () => interopDefault(import('../pages/newsletter_missinginput_de.vue' /* webpackChunkName: "pages/newsletter_missinginput_de" */))
const _2518a7b2 = () => interopDefault(import('../pages/newsletter_missinginput_en.vue' /* webpackChunkName: "pages/newsletter_missinginput_en" */))
const _ae0afdaa = () => interopDefault(import('../pages/newsletter_register_de.vue' /* webpackChunkName: "pages/newsletter_register_de" */))
const _a9a3a55a = () => interopDefault(import('../pages/newsletter_register_en.vue' /* webpackChunkName: "pages/newsletter_register_en" */))
const _82925dec = () => interopDefault(import('../pages/newsletter_register_en_lang.vue' /* webpackChunkName: "pages/newsletter_register_en_lang" */))
const _076aebc2 = () => interopDefault(import('../pages/newsletter_success_de.vue' /* webpackChunkName: "pages/newsletter_success_de" */))
const _03039372 = () => interopDefault(import('../pages/newsletter_success_en.vue' /* webpackChunkName: "pages/newsletter_success_en" */))
const _13400cf0 = () => interopDefault(import('../pages/newsletter_unsubscribe_confirm_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_confirm_de" */))
const _1573b918 = () => interopDefault(import('../pages/newsletter_unsubscribe_confirm_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_confirm_en" */))
const _ed3cf2de = () => interopDefault(import('../pages/newsletter_unsubscribe_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_de" */))
const _e8d59a8e = () => interopDefault(import('../pages/newsletter_unsubscribe_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_en" */))
const _31775b66 = () => interopDefault(import('../pages/newsletter_unsubscribe_success_de.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_success_de" */))
const _2d100316 = () => interopDefault(import('../pages/newsletter_unsubscribe_success_en.vue' /* webpackChunkName: "pages/newsletter_unsubscribe_success_en" */))
const _476074df = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _34558439 = () => interopDefault(import('../pages/press_en.vue' /* webpackChunkName: "pages/press_en" */))
const _050949c7 = () => interopDefault(import('../pages/events/mobilitysymposium.vue' /* webpackChunkName: "pages/events/mobilitysymposium" */))
const _1675a651 = () => interopDefault(import('../pages/events/mobilitysymposium_en.vue' /* webpackChunkName: "pages/events/mobilitysymposium_en" */))
const _1d362626 = () => interopDefault(import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */))
const _4d7919ee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _b98690ea,
      name: "all_events"
    }, {
      path: "/all_events_en",
      component: _1948320d,
      name: "all_events_en"
    }, {
      path: "/codeofconduct",
      component: _75149e5c,
      name: "codeofconduct"
    }, {
      path: "/codeofconduct_en",
      component: _6604e4c8,
      name: "codeofconduct_en"
    }, {
      path: "/dataprivacy",
      component: _7d74ce8c,
      name: "dataprivacy"
    }, {
      path: "/dataprivacy_en",
      component: _449d0e7e,
      name: "dataprivacy_en"
    }, {
      path: "/downloads",
      component: _52fd2387,
      name: "downloads"
    }, {
      path: "/downloads_en",
      component: _fac316de,
      name: "downloads_en"
    }, {
      path: "/index_en",
      component: _bb74de6c,
      name: "index_en"
    }, {
      path: "/legalnote",
      component: _5b5d48c7,
      name: "legalnote"
    }, {
      path: "/legalnote_en",
      component: _2f2d4751,
      name: "legalnote_en"
    }, {
      path: "/newsletter_confirm_de",
      component: _284644c2,
      name: "newsletter_confirm_de"
    }, {
      path: "/newsletter_confirm_en",
      component: _2a79f0ea,
      name: "newsletter_confirm_en"
    }, {
      path: "/newsletter_mailalreadyexists_de",
      component: _66e9de05,
      name: "newsletter_mailalreadyexists_de"
    }, {
      path: "/newsletter_mailalreadyexists_en",
      component: _691d8a2d,
      name: "newsletter_mailalreadyexists_en"
    }, {
      path: "/newsletter_mailblocked_de",
      component: _a2c036e6,
      name: "newsletter_mailblocked_de"
    }, {
      path: "/newsletter_mailblocked_en",
      component: _9e58de96,
      name: "newsletter_mailblocked_en"
    }, {
      path: "/newsletter_mailformat_de",
      component: _411df100,
      name: "newsletter_mailformat_de"
    }, {
      path: "/newsletter_mailformat_en",
      component: _3cb698b0,
      name: "newsletter_mailformat_en"
    }, {
      path: "/newsletter_missingcaptcha_de",
      component: _372bb84c,
      name: "newsletter_missingcaptcha_de"
    }, {
      path: "/newsletter_missingcaptcha_en",
      component: _32c45ffc,
      name: "newsletter_missingcaptcha_en"
    }, {
      path: "/newsletter_missinginput_de",
      component: _22e4fb8a,
      name: "newsletter_missinginput_de"
    }, {
      path: "/newsletter_missinginput_en",
      component: _2518a7b2,
      name: "newsletter_missinginput_en"
    }, {
      path: "/newsletter_register_de",
      component: _ae0afdaa,
      name: "newsletter_register_de"
    }, {
      path: "/newsletter_register_en",
      component: _a9a3a55a,
      name: "newsletter_register_en"
    }, {
      path: "/newsletter_register_en_lang",
      component: _82925dec,
      name: "newsletter_register_en_lang"
    }, {
      path: "/newsletter_success_de",
      component: _076aebc2,
      name: "newsletter_success_de"
    }, {
      path: "/newsletter_success_en",
      component: _03039372,
      name: "newsletter_success_en"
    }, {
      path: "/newsletter_unsubscribe_confirm_de",
      component: _13400cf0,
      name: "newsletter_unsubscribe_confirm_de"
    }, {
      path: "/newsletter_unsubscribe_confirm_en",
      component: _1573b918,
      name: "newsletter_unsubscribe_confirm_en"
    }, {
      path: "/newsletter_unsubscribe_de",
      component: _ed3cf2de,
      name: "newsletter_unsubscribe_de"
    }, {
      path: "/newsletter_unsubscribe_en",
      component: _e8d59a8e,
      name: "newsletter_unsubscribe_en"
    }, {
      path: "/newsletter_unsubscribe_success_de",
      component: _31775b66,
      name: "newsletter_unsubscribe_success_de"
    }, {
      path: "/newsletter_unsubscribe_success_en",
      component: _2d100316,
      name: "newsletter_unsubscribe_success_en"
    }, {
      path: "/press",
      component: _476074df,
      name: "press"
    }, {
      path: "/press_en",
      component: _34558439,
      name: "press_en"
    }, {
      path: "/events/mobilitysymposium",
      component: _050949c7,
      name: "events-mobilitysymposium"
    }, {
      path: "/events/mobilitysymposium_en",
      component: _1675a651,
      name: "events-mobilitysymposium_en"
    }, {
      path: "/events/:event?",
      component: _1d362626,
      name: "events-event"
    }, {
      path: "/",
      component: _4d7919ee,
      name: "index"
    }],

    fallback: false
  })
}
