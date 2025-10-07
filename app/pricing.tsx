"use client";
import React from "react";
import Link from "next/link";
import { MdCheckCircleOutline } from "react-icons/md";

type Plan = {
  key: string;
  name: string;
  type: "one-on-one" | "cohort" | "self-paced";
  price: {
    ngn?: string; // e.g. "₦70k", "₦100k"
    usd?: string; // e.g. "$100"
  };
  duration: string;
  features: string[]; // Uniform length across plans
  cta: {
    label: string;
    href: string;
  };
};

const plans: Plan[] = [
  {
    key: "freelancing-basics",
    name: "Freelancing Basics",
    type: "one-on-one",
    price: { ngn: "₦70k" },
    duration: "1 month 5 days",
    features: [
      "Freelance essentials",
      "Freelancing overview",
      "Order & client communication",
      "Niche‑based profile setup",
      "Business growth foundations",
      "Marketing your services",
    ],
    cta: { label: "Enroll Now", href: "https://paystack.shop/pay/digitalnerdbasics" },
  },
  {
    key: "fiverr-guide",
    name: "Fiverr Guide",
    type: "one-on-one",
    price: { usd: "$100", ngn: "₦100k" },
    duration: "2 months",
    features: [
      "Fiverr fundamentals",
      "Creation of a standard Fiverr account",
      "Fiverr market evaluation",
      "Srtrategies to rank and make sales",
      "How to evaluate profitable side gigs to earn from",
      "Buyer to seller interactions (upselling techniques)",
      "Job outsourcing techniques",
      "Fiverr payment methods",
      "Questions and answers",
    ],
    cta: { label: "Enroll Now", href: "https://paystack.shop/pay/digitalnerd-fiverrguide" },
  },
  {
    key: "upwork-guide",
    name: "Upwork Guide",
    type: "one-on-one",
    price: { usd: "$100", ngn: "₦100k" },
    duration: "2 months",
    features: [
      "Upwork overview",
      "How to create a profile",
      "How to optimize your Upwork profile",
      "Hacking the Upwork algorithm",
      "Pitch to target driven jobs",
      "Upwork proposal hack",
      "Upwork payment methods",
      "Questions and answers",
    ],
    cta: { label: "Enroll Now", href: "https://paystack.shop/pay/digitalnerd-upworkguide" },
  },
  {
    key: "combo-guide",
    name: "Combo Guide",
    type: "one-on-one",
    price: { usd: "$150", ngn: "₦150k" },
    duration: "3 months",
    features: [
      "All features from Fiverr & Upwork Guides",
      "Dedicated portfolio review session",
      "Advanced client acquisition strategies",
      "Long-term freelancing career planning",
      "Cross-platform profile synergy",
      "Priority support",
    ],
    cta: { label: "Get Best Value", href: "https://paystack.shop/pay/digitalnerd-comboguide" },
  },
];

const Pricing = () => {
  return (
    <div className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">

      <div className="text-4xl pb-5 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-50 bg-opacity-50 mt-20">
          One‑on‑One Freelancing <br /> Programs
        </div>
        <p className="mt-2 mb-4 text-lg font-normal text-neutral-300 text-center mx-auto px-4 md:px-6 lg:px-10">
          Build skills, get clients, and grow your income.
        </p>

        <div className="grid gap-6 px-6 md:w-11/12 2xl:w-5/6 cursor-pointer pb-20 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`h-full flex flex-col justify-between border rounded-3xl p-6 bg-[#060312]/[0.96] ${
                plan.key === "combo-guide"
                  ? "border-red-500/80 ring-2 ring-red-500/20"
                  : "border-neutral-800/60"
              }`}
            >
              <div className="rounded-3xl">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800/70 text-neutral-300">
                    {plan.type}
                  </span>
                  {plan.duration && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800/70 text-neutral-300">
                      {plan.duration}
                    </span>
                  )}
                  {plan.key === "combo-guide" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                      Best Value
                    </span>
                  )}
                </div>

                <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50">
                  {plan.name}
                </div>

                {(plan.price.ngn || plan.price.usd) && (
                  <div className="text-sm pt-1 text-neutral-200">
                    {plan.price.usd && <span>{plan.price.usd}</span>}
                    {plan.price.usd && plan.price.ngn && <span> | </span>}
                    {plan.price.ngn && <span>{plan.price.ngn}</span>}
                  </div>
                )}
                {/* Description removed */}

                <ul className="mt-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs py-1 flex space-x-2 items-start text-neutral-200"
                    >
                      <MdCheckCircleOutline className="text-red-500 mr-2 mt-0.5 text-lg shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                {/* Uniform button color across all plans */}
                <Link
                  href={plan.cta.href}
                  className={`rounded-3xl my-1 py-2 text-white w-full mx-auto items-center flex justify-center transition-colors ${
                    plan.key === "combo-guide"
                      ? "bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500"
                      : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  {plan.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;