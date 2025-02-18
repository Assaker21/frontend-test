// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging.js"
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

  // Handle background notifications
  messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);
    self.registration.showNotification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.icon || "/firebase-logo.png",
    });
  });
} catch (err) {
  console.log("ERROR IN SW: ", err);
}
