// Offline-Betrieb. Netzwerk zuerst (immer die neueste Version), der Cache dient nur als Rückfall.
// Alle GitHub-Pages-Projekte eines Kontos teilen sich eine Domain (…github.io) und damit auch den Cache-Speicher.
// Deshalb tragen die Cache-Namen den Pfad der App, und dieser Service Worker löscht NUR eigene Caches – nie die anderer Apps.
const SCOPE = new URL(self.registration.scope).pathname.replace(/\W+/g, '_');
const PREFIX = 'pushups' + SCOPE + '-';
const CACHE = PREFIX + 'v6';
const LEGACY = ['pushups-v5'];   // Cache-Name der früheren Version (aus dem alten Repository)
const ASSETS = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/home-icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => (k.startsWith(PREFIX) && k !== CACHE) || LEGACY.includes(k)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return; // API-Aufrufe nie cachen
  e.respondWith(fetch(e.request).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(e.request)));
});
