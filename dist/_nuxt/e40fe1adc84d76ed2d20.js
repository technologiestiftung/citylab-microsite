(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{145:function(t,e,n){"use strict";var o={name:"Matomo",methods:{piwik:function(t){var u="https://piwik.technologiestiftung-berlin.de/";t.push(["setTrackerUrl",u+"matomo.php"]),t.push(["setSiteId","10"]);var e=document,g=e.createElement("script"),s=e.getElementsByTagName("script")[0];g.type="text/javascript",g.async=!0,g.defer=!0,g.src=u+"matomo.js",s.parentNode.insertBefore(g,s)}},mounted:function(){var t=window._paq||[];t.push(["setDocumentTitle",document.domain+"/"+document.title]),t.push(["setCookieDomain","*.www.citylab-berlin.org"]),t.push(["setDomains",["*.www.citylab-berlin.org","*.www.citylab-berlin.org"]]),t.push(["trackPageView"]),t.push(["enableLinkTracking"]),this.piwik(t)}},c=n(20),component=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);e.a=component.exports},281:function(t,e,n){"use strict";n.r(e);var content=n(146),o=n(147),c=n(148),r=n(145),l={components:{Navigation:o.a,Footer:c.a,Matomo:r.a},data:function(){return{lang:"de",content:content.a,direct:"/newsletter_unsubscribe_success_en"}}},m=n(20),component=Object(m.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation",{attrs:{scrolled:!0,lang:t.lang,content:t.content,direct:t.direct,anchorTags:!1}}),t._v(" "),n("section",{staticClass:"section is-medium"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title",staticStyle:{"margin-top":"100px"},domProps:{innerHTML:t._s(this.content[this.lang].register.unsubscribeSuccess.title)}}),t._v(" "),n("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(this.content[this.lang].register.unsubscribeSuccess.subtitle)}})])]),t._v(" "),n("Footer",{staticStyle:{position:"fixed",bottom:"0px",width:"100%"},attrs:{lang:t.lang,content:t.content}}),t._v(" "),n("Matomo")],1)},[],!1,null,null,null);e.default=component.exports}}]);