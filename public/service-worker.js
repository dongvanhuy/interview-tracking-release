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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "17ac68ca1f1624525d505c616491d70e"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2c9781750fbcb16ebd475c7149e15d7d"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "6aa181828d6569d9c291eac3401100dd"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "ae6ab6cfe1b7073dd3798d8abb962cac"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "62369812c2402585fcfcd11147c5ae23"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "c881bc7340b9908e8c57743dc5afb128"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "d02f1da8aad8b80145777936d738a8f1"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "55fc30c5d195b21ad508ba71625e5d3e"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "bb8d6f128ff56b6623bca0a258aa656a"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "d07a9a17bee53c5454a9a750afe5c7e2"
  },
  {
    "url": "index.html",
    "revision": "65a71edb1dcafb72d0fa0055f5820737"
  },
  {
    "url": "ios_splash.js",
    "revision": "395c3cb0dd6458286156106577f08a00"
  },
  {
    "url": "ios/icon_ipad_ios6_retina.png",
    "revision": "55272ac345e3e899cd3ecbe10d3a1179"
  },
  {
    "url": "ios/icon_ipad_ios6.png",
    "revision": "4de01d39cfc5b1d7198e56d955603466"
  },
  {
    "url": "ios/icon_ipad_ios7_retina.png",
    "revision": "db6682c26f1d5f569e695be4788474bf"
  },
  {
    "url": "ios/icon_ipad_ios7.png",
    "revision": "becd43825477b19d4178996143c44d0b"
  },
  {
    "url": "ios/icon_iphone_ios6_retina.png",
    "revision": "7cfacb1fe61f4f6c73e0f0868eeedc79"
  },
  {
    "url": "ios/icon_iphone_ios6.png",
    "revision": "e9cd9f234fe1ee3afb1819304f5f55ad"
  },
  {
    "url": "ios/icon_iphone_ios7_retina.png",
    "revision": "71915a195d92e2260f9048ff0fa168dd"
  },
  {
    "url": "ios/icon_iphone_ios7.png",
    "revision": "dc839afa33448f1b53e0573224716f7c"
  },
  {
    "url": "manifest.json",
    "revision": "a9d863acc177eefc217208a5eb35591b"
  },
  {
    "url": "static/css/main.92e7bc96.css",
    "revision": "87c1abde089dda1b29cd213c2f86e39c"
  },
  {
    "url": "static/js/main.5311739c.js",
    "revision": "e641f8fdb631298d344ae6ee11a4da55"
  },
  {
    "url": "static/media/dxcLogo.8500f535.svg",
    "revision": "8500f53521d6cbd1d3cb2253b0e5f888"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.448c34a5.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.89889688.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.e18bbf61.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.f4769f9b.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.fa277232.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "static/media/GTWalsheimProBold.de407daa.woff",
    "revision": "de407daa6db34a1958fd38f71604e278"
  },
  {
    "url": "static/media/GTWalsheimProRegular.7052fe6d.woff",
    "revision": "7052fe6d98383402c64153edbfd406a9"
  },
  {
    "url": "static/media/illustration.68e13737.png",
    "revision": "68e13737d82e40acba0554b8abb08b16"
  },
  {
    "url": "static/media/loading.1336a69b.svg",
    "revision": "1336a69b3b60ec204ed4d6685c3dfdfb"
  },
  {
    "url": "static/media/ProximaNova-Bold.72b6f2c9.otf",
    "revision": "72b6f2c9990bd3d37b8013a59ed78902"
  },
  {
    "url": "styles/index.css",
    "revision": "664a9bd3b2ac169293391ea33b132bd6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute("https://use.fontawesome.com/7bfa61cd5b.js", workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"my-api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":100,"maxAgeSeconds":2592000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
