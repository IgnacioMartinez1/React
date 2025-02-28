import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDVWSu_dNSebeX1Jl8V4iz5RG98-yBO1aw",
  authDomain: "choni-b4be0.firebaseapp.com",
  projectId: "choni-b4be0",
  storageBucket: "choni-b4be0.firebasestorage.app",
  messagingSenderId: "123283710194",
  appId: "1:123283710194:web:4288cbfa93a58db6b4b06b",
  measurementId: "G-PV6L8CJYCC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
