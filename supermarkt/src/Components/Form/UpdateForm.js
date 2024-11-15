import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import payment from "../Assets/payment2.png";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../FirebaseConfig';

function UpdateForm() {
  const navigate = useNavigate();
    let [inputimg, setimg] = useState('')
    let [inputCnum, setCnum] = useState('')
    let [inputDate, setDate] = useState('')
    let [inputCvv, setCvv] = useState('')

    

    

    const searchData = async (searchTerm) => {
      try {
        const q = query(
          collection(db, "card_details"),
          where("card_number", "==", inputCnum)
        );
    
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
        console.log("Search results: ", results);
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position['coords']['longitude'])
          console.log(position['coords']['latitude'])
        })

        alert("Card owner is "+results[0]['name'])

        setimg(results[0]['img'])
        
      } catch (e) {
        console.error("Error searching documents: ", e);
      }
    };

  return (
    <div>
      
      <div className='mx-[100px]'>
                <br></br>
                <center>
                    <div>
                        <h1 style={{
                            fontSize: 50,

                        }}>Proceed to Pay </h1>
                       <img src={payment} style={
                        {
                            height: 100,
                            width: 350
                        }
                    }/> 
                    </div>
                    
                </center>
                <br />
                <Form>
                  
                    <Form.Label style={{
                        fontSize: 20
                    }}>Card Number</Form.Label>
                    <Form.Control type='text' className="mb-3"
                        placeholder='**** **** **** ****'
                        onChange={(e) => setCnum(e.target.value)}
                        
                    >
                    </Form.Control>

                    <Form.Label style={{
                        fontSize: 20
                    }}>Expire Date</Form.Label>
                    <Form.Control type='text' className="mb-3"
                        placeholder='MM / YY'
                        onChange={(e) => setDate(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Label style={{
                        fontSize: 20
                    }}>CVV</Form.Label>
                    <Form.Control type='text' className="mb-3"
                        placeholder='***'
                        onChange={(e) => setCvv(e.target.value)}
                    ></Form.Control>

                    <Button variant='primary' style={{
                        margin: 5
                    }} onClick={searchData} >Pay</Button>
                    {console.log()}
                    <Button variant='primary' style={{
                        margin: 5
                    }} onClick={() => navigate("/ReadForm")}>Read</Button>
                    <Button variant='primary' style={{
                        margin: 5
                    }} onClick={() => navigate('/UpdateForm')}>Update</Button>
                    <Button variant='primary' style={{
                        margin: 5
                    }} onClick={() => navigate('/DeleteForm')}>Delete</Button>

                    <Button variant='primary' style={{
                        margin: 5
                    }} type='reset'>Clear</Button>
                    <center><img src={inputimg}/></center>
                </Form>
            </div>
    </div>
  )
}

export default UpdateForm