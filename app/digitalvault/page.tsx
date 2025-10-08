"use client";
import React from "react";
import "../globals.css";
import Image from "next/image";
import { MdCheckCircleOutline } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const GetCourse = (props: Props) => {
  const features = [
    "Comprehensive freelancing basics and overview.",
    "Effective strategies for managing orders and deliveries.",
    "Guidance on creating a niche-based, standout profile.",
    "Actionable tips to grow your freelance business.",
    "Marketing techniques to attract high-value clients.",
    "LinkedIn profile optimization for maximum visibility.",
    "Advanced job scraping and application techniques.",
    "Access to a supportive community of fellow freelancers.",
  ];

  return (
    <div className="bg-[#060312] antialiased bg-grid-white/[0.02] min-h-screen flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full mx-auto bg-neutral-900/50 border border-neutral-800 rounded-2xl shadow-2xl shadow-red-500/10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-64 md:h-full min-h-[300px]">
            <Image
              priority
              src="/images/buy.jpg"
              alt="Course banner"
              layout="fill"
              objectFit="cover"
              className=" "
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-3">
              The Digital Nerd Vault
            </h1>
            <p className="text-neutral-300 mb-6 text-base sm:text-lg">
              Unlock the secrets to a successful freelancing career. This vault is your all-in-one resource to build skills, get clients, and grow your income.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start text-neutral-200"
                >
                  <MdCheckCircleOutline className="text-red-500 mr-3 mt-1 text-xl flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                ₦30,000
              </div>
              <Link href="/buy" className="inline-block w-full sm:w-auto text-center px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-base shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                  Join Now
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetCourse;