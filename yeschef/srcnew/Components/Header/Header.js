import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className='Headerlol'>
      <div className='navbarlol'>
        <div className="name">
              Yes, Chef
        </div>
        <div className='linkslol'>
          <div><Link to="/createaccount" className="button-28">Home</Link></div>
          <div><Link to="/createaccount" className="button-28">Search</Link></div>
          <div><Link to="/createaccount" className="button-28">Profile</Link></div>
          <div><Link to="/settings" className="button-28">Settings</Link></div>
        </div>
      </div>

    </div>
  )
}

export default Header