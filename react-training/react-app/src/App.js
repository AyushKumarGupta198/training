
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
import Redux from './pages/Redux';
import Zustand from './pages/Zustand';
import Joke from './pages/joke';
import User from './pages/User';

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
      <Route path='/redux' element={<Redux/>}/>
      <Route path='/zustand' element={<Zustand/>}/>
      <Route path='/joke' element={<Joke/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
