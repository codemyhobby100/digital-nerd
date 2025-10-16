"use client";
import React from "react";
import "../globals.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdCheckCircleOutline } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";


type Props = {};

const GetCourse = (props: Props) => {
  const router = useRouter();
  const features = [
    "Daily Action Plan",
    "Premium Templates",
    "Live Workshop",
    "Active Support & Conversation",
    "Quick Win Challenge",
    "Educational Resource",
    "Free Skill Acquisition",
    "Free Forex Signals",
    "Learn From Others",
  ];

  const plans = [
    {
      name: "1 Month",
      price: "$3.6",
      originalPrice: "$5.0",
      priceSuffix: "/month",
      savings: null,
      href: "https://paystack.shop/pay/1-month-vault",
      popular: false,
    },
    {
      name: "3 Months",
      price: "$8.6",
      originalPrice: "$15",
      savings: "Save $2",
      href: "https://paystack.shop/pay/3-month-vault",
      popular: true,
    },
    {
      name: "6 Months",
      price: "$16.6",
      originalPrice: "$30",
      savings: "Save $5",
      href: "https://paystack.shop/pay/6-months-vault",
      popular: false,
    },
  ];

  return (
    <div className="w-full md:items-center md:justify-center bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
      <Navbar
        scrollToAbout={() => router.push('/#about')}
        scrollToShopifyStores={() => router.push('/#shopify-stores')}
        scrollToFaq={() => router.push('/#faq')}
        scrollToPricing={() => router.push('/#pricing')}
        scrollToServices={() => router.push('/#services')}
      />
      <main className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl w-full mx-auto pt-16 sm:pt-24">
          {/* Hero Section */}
          <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl shadow-2xl shadow-red-500/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-full h-64 md:h-full min-h-[300px] md:min-h-[500px]"
              >
                <Image
                  priority
                  src="/images/vault.jpg"
                  alt="Digital Nerd Vault banner"
                  layout="fill"
                  objectFit="cover"
                  className=" "
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
              >
                <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                  The DigitalnerdHq Vault
                </h1>
                <p className="text-neutral-300 mb-8 text-base sm:text-lg leading-relaxed">
                  Unlock the secrets to a successful freelancing career. This vault is your all-in-one resource to build skills, get clients, and grow your income.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {features.map((feature, i) => (
                     <motion.div
                     key={feature}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                     className="flex items-start text-neutral-200"
                   >
                     <MdCheckCircleOutline className="text-red-500 mr-3 mt-1 text-xl flex-shrink-0" />
                     <span>{feature}</span>
                   </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-20 sm:mt-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Choose Your Plan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-400 text-center max-w-2xl mx-auto mb-12">
              Flexible plans to fit your journey. Get instant access to all resources and start growing today.
            </motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col p-8 bg-neutral-900/50 rounded-2xl border hover:border-red-500/50 transition-colors duration-300 ${
                    plan.popular
                      ? "border-red-500 shadow-2xl shadow-red-500/20"
                      : "border-neutral-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1">
                      <span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mt-2">{plan.name}</h3>
                  {plan.savings && (
                    <p className="mt-2 text-sm text-red-400">{plan.savings}</p>
                  )}
                  <div className="flex items-baseline gap-2 mt-6">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="text-lg text-neutral-400">
                        {plan.priceSuffix}
                      </span>
                    )}
                    <span className="text-xl font-bold text-neutral-500 line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <a href={plan.href} className={`mt-auto pt-8 block w-full py-3 px-6 text-center rounded-lg font-semibold text-base transition-transform duration-200 ${plan.popular ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg hover:scale-105' : 'bg-neutral-800 hover:bg-neutral-700 text-white'}`}>
                    Join Now
                  </a>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-red-400/80 mt-8 text-center">Limited time offer! Prices will return to normal soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetCourse;