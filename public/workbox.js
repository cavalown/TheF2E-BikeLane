async function register() {
  if (!'serviceWorker' in navigator) {
    throw new Error('serviceWorker is not supported in current browser!')
  }

  const { Workbox } = await import('workbox-cdn/workbox/workbox-window.prod.es5.mjs')

  const workbox = new Workbox('/TheF2E-BikeLane/sw.js', {
    scope: '/TheF2E-BikeLane/'
  })

  await workbox.register()

  return workbox
}

window.$workbox = register()
  .catch(error => {})
