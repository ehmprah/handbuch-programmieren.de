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
    "revision": "b1027c5048a96d9ed1a612740d9e6e98"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "2ba7b986bec52d1f7b95fa98c1380afa"
  },
  {
    "url": "a/besser-programmieren-mit-coding-games.html",
    "revision": "61f182087e693bfb6831bd2a4475d00b"
  },
  {
    "url": "a/code-richtig-kommentieren.html",
    "revision": "647f6f00636faba8909713a531909a08"
  },
  {
    "url": "a/deine-erfahrungen-sind-gefragt.html",
    "revision": "92b9ed35018abef407e9c6872e8a4934"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "6c0f29df6d62455f97d9af11db92751e"
  },
  {
    "url": "a/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "205cea992c49b67b8bf757dccc41e969"
  },
  {
    "url": "a/die-besten-blogs-zum-weiterlernen.html",
    "revision": "8659a2bd5bf82a3062e0de4088664c49"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "02ee81bde4058f8cc8e90336346129c9"
  },
  {
    "url": "a/drei-tipps-für-effizientes-googeln.html",
    "revision": "64335ecf73ce651d56914b1e509b7bbb"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "da4d3c8bc4ea7cf6beda31094fe85a44"
  },
  {
    "url": "a/linting-spart-lebenszeit.html",
    "revision": "df4598ee69b56d9f0092123bd901fe87"
  },
  {
    "url": "a/mit-diesen-voraussetzungen-lernst-du-programmieren.html",
    "revision": "b992f443c76ae8063dc8fd6f1897f188"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "be8807ef9bb791eb6209649d28f3b793"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "5cf8121c512eb9b3085f602ca21a888d"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "2811feea753a67cb40ed31cc0f248a40"
  },
  {
    "url": "a/warum-du-als-programmierer-nicht-studieren-musst.html",
    "revision": "474daa22b4290b740b6d84eb1ff679e1"
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
    "url": "assets/js/1.a6ecc549.js",
    "revision": "7c9bbdc97c53392fb9af8452f47b7dc2"
  },
  {
    "url": "assets/js/10.cfb634f4.js",
    "revision": "09e2e1f834424a3b53108195b13dfb09"
  },
  {
    "url": "assets/js/11.1976aa5f.js",
    "revision": "4f04d5f5a4a6858b6f371dcd58944677"
  },
  {
    "url": "assets/js/12.d5f0a56f.js",
    "revision": "bca5079d7a6a4d4dfd5f24956c48f360"
  },
  {
    "url": "assets/js/13.b9e5266d.js",
    "revision": "918f1a4dda04b63be9a5597e033f721f"
  },
  {
    "url": "assets/js/14.0f93e519.js",
    "revision": "653c75975dcfbe026ee270ee17b8b2d5"
  },
  {
    "url": "assets/js/15.d18c14ca.js",
    "revision": "67b5dd5ed88e33e2ea1102dbecfef0d7"
  },
  {
    "url": "assets/js/16.6a03a9cf.js",
    "revision": "0329b76c2482bc1ee6e68972d5130181"
  },
  {
    "url": "assets/js/17.91742d29.js",
    "revision": "3891081cba2fd3bdbdbd2770a5f42638"
  },
  {
    "url": "assets/js/18.82fa47ed.js",
    "revision": "8777aa1273b15adaac4e5ce226b30d3e"
  },
  {
    "url": "assets/js/19.bdc4059b.js",
    "revision": "03fb07d04679fd602cd5acbe29dd29ed"
  },
  {
    "url": "assets/js/20.02720af6.js",
    "revision": "293924d46306bca15aca1e3a8ec3fb80"
  },
  {
    "url": "assets/js/21.73927fdb.js",
    "revision": "498f017356b3f6321fabde5cf21a6a26"
  },
  {
    "url": "assets/js/22.0bcd8f1f.js",
    "revision": "64edf56688cf7e66af6dc9bf74723d0d"
  },
  {
    "url": "assets/js/23.b6c9b3cf.js",
    "revision": "ba38d2ecec2336da968995912a433146"
  },
  {
    "url": "assets/js/24.2a62f052.js",
    "revision": "1d487ff41078407306776198320d3115"
  },
  {
    "url": "assets/js/25.8d3312f7.js",
    "revision": "5a34b3069d52dd5fa4da864ec4dc2b17"
  },
  {
    "url": "assets/js/3.618664ff.js",
    "revision": "d6eb665ad83ba70b9a65f6f8daa8cbc6"
  },
  {
    "url": "assets/js/4.1bcb0433.js",
    "revision": "e58d8eec038258b91394b9bb76ddc9a3"
  },
  {
    "url": "assets/js/5.b8b6974b.js",
    "revision": "14dcb816e068bf69e2ab16149d2fc4f3"
  },
  {
    "url": "assets/js/6.72f4b033.js",
    "revision": "9e428cf6c5486ed4415d7cd4c3157cae"
  },
  {
    "url": "assets/js/7.74c09046.js",
    "revision": "19aa81314221eb3075897541f09a63de"
  },
  {
    "url": "assets/js/8.cac548fb.js",
    "revision": "73c32f2c8ebc55a4f3261b571febd8bb"
  },
  {
    "url": "assets/js/9.d30c8347.js",
    "revision": "53c9a4a08427c7bf7a8eb92061311446"
  },
  {
    "url": "assets/js/app.d56edd69.js",
    "revision": "34c7cd83c336a8fb2abe9f5cb0c0f38a"
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
    "revision": "bf329de6a9b59d396b49ebd21ea85b5b"
  },
  {
    "url": "index.html",
    "revision": "27384d96ea0ddc0286cea26990dc61db"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "92c9519cc1903d25e1a97d374daf9734"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2d7381242caf1a1e51bd539f888a9e3b"
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
