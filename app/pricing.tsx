"use client";
import React from "react";
import Link from "next/link";
import { MdCheckCircleOutline } from "react-icons/md";

const plans = [
  {
    index: 0,
    name: "Shopify Master Course",
    // price: "US $25",
    features: [
      "Detailed Training",
      "Integration & ​Payment System",
      "Ads Setup & M​arketing",
      "Mentorship",
      "Exclusive Mastermind ​Community",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Our Shopify Master Course provides essential training to equip you with the tools and knowledge needed to succeed in dropshipping",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Shopify Master Course",
    // price: "Coming Soon!",
    features: [
      "Detailed Training",
      "Integration & ​Payment System",
      "Ads Setup & M​arketing",
      "Mentorship",
      "Exclusive Mastermind ​Community",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Our Shopify Master Course provides essential training to equip you with the tools and knowledge needed to succeed in dropshipping",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Shopify Master Course",
    // price: "Coming Soon!",
    features: [
      "Detailed Training",
      "Integration & ​Payment System",
      "Ads Setup & M​arketing",
      "Mentorship",
      "Exclusive Mastermind ​Community",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Our Shopify Master Course provides essential training to equip you with the tools and knowledge needed to succeed in dropshipping",
    button: "Contact Us",
  },
];

const pricing = () => {
  return (
    <div className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-500 bg-opacity-50">
          Master the Art of Dropshipping<br /> with Our Shopify Course
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6"
            >
              <div className={plan.style}>
                <div className="text-4xl md:text-3xl flex items-center font-medium">
                  {plan.name}
                  {/* {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center">
                      Contact Us
                    </div>
                  )} */}
                </div>
                {/* <div className="text-3xl pt-6">{plan.price}</div> */}
                <div className="py-6">{plan.description}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-base py-2 flex space-x-2 items-center"
                    >
                      <MdCheckCircleOutline className="text-green-600 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href={"/buy"}
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Get Course
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href={"/buy"}
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                  >
                    Get Course
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href={"/buy"}
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                  >
                    Get Course
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default pricing;
