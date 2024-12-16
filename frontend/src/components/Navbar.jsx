import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-[100%] bg-black border-b-[1px] pt-4 pb-4 border-b-white flex justify-center items-center"
    >
      <div className="w-[98%] flex justify-between items-center">
        <div className="logo text-white text-xl">
          Welcome!! <span className="wave-hand text-2xl">👋</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
