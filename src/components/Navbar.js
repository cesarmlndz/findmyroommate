import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='logo'><h1>findmyroommate!</h1></Link>
    </div>
  )
}