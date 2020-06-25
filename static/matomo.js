var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['setDocumentTitle', document.domain + '/' + document.title]);
_paq.push(['setCookieDomain', '*.www.citylab-berlin.org']);
_paq.push([
  'setDomains',
  ['*.www.citylab-berlin.org', '*.www.citylab-berlin.org'],
]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
  var u = 'https://piwik.technologiestiftung-berlin.de/';
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '10']);
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.type = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src = u + 'matomo.js';
  s.parentNode.insertBefore(g, s);
})();
