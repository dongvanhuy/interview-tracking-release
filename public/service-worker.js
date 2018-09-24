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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "b9e30a4964d5f8094c619fc1a62bd9fc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2c9781750fbcb16ebd475c7149e15d7d"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "5cbdb95eba0b3dd4eb10e4c8e78a7be5"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "4c1ea81a7a6ab663c8ba155ae0c0aad0"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "462a84743116f4506d71692f5588d8a8"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "a4089d3036cbd4b023cd12f36edbec07"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "65d598def1c91aebe8e6c5169b95216b"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "b186d159d59b3e399731dedcab1a215c"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "dae20dda483d26c779bb9f77160e4d0f"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "9a8ad6ec8b5a96c74330b2ca1c9020c1"
  },
  {
    "url": "index.html",
    "revision": "b05fadd8934c613f08af2c5cf22ee966"
  },
  {
    "url": "ios_splash.js",
    "revision": "77023cc5a35c66a303853d8e50c62f89"
  },
  {
    "url": "ios/ios-appicon-120-120.png",
    "revision": "21875d18184365b5e8abc187247a821d"
  },
  {
    "url": "ios/ios-appicon-152-152.png",
    "revision": "60592a5df1acf8acdc22af31567bf0b4"
  },
  {
    "url": "ios/ios-appicon-180-180.png",
    "revision": "39ab90e22e071c44887cb2ecf8960f6b"
  },
  {
    "url": "ios/ios-appicon-76-76.png",
    "revision": "2dc498821b175890844a7e9f19bd571a"
  },
  {
    "url": "ios/ios-launchimage-1242-2208.png",
    "revision": "44a10fb4d124f88f9a6b63f700f916f0"
  },
  {
    "url": "manifest.json",
    "revision": "35ff445f9b62a15ed8c57f0cbab50af5"
  },
  {
    "url": "static/css/main.e0d9569e.css",
    "revision": "5b88f7970f4df308af45ee7d00040964"
  },
  {
    "url": "static/js/main.06362463.js",
    "revision": "5e6a5a74f88484fcabef34b06e9eb851"
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

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"my-api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"maxAgeSeconds":2592000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
