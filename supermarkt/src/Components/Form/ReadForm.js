import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../FirebaseConfig'
import { Button } from 'react-bootstrap'

function ReadForm() {

    const [searchname, setname] = useState('')
    const [items, setItems] = useState([])


    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "card_details"));
            const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            //console.log(docs)
            setItems(docs);
            console.log(docs);

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    const searchData = async (searchTerm) => {
        try {
          const q = query(
            collection(db, "your-collection-name"),
            where("title", "==", searchTerm)
          );
      
          const querySnapshot = await getDocs(q);
          const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
          console.log("Search results: ", results);
          return results;
        } catch (e) {
          console.error("Error searching documents: ", e);
        }
      };



    return (
        <div>
            <h1>
                Hello
            </h1>
            <Button onClick={fetchData}> Display </Button>
            <br />

            <div>
                <h2>Items List</h2>
                <hr/>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.card_number}</p>
                            <p>{item.cvv}</p>
                            <p>{item.expire_d}</p>
                            <p>{item.id}</p>
                            <hr></hr>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ReadForm