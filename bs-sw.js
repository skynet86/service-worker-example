   self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });  

   self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('ServiceWorkerExample').then(function(cache) {
        return cache.addAll([
          '/',
          '/sw-index.html',
          '/tool-img.png'
        ]);
      })
    );
   });