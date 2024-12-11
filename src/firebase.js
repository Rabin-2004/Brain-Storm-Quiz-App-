import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaN7XbxQNPhIAAQRtAEP8w-gEHoTE0-Zk",
  authDomain: "quiz-app-e02ac.firebaseapp.com",
  projectId: "quiz-app-e02ac",
  storageBucket: "quiz-app-e02ac.firebasestorage.app",
  messagingSenderId: "491457310880",
  appId: "1:491457310880:web:68344f29bc50ff885899c5",
  measurementId: "G-EQ7N8F2KR9"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);

const saveUserProfile = async (userId, score, accuracy) => {
  try {
    const userRef = doc(db, "users", userId); 
    await setDoc(userRef, {
      score: score,
      accuracy: accuracy,
    }, { merge: true });  

    console.log("User profile saved/updated!");
  } catch (error) {
    console.error("Error saving user profile: ", error);
  }
};

const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, "users", userId); 
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      console.log("User Profile:", docSnap.data()); 
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting user profile: ", error);
  }
};

export { auth, db, saveUserProfile, getUserProfile };
