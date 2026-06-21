const CACHE_NAME = "nycrp-vip-cache-v1";
const ASSETS = [
  "/index.html",
  "/store.html",
  "/rules.html",
  "/support.html",
  "/leaderboard.html",
  "/members.html",
  "/css/style.css",
  "/js/script.js",
  "/manifest.webmanifest",
  "/images/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
