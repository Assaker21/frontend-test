import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { messaging } from "./firebase-config";
import { getToken, onMessage } from "firebase/messaging";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
  alert(`New Notification: ${payload.notification.title}`);
});

const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      return getFCMToken();
    } else {
      console.log("Notification permission denied.");
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error);
  }
};

const getFCMToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        "BMdG8pYgCsHeLH4WkvBXalS3Yn8Lx6rVsHQI6gFSS9r8auj42zA7gj2s-BFLLhnzDFm4PCDkfRi6cSthokYzF9w", // Optional
    });
    if (token) {
      console.log("FCM Token:", token);
      // Send token to backend for future notifications
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
  }
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
