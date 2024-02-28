import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCtSWyjDkyxyfHg91tMlv3dalNvTjojzcA",
  authDomain: "quiz-d3d59.firebaseapp.com",
  databaseURL:
    "https://quiz-d3d59-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quiz-d3d59",
  storageBucket: "quiz-d3d59.appspot.com",
  messagingSenderId: "27371671203",
  appId: "1:27371671203:web:fa2f95ed7c1a938130b916",
});

export const db = getDatabase(firebaseApp);
export const usersRef = ref(db, "users");
