import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Home/HomePage';
import HeaderS from './Components/Header/HeaderS';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReadForm from './Components/Form/ReadForm';
import UpdateForm from './Components/Form/UpdateForm'
import DeleteForm from './Components/Form/DeleteForm'
import FormData from './Components/Form/FormData'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          
          <Route path='/ReadForm' element={<ReadForm/>}></Route>

          <Route path='/UpdateForm' element={<UpdateForm/>}></Route>

          <Route path='/DeleteForm' element={<DeleteForm/>}></Route>

          <Route path='/FormData' element={<FormData/>}></Route>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
