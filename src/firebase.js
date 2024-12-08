import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

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

export { auth }; 
