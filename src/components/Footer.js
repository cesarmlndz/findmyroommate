import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <h2>About</h2>
        <Link className='meet-dev' to='/about'><h3>Meet the developer</h3></Link>
      </div>
  )
}
