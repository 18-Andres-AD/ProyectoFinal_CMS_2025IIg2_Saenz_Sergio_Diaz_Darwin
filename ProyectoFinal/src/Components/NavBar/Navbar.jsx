import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/dato1">Dato 1</Link></li>
        <li><Link to="/dato2">Dato 2</Link></li>
    </ul>
</nav>
  )
}

export default Navbar