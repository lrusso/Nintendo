const filesToCache = [
	"Nintendo.htm",
	"Nintendo.json",
	"Nintendo1.png",
	"Nintendo2.png",
	"NintendoFavIcon_16x16.png",
	"NintendoFavIcon_192x192.png",
	"NintendoFavIcon_512x512.png",
	"NintendoGame.htm",
	"NintendoGame.js",
	"NintendoShare.png"
];

const staticCacheName = "nintendo-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});