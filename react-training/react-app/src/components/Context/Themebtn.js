import React from 'react'
import useTheme from '../../contextAPI/Theme'

function Themebtn() {
    const {themeMode,toggleTheme}=useTheme()
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {themeMode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  )
}

export default Themebtn