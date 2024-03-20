import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className='LandingContent'>
      <h1 className='heading'><span className='magic'>Yes, Chef</span></h1>
      <Link to="/login" className="button-28">Login</Link>
    </div>
  );
}

export default Landing;
