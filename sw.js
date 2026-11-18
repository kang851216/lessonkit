/* sw.js — offline cache for LessonKit */
const CACHE = 'lessonkit-v3';
const ASSETS = [
  './',
  './index.html',
  './name-picker-wheel.html',
  './group-maker.html',
  './class-timer.html',
  './404.html',
  './css/style.css',
  './js/app.js',
  './js/stats.js',
  './js/roulette.js',
  './js/kelompok.js',
  './js/timer.js',
  './manifest.webmanifest',
  './how-to-pick-a-student-at-random.html',
  './30-minute-exam-timer.html',
  './groups-of-four.html',
  './offline-name-picker.html',
  './icebreaker-ideas-for-class.html',
  './online-countdown-timer.html',
  './icebreakers-for-middle-school.html',
  './icebreakers-for-4th-grade.html',
  './group-maker-with-topics.html',
  './name-wheel-for-groups.html',
  './raffle-name-picker.html',
  './guides/how-to-group-students.html',
  './guides/random-student-picker-ideas.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
