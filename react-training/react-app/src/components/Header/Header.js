import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
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
    </header>
  )
}

export default Header