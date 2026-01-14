
const CACHE_NAME = 'atlas-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isLocalModule = url.origin === self.location.origin && 
                        (url.pathname.endsWith('.tsx') || url.pathname.endsWith('.ts'));

  if (isLocalModule) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (!response.ok) return response;
          
          const text = await response.text();
          // Retornamos una nueva respuesta limpia con el tipo MIME correcto
          return new Response(text, {
            headers: {
              'Content-Type': 'application/javascript',
              'Cache-Control': 'no-cache'
            }
          });
        })
        .catch(() => fetch(event.request))
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
