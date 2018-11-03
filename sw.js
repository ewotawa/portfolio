//service worker

console.log('this is the service worker');


// name cache
var CACHE_NAME = 'penguinCache';

// list urls to cache

var urlsToCache = [
    '/',
    '/assets/images/background_homepage.jpg',
    '/assets/images/gwg.png',
    '/assets/images/mpp.png',
    '/assets/images/pytorch.png',
    '/assets/images/skull.jpg',
    '/assets/images/skul192.jpg',
    '/assets/images/skull512.jpg',
    '/assets/js/idb.js',
    '/assets/js/main.js',
    '/assets/stylesheets/main.css',
    '/index.html',
    '/manifest.json',
    '/README.md',
    '/sw.js',
    'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
];

self.addEventListener('install', function(event) {
    console.log('service worker installing');
    //perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.log('service worker activating');
});

// add elements to the cache when the page's hash changes
/* 
self.addEventListener('hashchange', function(event) {
    console.log('window hash has changed. Add new assets to the cache.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.add(event.request);
            })
    );
}, false);
*/

//handle fetch events
self.addEventListener('fetch', function(event) {
    // add console logging for event requests
    //console.log(event.request);

    //serve static content from cache
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //Cache hit - return response
                if (response) {
                    return response;
                }                
                return fetch(event.request);                
            }
        )
    );
});
