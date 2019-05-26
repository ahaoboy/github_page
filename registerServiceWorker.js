/* eslint-disable no-console */
console.log("registerServiceWorker.js");
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/github_page/sw.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
// setTimeout(() => {
//   navigator.serviceWorker.ready.then(registration => {
//     console.log("register");
//     // registration.sync.register("send-message");
//     registration.sync.register("send-message");
//   });
// }, 3000);
// function showMsg() {
//   Notification.requestPermission(function(result) {
//     if (result === "granted") {
//       navigator.serviceWorker.ready.then(function(registration) {
//         registration.showNotification("Vibration Sample", {
//           body: "Buzz! Buzz!",
//           icon: "qq.png",
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: "vibration-sample"
//         });
//       });
//     }
//   });
// }
// showNotification();
//
navigator.serviceWorker.ready.then(registration => {
  registration.showNotification("card", {
    body: "are you ok?",
    icon: "/github_page/qq.png",
    badge: "/github_page/微信.png",
    tag: "hello",
    actions: [],
    // 震动模式
    vibrate: []
  });
});

// import { register } from "register-service-worker";
//
// if (process.env.NODE_ENV === "production") {
//   // if (process.env.NODE_ENV === "dev") {
//   register(`${process.env.BASE_URL}service-worker.js`, {
//     ready() {
//       console.log(
//         "App is being served from cache by a service worker.\n" +
//           "For more details, visit https://goo.gl/AFskqB"
//       );
//     },
//     registered() {
//       console.log("Service worker has been registered.");
//     },
//     cached() {
//       console.log("Content has been cached for offline use.");
//     },
//     updatefound() {
//       console.log("New content is downloading.");
//     },
//     updated() {
//       console.log("New content is available; please refresh.");
//     },
//     offline() {
//       console.log(
//         "No internet connection found. App is running in offline mode."
//       );
//     },
//     error(error) {
//       console.error("Error during service worker registration:", error);
//     }
//   });
// }
