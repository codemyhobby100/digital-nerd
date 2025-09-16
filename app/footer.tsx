import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center p-4 mt-4'>
    <div className='flex items-center mb-4 md:mb-0'>
      <Image
        priority
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-10 h-10 md:w-14 md:h-14"
      />
      <span className='text-white font-semibold text-[23px]'>igital Nerd</span>
    </div>
    <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
      <Link href="/privacy" className='text-white'>Privacy Policy</Link>
      <Link href="/termsandconditions" className='text-white'>Terms And Condition</Link>
      <Link href="/refundpolicy" className='text-white'>Refund Policy</Link>
      <div className='flex gap-3'>
        <a href="https://www.instagram.com/digitalnerdhq/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-[18px] text-white'/>
        </a>
        <a href="https://web.telegram.org/k/#@doxmastery" target="_blank" rel="noopener noreferrer">
          <FaTelegram className='text-[18px] text-white'/>
        </a>
      </div>
      
    </div>
  </footer>
  
  );
}

export default Footer;
