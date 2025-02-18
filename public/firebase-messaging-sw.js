importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

try {
  // Initialize Firebase inside the Service Worker
  firebase.initializeApp({
    apiKey: "AIzaSyBdtxWlWG5fyvPQGhAIX2b-D2h4tvuaaSk",

    authDomain: "test-notifications-6b549.firebaseapp.com",

    projectId: "test-notifications-6b549",

    storageBucket: "test-notifications-6b549.firebasestorage.app",

    messagingSenderId: "215028577348",

    appId: "1:215028577348:web:5934f88f701cf5f81fb811",
  });

  // Get Messaging Instance
  const messaging = firebase.messaging();
  self.addEventListener("push", function (event) {
    const payload = event.data.json();
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    event.waitUntil(
      self.registration.showNotification(notificationTitle, notificationOptions)
    );
  });

  messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
} catch (err) {
  console.log("ERROR IN SW: ", err);
}
