"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToAbout: () => void;
  scrollToShopifyStores: () => void;
  scrollToFaq: () => void;
  scrollToPricing: () => void;
  scrollToServices: () => void; 
}

const Navbar = ({
  scrollToAbout,
  scrollToShopifyStores,
  scrollToFaq,
  scrollToPricing,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div className="flex items-center">
          <Image
            priority
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <span className="text-white font-semibold text-[23px]">igitalNerd</span>
        </div>
        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToServices} className="hover:text-gray-50">
            About
          </div>
          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            Testimonials
          </div>
          <div onClick={scrollToPricing} className="hover:text-gray-50">
            Courses
          </div>
          <div onClick={scrollToServices} className="hover:text-gray-50">
            Product
          </div>
          <div onClick={scrollToFaq} className="hover:text-gray-50">
            FAQ
          </div>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToAbout={scrollToAbout}
                scrollToShopifyStores={scrollToShopifyStores}
                scrollToFaq={scrollToFaq}
                scrollToPricing={scrollToPricing}
                scrollToServices={scrollToServices}
              />
            </div>
          ) : (
            <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
