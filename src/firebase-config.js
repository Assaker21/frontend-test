// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Replace with your Firebase project config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBdtxWlWG5fyvPQGhAIX2b-D2h4tvuaaSk",

  authDomain: "test-notifications-6b549.firebaseapp.com",

  projectId: "test-notifications-6b549",

  storageBucket: "test-notifications-6b549.firebasestorage.app",

  messagingSenderId: "215028577348",

  appId: "1:215028577348:web:5934f88f701cf5f81fb811",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
