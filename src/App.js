import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//next is to import my work pages

import Login from './mypages/login';
import Signup from './mypages/signup';
import Forgotpassword from './mypages/forgotpassword';
import Home from './mypages/home';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className='w-full h-screen bg-gray-200'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpassword' element={<Forgotpassword />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
