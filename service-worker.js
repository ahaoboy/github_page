console.log("service-worker.js");

self.addEventListener("install", function (event) {
  // Perform install steps
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
//
// self.addEventListener("fetch", event => {
//   console.log("fetch", event.request.url);
//   if (event.request.url.includes("css")) {
//     console.log(event.request.url);
//     event.respondWith(
//       new Response(
//         `
//         body{
//           background:gray;
//         }
//         `,
//         {
//           headers: {
//             "Content-Type": "text/css"
//           }
//         }
//       )
//     );
//   }
// });


self.addEventListener("fetch", event => {
  console.log('event', event)
  let url = new URL(event.request.url)
  if (!url.host.includes(HOST) ||
    event.request.cache === 'only-if-cached' ||
    event.request.mode !== 'same-origin'
  ) {
    console.log("url", url)
    return event.respondWith(fetch(event.request))
  }
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
