// sw.js
const CACHE_NAME = "planet-conflict-v5";

const ASSETS = [
  "./",
  "./planetconflicts.html",
  "./manifest.webmanifest",

  // Maps
  "./lvl.csv",
  "./lvl2.csv",
  "./lvl3.csv",
  "./lvl4.csv",
  "./lvl5.csv",
  "./lvl6.csv",
  "./lvl7.csv",
  "./lvl8.csv",
  "./lvl9.csv",
  "./lvl10.csv",
  "./lvl11.csv",
  "./lvl12.csv",
  "./lvl13.csv",
  "./lvl14.csv",
  "./lvl15.csv",
  "./lvl16.csv",
  "./lvl17.csv",
  "./lvl18.csv",
  "./lvl19.csv",
  "./lvl20.csv",

  // Images
  "./Jaber.png",
  "./x-wing.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );

});



