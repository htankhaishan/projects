import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 text-center text-lg">
        <div className="flex justify-center items-center px-6">
            <Link className="pr-6" href="#home">
            <img src="/logo.png" className="w-8 h-8 cursor-pointer" />
            </Link>
            <div className="flex justify-end space-x-2">
            <a href="#projects" className="p-4 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">Projects</a>
            <a href="#aboutMe" className="p-4 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">About</a>
            <a href="https://drive.google.com/file/d/10Rg7DKsVAPhdkpqiFZ30Q25hYL2BBYiZ/view?usp=drive_link" className="p-4 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">Download CV</a>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;