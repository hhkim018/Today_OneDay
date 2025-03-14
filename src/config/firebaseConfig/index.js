import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  //   vapidKey: import.meta.env.VITE_VAPID_KEY
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

navigator.serviceWorker
  .register("/custom-firebase-messaging-sw.js")
  .then((serviceWorker) => {
    // serviceWorker.active?.postMessage({
    //   type: "INIT_FIREBASE",
    //   config: firebaseConfig,
    // });
    getToken(messaging, {
      serviceWorkerRegistration: serviceWorker,
    }).then((current) => {
      console.log(current);
    });
  });

onMessage(messaging, () => {
  console.log("ss");
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
  };
  new Notification(notificationTitle, notificationOptions);
});
