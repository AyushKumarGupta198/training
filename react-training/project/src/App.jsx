import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rewards from './components/Rewards/components'
import Header from './components/Header/components'


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Rewards/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
