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
    "revision": "a7c93c313d1611f6463fb72fa0f60c9d"
  },
  {
    "url": "a/7-tipps-karriere-programmierer.html",
    "revision": "28c8e01557420d54833a2bfde2a49431"
  },
  {
    "url": "a/agile-softwareentwicklung-in-kürze.html",
    "revision": "c34544153cec5629098aa0328f1b3ed5"
  },
  {
    "url": "a/arbeitsplatz-fitness-fuer-programmierer-und-freelancer.html",
    "revision": "23ee5987a343b51e5a3430b6e2d02c87"
  },
  {
    "url": "a/automatisierte-tests.html",
    "revision": "37e100ff31fda33168fc46e7d33b7c1b"
  },
  {
    "url": "a/code-ist-ein-werkzeug.html",
    "revision": "7ddc248e95aca9f574dffbed9485d56f"
  },
  {
    "url": "a/code-richtig-kommentieren.html",
    "revision": "629add8a05787f1a318e8331b1e871ee"
  },
  {
    "url": "a/deine-beste-werbung-bist-du.html",
    "revision": "35f953ad075ea9a44338af66ed884bf9"
  },
  {
    "url": "a/deine-erfahrungen-sind-gefragt.html",
    "revision": "a18a6c4773cdd200dc9c2b298b227ca7"
  },
  {
    "url": "a/der-beste-editor-um-zu-coden.html",
    "revision": "2cff40c12c0cd77ce33b5328ea8c552c"
  },
  {
    "url": "a/der-wichtigste-skill-für-programmierer-googeln.html",
    "revision": "c8063aea47b2fc23a5a98749790b93a7"
  },
  {
    "url": "a/die-tugend-der-selbstueberschatzung.html",
    "revision": "4630c29da5792520813b17e7de8b936b"
  },
  {
    "url": "a/ein-studium-ist-doch-was-wert.html",
    "revision": "73d938180331d25b1f30d1ebda8287ed"
  },
  {
    "url": "a/frameworks-ja-nein-wie-viele.html",
    "revision": "ce142fcec1ddf1d212b0fed3be178054"
  },
  {
    "url": "a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html",
    "revision": "09657c5fb3e35c079637533fcec480f7"
  },
  {
    "url": "a/kurze-einführung-in-entity-component-system-ecs.html",
    "revision": "0ec104f284c7eb31e2a8a9cdc63e02c9"
  },
  {
    "url": "a/kurze-einführung-in-funktionale-programmierung.html",
    "revision": "3be9ab9e50de33d4c4be8264381ba828"
  },
  {
    "url": "a/kurze-einführung-in-objektorientierte-programmierung.html",
    "revision": "6316712c60c6b11402effed680cf6934"
  },
  {
    "url": "a/mit-englisch-lernt-sich-das-programmieren-leichter.html",
    "revision": "f286a92ef7fa1e984465f91019aede48"
  },
  {
    "url": "a/nachhaltige-software-entwicklung.html",
    "revision": "58afbc8e0c8b72688a6fe409a7427b3b"
  },
  {
    "url": "a/nie-wieder-ohne-linter-und-code-formatter.html",
    "revision": "d79d093b29ab6f1c590061cd374b656b"
  },
  {
    "url": "a/overengineering-weniger-ist-mehr.html",
    "revision": "b9627b87694cb1617b2b8893ae7b7bd8"
  },
  {
    "url": "a/programmieren-lernen-welche-sprache-ist-die-richtige.html",
    "revision": "e6eadb0f2767a8df3ea547e41061fb52"
  },
  {
    "url": "a/refactoring-nur-durch-iteration-wird-code-richtig-gut.html",
    "revision": "f722176818f1bc26a31b89fc211c51c2"
  },
  {
    "url": "a/über-dieses-handbuch.html",
    "revision": "38185b0658bea7ec2f43348b76dec677"
  },
  {
    "url": "a/wie-bekommt-man-aufträge-als-freelancer.html",
    "revision": "19c3f030a28e2303b818dd07680ff320"
  },
  {
    "url": "a/wie-lerne-ich-programmieren.html",
    "revision": "379e00ef7ea568a1eb552e8c809fd242"
  },
  {
    "url": "a/wie-schreibe-ich-guten-code.html",
    "revision": "f65491795e81d12f81b751a90293b9a3"
  },
  {
    "url": "a/wieviel-verdienen-programmierer.html",
    "revision": "894acfbc327512d4a5836e0149264169"
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
    "url": "assets/css/0.styles.a452ee4f.css",
    "revision": "3e2b556251ffbc9cd8e71d2d9b1130c5"
  },
  {
    "url": "assets/img/test.33b51ec7.png",
    "revision": "33b51ec7cc2def9ed11243ccb1e814f5"
  },
  {
    "url": "assets/js/10.8e186f84.js",
    "revision": "84f134ad4432ee1cef6917726eec2898"
  },
  {
    "url": "assets/js/11.792b6641.js",
    "revision": "b331d33539d40e7c8993cb361ad5836c"
  },
  {
    "url": "assets/js/12.b12d2e31.js",
    "revision": "a658049b36e1a5156f2f38d6267b2dab"
  },
  {
    "url": "assets/js/13.f2ebe073.js",
    "revision": "756fd97ee25f0b1302980f8a0b45b3bc"
  },
  {
    "url": "assets/js/14.136cd400.js",
    "revision": "c2d10aff1b0dd593f1e40ef77419d2e2"
  },
  {
    "url": "assets/js/15.4b4f6934.js",
    "revision": "df6b3bf5bea8deb47cc09396e536a141"
  },
  {
    "url": "assets/js/16.6e1cfea0.js",
    "revision": "e561a4e938532c8bfaa3462951081761"
  },
  {
    "url": "assets/js/17.fe28000b.js",
    "revision": "92f16738ab1bdc8a30c808d1b6904541"
  },
  {
    "url": "assets/js/18.e89e21c4.js",
    "revision": "c3234cab0d88ecb2f885dea1c1c495e7"
  },
  {
    "url": "assets/js/19.cc9561d6.js",
    "revision": "9bd9912bb69cda7fe287bc0d46996050"
  },
  {
    "url": "assets/js/2.54705fae.js",
    "revision": "1a44142c0ac5b073df61905817aa9040"
  },
  {
    "url": "assets/js/20.97dab985.js",
    "revision": "886d9d5bb69d42d2916db775d08eac6d"
  },
  {
    "url": "assets/js/21.d6fbddae.js",
    "revision": "7522161d049ea2b12f1c1b3b822a70be"
  },
  {
    "url": "assets/js/22.91cf6127.js",
    "revision": "44271b92c6e726c88d83309eadf89551"
  },
  {
    "url": "assets/js/23.5e629334.js",
    "revision": "6c8fa1bbe3494aee475ea21f4484464e"
  },
  {
    "url": "assets/js/24.53d1dc78.js",
    "revision": "7affe10992085612bd94d64f42f25203"
  },
  {
    "url": "assets/js/25.b5beee7e.js",
    "revision": "bf13846042ca4faf67853bb8f7e00838"
  },
  {
    "url": "assets/js/26.1f0689da.js",
    "revision": "90d7ac67a1fdcf76dc98ce777873a6f4"
  },
  {
    "url": "assets/js/27.d622b965.js",
    "revision": "77edd3033bf0e97f1022e3f3a9c76d1b"
  },
  {
    "url": "assets/js/28.7e36b58a.js",
    "revision": "ad44aca21049ef1e1f4c31217cbb3782"
  },
  {
    "url": "assets/js/29.df504d4e.js",
    "revision": "8a9d535c377f8f3702aa81c07826c556"
  },
  {
    "url": "assets/js/3.30cc5e99.js",
    "revision": "863c7768568c7382c8ef51144b625a63"
  },
  {
    "url": "assets/js/30.6ea995af.js",
    "revision": "59849afdd82ad6ceeb25eb7da0ff821f"
  },
  {
    "url": "assets/js/31.d3428943.js",
    "revision": "430bcf5453e32c45763d965d07630de3"
  },
  {
    "url": "assets/js/32.d4e98f77.js",
    "revision": "07e93e36125931c3ff6240f2665b49e8"
  },
  {
    "url": "assets/js/33.4684a08f.js",
    "revision": "79c290810dd8ca3adeac227af58c48b2"
  },
  {
    "url": "assets/js/34.db140d3b.js",
    "revision": "bcca1698a1b426a9d05b4be5f6a06706"
  },
  {
    "url": "assets/js/35.64e4c241.js",
    "revision": "cb6bc31eefadd67d4f86f805f775ab2d"
  },
  {
    "url": "assets/js/36.96aee70e.js",
    "revision": "bd85e2ad0e3a31d58890919f827ef30a"
  },
  {
    "url": "assets/js/37.2a86fe75.js",
    "revision": "9356b4d909bd9601f8708a92f01d00a2"
  },
  {
    "url": "assets/js/38.28986011.js",
    "revision": "8113e89705c985f0fcb7fd192ad4adf9"
  },
  {
    "url": "assets/js/39.ab21bd85.js",
    "revision": "76d640d3682680d44186e2665034c57b"
  },
  {
    "url": "assets/js/4.fd8b0217.js",
    "revision": "273877ad74e4071c3fe8567b5052baf8"
  },
  {
    "url": "assets/js/40.c6304312.js",
    "revision": "5ba221e99afee7b24db31e6c24b94d48"
  },
  {
    "url": "assets/js/41.c1701426.js",
    "revision": "e00b8e66f3ff33d60f80e82e79e0e2c2"
  },
  {
    "url": "assets/js/42.26c0b7d3.js",
    "revision": "670d3269dd1eddfaacdf8d7a6a77a65e"
  },
  {
    "url": "assets/js/5.9ffd33bb.js",
    "revision": "64fd6057f139a11f3dfb632c296dda21"
  },
  {
    "url": "assets/js/6.3057c754.js",
    "revision": "820d1cd140994ab689113bb4ff48d607"
  },
  {
    "url": "assets/js/7.64ed6601.js",
    "revision": "afcd671fe94bdc2eee45daa40668b5ca"
  },
  {
    "url": "assets/js/8.2a2feaf2.js",
    "revision": "321ab7425343513fdeeeca037f7c58b8"
  },
  {
    "url": "assets/js/9.3d03a4b1.js",
    "revision": "0c16756213b730a25cef0ee46b1c5f9c"
  },
  {
    "url": "assets/js/app.cfd7bb91.js",
    "revision": "66406f58de27075b5852b1d32911fe71"
  },
  {
    "url": "drafts/besser-programmieren-mit-coding-games.html",
    "revision": "dc63cf2380953339806699f9b3da9e5d"
  },
  {
    "url": "drafts/die-besten-adressen-um-programmieren-zu-lernen.html",
    "revision": "91257329acd767c1e4b581974d8f22cf"
  },
  {
    "url": "drafts/die-besten-blogs-zum-weiterlernen.html",
    "revision": "0676b1ace69f4d936c437d5db2d3b959"
  },
  {
    "url": "drafts/testing.html",
    "revision": "8173e962078821885df328cca8c829a3"
  },
  {
    "url": "drafts/was-ist-überhaupt-devops.html",
    "revision": "0e334a8b03f2be6ec78cd98423c05016"
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
    "url": "glossar/index.html",
    "revision": "1efd3a2f4a13effac7e9be45db4791b2"
  },
  {
    "url": "impressum/index.html",
    "revision": "2aa4f066708bc5b99950e8cab30d224c"
  },
  {
    "url": "index.html",
    "revision": "550976c86dc2a6502fdbc4dcb3261d58"
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
