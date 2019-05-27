(function(e) {
  function t(t) {
    for (
      var o, r, s = t[0], c = t[1], l = t[2], u = 0, d = [];
      u < s.length;
      u++
    )
      (r = s[u]), a[r] && d.push(a[r][0]), (a[r] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    g && g(t);
    while (d.length) d.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== a[c] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = r((r.s = n[0]))));
    }
    return e;
  }
  var o = {},
    a = { app: 0 },
    i = [];
  function r(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = o),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var g = c;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  1: function(e, t) {},
  1573: function(e, t, n) {
    e.exports = n.p + "img/qq.b1093304.png";
  },
  2: function(e, t) {},
  3: function(e, t) {},
  4: function(e, t) {},
  "502b": function(e, t, n) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var o = n("2b0e"),
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
      },
      i = [],
      r = (n("7c55"), n("2877")),
      s = {},
      c = Object(r["a"])(s, a, i, !1, null, null, null),
      l = c.exports,
      g = n("8c4f"),
      u = function() {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("div", { staticClass: "main" }, [
          o("div", { staticClass: "up" }, [
            o("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.show_image,
                  expression: "show_image"
                }
              ],
              staticClass: "show_image",
              attrs: { src: "style_image/default.jpg", id: "show_image" },
              on: { click: e.upload }
            }),
            o("img", {
              staticClass: "hide_image",
              attrs: { id: "hide_image", src: "style_image/default.jpg" }
            }),
            o("canvas", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !e.show_image,
                  expression: "!show_image"
                }
              ],
              staticClass: "show_image",
              attrs: { id: "mix" }
            })
          ]),
          o("div", { staticClass: "down" }, [
            o("div", { staticClass: "icons" }, [
              o("img", {
                staticClass: "icon",
                attrs: { src: n("7114") },
                on: { click: e.download }
              }),
              o("img", {
                staticClass: "icon",
                attrs: { src: n("1573") },
                on: { click: e.download }
              }),
              o("img", {
                staticClass: "icon",
                attrs: { src: n("7fa8") },
                on: { click: e.download }
              }),
              o("img", {
                staticClass: "icon",
                attrs: { src: n("b8bd") },
                on: { click: e.download }
              }),
              o("img", {
                staticClass: "icon",
                attrs: { src: n("ca2d") },
                on: { click: e.download }
              })
            ]),
            o(
              "div",
              { staticClass: "images" },
              e._l(e.models, function(t, n) {
                return o("img", {
                  key: n,
                  staticClass: "style_image",
                  attrs: { src: "style_image/" + t.name + ".jpg" },
                  on: {
                    click: function(n) {
                      return e.transfer(t);
                    }
                  }
                });
              }),
              0
            )
          ])
        ]);
      },
      d = [],
      m = (n("ac4d"), n("8a81"), n("ac6a"), n("96cf"), n("3b8d")),
      f = (n("7f7f"), n("28a5"), n("2342"));
    function p(e, t) {
      var n = document.getElementById(e),
        o = "image/png",
        a = n.toDataURL(o),
        i = document.createElement("a");
      (i.href = a), (i.download = t), i.click();
    }
    var k = {
        name: "Display",
        data: function() {
          return {
            show_image: !0,
            tensor: null,
            file_name: "default",
            models: [
              { name: "default", model: null },
              { name: "starry", model: null },
              { name: "feathers", model: null },
              { name: "candy", model: null }
            ]
          };
        },
        methods: {
          upload: function() {
            var e = this,
              t = document.createElement("input");
            t.setAttribute("type", "file"),
              t.setAttribute("accept", "image/*"),
              console.log(t),
              t.click(),
              t.addEventListener("change", function() {
                var n = document.getElementById("hide_image"),
                  o = t.files[0];
                console.log(o),
                  (e.file_name = o.name.split(".")[0]),
                  (n.src = window.URL.createObjectURL(o));
                var a = document.getElementById("show_image");
                (a.src = window.URL.createObjectURL(o)),
                  (n.onload = function() {
                    var t = document.getElementById("mix");
                    (t.width = n.width),
                      (t.height = n.height),
                      (e.tensor = f["a"].fromPixels(n));
                  });
              });
          },
          change: function(e) {
            console.log(e);
            var t = document.getElementById("hide_image"),
              n = document.getElementById("upload").files[0];
            console.log(n);
            var o = window.URL.createObjectURL(n);
            t.src = o;
            var a = document.getElementById("show_image");
            a.src = o;
          },
          download: function() {
            console.log("download"), p("mix", this.file_name + "_style.jpg");
          },
          transfer: (function() {
            var e = Object(m["a"])(
              regeneratorRuntime.mark(function e(t) {
                var n, o, a, i;
                return regeneratorRuntime.wrap(
                  function(e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = t.model),
                            console.log(n),
                            (o = this.tensor),
                            console.log(o.shape),
                            (a = document.getElementById("mix")),
                            n)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            console.log("原图"),
                            (this.show_image = !0),
                            (e.next = 10),
                            f["a"].toPixels(o.toInt(), a)
                          );
                        case 10:
                          e.next = 27;
                          break;
                        case 12:
                          return (
                            (this.show_image = !1),
                            console.log("转换"),
                            (o = o.toFloat()),
                            console.log(o.shape),
                            (o = o.expandDims(0)),
                            console.log(o),
                            (i = n.execute(o)),
                            (i = i.squeeze(0)),
                            console.log("ret", i),
                            console.log(
                              "max min",
                              i.max().dataSync(),
                              i.min().dataSync()
                            ),
                            (i = i.clipByValue(0, 255).toInt()),
                            console.log("ret", i),
                            console.log(
                              "max min",
                              i.max().dataSync(),
                              i.min().dataSync()
                            ),
                            (e.next = 27),
                            f["a"].toPixels(i, a)
                          );
                        case 27:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()
        },
        mounted: (function() {
          var e = Object(m["a"])(
            regeneratorRuntime.mark(function e() {
              var t, n, o, a, i, r, s, c, l, g;
              return regeneratorRuntime.wrap(
                function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = !0),
                          (n = !1),
                          (o = void 0),
                          (e.prev = 3),
                          (a = this.models[Symbol.iterator]());
                      case 5:
                        if ((t = (i = a.next()).done)) {
                          e.next = 19;
                          break;
                        }
                        if (
                          ((r = i.value), console.log(r), "default" === r.name)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (s = "style_model/" + r.name + "/"),
                          (c = "tensorflowjs_model.pb"),
                          (l = "weights_manifest.json"),
                          (e.next = 14),
                          f["b"](s + c, s + l)
                        );
                      case 14:
                        r.model = e.sent;
                      case 15:
                        console.log(r.model);
                      case 16:
                        (t = !0), (e.next = 5);
                        break;
                      case 19:
                        e.next = 25;
                        break;
                      case 21:
                        (e.prev = 21),
                          (e.t0 = e["catch"](3)),
                          (n = !0),
                          (o = e.t0);
                      case 25:
                        (e.prev = 25),
                          (e.prev = 26),
                          t || null == a.return || a.return();
                      case 28:
                        if (((e.prev = 28), !n)) {
                          e.next = 31;
                          break;
                        }
                        throw o;
                      case 31:
                        return e.finish(28);
                      case 32:
                        return e.finish(25);
                      case 33:
                        (g = document.getElementById("hide_image")),
                          (this.tensor = f["a"].fromPixels(g)),
                          console.log("mounted");
                      case 36:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[3, 21, 25, 33], [26, , 28, 32]]
              );
            })
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()
      },
      w = k,
      h = (n("f55a"), Object(r["a"])(w, u, d, !1, null, "2024b01e", null)),
      I = h.exports;
    o["a"].use(g["a"]);
    var E = new g["a"]({
      routes: [{ path: "/*", name: "Display", component: I }]
    });
    n("ddb8");
    (o["a"].config.productionTip = !1),
      new o["a"]({
        router: E,
        render: function(e) {
          return e(l);
        }
      }).$mount("#app");
  },
  "5c48": function(e, t, n) {},
  7114: function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "7c55": function(e, t, n) {
    "use strict";
    var o = n("5c48"),
      a = n.n(o);
    a.a;
  },
  "7fa8": function(e, t, n) {
    e.exports = n.p + "img/空间.ed940436.png";
  },
  b8bd: function(e, t, n) {
    e.exports = n.p + "img/微信.c9b3a8df.png";
  },
  ca2d: function(e, t, n) {
    e.exports = n.p + "img/朋友圈.694e4c18.png";
  },
  ddb8: function(e, t) {
    console.log("registerServiceWorker.js"),
      "serviceWorker" in navigator &&
        window.addEventListener("load", function() {
          navigator.serviceWorker.register("/service-worker.js").then(
            function(e) {
              console.log(
                "ServiceWorker registration successful with scope: ",
                e.scope
              );
            },
            function(e) {
              console.log("ServiceWorker registration failed: ", e);
            }
          );
        });
  },
  f55a: function(e, t, n) {
    "use strict";
    var o = n("502b"),
      a = n.n(o);
    a.a;
  }
});
//# sourceMappingURL=app.2abb4c05.js.map
