import React from 'react'
import "../css/navbar.css"
export default function NavBar() {
  return (
    <div className="container">
      <div className='logo_container'>
            <p>Delicious</p>
      </div>
      <div className='quicklink_container'>
        <p >Home</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

