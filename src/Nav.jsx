import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"
import { TiThMenu } from "react-icons/ti";
const Nav = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  return (

       <nav className="navContainer">
                 <TiThMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu"/>



        <div className={isMenuOpen ? "links open" : "links"}>
 
        <Link onClick={() => setIsMenuOpen(false)} to="/dogs/">Home</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/dogs/adoption">Adoption</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/dogs/breed">Breed</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/dogs/facts">Facts</Link>
        </div>
      
    </nav>
   
  )
}

export default Nav
