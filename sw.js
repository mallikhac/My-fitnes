const CACHE_NAME = 'fitness-tracker-cache-v6';
const urlsToCache = [
  '/',
  '/index.html',
  '/workouts.html',
  '/diet.html',
  '/style.css',
  '/script.js',
  '/workouts.js',
  '/diet.js',
  '/manifest.json'
];

// Install event: cache assets and take control immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Force activation of the new service worker
  );
});

// Activate event: clean up old caches and take control of clients
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => clients.claim()) // Take control of all open pages
  );
});

// Fetch event: serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
