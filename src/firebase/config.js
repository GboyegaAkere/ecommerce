import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyCR0S4B-pbecV2SvfLzPjdF8rcPPP3k4Ts",
  authDomain: "e-commerce-6bc60.firebaseapp.com",
  projectId: "e-commerce-6bc60",
  storageBucket: "e-commerce-6bc60.appspot.com",
  messagingSenderId: "984724422152",
  appId: "1:984724422152:web:79cd54f3746091a5031bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app