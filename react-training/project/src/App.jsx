import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/SideNavbar/components'
import Rewards from './components/Rewards/components'


function App() {
  

  return (
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/rewards' element={<Rewards/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
