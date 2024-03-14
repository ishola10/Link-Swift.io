import { getAuth, browserSessionPersistence, setPersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCr4AYN_O3lQ9Ld8QkMwO9T3FlwZJi0EBY",
  authDomain: "linkswift-d2b3d.firebaseapp.com",
  projectId: "linkswift-d2b3d",
  storageBucket: "linkswift-d2b3d.appspot.com",
  messagingSenderId: "855745614886",
  appId: "1:855745614886:web:1b995df117ce2f94d982e7",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log('Auth state persistence successfully enabled');
  })
  .catch((error) => {
    console.error('Error enabling auth state persistence:', error.message);
  });

export { app, auth, db, storage };
