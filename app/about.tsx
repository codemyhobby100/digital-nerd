"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";;

const About: React.FC = () => {

  // Timeline content aligned with the section titles
  const data: { title: string; content: React.ReactNode }[] = [
    {
      title: "Expert Mentorship",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Focused 1:1 guidance on gigs, positioning, pricing, and weekly action steps.
          </p>
          <div className="grid max-w-sm grid-cols-2 gap-2">
            <Image
              src="/images/timeline1.jpg"
              alt="1:1 mentorship and gig review"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial9.jpg"
              alt="Pricing strategy and positioning"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial13.jpg"
              alt="Mentorship session"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline4.jpg"
              alt="Student success example"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "In‑Depth Courses & Proven Strategies",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Step‑by‑step gig playbooks: offers, keywords, pricing, proposals, delivery, and reviews.
          </p>
          <div className="grid max-w-sm grid-cols-2 gap-2">
            <Image
              src="/images/testimonial4.jpg"
              alt="Course modules and lesson flow"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/t.jpg"
              alt="Strategies and playbooks library"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial15.jpg"
              alt="Pricing strategy example"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial17.jpg"
              alt="Proposal writing guide"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hands‑On Support to Land Clients",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Outreach scripts, proposal reviews, portfolio polish, and live feedback to close clients.
          </p>
          <div className="grid max-w-sm grid-cols-2 gap-2">
            <Image
              src="/images/testimonial7.jpg"
              alt="Client outreach and proposal templates"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial16.jpg"
              alt="Portfolio guidance and feedback"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial8.jpg"
              alt="Live feedback session"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial18.jpg"
              alt="Client closing techniques"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-12 px-4">
      <div className="text-3xl bg-gradient-to-b from-red-500 to-white bg-opacity-50 bg-clip-text text-transparent sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What You&apos;ll Experience
      </div>

      <div className="relative w-full overflow-clip mt-10">
        <Timeline data={data} />
      </div>

      <div className="text-center mt-16 mb-12 max-w-2xl mx-auto">
        <p className="text-lg text-neutral-300 mb-4">Exciting things are coming. Our next-generation program, <span className="font-bold text-white">Fiverr 3.0</span>, is in development.</p>
        <p className="text-neutral-400 mb-8">Be the first to know when we launch and get exclusive early-bird access.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkEWt0y5rq6ueg4JZue2T-Oe4k1Gq1bjP46i7zVTez4HjbMw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 ring-2 ring-red-400/60"
        >
          Join the Waitlist for 3.0
        </a>
      </div>
    </div>
    
  );
};

export default About;