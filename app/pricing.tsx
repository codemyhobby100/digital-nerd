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
    cta: { label: "Enroll Now", href: "/buy?plan=freelancing-basics" },
  },
  {
    key: "fiverr-guide",
    name: "Fiverr Guide",
    type: "one-on-one",
    price: { usd: "$100", ngn: "₦100k" },
    duration: "2 months",
    features: [
      "Fiverr fundamentals",
      "Standard account setup",
      "Market evaluation",
      "Ranking & sales strategies",
      "Profitable side gigs",
      "Buyer–seller interactions (upselling)",
    ],
    cta: { label: "Enroll Now", href: "/buy?plan=fiverr-guide" },
  },
  {
    key: "upwork-guide",
    name: "Upwork Guide",
    type: "one-on-one",
    price: { usd: "$100", ngn: "₦100k" },
    duration: "2 months",
    features: [
      "Upwork overview",
      "Profile creation",
      "Profile optimization",
      "Algorithm‑friendly practices",
      "Targeted pitching",
      "Proposal frameworks",
    ],
    cta: { label: "Enroll Now", href: "/buy?plan=upwork-guide" },
  },
  // Combo plan removed
];

const Pricing = () => {
  return (
    <div className="w-full md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex items-center justify-center flex-col">

      <div className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-neutral-50 bg-opacity-50 mt-20">
          One‑on‑One Freelancing <br /> Programs
        </div>
        <p className="mt-2 mb-4 text-lg font-normal text-neutral-300 text-center mx-auto px-4 md:px-6 lg:px-10">
          Build skills, get clients, and grow your income.
        </p>

        <div className="grid gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="h-full flex flex-col justify-between border border-neutral-800/60 rounded-3xl p-6 bg-black/20"
            >
              <div className="rounded-3xl">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800/70 text-neutral-300">
                    {plan.type}
                  </span>
                  {plan.duration && (
                    <span className="text-xs px-2 py-1 rounded-full bg-neutral-800/70 text-neutral-300">
                      {plan.duration}
                    </span>
                  )}
                </div>

                <div className="text-3xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50">
                  {plan.name}
                </div>

                {(plan.price.ngn || plan.price.usd) && (
                  <div className="text-xl pt-3 text-neutral-200">
                    {plan.price.usd && <span>{plan.price.usd}</span>}
                    {plan.price.usd && plan.price.ngn && <span> | </span>}
                    {plan.price.ngn && <span>{plan.price.ngn}</span>}
                  </div>
                )}

                {/* Description removed */}

                <ul className="mt-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-base py-2 flex space-x-2 items-start text-neutral-200"
                    >
                      <MdCheckCircleOutline className="text-green-500 mr-2 mt-0.5 text-xl shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                {/* Uniform button color across all plans */}
                <Link
                  href={plan.cta.href}
                  className="rounded-3xl my-1 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 transition-colors"
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