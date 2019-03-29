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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75adfbed656811b4dd2bb83cc0cec05b"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "435b5447dfc07a73ff1cb08545b5b676"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "9f93238f3e399833cd4c64400618e56b"
  },
  {
    "url": "a/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "c244288d73591e97c2e6999a540aca1f"
  },
  {
    "url": "a/die-besten-blogs-zum-weiterlernen.html",
    "revision": "5b6df565fc2a10aa9331eded0bff9349"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "fb8919e57dabb01636025864fd30eddc"
  },
  {
    "url": "a/drei-tipps-für-effizientes-googeln.html",
    "revision": "9c662537953b95ad022731dbe2f6fb0c"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "682d544e7886837efafbc8f1691defc4"
  },
  {
    "url": "a/linting-spart-lebenszeit.html",
    "revision": "a6eac57199f9876e4b94299e2315188a"
  },
  {
    "url": "a/mit-diesen-voraussetzungen-lernst-du-programmieren.html",
    "revision": "52291f8ad6921992f219211e51e80ff3"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "92e83d93cc363f1e15e2213c436e1e2a"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "c747962acb86b9d6860225819aae00f0"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "6cc3e3ced92dc156e5239d2c2610b744"
  },
  {
    "url": "a/warum-du-als-programmierer-nicht-studieren-musst.html",
    "revision": "5a9611f8c9fa735f27a38ea7680702cb"
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
    "url": "assets/css/0.styles.852a3a45.css",
    "revision": "5f06efd7461a37a2226c1eddb444ea16"
  },
  {
    "url": "assets/js/1.6ca6f093.js",
    "revision": "7c9bbdc97c53392fb9af8452f47b7dc2"
  },
  {
    "url": "assets/js/10.05d5c569.js",
    "revision": "e448b38e5cb7febb59423c810625d45b"
  },
  {
    "url": "assets/js/11.e46f0838.js",
    "revision": "7a6084e8c4caabfa348d18ad029168e0"
  },
  {
    "url": "assets/js/12.ca815122.js",
    "revision": "c9e46518db78dd0ee8f0e39b501c4741"
  },
  {
    "url": "assets/js/13.f6fa0f9c.js",
    "revision": "285781b0d6e19f9382175551e0248ea3"
  },
  {
    "url": "assets/js/14.fa6bd542.js",
    "revision": "ef01f4246d34206df4598dc36ba75533"
  },
  {
    "url": "assets/js/15.9a1840fc.js",
    "revision": "9cd050d9f8d6eaa14541f4bd98a698c2"
  },
  {
    "url": "assets/js/16.7b467e05.js",
    "revision": "a0c708025ae9ff8778ef0c7df207dd76"
  },
  {
    "url": "assets/js/17.11e2562b.js",
    "revision": "f69d5926acdd51abb716b465555ae0c6"
  },
  {
    "url": "assets/js/18.1adc1707.js",
    "revision": "a9947f6e32a317b70e91f26937027b9a"
  },
  {
    "url": "assets/js/19.e2f3b185.js",
    "revision": "1803cdbac7f82158021a2fce83cdcce2"
  },
  {
    "url": "assets/js/20.84f17e64.js",
    "revision": "3b445b7ec7450cab031cc6d6d5d2afbf"
  },
  {
    "url": "assets/js/21.54e89db8.js",
    "revision": "e1ce9cce008c395ed42ac5cedd666ce9"
  },
  {
    "url": "assets/js/22.c619352a.js",
    "revision": "0607d3961553c4216e88e97e802d960e"
  },
  {
    "url": "assets/js/3.d9d65883.js",
    "revision": "d6eb665ad83ba70b9a65f6f8daa8cbc6"
  },
  {
    "url": "assets/js/4.d5a99ae7.js",
    "revision": "e58d8eec038258b91394b9bb76ddc9a3"
  },
  {
    "url": "assets/js/5.595534d5.js",
    "revision": "14dcb816e068bf69e2ab16149d2fc4f3"
  },
  {
    "url": "assets/js/6.4d93b4b4.js",
    "revision": "9e428cf6c5486ed4415d7cd4c3157cae"
  },
  {
    "url": "assets/js/7.8d755704.js",
    "revision": "11caaa2df264eed43144972340747857"
  },
  {
    "url": "assets/js/8.76a8f00c.js",
    "revision": "de1a619224838dd8176d0ffe507c7402"
  },
  {
    "url": "assets/js/9.885f2c43.js",
    "revision": "5237359234033d152fca1c3db5c026c8"
  },
  {
    "url": "assets/js/app.73b07809.js",
    "revision": "60e0ed9232f3e1672b8e06ce0b6e1ffd"
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
    "url": "impressum/index.html",
    "revision": "2486661a2dc30f3b9e1fdb4d320be140"
  },
  {
    "url": "index.html",
    "revision": "ce49ddc1463b9742102ac9765ff400d7"
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
workbox.precaching.suppressWarnings();
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
