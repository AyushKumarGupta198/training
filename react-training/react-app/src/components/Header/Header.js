import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector,useDispatch } from 'react-redux';
//import  {useStore} from '../../pages/Zustand';
import useStore from '../../zustand/store';

function Header() {
    const theme = useSelector((state) => state.theme.theme);
    const {mode,toggleMode}=useStore();
  return (
    <header className='Header'>
        <ul>
            <Link to='/'>
            <li >Home</li>
            </Link>
            <Link to='/about'>
            <li >About</li>
            </Link>
            <Link to='/contact'>
            <li>Contact</li>
            </Link>
            <Link to='/login'>
            <li >LogIn</li>
            </Link>
        </ul>
        <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
        <h2>{mode == "light" ? "Light Mode" : "Dark Mode"}</h2>
    </header>
  )
}

export default Header