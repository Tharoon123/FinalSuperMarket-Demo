import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { getDatabase } from 'firebase/database'
import { db } from '../../FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore'
import HeaderS from '../Header/HeaderS';
import Navbar from '../Navbar/Navbar';
import payment from "../Assets/payment2.png";

function FormData() {
    const navigate = useNavigate();

    let [inputname, setname] = useState('')
    let [inputCnum, setCnum] = useState('')
    let [inputDate, setDate] = useState('')
    let [inputCvv, setCvv] = useState('')

    const addData = async () => {

        //console.log(inputID, inputname, inputage, inputtp);

        try {
            const docRef = await addDoc(collection(db, "card_details"), {

                card_number: inputCnum,
                cvv: inputCvv,
                expire_d: inputDate,
                name:inputname
            });
            
            console.log("Document written with ID: ", docRef.id);
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    return (
        <div >
            <HeaderS></HeaderS>
            <Navbar></Navbar>
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
                    }}>Name on Card</Form.Label>
                    <Form.Control type='text' className="mb-3" placeholder='John David'
                        onChange={(e) => setname(e.target.value)}
                    ></Form.Control>

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
                    }} onClick={addData}>Save Card</Button>
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
                </Form>
            </div>
        </div>
    )
}

export default FormData