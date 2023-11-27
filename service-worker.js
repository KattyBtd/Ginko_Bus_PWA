const cacheName = "ginkobusu-pwa-g1";
const contentToCache = [
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable_icon.png",
  "manifest",
  "app.js",
  "index.html",
  "style.css",
];


self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        console.log("[Service Worker] Caching all: app shell and content");
        await cache.addAll(contentToCache);
      })(),
    );
  });
  