import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cards from './pages/Cards'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Sagaposts from './pages/Sagaposts'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/saga' element={<Sagaposts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
