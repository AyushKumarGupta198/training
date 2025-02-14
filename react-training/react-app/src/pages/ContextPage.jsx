import React, { useEffect, useState } from 'react'
import '../components/Context/Context.css'
import { ThemeProvider } from '../contextAPI/Theme'
import Themebtn from '../components/Context/Themebtn'

function ContextPage() {
  const [themeMode,setThemeMode]=useState('light')

  const toggleTheme=()=>{
    themeMode==='light'?setThemeMode('dark'):setThemeMode('light')
  }

  useEffect(()=>{
    document.documentElement.setAttribute("theme", themeMode);
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,toggleTheme}}>
      <div className="app">
        <h1>Context API practice</h1>
        <Themebtn/>
        <p>Click the button to change the theme!</p>
      </div>
    </ThemeProvider>
  )
}

export default ContextPage