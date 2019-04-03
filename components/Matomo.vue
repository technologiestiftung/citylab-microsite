<template>
</template>

<script>
    export default {
        name: 'Matomo',
        mounted() {
                let _paq = _paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);

                let u="https://piwik.technologiestiftung-berlin.de/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '10']);
                let d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
        }       
    }
</script>

<style>

</style>


