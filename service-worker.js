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
    "url": "404.html",
    "revision": "2bc92fdf93fb205af02cb5cb2114b964"
  },
  {
    "url": "assets/css/0.styles.a6229f19.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ae675b4.js",
    "revision": "da68ef8f48354f09acc4b952d41b379d"
  },
  {
    "url": "assets/js/10.5ae4662e.js",
    "revision": "44b01f4fc1e2586982a25de2424ff18a"
  },
  {
    "url": "assets/js/11.a4f8c3cc.js",
    "revision": "d782a6bea532505685b4b1ca9b405fdf"
  },
  {
    "url": "assets/js/12.a7f8a0d5.js",
    "revision": "97888042e9bca3ae617b43faf6e4b562"
  },
  {
    "url": "assets/js/13.b429157a.js",
    "revision": "4500f4feee7ec03aefbebe1f1252d099"
  },
  {
    "url": "assets/js/14.670a824e.js",
    "revision": "d4efbdb556436f66059f2f3f2928caf5"
  },
  {
    "url": "assets/js/15.abf03ffe.js",
    "revision": "4bdd3d07a2dbca570c6d58e4a8bc2b7e"
  },
  {
    "url": "assets/js/16.a8eb6d79.js",
    "revision": "f452f3b2ae904477831a2447da8ab154"
  },
  {
    "url": "assets/js/17.f5d5b088.js",
    "revision": "948ea91c830e2d0a24dce910e246f1d9"
  },
  {
    "url": "assets/js/18.7d032996.js",
    "revision": "7d4ea9ff9819b1036a64837e3525d68a"
  },
  {
    "url": "assets/js/19.ff0ab9bb.js",
    "revision": "6980a395b54cf7011f0b5fc9310a3cd3"
  },
  {
    "url": "assets/js/2.4a08a3c0.js",
    "revision": "87dd954f7ed9bf67bdfbd701b90e12a8"
  },
  {
    "url": "assets/js/20.a0b3b37b.js",
    "revision": "882ff2766271115f8e45bf4539ce335f"
  },
  {
    "url": "assets/js/21.14db1456.js",
    "revision": "8c20280a4090755f1fa3a5d217524e98"
  },
  {
    "url": "assets/js/22.0f79d323.js",
    "revision": "7fda0dc9020b692d68ca273930d2169b"
  },
  {
    "url": "assets/js/23.8c8c90a4.js",
    "revision": "99820431d2457e30b316ed45a28fa0ff"
  },
  {
    "url": "assets/js/24.4133a5d9.js",
    "revision": "c7a1a58d2fb9d9aaa0cc7e9d02e8fe6d"
  },
  {
    "url": "assets/js/25.3069bf7c.js",
    "revision": "c85f08bd3ccc413f5638475c988e87ea"
  },
  {
    "url": "assets/js/26.5120f0e1.js",
    "revision": "f953cc180aecf7dbd9a6f23bcef8ff07"
  },
  {
    "url": "assets/js/27.7cac189a.js",
    "revision": "4fe2990bc953613fdfce53cfab8ff34d"
  },
  {
    "url": "assets/js/28.e94f7166.js",
    "revision": "3d5a5d9c145dcb160d0130bf40e90898"
  },
  {
    "url": "assets/js/29.9e5563e2.js",
    "revision": "dff9522d4fd29fed13e9c2d11e53e1de"
  },
  {
    "url": "assets/js/3.dcea37e2.js",
    "revision": "6413e3dc54cbd30aea88dd0698bf897d"
  },
  {
    "url": "assets/js/30.f37fe8af.js",
    "revision": "250d38431d1398331a10aa924e238cba"
  },
  {
    "url": "assets/js/31.2756b9d9.js",
    "revision": "85e4eda718a6dbc3f1e4f314fcbd4f37"
  },
  {
    "url": "assets/js/32.06007ccd.js",
    "revision": "d8e5f684167d0c25ee699c40b4acca32"
  },
  {
    "url": "assets/js/33.9b933ba3.js",
    "revision": "be179fb6e03ff13dbed49d82909253f0"
  },
  {
    "url": "assets/js/34.e0cc728a.js",
    "revision": "84526a0f6577e876e297f5fcca4bed95"
  },
  {
    "url": "assets/js/35.037a4a99.js",
    "revision": "ed28d3fa6c2ad246cd8eeca9e25a8a85"
  },
  {
    "url": "assets/js/36.82d59932.js",
    "revision": "c5e8437913a0b8fafd55af4c89f5945c"
  },
  {
    "url": "assets/js/37.252375dd.js",
    "revision": "561a85bf39ec98e712fecc83c0ecb1a3"
  },
  {
    "url": "assets/js/5.6b8fbb79.js",
    "revision": "80fa0702e45466ef0c4baf55e1879454"
  },
  {
    "url": "assets/js/6.1f6925f4.js",
    "revision": "b14a5bea71ad640356b6e2b9e5fa985f"
  },
  {
    "url": "assets/js/7.04be6fc1.js",
    "revision": "04f3ef14af1938e2e0e2907c8eabaf7b"
  },
  {
    "url": "assets/js/8.5bc15774.js",
    "revision": "9966710cb67048daccc25312c8c7d209"
  },
  {
    "url": "assets/js/9.c905988f.js",
    "revision": "df96929c7695b1d0567f133e8826c10c"
  },
  {
    "url": "assets/js/app.7cbfc100.js",
    "revision": "0f5d8935a77e4c85b45d783492eec959"
  },
  {
    "url": "assets/js/vendors~docsearch.3d7fb28f.js",
    "revision": "69aee2b9bc64913779401dd058c2127e"
  },
  {
    "url": "en/application/index.html",
    "revision": "408c27f085175bcde6c236735aff9747"
  },
  {
    "url": "en/index.html",
    "revision": "c23bb644bc1bea36aa5a682e31ab0ac0"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "9ebfc03101712ca4ad2e44056fca9825"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "3562f50f7ed8871cc6692f926c09fe09"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "16deda82b52c50e0b8ae4accfea70f2b"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "cdcae2c92970a2da76eb946f77f0dda6"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "529a1e98ff80117c6b04cbc972e82a15"
  },
  {
    "url": "zh/article/index.html",
    "revision": "54ed0d1d0ffbb61ab37fe9f2cab17302"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "3eecd4a0d83db1953e4f453602448866"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "ebb1b9f789893fb708de72b09b06f34f"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "d8dcfd9be1e8ef4a1aa51f09fe534918"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "8d64cbf4e0468f20fb9dbe53b03809c5"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "f551a7c872dade37dbe4700b8fa73b74"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "f1ddd8592295d29d2b9e9567c8a0c5a6"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "d2b2fdbf594abd4c838d13cf88a892bf"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "204fd360c2aed9a92f11dfddc228ee26"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "787b3014b4e9a7abe2d6d7ac916f1e8e"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "f9fbdef8ffebea5493926e5986354519"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "0417f19b8e2dc5ae7e4cf3a74075bbc3"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "0b2d45109021aee6a12015f91fcdec4d"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "642716c078e8845bb99f7abb877cd695"
  },
  {
    "url": "zh/index.html",
    "revision": "204ad7b490a9fc25e994fe33309406b4"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "9b74d13b554a23ec762eb217d017fff8"
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
