// Bump this whenever a file is replaced at an existing path. The fetch handler
// below is cache-first for images/CSS/JS/fonts, and /assets/** filenames are not
// content-hashed, so a returning visitor would otherwise keep the old bytes
// forever. v2 = the optimised brand logos, noise tile and hero-art ladder.
const CACHE_NAME = 'swapbiswas-v2';
const OFFLINE_URL = '/offline/';

// Pre-cache the offline page and core assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([OFFLINE_URL, '/favicon.svg', '/icon-192.png'])
    )
  );
  self.skipWaiting();
});

// Clean up old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for navigations, cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Navigation requests: network first, offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache a copy of successful navigations
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Same-origin static assets (CSS, JS, images, fonts): cache first, network fallback.
  //
  // The same-origin check matters. Without it this branch also matched
  // googletagmanager.com/gtm.js, gtag/js, clarity.ms/tag and adsbygoogle.js and
  // stored them cache-first with no revalidation - so a returning visitor kept
  // running whatever version of the GTM container they first happened to load,
  // and container publishes never reached them. It also filled the origin's
  // storage quota with opaque cross-origin responses.
  //
  // Cache-first is safe for what remains: /_astro/** is content-hashed, and the
  // un-hashed /assets/** files are invalidated by bumping CACHE_NAME above.
  const url = new URL(request.url);
  if (
    url.origin === self.location.origin &&
    (request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'image' ||
      request.destination === 'font')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)));
          return response;
        });
      })
    );
  }
});
