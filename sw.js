
const CACHE_NAME = 'atlas-v5-final';

self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Detectar archivos de código fuente local
  const isSourceFile = url.origin === self.location.origin && 
                       (url.pathname.endsWith('.tsx') || url.pathname.endsWith('.ts'));

  if (isSourceFile) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (!response.ok) return response;

          // Convertimos a blob para manejar los datos binarios sin corrupción de texto
          const blob = await response.blob();
          
          // Creamos una nueva respuesta con el tipo MIME exacto que espera el navegador
          return new Response(blob, {
            status: response.status,
            statusText: response.statusText,
            headers: {
              'Content-Type': 'application/javascript; charset=utf-8',
              'Cache-Control': 'no-cache'
            }
          });
        })
        .catch(err => {
          console.error('Fetch error in SW:', err);
          return fetch(event.request);
        })
    );
  }
});
