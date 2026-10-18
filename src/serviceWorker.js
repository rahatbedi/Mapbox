// Earlier builds of this app registered a precaching service worker. The
// current build does not generate one, so remove any that a returning
// visitor still has installed, or they would keep getting stale assets.
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
