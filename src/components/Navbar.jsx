import React from 'react';
import netflix from '../imgs/netflix.png';

function Navbar() {
  return (
    <div className="nav w-full px-24 py-4 flex justify-between z-50 absolute">
        <h1 className="brand w-36">
        <img src={netflix} alt="logo" />
        </h1>
        <div className="btns">
            <button className="btn px-3 py-1 mr-4">Sign In</button>
            <button className="btn bg-[#e50914] px-3 py-1 rounded">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar