import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVoE0KNO25zi9lajqsXhvEq1OmceIo8dg",
  authDomain: "repertorio-react.firebaseapp.com",
  projectId: "repertorio-react",
  storageBucket: "repertorio-react.appspot.com",
  messagingSenderId: "11386651585",
  appId: "1:11386651585:web:31bf2eb7fbcf5ce5462540"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);