const cache = 'rg-v2';

const files = [
  '/',
  '/index.html',
  '/error.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/runSw.js',
  '/js/resistance.js',
  '/js/tolerance.js',
  '/img/resistencia.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cache).then((cache) => {
      cache.addAll(files);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cache).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) => {
        return cacheResponse || fetch(e.request);
      })
      .catch(() => caches.match('./error.html'))
  );
});
