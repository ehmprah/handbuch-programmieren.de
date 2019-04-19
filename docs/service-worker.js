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
    "revision": "17120be70c892857ddc43fe4da755722"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "b9e642930d7b5d8439eccaa8c31b0a59"
  },
  {
    "url": "a/besser-programmieren-mit-coding-games.html",
    "revision": "7a437ed528617cc24ec90e1ddeae24d9"
  },
  {
    "url": "a/code-richtig-kommentieren.html",
    "revision": "997d08dd74f81743e448d574b5bb427c"
  },
  {
    "url": "a/deine-erfahrungen-sind-gefragt.html",
    "revision": "85a21c15e9f3a07b34821f6eac894cf8"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "88aba6dc77a43bfff663447bbd8e6a5b"
  },
  {
    "url": "a/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "6d885c545b5a24ecba10a081efef949c"
  },
  {
    "url": "a/die-besten-blogs-zum-weiterlernen.html",
    "revision": "2e62753ff51b51b9f89315ad0e31319d"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "66d24a7a0eb01853d6044d7afd4226bb"
  },
  {
    "url": "a/drei-tipps-für-effizientes-googeln.html",
    "revision": "c262c2e5620107415a6d92839ca1700f"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "ff0daf68de45b7358f0054447ca0aca5"
  },
  {
    "url": "a/linting-spart-lebenszeit.html",
    "revision": "1710021e917aa7dbaf55c35535504b9c"
  },
  {
    "url": "a/mit-diesen-voraussetzungen-lernst-du-programmieren.html",
    "revision": "97fdc414a7b5d1d5b98e09405712b164"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "4c59819c3f48fde8eb7e3c8dcf47b74b"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "1e2dd13e74c613ec7b64075ff5ed73b9"
  },
  {
    "url": "a/refactoring.html",
    "revision": "f173fe48b0c066431009ee886c442e9b"
  },
  {
    "url": "a/testing.html",
    "revision": "b5bd52bf4f8c3375f881a475ebc1f047"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "13175715ffb768d17338cbe0dd0623ed"
  },
  {
    "url": "a/warum-du-als-programmierer-nicht-studieren-musst.html",
    "revision": "b5e2604c85476d1166d0ea5ad7ca77c7"
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
    "url": "assets/css/0.styles.7199d779.css",
    "revision": "4ce4042fe493b87e73dc4a000379d033"
  },
  {
    "url": "assets/js/1.a6ecc549.js",
    "revision": "7c9bbdc97c53392fb9af8452f47b7dc2"
  },
  {
    "url": "assets/js/10.0dd55f2d.js",
    "revision": "83174a90563a3e329e9d930d4f4dccfc"
  },
  {
    "url": "assets/js/11.d42cf721.js",
    "revision": "cd334ad5e0d357ca0387ec8f8eb51e88"
  },
  {
    "url": "assets/js/12.fb950f6c.js",
    "revision": "50a11401a71f33e7daa4c0bbdc436712"
  },
  {
    "url": "assets/js/13.a7c8b1ec.js",
    "revision": "ba132e54afdd4610ad78c55f6b111237"
  },
  {
    "url": "assets/js/14.8f7084b7.js",
    "revision": "1160f5dc913fc459b1e14a512099b3f4"
  },
  {
    "url": "assets/js/15.097c68f5.js",
    "revision": "a3f5431b3bab3fdb0b99ff0f25a3d51a"
  },
  {
    "url": "assets/js/16.59b1551b.js",
    "revision": "bb2c5692758016b1206a98ddc9b0a238"
  },
  {
    "url": "assets/js/17.3090e42c.js",
    "revision": "2e0caa45796a3c96f60987c92a87f9d7"
  },
  {
    "url": "assets/js/18.b2430cef.js",
    "revision": "d5162749828918e53c224c84e8dd8c03"
  },
  {
    "url": "assets/js/19.0b9a247b.js",
    "revision": "40754b1046798195c987a16206bde861"
  },
  {
    "url": "assets/js/20.7c3815cd.js",
    "revision": "74ba406ede17b0074ec4b84a6f0a8d7c"
  },
  {
    "url": "assets/js/21.d3ca0f18.js",
    "revision": "e7b9562723a056314ea17e95a4da15f0"
  },
  {
    "url": "assets/js/22.834d7609.js",
    "revision": "959f01518b62f47a64885a3a0cfa2b3d"
  },
  {
    "url": "assets/js/23.46a1773a.js",
    "revision": "968547fb48ee8c64f0f03a919afe2ce4"
  },
  {
    "url": "assets/js/24.562466c5.js",
    "revision": "68f6cc42fcbb3fac54be207c2b018051"
  },
  {
    "url": "assets/js/25.91440aa2.js",
    "revision": "9173bbe2db33e9975e2abe55029c5562"
  },
  {
    "url": "assets/js/26.b141f12b.js",
    "revision": "4352a734e5982dff0425ea0a7ce27a6a"
  },
  {
    "url": "assets/js/27.064bdade.js",
    "revision": "fead3ae9b579666bf22146408fe0c4d8"
  },
  {
    "url": "assets/js/3.d54a59ea.js",
    "revision": "fd13a55c32703909558e607809d7b549"
  },
  {
    "url": "assets/js/4.f6379cda.js",
    "revision": "8eb626887d1cedbf87cb0cf06e388056"
  },
  {
    "url": "assets/js/5.b8b6974b.js",
    "revision": "14dcb816e068bf69e2ab16149d2fc4f3"
  },
  {
    "url": "assets/js/6.c7d6b395.js",
    "revision": "6ad6ca7f62613fd5fbaa50ab9e102072"
  },
  {
    "url": "assets/js/7.ef444265.js",
    "revision": "3856e588496771d863cc09d0269371bc"
  },
  {
    "url": "assets/js/8.93396611.js",
    "revision": "5386f4604b1bafadb3afdacb87c365a2"
  },
  {
    "url": "assets/js/9.c5f432fc.js",
    "revision": "eade378776f8ab672d83b742f3bb1f37"
  },
  {
    "url": "assets/js/app.0ba1a1cf.js",
    "revision": "2f9ff8cd87df144d35e758434bdc6a80"
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
    "revision": "eec9ee61829d7c1b1c6f3eeba2a7c5e5"
  },
  {
    "url": "index.html",
    "revision": "811d52d3efa4f939be02a175cbd328ec"
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
