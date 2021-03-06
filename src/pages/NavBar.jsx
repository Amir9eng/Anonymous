import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <nav>
      <Link to="/">Anonymous</Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/download">Download</Link>
        <Link to="/login">Get Started</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
