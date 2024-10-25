'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5677fa138f151bd11206a289e59cc591",
"version.json": "5c8ea78559df18638ea9709b5c6a4f4b",
"index.html": "125e215e2d1d59cf302696866e32b713",
"/": "125e215e2d1d59cf302696866e32b713",
"main.dart.js": "6e85db4befcc83c37566b012a7d734a0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88dfafccc25c238d64669be998ee558b",
"assets/AssetManifest.json": "4b43a651bf6855e7ca0dc06224902309",
"assets/NOTICES": "14acd6b8e0bda4c6adb046636d9eba95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "33086b7cdad366237c646ea96c6413a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8f512d95ca9755c3b328421655788786",
"assets/fonts/MaterialIcons-Regular.otf": "49c793ff1043f719f36db67d0ae55633",
"assets/assets/onnxruntime/dist/ort.node.min.mjs.map": "7f8fbd16371d3984a8b2285f4be4a4f2",
"assets/assets/onnxruntime/dist/ort.all.bundle.min.mjs": "f7a785d0bafb56ebefdd0dc93a5189e2",
"assets/assets/onnxruntime/dist/ort.training.wasm.min.js": "4cf957fa3976fd10754859b5e0bcac91",
"assets/assets/onnxruntime/dist/ort.wasm.mjs": "2147c649c02a00bec2af165c19e00da7",
"assets/assets/onnxruntime/dist/ort.webgpu.js": "8d2bc1b62f58f93e5925b0b0cfe7b237",
"assets/assets/onnxruntime/dist/ort.webgl.js": "525c9fb1687cee104dc2c4bca146bc19",
"assets/assets/onnxruntime/dist/ort.webgpu.bundle.min.mjs.map": "004c7c13e61b2472b15200d0e6d7590c",
"assets/assets/onnxruntime/dist/ort.all.min.mjs": "be2b192a651b6df7b2ebdbabcf71a642",
"assets/assets/onnxruntime/dist/ort.js": "718f1b1a2426635b734d683b379c900c",
"assets/assets/onnxruntime/dist/ort.node.min.mjs": "5fb2fd678e11e33be050957867e3e496",
"assets/assets/onnxruntime/dist/ort.webgl.min.js": "07b93f81b29dcae2bc88b654874f4a7f",
"assets/assets/onnxruntime/dist/ort.all.min.mjs.map": "917216ce48b0a610d1d4499a62a99062",
"assets/assets/onnxruntime/dist/ort.all.js": "93a529f79bf5b1697541a8e5feb03e95",
"assets/assets/onnxruntime/dist/ort-wasm-simd-threaded.wasm": "2b7d489349a946d36f7275dae9e22301",
"assets/assets/onnxruntime/dist/ort.webgl.min.js.map": "056ec902da3557265c6ebadaaa307d67",
"assets/assets/onnxruntime/dist/ort.webgpu.min.mjs": "19a97ad90dc196909454137514ec79a6",
"assets/assets/onnxruntime/dist/ort.wasm.min.mjs": "4884d09a92a338465ba29ab2f452c819",
"assets/assets/onnxruntime/dist/ort.all.min.js": "1ee17e2e0493ba02fe0513c314c31e37",
"assets/assets/onnxruntime/dist/ort.wasm.min.js": "59e63068d4f9271eeb81e4618c9df803",
"assets/assets/onnxruntime/dist/ort.bundle.min.mjs": "b16312c20cb68f80ebc41a2f20cfb97d",
"assets/assets/onnxruntime/dist/ort.webgpu.min.js": "02b6c2b3652adccfdd0db8a08453dfda",
"assets/assets/onnxruntime/dist/ort.node.min.js.map": "98b6e3874c327f5c15b6fb7768431acb",
"assets/assets/onnxruntime/dist/ort.training.wasm.js": "99b69a83f9b93717abfa2c2726a7be50",
"assets/assets/onnxruntime/dist/ort-wasm-simd-threaded.jsep.wasm": "56680e14fb86a28909353ecb51587dd6",
"assets/assets/onnxruntime/dist/ort.min.mjs.map": "fc17a37e9c878c3804ccae65c9ab9cd3",
"assets/assets/onnxruntime/dist/ort-wasm-simd-threaded.mjs": "97dad4cfbdcf32e015e312026166232b",
"assets/assets/onnxruntime/dist/ort.webgpu.bundle.min.mjs": "773cf44a9a26930a2f5bae7ea7b24098",
"assets/assets/onnxruntime/dist/ort.training.wasm.mjs": "ff3707fd15a5e50927db6dacf27442e3",
"assets/assets/onnxruntime/dist/ort.bundle.min.mjs.map": "77c6398c0b9b976070dbf62e8d07724c",
"assets/assets/onnxruntime/dist/ort.webgpu.min.js.map": "8cd0b1a9abd40f49c0c933785e3e7521",
"assets/assets/onnxruntime/dist/ort.training.wasm.min.mjs.map": "07345a254cde529e8feda0a054215925",
"assets/assets/onnxruntime/dist/ort.webgpu.mjs": "f3aa2e0e6d07d8e9fa4d5c8432cbc7e8",
"assets/assets/onnxruntime/dist/ort.mjs": "212c26d6cd2b0435772129d54ee4e649",
"assets/assets/onnxruntime/dist/ort-training-wasm-simd-threaded.mjs": "f98f949b8b9b4f68cd8744d22c7f34fa",
"assets/assets/onnxruntime/dist/ort.training.wasm.min.mjs": "a02d03b9b09040679aa7688eb9a19839",
"assets/assets/onnxruntime/dist/ort.min.mjs": "ce28b35e57210ff2627c41445292dcac",
"assets/assets/onnxruntime/dist/ort.webgl.mjs": "77d93abc82c1b7010aace24f0e43793f",
"assets/assets/onnxruntime/dist/ort.min.js": "e465da3f43c18051e8af83b50374e17f",
"assets/assets/onnxruntime/dist/ort.min.js.map": "81ab1dedbeef4baf4e5c8340cf86b8fb",
"assets/assets/onnxruntime/dist/ort-wasm-simd-threaded.jsep.mjs": "fd34f1977d1b8631d80643fcdf8b26fb",
"assets/assets/onnxruntime/dist/ort.wasm.min.mjs.map": "3685a6009a8240e8b0a3fc4f8fd21981",
"assets/assets/onnxruntime/dist/ort-training-wasm-simd-threaded.wasm": "b2c113ad665acfe3fa9404cda0119566",
"assets/assets/onnxruntime/dist/ort.webgpu.min.mjs.map": "871b65724b513d15b6a869accde70324",
"assets/assets/onnxruntime/dist/ort.node.min.js": "c52521a629d2106829ba90b0a2b37707",
"assets/assets/onnxruntime/dist/ort.webgl.min.mjs.map": "29b2382dac53b7cbc2dd9cd58e80311e",
"assets/assets/onnxruntime/dist/ort.training.wasm.min.js.map": "ceb23af442dcf7311eb1b51005599d99",
"assets/assets/onnxruntime/dist/ort.all.bundle.min.mjs.map": "f6abb6032882f65d3515d7ac8ac13478",
"assets/assets/onnxruntime/dist/ort.webgl.min.mjs": "4df40820ea01eb35af0be89780caae17",
"assets/assets/onnxruntime/dist/ort.wasm.js": "1a1467219efeef23642a84f40de65746",
"assets/assets/onnxruntime/dist/ort.all.min.js.map": "6dcd17cbe72006db265afc527c49fb8b",
"assets/assets/onnxruntime/dist/ort.wasm.min.js.map": "15dc03ef737cc7528426d6ccbe4ca86a",
"assets/assets/onnxruntime/dist/ort.all.mjs": "10c8560c81bef88472a0a736f969cfb7",
"assets/assets/onnxruntime/types.d.ts": "3ecbdcfbe091a37a6ddb33fb322c79f3",
"assets/assets/onnxruntime/README.md": "8c98b72462ad483c83947edd465ccf06",
"assets/assets/onnxruntime/package.json": "7c313356da3c9d02f316a93e5960ed26",
"assets/assets/onnxruntime/lib/build-def.d.ts": "5fa3306550bcfc2694d4ecc4f89c9f38",
"assets/assets/onnxruntime/lib/backend-wasm-training.ts": "56560b7ca385e20a13bf9920eb4b29ed",
"assets/assets/onnxruntime/lib/backend-onnxjs.ts": "3eefb2549a229eb06e74ec516dc6804c",
"assets/assets/onnxruntime/lib/backend-wasm-inference.ts": "497cd0be579710c854bebcbb8604484f",
"assets/assets/onnxruntime/lib/backend-wasm.ts": "6bfd2ff763dfb851b490e242428f3f72",
"assets/assets/onnxruntime/lib/index.ts": "4efab3cf51f5f4daa531e3f5b08f0d7e",
"assets/assets/onnxruntime/lib/version.ts": "7b052f07477a8fe81e159a781fd0f27e",
"assets/assets/vad.js": "a037c4c4c81d88745c4f54528149e652",
"assets/assets/vad/webpack.config.index.js": "9421ff570f528f92626fd0a55c53d2af",
"assets/assets/vad/dist/resampler.d.ts": "68ae2b204163d8ac1a2d926cf80478eb",
"assets/assets/vad/dist/logging.d.ts": "3612127d67395bae86513e2fc719b362",
"assets/assets/vad/dist/default-model-fetcher.d.ts": "db41b427d7a6bd196b657b03bee57ab6",
"assets/assets/vad/dist/frame-processor.d.ts": "a41e660f98549af633670904a7130f61",
"assets/assets/vad/dist/logging.js.map": "8d7b7236ec351f0688781e1113066b7d",
"assets/assets/vad/dist/vad.worklet.bundle.min.js": "e6140bec439f3f42a77e7c493500a197",
"assets/assets/vad/dist/frame-processor.js": "87d0cd285af1376d589d415894fedca3",
"assets/assets/vad/dist/models.d.ts": "429194270dbc408b7d5b1b61f243fc16",
"assets/assets/vad/dist/silero_vad.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/assets/vad/dist/bundle.dev.js": "dd6d676845c3ae5d3fda548f95eb24a4",
"assets/assets/vad/dist/worklet.js.map": "87d34a80816d32831231f3f5d7f7574d",
"assets/assets/vad/dist/vad.worklet.bundle.dev.js": "6c33b648ed7be40f083fcccbba45e507",
"assets/assets/vad/dist/logging.js": "b7a4e9501530cad5c2ae0c6b803155a1",
"assets/assets/vad/dist/non-real-time-vad.d.ts.map": "fd0425fbe3caee557f959e639ef889f4",
"assets/assets/vad/dist/logging.d.ts.map": "3179275514a42c78e6a0657aa0a5b813",
"assets/assets/vad/dist/messages.d.ts": "66e3d9ea35aab9dc8cb1d45bfcefbae1",
"assets/assets/vad/dist/messages.d.ts.map": "a8761961ccf53c186183f94075b161ff",
"assets/assets/vad/dist/non-real-time-vad.js": "3d5c03946b96954b67cbdfd5d10aecca",
"assets/assets/vad/dist/index.js": "69552b50afb07b6a4e6b8931f44c7b60",
"assets/assets/vad/dist/models.js": "37d4de3e4e9d82ec055193da3890e081",
"assets/assets/vad/dist/default-model-fetcher.js": "e4f5083c31b4a07b7485ee4d2d43c8b6",
"assets/assets/vad/dist/models.d.ts.map": "652b7859bdc6c795dcafe2a5133b182d",
"assets/assets/vad/dist/bundle.min.js": "72063c9e9517388e1b2e37a313924235",
"assets/assets/vad/dist/asset-path.js.map": "8491df3a109a181f63a560be2c1fe32d",
"assets/assets/vad/dist/asset-path.d.ts.map": "b4932e7086a7f49ad4d0390b9eaec12f",
"assets/assets/vad/dist/default-model-fetcher.js.map": "bd6c4d9ce15d8d8440f8cd94eac58a50",
"assets/assets/vad/dist/asset-path.js": "c1bf62fb76bc141bd082fdf8c7f09a51",
"assets/assets/vad/dist/default-model-fetcher.d.ts.map": "6584766e4d8d5834d5844d841a9a9a09",
"assets/assets/vad/dist/real-time-vad.js": "52e8470c740fcb7b407abebc37bdad5b",
"assets/assets/vad/dist/utils.d.ts": "3c3accd0fafda6e2aa639afb50bea11a",
"assets/assets/vad/dist/utils.d.ts.map": "67fc673b6308471fb38a028f31dbe7f6",
"assets/assets/vad/dist/models.js.map": "4d768dc3d154699a2abaa28f1d98234b",
"assets/assets/vad/dist/resampler.js": "c8ab12914c36df6213a51ae373216e06",
"assets/assets/vad/dist/non-real-time-vad.d.ts": "4f121f3776d52e0cd7f59726382a21ad",
"assets/assets/vad/dist/real-time-vad.js.map": "2e7ddbee6197d96f97249c608680f857",
"assets/assets/vad/dist/index.js.map": "bb0d1645df510c84ed7a071d3b726703",
"assets/assets/vad/dist/resampler.d.ts.map": "466c14793cfc3867d1ebd17a895df232",
"assets/assets/vad/dist/worklet.d.ts.map": "4e97d55740482021c61cb49e5c93f964",
"assets/assets/vad/dist/utils.js": "182386401aea70242608c95048ca7918",
"assets/assets/vad/dist/utils.js.map": "721cb1fff21baea7475f314221637693",
"assets/assets/vad/dist/non-real-time-vad.js.map": "d18b5296d42f35bdd73489f9e8ca25bb",
"assets/assets/vad/dist/worklet.d.ts": "1cd223e133e2ea3447abe7c1a7795951",
"assets/assets/vad/dist/worklet.js": "5b750c0bde40d7e26a866e6ecb6cc283",
"assets/assets/vad/dist/index.d.ts": "2d1c2d4fe19fcda3d3c1c1a25c9e482e",
"assets/assets/vad/dist/real-time-vad.d.ts": "aa9840f7622af26d949e20fdcd13f78e",
"assets/assets/vad/dist/resampler.js.map": "5dd91f125f2ca50ddf39c51735364cc6",
"assets/assets/vad/dist/frame-processor.d.ts.map": "362e0df88b432945895bf07989cf2ed0",
"assets/assets/vad/dist/frame-processor.js.map": "92e8b5a7efdd3cf83dfa677726a8c05c",
"assets/assets/vad/dist/messages.js.map": "02c9ffd9a64057695fb5edbd3e711fd4",
"assets/assets/vad/dist/messages.js": "c8e00851299227ffa8549083e52326f8",
"assets/assets/vad/dist/index.d.ts.map": "a44859aee196a82514f61390a3456039",
"assets/assets/vad/dist/real-time-vad.d.ts.map": "ecdc1e63bf9b5a120feedeb14c3b9b50",
"assets/assets/vad/dist/asset-path.d.ts": "b09debfd2768e93655ff135d1b3b4a93",
"assets/assets/vad/webpack.config.worklet.js": "4e20a96377326063d1d49a8ab04f6c32",
"assets/assets/vad/README.md": "dbb17f69b88b7466de425fcaea6fd700",
"assets/assets/vad/package.json": "e96b6e3e3aabcdfe7a277a2c61c4e8fb",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
