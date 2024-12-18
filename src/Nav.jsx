import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (

       <nav className="navContainer">
        <Link to="dogs/home">Home</Link>
        <Link to="dogs/adoption">Adoption</Link>
        <Link to="dogs/breed">Breed</Link>
        <Link to="dogs/facts">Facts</Link>
    </nav>
   
  )
}

export default Nav
