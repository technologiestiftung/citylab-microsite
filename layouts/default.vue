<template>
  <div>
    <nuxt />
    <div class="technical-issues-note">
      Aufgrund von Wartungsarbeiten werden einige Seiten momentan nicht korrekt
      dargestellt. Wir arbeiten an einer Lösung. Aktuelle Veranstaltungshinweise
      findet ihr auf unseren
      <a
        href="https://twitter.com/citylabberlin"
        target="_blank"
        rel="noopener noreferrer"
        >Twitter</a
      >
      - und
      <a
        href="https://www.instagram.com/citylabbln/"
        target="_blank"
        rel="noopener noreferrer"
        >Instagram</a
      >-Profilen.
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.technical-issues-note {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 12px;
  background-color: #2f2fa2;
  color: white;
  z-index: 9999;
  font-size: 0.9rem;
  border-top: 2px solid white;
}

.technical-issues-note a {
  color: white;
  text-decoration: underline;
}

.technical-issues-note a:hover {
  color: white;
}
</style>
