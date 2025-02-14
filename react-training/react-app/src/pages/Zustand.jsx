import React from 'react'
import useStore from '../zustand/store'
import '../components/Context/Context.css'


function Zustand() {
    const {mode,toggleMode}=useStore();
  return (
    <div className={`theme-container ${mode}`}>
      <h1>Zustand Practice</h1>
      <h1>{mode=="dark" ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleMode}>change Theme</button>
    </div>
  )
}

export default Zustand