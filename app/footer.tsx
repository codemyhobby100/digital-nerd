import Image from 'next/image';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='flex justify-between items-center p-4 mt-4'>
      <div className='flex items-center'>
        {/* <img src="/path-to-your-logo.png" alt="Logo" className='h-8' /> */}
        <Image
              priority
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
      </div>
      <div className='flex items-center space-x-4'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-[18px] text-white'/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <RiTwitterXFill className='text-[18px] text-white'/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
