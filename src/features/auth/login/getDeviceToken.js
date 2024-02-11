/* 
https://firebase.google.com/docs/cloud-messaging/js/send-multiple
*/

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Initialize Firebase Admin SDK
const app = initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG));

// // Get a reference to the messaging service
const messaging = getMessaging(app);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered');
    })
    .catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
}

export async function getDeviceToken() {
  try {
    const currentToken = await getToken(messaging, {
      // vapidKey: import.meta.env.VITE_VAPIDKEY,
      vapidKey: import.meta.env.VITE_VAPIDKEY
    });

    if (currentToken) {
      console.log("Got token");
      return currentToken;
    } else {
      console.log("No registration token available.");
      requestPermission();
    }
  } catch (err) {
    console.error("Error retrieving registration token:", err);
    throw err;
  }
}

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission is NOT granted.");
    }
  });
}
