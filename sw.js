const CACHE_NAME = 'meow-garden-pwa-v1';

// Cài đặt Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('[Service Worker] Đã cài đặt');
});

// Kích hoạt Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
    console.log('[Service Worker] Đã kích hoạt');
});

// Chặn các request fetch để Chrome nhận diện là một App thực thụ
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => {
        return new Response('Meow Garden đang ngoại tuyến.');
    }));
});
