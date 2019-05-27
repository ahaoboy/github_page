console.log("service-worker.js");

const CACHE_NAME = "cache-v1"
let immutableData = new Set(
  [
    "/index.html",
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
  // self.skipWaiting()
});


self.addEventListener("fetch", event => {
  // console.log('event', event)
  let url = new URL(event.request.url)

  // 缓存策略过滤
  // if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
  //   console.log("url cached", url, event)
  //   return
  // }

  // 本地域名过滤,只缓存自己域名下的文件
  // if (!url.host.includes(HOST) ||
  //   !url.href ||
  //   !url.href.startsWith("http") ||
  //   !url.href.startsWith("https")) {
  //   console.log("url", url, event)
  //   event.respondWith(fetch(event.request).catch(() => console.log("catch", event)))
  //   return
  // }

  // url 过滤, 确保herf存在,并且是域名下
  // 避免加载chrome的拓展出现的问题
  if (url.host.includes(HOST)){
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cacheResponse => {
          let fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => console.log("catch", event));
          return cacheResponse || fetchPromise;
        })
      )
    );
    return
  }


  console.log('=====', event)
});
