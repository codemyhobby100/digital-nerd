"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const About = () => {
  // Timeline content aligned with the section titles
  const data: { title: string; content: React.ReactNode }[] = [
    {
      title: "Expert Mentorship",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Focused 1:1 guidance on gigs, positioning, pricing, and weekly action steps.
          </p>
          <div className="grid max-w-sm grid-cols-2 gap-4">
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
              src="/images/timeline5.jpg"
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
          <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            Step‑by‑step gig playbooks: offers, keywords, pricing, proposals, delivery, and reviews.
          </p>
          <div className="grid max-w-sm grid-cols-2 gap-4">
            <Image
              src="/images/timeline4.jpg"
              alt="Course modules and lesson flow"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/testimonial6.jpg"
              alt="Strategies and playbooks library"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline5.jpg"
              alt="Pricing strategy example"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline4.jpg"
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
          <div className="grid max-w-sm grid-cols-2 gap-4">
            <Image
              src="/images/testimonial7.jpg"
              alt="Client outreach and proposal templates"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline3.jpg"
              alt="Portfolio guidance and feedback"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline5.jpg"
              alt="Live feedback session"
              width={500}
              height={500}
              unoptimized
              className="aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/timeline4.jpg"
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
    <div className="mt-20 px-4">
      <div className="text-3xl bg-gradient-to-b from-green-500 to-sky-200 bg-opacity-50 bg-clip-text text-transparent sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        What To Expect From <br /> Fiverr 3.0
      </div>

      {/* Existing section kept for reference
        <div className="flex flex-wrap pt-8 justify-center">
          <div className="p-2 w-full lg:w-1/2 flex justify-center">
            <img
              alt="phone"
              src="/images/phone2.png"
              className="max-w-full h-auto md:w-3/4 lg:w-full"
            />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 h-10 w-10 flex justify-center items-center rounded-full">
                  <MdCheckCircleOutline className="text-2xl" />
                </div>
                <div>
                  <h5 className="mt-1 text-white mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
            <Link
              href={"/buy"}
              className="cursor-pointer flex items-start justify-center border w-48 p-2 ml-0 my-6 text-white"
            >
              Get Course
            </Link>
          </div>
        </div>
        */}

      <div className="relative w-full overflow-clip mt-10">
        <Timeline data={data} />
      </div>
    </div>
    
  );
};

export default About;