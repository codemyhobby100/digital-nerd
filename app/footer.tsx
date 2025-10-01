import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center p-4 mt-4'>
    <div className="flex items-center">
        <Image
        priority
        src="/images/logo.png"
        alt="Logo"
        width={160} 
        height={80}  
        className="w-32 h-20 md:w-40 md:h-20"  // Fine-tuned proportions
      />
    </div>
    <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
      <Link href="/" className='text-white'>Privacy Policy</Link>
      <Link href="/" className='text-white'>Terms And Condition</Link>
      <Link href="/" className='text-white'>Refund Policy</Link>
      <div className='flex gap-3'>
        <a href="https://www.instagram.com/digitalnerdhq/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-[18px] text-white'/>
        </a>
        <a href="https://x.com/DigitalNerdHQ" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className='text-[18px] text-white'/>
        </a>
      </div>
      
    </div>
  </footer>
  
  );
}

export default Footer;
