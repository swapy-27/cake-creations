import React from 'react'
import "../css/navbar.css"
import Logo from "../assets/logo192.png";
export default function NavBar() {
  return (
    <div className="container">
      <div className='logo_container'>
           <img className="logo_image" src={Logo} alt="logo"></img>
      </div> 
      <div className='quicklink_container'>
        <p >Home</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

