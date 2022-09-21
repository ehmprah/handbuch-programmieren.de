/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "11b6c8b6be978477015512d1ec46f76c"
  },
  {
    "url": "a/7-tipps-karriere-programmierer.html",
    "revision": "317b9e21b6754606b134f96c38ec196e"
  },
  {
    "url": "a/agile-softwareentwicklung-in-kürze.html",
    "revision": "70873ebf928ad96be05b89884f262402"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "c4efa97c8d6441f916e6fb17a7be6498"
  },
  {
    "url": "a/automatisierte-tests.html",
    "revision": "8fe3a27c06b9a104d4dd84cf481ca118"
  },
  {
    "url": "a/code-ist-ein-werkzeug.html",
    "revision": "00a465c946a21ed2f20ea03d9824c5e3"
  },
  {
    "url": "a/code-richtig-kommentieren.html",
    "revision": "7af269ce40857112a17ade173a91d418"
  },
  {
    "url": "a/deine-beste-werbung-bist-du.html",
    "revision": "a809c10cc594394e0362e5f681590e11"
  },
  {
    "url": "a/deine-erfahrungen-sind-gefragt.html",
    "revision": "a1092ff8604d7f66c5d264a3080ba1dd"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "0c7740d708e20c274d7a330d65179613"
  },
  {
    "url": "a/der-wichtigste-skill-für-programmierer-googeln.html",
    "revision": "7d42a975e8e3e497942008f12a8cf9ac"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "6e67f17e44a0f8c7d1d763ad35c13b8c"
  },
  {
    "url": "a/ein-studium-ist-doch-was-wert.html",
    "revision": "40312d8194aa5407cd06e0f390f0c24c"
  },
  {
    "url": "a/frameworks-ja-nein-wie-viele.html",
    "revision": "3b4f1a1a63e1df7f277b7e21c5aecd4e"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "58a20fb788851962098696f3b161075f"
  },
  {
    "url": "a/kurze-einführung-in-entity-component-system-ecs.html",
    "revision": "76518ab32659e6f1fafbc0e116a05b20"
  },
  {
    "url": "a/kurze-einführung-in-funktionale-programmierung.html",
    "revision": "a4c343dfa0fda04778ec8fcae434b71e"
  },
  {
    "url": "a/kurze-einführung-in-objektorientierte-programmierung.html",
    "revision": "cc38054ac0a143925d5e220dded0b5f6"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "096eb46d8aadf45988ba9039f5fe3223"
  },
  {
    "url": "a/nachhaltige-software-entwicklung.html",
    "revision": "0683861535f4f8cd45c0ab37ff124dd1"
  },
  {
    "url": "a/nie-wieder-ohne-linter-und-code-formatter.html",
    "revision": "33251d3cb7caf31cb157616be3ead180"
  },
  {
    "url": "a/overengineering-weniger-ist-mehr.html",
    "revision": "d48025029f688d5f7b9a20518d2178e3"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "530bdc4806b96e18fa37b4342ad09726"
  },
  {
    "url": "a/refactoring-nur-durch-iteration-wird-code-richtig-gut.html",
    "revision": "8b64fd575f29491f714bb7805289350d"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "2bd16ad0c4c63419984c6e295b2dbfcd"
  },
  {
    "url": "a/wie-bekommt-man-aufträge-als-freelancer.html",
    "revision": "80488354dfd74a2a58b89a8c2cb63edd"
  },
  {
    "url": "a/wie-lerne-ich-programmieren.html",
    "revision": "5863b846103b4a8b456d4e8ea935b0fe"
  },
  {
    "url": "a/wie-schreibe-ich-guten-code.html",
    "revision": "dea73868d34b9bfa5f13ceb8bb645611"
  },
  {
    "url": "a/wieviel-verdienen-programmierer.html",
    "revision": "43b8814092ee666dd3d117ecdec39825"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "164942d06d3abc92344ff09619017d49"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "8b858dcbf6abe774b626726cf09d81fa"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "10b350e119d483e36fe50712050403c4"
  },
  {
    "url": "assets/css/0.styles.00bb340a.css",
    "revision": "e86f913acc079dfbf97f4ab80caf7628"
  },
  {
    "url": "assets/img/test.33b51ec7.png",
    "revision": "33b51ec7cc2def9ed11243ccb1e814f5"
  },
  {
    "url": "assets/js/10.204fd179.js",
    "revision": "f41a291d43fa40e92193d018cf8b4952"
  },
  {
    "url": "assets/js/11.b3c599f8.js",
    "revision": "9532f3edb044967b36c1164ffc42b5c5"
  },
  {
    "url": "assets/js/12.cfdbec7d.js",
    "revision": "ba0d818ea8be2351fd641843aba9095b"
  },
  {
    "url": "assets/js/13.ae3a3b90.js",
    "revision": "40216e0436775a80718302ea90248234"
  },
  {
    "url": "assets/js/14.cda3b3ca.js",
    "revision": "a4fb0948d118e1dfaaf7fec6ec3b714f"
  },
  {
    "url": "assets/js/15.ba68e6ed.js",
    "revision": "10ca663bee7d0c2f1e95bdba574de68b"
  },
  {
    "url": "assets/js/16.ef250039.js",
    "revision": "06af7eb1d3a206286507137ae1a65b8c"
  },
  {
    "url": "assets/js/17.c4f6bfb9.js",
    "revision": "7d9c41c76ac397bd163e98ad9a0c7249"
  },
  {
    "url": "assets/js/18.5ef2f60b.js",
    "revision": "a429236425ca061584e6b623ae28103c"
  },
  {
    "url": "assets/js/19.44b9e53d.js",
    "revision": "00eaeb83bbfbc6bc0f7549c27fe7faff"
  },
  {
    "url": "assets/js/2.66eefaa9.js",
    "revision": "efddf78f2106f3e7ad0f90a4347c6d4a"
  },
  {
    "url": "assets/js/20.3a95823e.js",
    "revision": "ed1551a973d08e3831d038691f231b40"
  },
  {
    "url": "assets/js/21.c49b9185.js",
    "revision": "ba92438e0226ef0026932bbee8f10419"
  },
  {
    "url": "assets/js/22.dd2134be.js",
    "revision": "e761de92ef0da52eab31e9be88ef11af"
  },
  {
    "url": "assets/js/23.f363ae8d.js",
    "revision": "80c97b041fa4f8f749d38410c9fee716"
  },
  {
    "url": "assets/js/24.bd6c868b.js",
    "revision": "920df8eff0bdb7a8d3e0c014f56b2e2d"
  },
  {
    "url": "assets/js/25.a253250e.js",
    "revision": "01d11f96a4143329e20cf92db6e53326"
  },
  {
    "url": "assets/js/26.e4f368c2.js",
    "revision": "1e2d9f0a144dfca63077f77205aaa0aa"
  },
  {
    "url": "assets/js/27.61acd10d.js",
    "revision": "0a7ebcf61888b840bf98d2483f803438"
  },
  {
    "url": "assets/js/28.304dafe9.js",
    "revision": "50dbcae401d66d83aca0285d751e4188"
  },
  {
    "url": "assets/js/29.9a331b65.js",
    "revision": "694350c19845ed086b9f3e6d96a8c508"
  },
  {
    "url": "assets/js/3.dbfeb39f.js",
    "revision": "ebea5bcde60b80efe2dc13564a6d4641"
  },
  {
    "url": "assets/js/30.903b1722.js",
    "revision": "95362b200ab2330ef4ee269cfdc32b4a"
  },
  {
    "url": "assets/js/31.7db6b814.js",
    "revision": "47ecac901e3ed340e3b83c3e00e625a1"
  },
  {
    "url": "assets/js/32.919e4f13.js",
    "revision": "c531176c9696f23e2a5a6cb8e359fcf4"
  },
  {
    "url": "assets/js/33.b1d472d2.js",
    "revision": "2d2f0945b4d6107df019e8d9ef80421b"
  },
  {
    "url": "assets/js/34.c1e8954c.js",
    "revision": "b33f7da0357469e790143e3b33e10e0e"
  },
  {
    "url": "assets/js/35.a1802f06.js",
    "revision": "4f1a7ebbbb3c6d991f06209bc6bd4e29"
  },
  {
    "url": "assets/js/36.829c5bd7.js",
    "revision": "6de0cc74b344102f4e80571014dfc52c"
  },
  {
    "url": "assets/js/37.8aab1638.js",
    "revision": "6e5cd74894018939d7af0c769921755a"
  },
  {
    "url": "assets/js/38.b29cedaf.js",
    "revision": "81844e36048870b10e82944cc0b9a6dd"
  },
  {
    "url": "assets/js/39.bc78cb4f.js",
    "revision": "8011eea47c4c0c0202e83967c0d6d3ea"
  },
  {
    "url": "assets/js/4.89914f87.js",
    "revision": "7f6b44e943511f60a99725e28c3d2150"
  },
  {
    "url": "assets/js/40.c9546430.js",
    "revision": "896ebe07bdde083ef8ee173d8bf8a5ca"
  },
  {
    "url": "assets/js/41.3066de2a.js",
    "revision": "e3a9a91ca71af435155123dc51d3efff"
  },
  {
    "url": "assets/js/42.4ec35fc0.js",
    "revision": "c5eb30ac7b8d40f497d9a0bba62c8037"
  },
  {
    "url": "assets/js/5.c490e7b0.js",
    "revision": "77e0001786c10a8d494f89fd03db1471"
  },
  {
    "url": "assets/js/6.c6164161.js",
    "revision": "23dc604a5e29f4c2308fde6c3b75f640"
  },
  {
    "url": "assets/js/7.8bdce5a1.js",
    "revision": "601c41e542cd80511421c4a5c0cb3dae"
  },
  {
    "url": "assets/js/8.d5a4253b.js",
    "revision": "514117656924d1a454ada1c424be7791"
  },
  {
    "url": "assets/js/9.1d68d5f5.js",
    "revision": "164152dda093894e16ca72652cae0315"
  },
  {
    "url": "assets/js/app.eaa4797a.js",
    "revision": "0f9fe2c87fedd33710cf2c1679d32c12"
  },
  {
    "url": "drafts/besser-programmieren-mit-coding-games.html",
    "revision": "c6e01a2685c9f5a7a9a6602ca5eb672b"
  },
  {
    "url": "drafts/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "81c5224d0ebb77f00ebcf372390338a9"
  },
  {
    "url": "drafts/die-besten-blogs-zum-weiterlernen.html",
    "revision": "94378fe4fee0ae615a5ed59e8b26d3ab"
  },
  {
    "url": "drafts/testing.html",
    "revision": "7a20c675431e151e4dfc6a267cf20103"
  },
  {
    "url": "drafts/was-ist-überhaupt-devops.html",
    "revision": "ee36f7afde9be1a8490fbf0ca9a470b1"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d7ed5aa149d0f957f604e0b5946f28d5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7c6cb298ab9c6f3efea0abe6afdc1d78"
  },
  {
    "url": "font/fira-sans-v16-latin-regular.eot",
    "revision": "82bbc8e384d733ac835a871ecf728408"
  },
  {
    "url": "font/fira-sans-v16-latin-regular.svg",
    "revision": "7307389c2218fa743b42f50e6452bee6"
  },
  {
    "url": "font/fira-sans-v16-latin-regular.ttf",
    "revision": "7fa1c79da3457421f8dd2070bc088865"
  },
  {
    "url": "font/fira-sans-v16-latin-regular.woff",
    "revision": "effc821f9f1ddba41ab63085d068e216"
  },
  {
    "url": "font/fira-sans-v16-latin-regular.woff2",
    "revision": "4528524c7142b4e2d5c0438763223328"
  },
  {
    "url": "glossar/index.html",
    "revision": "aded4e4e1c3697c5f431e15f93384f84"
  },
  {
    "url": "impressum/index.html",
    "revision": "1fc05392e0426c3e05647d968d10fb39"
  },
  {
    "url": "index.html",
    "revision": "463385fc1a6b40ea3e2607851d4548f5"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "92c9519cc1903d25e1a97d374daf9734"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3b1cbc0da1041c33442038f326dbdde0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
