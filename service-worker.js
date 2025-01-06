self.addEventListener("push", function (event) {
  const options = {
    body: event.data.text(),
    icon: "icon-192.png",
    vibrate: [100, 50, 100],
  };

  event.waitUntil(
    self.registration.showNotification("YouTube Monitor", options)
  );
});
