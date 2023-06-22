
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB3J0LwARy63k-xBe4sSYfEvSwGwFnYrg",
  authDomain: "component-list-2f893.firebaseapp.com",
  databaseURL: "https://component-list-2f893-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "component-list-2f893",
  storageBucket: "component-list-2f893.appspot.com",
  messagingSenderId: "508101663973",
  appId: "1:508101663973:web:dac7ee88984a800bb3c80c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const writeData = (component, count) =>{
    const db = getDatabase();
    const refrence = ref(db, 'entries/');
    var date = new Date()
    set(refrence, {
      component: component,
      count: count,
      date: date
    });

}