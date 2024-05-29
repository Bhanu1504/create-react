import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import CartDetails from './Components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <React.Fragment>
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartDetails/>}/>
    </Routes>
    <Toaster />
    </React.Fragment>
  );
}

export default App;
