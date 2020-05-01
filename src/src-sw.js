
const router = new workbox.routing.Router();
const cacheFirst = new workbox.strategies.CacheFirst();
const networkFirst = new workbox.strategies.NetworkFirst();


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// This route uses Express-style path matching.
// Because we're using a path that starts with with 'https', it will also match
// cross-origin requests.
// const crossOriginExpressRoute = new workbox.routing.ExpressRoute({
//     path: 'https://httpbin.org/(.*)',
//     handler: ({event}) => {
//         console.log('Routed through the httpbin.org handler.');
//         return fetch(event.request);
//     },
// });

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
    blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});



// This route uses RegExp matching.
// If the RegExp matches any part of the request URL, then the route will be
// triggered.

const osmRegExpRoute = new workbox.routing.RegExpRoute(
    /https?:\/\/[abc].tile.osm.org\/[0-9]{2}\/[0-9]{5}\/[0-9]{5}.png/,
    cacheFirst
);

// const osmRegExpRouteB = new workbox.routing.RegExpRoute(
//     new RegExp ('https?://[abc].tile.osm.org/[0-9]{2}/[0-9]{5}/[0-9]{5}.png'),
//     cacheFirst
// );
// const mediaRegExpRoute = new workbox.routing.RegExpRoute(
//  new RegExp('/media/'),
//     cacheFirst
// );

// The routes are not active until we register them.
router.registerRoute(osmRegExpRoute);

//
// self.addEventListener('message', (event) => {
//     if (event.data && event.data.type === 'SKIP_WAITING') {
//         self.skipWaiting();
//     }
// });

/**
 * This is boilerplate, instructing the service worker to take control as soon
 * as it can.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());



// workbox.routing.registerRoute(
//     new RegExp('/media/'),
//     new workbox.strategies.CacheFirst()
// );
//
// workbox.routing.registerRoute(
//     new RegExp('^(http|https):\/\/[abc].tile\/o'),
//     new workbox.strategies.CacheFirst()
// );
//
//
// workbox.core.clientsClaim();



// const handler = workbox.precaching.createHandlerBoundToURL('/index.html');
// const navigationRoute = new workbox.routing.NavigationRoute(handler, {
//     allowlist: [
//         new RegExp('/map/'),
//     ],
//     // denylist: [
//     //     new RegExp('/blog/restricted/'),
//     // ],
// });
// registerRoute(navigationRoute);

/* FOR API CALLS */
// workbox.routing.registerRoute(
//     /https:\/\/api\.exchangeratesapi\.io\/latest/,
//     new workbox.strategies.NetworkFirst({
//         cacheName: "paths",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 10 * 60 // 10 minutes
//             })
//         ]
//     })
// );