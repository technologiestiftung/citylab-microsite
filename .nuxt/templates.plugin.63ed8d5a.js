import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faEnvelope as fortawesomefreesolidsvgicons_faEnvelope } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEnvelope)

    import  { faBicycle as fortawesomefreesolidsvgicons_faBicycle } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faBicycle)

    import  { faNewspaper as fortawesomefreesolidsvgicons_faNewspaper } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faNewspaper)

    import  { faStamp as fortawesomefreesolidsvgicons_faStamp } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faStamp)

    import  { faUserSecret as fortawesomefreesolidsvgicons_faUserSecret } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faUserSecret)

    import  { faGenderless as fortawesomefreesolidsvgicons_faGenderless } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGenderless)

    import  { faGlobeEurope as fortawesomefreesolidsvgicons_faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGlobeEurope)

    import  { faInfo as fortawesomefreesolidsvgicons_faInfo } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faInfo)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon-layers', FontAwesomeLayers)
Vue.component('font-awesome-icon-layers-text', FontAwesomeLayersText)
