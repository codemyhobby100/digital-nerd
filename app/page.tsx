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
import FAQS from "./faq";
import Footer from "./footer";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import { AnimatedTooltip } from "./snippets/animated-tooltip";
import { FaStar } from "react-icons/fa";
import Head from "next/head";


  /**
   * useLenis
   * Initializes Lenis smooth scrolling with a requestAnimationFrame loop.
   * Call this hook once in a top-level client component (e.g., app/page.tsx).
   *
   * Tip: Remove any CSS like `html { scroll-behavior: smooth; }` to avoid conflicts.
   */
  export function useLenis(options?: Partial<LenisOptions>) {
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
      if (AboutnRef.current) lenis.current?.scrollTo(AboutnRef.current);
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
  
    return (
      <>
        <Head>
          <link rel="icon" href="/logo.png" />
          {/* You can add more metadata here if needed */}
        </Head>
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToShopifyStores={scrollToShopifyStores}
            scrollToPricing={scrollToPricing}
            scrollToFaq={scrollToFaq}
            scrollToServices={scrollToServices}
          />
  
          <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
          <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Turn Your Digital Skills Into Income
            </div>
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg md:max-w-2xl lg:max-w-3xl text-center mx-auto px-4 md:px-0">
              You&apos;ve got the skill, we&apos;ll help you monetize it. <br />
              Join our community of creators turning design, writing, marketing, and coding into profitable businesses.
            </p>
  
            <Link
              href={"/buy"}
              className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
            >
              Join the Community
            </Link>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={items} />
              <div className="flex space-x-1 pl-10">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-[20px]" />
                ))}
              </div>
            </div>
  
            <div className="w-full pt-20">
              <SliderOne />
            </div>
  
            <div ref={AboutnRef}>
              <About />
            </div>
            <div ref={shopifyStoresRef}>
              <ShopifyStores />
            </div>
  
            <div id="services" ref={servicesRef}>
              <Services />
            </div>
  
            {/* <div ref={websiteDesignRef}>
              <WebsiteDesign />
            </div> */}
  
            <div ref={pricingRef}>
              <Pricing />
            </div>
  
            {/* <div ref={graphicDesignRef}>
              <GraphicDesign />
            </div> */}
            {/* <div ref={brandsRef}>
              <Brands />
            </div> */}
  
            <InfiniteMovingCardsDemo />
            <div ref={faqRef}>
              <FAQS />
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }