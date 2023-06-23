
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase, ref, push, remove,  set, onValue} from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import ListElement from "./listElements";

import React from 'react';
import { useList } from 'react-firebase-hooks/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const RenderList = () => {
  
  const listRefrence = ref(db, 'entries/');
  const [snapshot, loading, error] = useList (listRefrence)
  return(
   <React.Fragment>
    
         {snapshot.map((s) => (
          <ListElement id={s.key} component={s.val().component} count={s.val().count} />
        ))}
   </React.Fragment> 

    

  );
        
}
export const deleteItem = (key) => {
  console.log(key);
 const itemRef = ref(db, "entries/"+key);

  remove(itemRef);
}
export const writeData = (component, count) =>{

    const listRefrence = ref(db, 'entries/');
    let datetime = new Date()
    const newListRefrence = push(listRefrence);
    set(newListRefrence, {
      component: component,
      count: count,
      date: datetime.toUTCString()
    });

}
