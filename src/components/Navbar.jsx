import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-light">
            Navbar
            <ul className='nav-items'>
                <li className='nav-list'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-list'>
                    <Link to="/politics">Politics</Link>
                </li>
                <li className='nav-list'>
                    <Link to="/sports">Sports</Link>
                </li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar