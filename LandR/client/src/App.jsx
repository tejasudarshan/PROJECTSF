import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import { Link } from 'react-router-dom';
function App() {

  return (
    
    // <div>
    // <Signup />
    // </div>  
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
