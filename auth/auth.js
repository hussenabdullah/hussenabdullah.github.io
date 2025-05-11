// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your Firebase configuration (replace these values with yours)
const firebaseConfig = {
  apiKey: "AIzaSyDBy1yvyNbEitvt9k6IWezyu-4Z1iLc1go",
  authDomain: "cryptopromowebsite.firebaseapp.com",
  projectId: "cryptopromowebsite",
  storageBucket: "cryptopromowebsite.firebasestorage.app",
  messagingSenderId: "662627020656",
  appId: "1:662627020656:web:257e083ce0c3209a15a9b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/// === User Registration ===
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User Registered:", userCredential.user);
      alert("Registration successful!");
    })
    .catch((error) => {
      console.error("Registration Error:", error.message);
      alert("Error: " + error.message);
    });
};

/// === User Login ===
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User Logged In:", userCredential.user);
      alert("Login successful!");
    })
    .catch((error) => {
      console.error("Login Error:", error.message);
      alert("Error: " + error.message);
    });
};

/// === User Logout ===
export const logoutUser = () => {
  return signOut(auth)
    .then(() => {
      console.log("User Logged Out");
      alert("Logout successful!");
    })
    .catch((error) => {
      console.error("Logout Error:", error.message);
      alert("Error: " + error.message);
    });
};
