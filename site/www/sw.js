importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "a61817507821162ce48c41fcaaa487d8"
  },
  {
    "url": "assets/img/avo-social.png",
    "revision": "dcf339c46862b1869ff8ea02ffcb0256"
  },
  {
    "url": "assets/img/avocado-dark-logo.png",
    "revision": "0a0397bd43559a9b506d62d3948a07df"
  },
  {
    "url": "assets/img/avocado-logo.png",
    "revision": "67acff248d20f7b63dd1e6ff569eb373"
  },
  {
    "url": "assets/img/avocado/project-structure.png",
    "revision": "f27c862862e8f36772a6700dd06c697c"
  },
  {
    "url": "assets/img/checkbox.png",
    "revision": "3f093b7807311f1af30d586817e2107f"
  },
  {
    "url": "assets/img/docs/project-structure.png",
    "revision": "f27c862862e8f36772a6700dd06c697c"
  },
  {
    "url": "assets/img/favicon.ico",
    "revision": "a61817507821162ce48c41fcaaa487d8"
  },
  {
    "url": "assets/img/favicon.png",
    "revision": "a61817507821162ce48c41fcaaa487d8"
  },
  {
    "url": "assets/img/feature-icons.png",
    "revision": "71a2d41278528e9657bb2946f68bc8c4"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/img/ionic-os-dark-logo.png",
    "revision": "a6c971b8f10881a96050c511c35984e3"
  },
  {
    "url": "assets/img/ionic-os-logo.png",
    "revision": "d1d25937ddf7e6e453f5a623d0b25b89"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "0ab79243b610b5eb6f909727799fe1df"
  },
  {
    "url": "assets/img/pwa.png",
    "revision": "f740988d2e33bdfd48c816fa17ba9f00"
  },
  {
    "url": "assets/img/right-img.png",
    "revision": "5841d9860a1facd71f0e01fe283142f0"
  },
  {
    "url": "assets/img/text-logo.png",
    "revision": "45a94a6c3509dac4b3b16415f2679896"
  },
  {
    "url": "assets/img/text-logo.svg",
    "revision": "4f658c2a420d5dd7f30d09c2c87781cf"
  },
  {
    "url": "assets/img/video-icon.png",
    "revision": "6f27af15cab04aafd7193b76825c2eac"
  },
  {
    "url": "build/app.js",
    "revision": "e053b3a0752d572ad45c53aeb603c7aa"
  },
  {
    "url": "build/app/9vp1kpca.js",
    "revision": "ec63c784fbc2f0b40f0bcdb8ce78ee07"
  },
  {
    "url": "build/app/a9pov8p9.js",
    "revision": "396bc3afa4b6aabbea62862f6283645e"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "3a5c841401a41c898207dc7d241ac038"
  },
  {
    "url": "build/app/app.gzgsz0co.js",
    "revision": "177700d815356e1394adb2ecc5151597"
  },
  {
    "url": "build/app/app.m3eyznes.js",
    "revision": "f80437a8f51181860b330e2f59bbd7ad"
  },
  {
    "url": "build/app/app.qnefnhxv.js",
    "revision": "0a42ace057e984409fc0b0c5cf03e10e"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "7e1206d49887182b5d60a754ecb6d246"
  },
  {
    "url": "build/app/b7mowk9t.js",
    "revision": "3c9adb82724900595b7bb50152c94da4"
  },
  {
    "url": "build/app/bua0xdue.js",
    "revision": "b28d56d6f357f4fdd0ef6e3e6ce9debd"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/krirex7d.js",
    "revision": "2379293fa04a47b457246d63856c5362"
  },
  {
    "url": "build/app/lljbbqab.js",
    "revision": "4cb1be69cd6f9e9015e3d5d93d0159e5"
  },
  {
    "url": "build/app/lppew0yu.js",
    "revision": "6e6e62ef569bd610b181f19a188a47f8"
  },
  {
    "url": "build/app/n56a2jzp.js",
    "revision": "e954543252f3704d0f97c59bfeda6c9c"
  },
  {
    "url": "build/app/nvgxmkhh.js",
    "revision": "549d52c8595fc8cd8cc1dcadb5edd3c2"
  },
  {
    "url": "build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "build/app/pbssls7g.js",
    "revision": "bceea4fa858c798bb6fa201033865b51"
  },
  {
    "url": "build/app/pxqetkvb.js",
    "revision": "b265badb0f3b157462d6173e37e36a30"
  },
  {
    "url": "build/app/qiy3cz0d.js",
    "revision": "83e3021b4617f4cedbe189546fe6e7bf"
  },
  {
    "url": "build/app/rhlmfaus.js",
    "revision": "6be3c0d5f97086f8fab64b1bf2a654a5"
  },
  {
    "url": "build/app/rjkvhcbv.js",
    "revision": "48c55f83fea984765543325f8a71dd02"
  },
  {
    "url": "build/app/rn3mtayu.js",
    "revision": "e8700405747f76057c6c1d89a8b4392d"
  },
  {
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "docs-content/addons/stencil-router.html",
    "revision": "c2790bae4e03529c153d19daa0486f39"
  },
  {
    "url": "docs-content/advanced/angular-integration/index.html",
    "revision": "7bd66f3ef35755f6729e061794a99e5e"
  },
  {
    "url": "docs-content/advanced/distribution/index.html",
    "revision": "80003ea184cb027dc421b157ba495dc3"
  },
  {
    "url": "docs-content/advanced/pre-rendering/index.html",
    "revision": "f0f447abe7f473d7eee5b948c7a383e8"
  },
  {
    "url": "docs-content/advanced/service-worker/index.html",
    "revision": "d46601d6e44303a9e5f316427f693595"
  },
  {
    "url": "docs-content/advanced/shadow-dom/index.html",
    "revision": "f6b45047ffd1103af8a6c3c50393843c"
  },
  {
    "url": "docs-content/advanced/ssr/index.html",
    "revision": "c5696040315280af27a3f40a09541dba"
  },
  {
    "url": "docs-content/android/configuration.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs-content/android/managing-dependencies.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs-content/apis/accessibility/index.html",
    "revision": "c7a1ad48f7bfb5cf38558b6fb7cba932"
  },
  {
    "url": "docs-content/apis/app-state/index.html",
    "revision": "999facfb22e542e738f0a8bad2e74284"
  },
  {
    "url": "docs-content/apis/browser/index.html",
    "revision": "da02b104ee74dcf071a39358c4d1b128"
  },
  {
    "url": "docs-content/apis/camera/index.html",
    "revision": "425a74a3b2cb775baa156c23cf03ccf3"
  },
  {
    "url": "docs-content/apis/clipboard/index.html",
    "revision": "1e1bf66b8cbb696ab92ce2dd274a0470"
  },
  {
    "url": "docs-content/apis/console/index.html",
    "revision": "3355094401ed4e2dd74b3c1b1a0b165a"
  },
  {
    "url": "docs-content/apis/device/index.html",
    "revision": "ede3c0be012bb689b9e534f20925d58a"
  },
  {
    "url": "docs-content/apis/filesystem/index.html",
    "revision": "080ae8008b9e1e179b807d6f88699c87"
  },
  {
    "url": "docs-content/apis/geolocation/index.html",
    "revision": "fe22d572e98e29c502dcbfb17c94a32e"
  },
  {
    "url": "docs-content/apis/haptics/index.html",
    "revision": "12fcb8a4f1ff57a02e8496adb7e4cf6d"
  },
  {
    "url": "docs-content/apis/keyboard/index.html",
    "revision": "9c3d351f3e5c6f4a27f6ca5598832df8"
  },
  {
    "url": "docs-content/apis/local-notifications/index.html",
    "revision": "ddd1ef0f281afd368b26b8ff9ffed359"
  },
  {
    "url": "docs-content/apis/modals/index.html",
    "revision": "d9035bd70f2aaea317f694211ce39b6c"
  },
  {
    "url": "docs-content/apis/network/index.html",
    "revision": "16138ec27d0fc0cad9a899160c27db92"
  },
  {
    "url": "docs-content/apis/photos/index.html",
    "revision": "717e033ab8c2253df05edd29b03988b7"
  },
  {
    "url": "docs-content/apis/push-notifications/index.html",
    "revision": "b6d305b8bbd5a93ea2c8670307ab8438"
  },
  {
    "url": "docs-content/apis/share/index.html",
    "revision": "6251446ae6fc08cbd8fbacbeb38d31de"
  },
  {
    "url": "docs-content/apis/splash-screen/index.html",
    "revision": "3d347bc76abd2bec98a56394d863e9a3"
  },
  {
    "url": "docs-content/apis/status-bar/index.html",
    "revision": "e694758194b36782bb5e9577c9927c3a"
  },
  {
    "url": "docs-content/apis/storage/index.html",
    "revision": "49487527b73987458ca2a59815f3e68c"
  },
  {
    "url": "docs-content/apis/toast/index.html",
    "revision": "4a1f343616e45b363717beb971e835ea"
  },
  {
    "url": "docs-content/basics/app-project-structure.html",
    "revision": "d7f5fbded8eeca7fc7397ec496f0108d"
  },
  {
    "url": "docs-content/basics/building-your-app.html",
    "revision": "d9d82945a76f22ab1ff93a67fcf8a259"
  },
  {
    "url": "docs-content/basics/component-lifecycle.html",
    "revision": "f94b50ebb42950bfc71336b61abc2b40"
  },
  {
    "url": "docs-content/basics/configuring-your-app.html",
    "revision": "ff88901bcbddffdba9e888801ab0f552"
  },
  {
    "url": "docs-content/basics/creating-apps.html",
    "revision": "578b7e61f8128e22e48f1b8b2df9ecc3"
  },
  {
    "url": "docs-content/basics/decorators.html",
    "revision": "1192a18adfaf9f024e158a253de6ccec"
  },
  {
    "url": "docs-content/basics/events.html",
    "revision": "daa0ca09ba0388faf45ca50acdeb64f1"
  },
  {
    "url": "docs-content/basics/forms.html",
    "revision": "e645d102707c5d31e3ca463400ab7bd2"
  },
  {
    "url": "docs-content/basics/handling-arrays.html",
    "revision": "e3db7a344eff3b92b1bd1fa798d94599"
  },
  {
    "url": "docs-content/basics/managing-platforms.html",
    "revision": "6a98177cdbea8085d7a925e04ee3a8d5"
  },
  {
    "url": "docs-content/basics/my-first-component.html",
    "revision": "5bf814be1ae69cf68188f4e1253edc34"
  },
  {
    "url": "docs-content/basics/running-your-app.html",
    "revision": "d3367b599e5ea91c51cb42c795cf1a28"
  },
  {
    "url": "docs-content/basics/stencil-config.html",
    "revision": "9f2483724de100afaa8d972409f1f438"
  },
  {
    "url": "docs-content/basics/templating.html",
    "revision": "e58f462a976bc5dc581f221273c66280"
  },
  {
    "url": "docs-content/basics/testing.html",
    "revision": "26a89a2ffa18b6278c60225aec05635e"
  },
  {
    "url": "docs-content/compiler/config.html",
    "revision": "f9c2cda306801bb1b38562175b7719d6"
  },
  {
    "url": "docs-content/intro/browsers.html",
    "revision": "d4fd210849e901aa9ddc213d72b8b063"
  },
  {
    "url": "docs-content/intro/getting-started.html",
    "revision": "59945f36fb42bbacb1eb57e714d3cd1b"
  },
  {
    "url": "docs-content/intro/index.html",
    "revision": "01c0c5b5af09fc640efb14aaeec7914f"
  },
  {
    "url": "docs-content/intro/migrating-from-phonegap-cordova.html",
    "revision": "97c374c14c7abd1c7cf8edeb2dee9f71"
  },
  {
    "url": "docs-content/ios/configuration.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs-content/ios/managing-dependencies.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs-content/plugins/creating-plugins.html",
    "revision": "e0baf1a49824a26d4bc5e4e369b41e1d"
  },
  {
    "url": "docs-content/plugins/index.html",
    "revision": "7f3e45e34d816318293edd4b8802b5dc"
  },
  {
    "url": "docs-content/plugins/plugin-api-javascript.html",
    "revision": "39b5d2445d5998a98788aa0822a52f4f"
  },
  {
    "url": "docs-content/start/index.html",
    "revision": "2aabcb99454b00e03c9ec799255c63a0"
  },
  {
    "url": "docs/intro/index.html",
    "revision": "5151de82bbbcd928230156e7cd22f2d9"
  },
  {
    "url": "host.config.json",
    "revision": "ec2da7a8e895961e6fd75c02b4e92cd8"
  },
  {
    "url": "index.html",
    "revision": "777bd0a2ae4fe2b51d8817614c29cdf5"
  },
  {
    "url": "manifest.json",
    "revision": "10fddfb1d610b09dfc1c4578e1f2faf2"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
