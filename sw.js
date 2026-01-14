
const CACHE_NAME = 'atlas-v7-final';

self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isCode = url.pathname.endsWith('.tsx') || url.pathname.endsWith('.ts');

  if (isCode && url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (!response.ok) return response;
          const text = await response.text();
          // Forzamos el tipo MIME a javascript puro para que el navegador no proteste
          return new Response(text, {
            headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
          });
        })
        .catch(() => fetch(event.request))
    );
  }
});
