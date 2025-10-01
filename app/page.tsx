"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import Lenis, { type LenisOptions } from "lenis";

import About from "./about";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Pricing from "./pricing";
import Brands from "./brands";
import Services from "./services";
import Mistake from "./mistake";
import FAQS from "./faq";
import Footer from "./footer";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import { AnimatedTooltip } from "./snippets/animated-tooltip";
import { FaInstagram, FaStar, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Head from "next/head";
import { motion } from "framer-motion";


function useLenis(options?: Partial<LenisOptions>) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // destroy is available at runtime
      // @ts-ignore
      if (typeof lenis.destroy === "function") lenis.destroy();
      lenisRef.current = null;
    };
    // stringify options to avoid stale closures while keeping stable deps
  }, [JSON.stringify(options || {})]);

  return lenisRef;
}

export default function Home() {
  // Initialize Lenis once in a top-level client component
  const lenis = useLenis();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const AboutnRef = useRef<HTMLDivElement>(null);
  // const websiteDesignRef = useRef<HTMLDivElement>(null);
  // const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  // const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Prefer Lenis for programmatic scrolling (avoid native 'smooth' behavior)
  const scrollToAbout = () => {
    lenis.current?.scrollTo(0, { duration: 1.5 });
  };

  const scrollToShopifyStores = () => {
    if (shopifyStoresRef.current) lenis.current?.scrollTo(shopifyStoresRef.current);
  };

  const scrollToPricing = () => {
    if (pricingRef.current) lenis.current?.scrollTo(pricingRef.current);
  };

  const scrollToFaq = () => {
    if (faqRef.current) lenis.current?.scrollTo(faqRef.current);
  };

  const scrollToServices = () => {
    if (servicesRef.current) lenis.current?.scrollTo(servicesRef.current);
  };

  const items = [
    {
      id: 1,
      name: "Samuel",
      // designation: 'Developer',
      image: "/images/user1.jpg",
    },
    {
      id: 2,
      name: "Blessing",
      // designation: 'Designer',
      image: "/images/user2.jpg",
    },
    {
      id: 3,
      name: "Babatunde",
      // designation: 'Designer',
      image: "/images/user3.jpg",
    },
    {
      id: 4,
      name: "30k students",
      // designation: 'Designer',
      image: "/images/3-.png",
    },
    // add more items as needed
  ];

  // Reusable motion props for sections
  const sectionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        {/* You can add more metadata here if needed */}
      </Head>
      <div className="w-full md:items-center md:justify-center bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToShopifyStores={scrollToShopifyStores}
          scrollToPricing={scrollToPricing}
          scrollToFaq={scrollToFaq}
          scrollToServices={scrollToServices}
        />

        <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />

        {/* Hero Section - Fully Responsive */}
        <div className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 md:px-8 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto"
          >
            {/* Left Side - Text Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 px-2 sm:px-0">
              {/* Main Heading */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#f6f7f7] to-[#f6f7f7] bg-opacity-50 leading-tight">
                DigitalNerdHQ
              </div>
              
              {/* Subheading */}
              <div className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#f6f7f7] font-medium">
                Creativity, Innovation, Empowerment
              </div>
              
              {/* Main Description */}
              <p className="text-base sm:text-lg md:text-xl font-normal text-[#f6f7f7] leading-relaxed">
                Monetize digital skills to paychecks, master the deep secrets in the digital space.
              </p>
              
              {/* Secondary Description */}
              <p className="text-sm sm:text-base text-[#f6f7f7] leading-relaxed">
                You&apos;ve got the skill, we&apos;ll help you monetize it. Join our community of creators turning design, writing, marketing and coding into a professional business.
              </p>

              {/* Community CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                className="pt-4 sm:pt-6"
              >
                {/* Main CTA */}
                <div className="mb-4 sm:mb-5">
                  <Link
                    href={"/"}
                    className="inline-flex items-center justify-center bg-white text-black font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Join Private Community
                  </Link>
                </div>

                {/* Free Groups */}
                <div>
                  <p className="text-sm text-[#f6f7f7] mb-3">Or join our free communities</p>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-neutral-800/80 flex items-center justify-center text-white hover:bg-neutral-700 hover:scale-110 transition-all duration-200">
                      <FaWhatsapp size={22} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-neutral-800/80 flex items-center justify-center text-white hover:bg-neutral-700 hover:scale-110 transition-all duration-200">
                      <FaTelegramPlane size={22} />
                    </a>
                    <a href="https://www.instagram.com/digitalnerdhq/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-neutral-800/80 flex items-center justify-center text-white hover:bg-neutral-700 hover:scale-110 transition-all duration-200">
                      <FaInstagram size={22} />
                    </a>
                    <a href="https://x.com/DigitalNerdHQ" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-neutral-800/80 flex items-center justify-center text-white hover:bg-neutral-700 hover:scale-110 transition-all duration-200">
                      <FaXTwitter size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                className="pt-6 sm:pt-8"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center">
                    <AnimatedTooltip items={items} />
                  </div>
                  
                  <div>
                    <div className="flex space-x-1 mb-2">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <p className="text-sm text-[#f6f7f7]">
                      Over 300+ freelancers and creators
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px]">
                <Image
                  src="/images/banner.jpg" 
                  alt="Digital creators working"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060312]/20 to-transparent rounded-xl sm:rounded-2xl" />
              </div>
              
              {/* Optional floating elements for visual interest - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
              <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-[#ef4d50]/20 to-blue-500/20 rounded-full blur-xl" />
            </motion.div>
          </motion.div>

          {/* Responsive bottom spacing */}
          <div className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 2xl:h-48" />
        </div>

        {/* Services Section - Full width white background */}
        <div id="services" ref={servicesRef}>
          <motion.div {...sectionProps}>
            <Services />
          </motion.div>
        </div>

        {/* Dark sections container - About section */}
        <div className="p-4 mx-auto relative z-10 w-full px-2">
          <div ref={AboutnRef}>
            <motion.div {...sectionProps}>
              <About />
            </motion.div>
          </div>
        </div>

        {/* Success Stories Section - Full width white background */}
        <div ref={shopifyStoresRef}>
          <motion.div {...sectionProps}>
            <ShopifyStores />
          </motion.div>
        </div>

        {/* Dark sections container - Pricing and Moving Cards */}
        <div className="p-4 mx-auto relative z-10 w-full px-2">
          <div ref={pricingRef}>
            <motion.div {...sectionProps}>
              <Pricing />
            </motion.div>
          </div>
          

          <motion.div {...sectionProps}>
            <InfiniteMovingCardsDemo />
          </motion.div>
        </div>

       {/* Mistake Section - Full width white background */}
        <div id="mistake">
          <motion.div {...sectionProps}>
            <Mistake />
          </motion.div>
        </div>        

        {/* FAQ Section - Full width white background */}
        <div ref={faqRef}>
          <motion.div {...sectionProps}>
            <FAQS />
          </motion.div>
        </div>

        {/* Dark sections container - Footer */}
        <div className="p-4 mx-auto relative z-10 w-full px-2">
          <motion.div {...sectionProps}>
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
}