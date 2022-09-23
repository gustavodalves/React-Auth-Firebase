import { initializeApp } from "firebase/app";

const {
    VITE_API_KEY: apiKey,
    VITE_AUTH_DOMANIN: authDomain,
    VITE_PROJECT_ID: projectId,
    VITE_STORAGE_BUCKET: storageBucket,
    VITE_MESSAGING_SENDER_ID: messagingSenderId,
    VITE_APP_ID: appId,
    VITE_MEASUREMENT_ID: measurementId,
} = import.meta.env

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

export default initializeApp(firebaseConfig);
