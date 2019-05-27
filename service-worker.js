console.log("service-worker.js");

self.addEventListener("install", function (event) {
  console.log("install");
});
const CACHE_NAME = "cache-v1"
let immutableData = new Set(
  [
    "/",
    "/css",
    "/js",
    "/img",
    "/style_image",
    "/style_model",
  ]
)

let mutableData = new Set(
  []
)
const HOST = "github"
self.addEventListener("install", function (event) {
  // Perform install steps
  console.log("install");
  self.skipWaiting()
});


self.addEventListener("fetch", event => {
  // console.log('event', event)
  let url = new URL(event.request.url)
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    console.log("url cached", url, event)
    return
  }

  if (!url.host.includes(HOST) && url.href) {
    console.log("url", url, event)
    event.respondWith(fetch(event.request))
    return
  }

  if (url.href)
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cacheResponse => {
          let fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return cacheResponse || fetchPromise;
        })
      )
    );
});
