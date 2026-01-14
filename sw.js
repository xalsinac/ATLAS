
const CACHE_NAME = 'atlas-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isLocalSource = url.origin === self.location.origin && 
                        (url.pathname.endsWith('.tsx') || url.pathname.endsWith('.ts'));

  if (isLocalSource) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (!response.ok) return response;
          // Forzamos el tipo MIME correcto para que el navegador no bloquee el módulo
          const headers = new Headers(response.headers);
          headers.set('Content-Type', 'application/javascript');
          return response.text().then(text => {
            return new Response(text, {
              status: response.status,
              statusText: response.statusText,
              headers: headers
            });
          });
        })
        .catch(err => fetch(event.request))
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
