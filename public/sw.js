importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log('Yay! Workbox is loaded 🎉');

    workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "9154af852b5395b4dfc0b7506cd8f81e"
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
    "revision": "090859cceb5703c6fa988bb5d84d2b8a"
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
    "revision": "2a04697785ad5bb89a439cd55ce4b3d2"
  },
  {
    "url": "service-worker.js",
    "revision": "51ca9f6afdfa2f82ba190b0df485aeff"
  },
  {
    "url": "static/css/main.e5a85c75.css",
    "revision": "26ef71d3840749724d4b73cb7f77648c"
  },
  {
    "url": "static/js/main.6f43fc2d.js",
    "revision": "15d8608912eaf20c66f4a07680f677f2"
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
]);
} else {
    console.log('Boo! Workbox didn\'t load 😬');
}

self.addEventListener('fetch', (event) => {


});
