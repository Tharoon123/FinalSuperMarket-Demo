import React, { useState } from 'react'
import { getDatabase, ref, set, push, get } from 'firebase/database';
import app from '../../firebaseConfigFile';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function CardPayment() {
    let [input1, setval1]=useState("");
    let [input2, setval2]=useState("");
    let [input3, setval3]=useState("");
    let [input4, setval4]=useState("");

    //console.log(input1, input2)

    const saveData = async () => {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "card_details"));
      set(newDocRef, {
        name: input1,
        number: input2,
        expire_date: input3,
        cvv: input4

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
        <Container>
            <Row>
                <Col style={{
                    marginTop: '100px'
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="string" placeholder="Name On The Card" onChange={(e)=>setval1(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="string" placeholder="Card Number" onChange={(e)=>setval2(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setval3(e.target.value)}>
                            <Form.Label>Expire Date</Form.Label>
                            <Form.Control type="string" placeholder="Expire Date"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setval4(e.target.value)}>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="string" placeholder="CVV"/>
                        </Form.Group>
                        
                        <Button variant="primary"  onClick={saveData}>
                            Submit
                        </Button>
                    </Form>
                    <br></br>
                    <Button variant="primary" onClick={fetchData}>Display</Button>
                    <ul>
                        {getvalArry.map((item, index) => (
                            <li key={index}> 
                            Name: {item.name}
                            <br></br>
                            Number : {item.number}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CardPayment