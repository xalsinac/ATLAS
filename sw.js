
// Service Worker mínimo para cumplir requisitos de PWA
const CACHE_NAME = 'atlas-cache-v1';
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
