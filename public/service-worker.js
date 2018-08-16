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
    "revision": "72b698ac3f5e4dfa281295d4854d46b8"
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
    "revision": "2ae36cadbf88e259129d4f6fdf79b209"
  },
  {
    "url": "manifest.json",
    "revision": "04e34ad4e69d8ee23674d9bc96cfb60d"
  },
  {
    "url": "obmPinEncryptionMin.js",
    "revision": "be5a2cd2791f98264fb3aa831f668c67"
  },
  {
    "url": "static/css/main.6ab4efd6.css",
    "revision": "82e933805aa8669090ddda87af963766"
  },
  {
    "url": "static/js/main.e4884a38.js",
    "revision": "6a0ffa0ee80153a6d0d89bc569d53d60"
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
    "url": "static/media/logodxc.48ac4fef.png",
    "revision": "48ac4fef1a4bb943e32f7dd22e29c8b8"
  },
  {
    "url": "static/media/ProximaNova-Bold.72b6f2c9.otf",
    "revision": "72b6f2c9990bd3d37b8013a59ed78902"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
