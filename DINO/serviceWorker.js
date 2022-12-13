const staticDevOso = "UPMH 6B EQUIPO OSO"
const assets = [
  "index.html.html",
  "/css/estilos.css",
  "/js/nucleo.js",
  "/img/cactus1.jpg",
  "/img/cactus2.jpg",
  "/img/dino.jpg",
  "/img/nube.jpg",
  "/img/suelo.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevOso).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })