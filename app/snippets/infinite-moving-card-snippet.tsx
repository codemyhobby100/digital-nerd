"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "If you are a Level 1 seller on Fiverr, there is a faster way to land orders. Coach @Hon_Joshuaa explained it—I never knew this was possible.",
    name: "T.E",
    title: "Freelancer",
  },
  {
    quote:
      "This program was worth every penny. Clear, practical steps and support that helps you close clients and grow steady income.",
    name: "H.S.M",
    title: "Freelancer",
  },
  {
    quote:
      "Fiverr 1.0 changed my freelancing path. With simple systems and mentorship, I fixed my mistakes and doubled my income in a few months.",
    name: "a****10****E",
    title: "Freelancer",
  },
  {
    quote:
      "Level 1 sellers can land orders faster. The method Coach @Hon_Joshuaa shared opened my eyes and gave me a plan I could use the same day.",
    name: "T.E",
    title: "Freelancer",
  },
  {
    quote:
      "Strong community, real feedback, and templates that convert. I refined my offer and started getting replies from clients within weeks.",
    name: "Tunde",
    title: "Freelancer",
  },
];