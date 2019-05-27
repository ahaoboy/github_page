// service worker 独立于浏览器窗口或标签页
// 一旦注册成功,处于activated状态,即使打开新的标签页
// 也不会再次注册

self.addEventListener("install", function(event) {
  console.log("install", event);
});
let CACHE_NAME = "my-site-cache-v1";

// waitUntil 延迟 sw的生命周期,只有当事件处理完毕之后,才表示完成
self.addEventListener("activate", function(event) {
  console.log("activate", event);
  // event.waitUntil(

  // )
  // event.waitUntil(
  //   caches.keys().then(cacheNames =>
  //     Promise.all(
  //       cacheNames.map(cacheName => {
  //         // 删除旧的缓存,避免删除新的缓存
  //         if (
  //           CACHE_NAME !== cacheName &&
  //           cacheName.startsWith("my-cache-old-v1")
  //         )
  //           return caches.delete(cacheName);
  //       })
  //     )
  //   )
  // );
});
// console.log("navigator", navigator);
// console.log(self.registration);
// self.registration.showNotification("Vibration Sample", {
//   body: "Buzz! Buzz!",
//   icon: "qq.png",
//   vibrate: [200, 100, 200, 100, 200, 100, 200],
//   tag: "vibration-sample"
// });
// self.addEventListener("sync", e => {
//   console.log("sync", e);
//   navigator.serviceWorker.ready.then(registration => {
//     registration.showNotification("card", {
//       body: "are you ok?",
//       icon: "/qq.png",
//       badge: "/微信.png",
//       tag: "hello",
//       actions: [],
//       // 震动模式
//       vibrate: []
//     });
//   });
// });
// navigator.serviceWorker.ready.then(registration => {
//   registration.showNotification("card", {
//     body: "are you ok?",
//     icon: "/qq.png",
//     badge: "/微信.png",
//     tag: "hello",
//     actions: [],
//     // 震动模式
//     vibrate: []
//   });
// });

// navigator.serviceWorker.ready.then(registration => {
//   registration.showNotification("card");
// });

// console.log("Notification", Notification.requestPermission);
// Notification.requestPermission().then(permission => {
//   if (permission == "granted") {
//     navigator.serviceWorker.ready.then(registration => {
//       registration.showNotification("card");
//     });
//   }
// });
