import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Ajay.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Services</li>
        <li className="p-4">Developers</li>
        <li className="p-4">Works</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* changing nav according to screen size */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-60%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Ajay.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">Developers</li>
          <li className="p-4 border-b border-gray-600">Works</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
