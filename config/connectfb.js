import { meta } from '@eslint/js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: meta.env.VITE_API_KEY,
    authDomain: meta.env.VITE_AUTH_DOMAIN,
    projectId: meta.env.ITE_PROJECT_ID,
    storageBucket: meta.envVITE_STORAGE_BUCKET,
    messagingSenderId: meta.envVITE_SENDER_ID,
    appId: meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);