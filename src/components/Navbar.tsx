'use client';

import React from 'react';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="w-full bg-[#FBEBB5] p-4 flex justify-around items-center lg:justify-between">
        <div className="flex justify-around items-center gap-10 lg:w-1/2">
          <Link href="/Home">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <div className="hidden lg:flex justify-around items-center gap-10 list-none">
          <li className='flex items-center'><IoPersonOutline />!</li>
          <li><RiSearchLine /></li>
          <li><IoMdHeartEmpty /></li>
          <li><IoCartOutline /></li>
        </div>
        <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={20} color='#000' /> : <AiOutlineMenu size={20} color='#000' />}
        </div>
      </nav>
      {isMenuOpen && (
 <ul className='flex flex-col gap-4 mt-4 bg-yellow-200 text-center w-1/2 leading-tight ml-[600px] lg:hidden'>
 <li><Link href="#hero" onClick={toggleMenu}>Home</Link></li>
 <li><Link href="#shop" onClick={toggleMenu}>Shop</Link></li>
 <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
 <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
</ul>
)}
</>
)
}

export default Navbar;
