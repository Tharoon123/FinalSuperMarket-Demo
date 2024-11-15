import React, { useState } from 'react'
import { getDatabase, ref, set, push, get } from 'firebase/database';
import app from '../../firebaseConfigFile';

function CardPayment() {
    let [input1, setval1]=useState("");
    let [input2, setval2]=useState("");

    //console.log(input1, input2)

    const saveData = async () => {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "card_details"));
      set(newDocRef, {
        name: input1,
        number: input2
      }).then( () => {
        alert("data saved successfully")
      }).catch((error) => {
        alert("error: ", error.message);
      })
    }

    //Read Data 
    let [getvalArry,setvalArry]=useState([]);
    
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "card_details");
      const snapshot = await get(dbRef);
      if(snapshot.exists()) {
        setvalArry(Object.values(snapshot.val()));
      } else {
        alert("error");
      }
    }

  return (
    <div>
        <input type='text' value={input1} onChange={(e)=>setval1(e.target.value)}></input>
        <input type='text' value={input2} onChange={(e)=>setval2(e.target.value)}></input>
        <button onClick={saveData}> Save </button>
        <br/>

        <button onClick={fetchData}>Display</button>
        <ul>
          {getvalArry.map( (item, index) => (
            <li key={index}> 
              Name: {item.name}
              <br></br>
              Number :{item.number}
            </li>
                   
          ) )}
        </ul>


    </div>
  )
}

export default CardPayment