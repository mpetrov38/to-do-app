import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBfqza238kHSpu7sNC2AlKv9UASJMRikw",
  authDomain: "to-do-app-68283.firebaseapp.com",
  projectId: "to-do-app-68283",
  storageBucket: "to-do-app-68283.appspot.com",
  messagingSenderId: "1017055730186",
  appId: "1:1017055730186:web:8c4719aedf952e1b18ddf3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


