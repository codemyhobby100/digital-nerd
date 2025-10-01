"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FaTrashAlt, FaLink, FaDollarSign, FaUserFriends } from "react-icons/fa";

export default function Mistake() {
  const mistakes = [
    {
      icon: FaTrashAlt,
      title: "Wasting Connects",
      description: "They waste Connects without optimising their Profile",
      number: "01",
    },
    {
      icon: FaLink,
      title: "Generic Proposals & Gig Descriptions",
      description: "Copy-pasting the same pitch to every client instead of tailoring proposals.",
      number: "02",
    },
    {
      icon: FaDollarSign,
      title: "Poor Communication & Delivery",
      description: "Delaying responses to client messages focusing on chasing clients and not attracting them.",
      number: "03",
    },
    {
      icon: FaUserFriends,
      title: "Undervaluing or Overpricing Services",
      description: "Setting prices too low in a bid to attract clients, which signals inexperience.",
      number: "04",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden -mt-24 md:-mt-32">
      <div className="relative w-full">
        {/* Lamp Container with spacer */}
        <LampContainer>
          <div className="h-40" />
        </LampContainer>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center mt-[-38rem]">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-white to-white py-2 md:py-3 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
          >
            Top 4 Mistakes <br />
            <span className="md:text-5xl text-3xl block font-medium">
              Freelancers make on Freelancing Platforms
            </span>
          </motion.h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto px-6">
            {mistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="group relative flex flex-col bg-[#0a0b13]/80 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
              >
                {/* Number indicator */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rotate-12 flex items-end justify-end p-2 text-neutral-600 font-bold text-xl">
                  {mistake.number}
                </div>

                <div className="relative p-8 z-10">
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg bg-red-500/20 blur-xl group-hover:bg-red-500/30 transition-colors duration-300" />
                      <div className="relative p-3 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50 group-hover:border-red-500/50 transition-colors duration-300">
                        <mistake.icon className="text-red-500 text-2xl md:text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                      {mistake.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-base leading-relaxed">
                    {mistake.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors duration-300" />
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-16 mb-8"
          >
            <button
              type="button"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-xl shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all duration-200 ring-2 ring-red-400/60 flex items-center gap-2"
            >
              Unlock Access
              <svg 
                width="22" 
                height="22" 
                fill="none" 
                viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path 
                  d="M5 12h14M13 6l6 6-6 6" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}