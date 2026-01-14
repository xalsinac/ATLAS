
const CACHE_NAME = 'atlas-cache-v2';

// Instalación inmediata
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Interceptor de peticiones
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Si pedimos un archivo .tsx, forzamos el tipo MIME a javascript
  // Esto soluciona el error application/octet-stream de GitHub Pages
  if (url.pathname.endsWith('.tsx') || url.pathname.endsWith('.ts')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (!response.ok) return response;
          
          // Clonamos la respuesta pero cambiamos el header Content-Type
          const newHeaders = new Headers(response.headers);
          newHeaders.set('Content-Type', 'application/javascript');
          
          return response.blob().then(blob => {
            return new Response(blob, {
              status: response.status,
              statusText: response.statusText,
              headers: newHeaders
            });
          });
        })
        .catch(err => {
          console.error('SW fetch failed:', err);
          return fetch(event.request);
        })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
