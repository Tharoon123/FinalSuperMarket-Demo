import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Home/HomePage';
import HeaderS from './Components/Header/HeaderS';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import app from './firebaseConfigFile';
import CardPayment from './Components/Form/CardPayment';
import FaceVerify from './Components/FaceRecognition/FaceVerify';


function App() {

  

  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/CardPayment' element={<CardPayment/>}></Route>
          <Route path='/FaceVerify' element={<FaceVerify/>}></Route>       
       </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
