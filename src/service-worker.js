'use strict';

const CACHE_NAME = 'cv-app-static';

const STATIC_FILES = [
    'favicon.ico',
    'offline.html',
    'styles.scss'
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) =>  {
            console.log('Service Work adding static cache ')
            return cache.addAll(STATIC_FILES);
        })
    );
    self.skipWaiting();
})

self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keyslist) =>  {
            console.log('Service Work adding static cache ')
            return Promise.all(
                keyslist.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
})


self.addEventListener('fetch', (evt) => {
    if (evt.request.mode !== 'navigate') {
        return;
    }

    evt.respondWith(
        fetch(evt.request).catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match('offline.html');
            })
        })
    )
})
