
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



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