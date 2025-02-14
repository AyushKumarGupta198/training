
import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import Fetch from './pages/Fetch';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import ContextPage from './pages/ContextPage';

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fetch' element={<Fetch/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/context' element={<ContextPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
