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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "a531106452d72ca980c9b857bd8fb3c7"
  },
  {
    "url": "dxclogo192x192.png",
    "revision": "bc983413f7faf6adbeefee93ab91240b"
  },
  {
    "url": "dxclogo512x512.png",
    "revision": "3528ba5c85bda441d035d2838019554b"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2c9781750fbcb16ebd475c7149e15d7d"
  },
  {
    "url": "index.html",
    "revision": "90ec164bb1476f8d9872edc74f4712db"
  },
  {
    "url": "manifest.json",
    "revision": "beea00321b259ed6b9e0e1000d0b2013"
  },
  {
    "url": "static/css/main.0258780e.css",
    "revision": "e288e157fa3c00e324e04fc50a8706ad"
  },
  {
    "url": "static/js/main.13c7a44c.js",
    "revision": "5dc3a6789e6119f3ac8c7ba26a31d52f"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/dxc-interview-tracking-api-release.azurewebsites.net\/api\/(.*)/, workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
