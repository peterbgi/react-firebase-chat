
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-a91e5.firebaseapp.com",
  projectId: "react-chat-a91e5",
  storageBucket: "react-chat-a91e5.appspot.com",
  messagingSenderId: "154733357527",
  appId: "1:154733357527:web:0ad2815d166386cd858392"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
