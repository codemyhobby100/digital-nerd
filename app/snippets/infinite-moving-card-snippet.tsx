"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The dropshipping mentorship transformed my life. The mentors were incredibly supportive and helped me build a successful online store in just a few months",
    name: "Adebayo",
    title: "Shopify Master Class",
  },
  {
    quote:
      "This mentorship exceeded my expectations. The hands-on approach and personalized feedback were invaluable. I now run a thriving e-commerce business.",
    name: "Samuel",
    title: "Shopify Master Class",
  },
  {
    quote: "I felt lost before joining, but the mentorship gave me confidence and direction. The support and practical advice were amazing. I now have a successful dropshipping business",
    name: "Babatunde",
    title: "Shopify Master Class",
  },
  {
    quote:
      "The mentorship program was a game-changer. The mentors inspired me and helped me overcome obstacles. I'm now a proud owner of a successful online store.",
    name: "NNamdi",
    title: "Shopify Master Class",
  },
  {
    quote:
      "I can't thank the mentorship program enough. The mentors offered unwavering support and personalized guidance. Today, I run a successful dropshipping business.",
    name: "Chisom",
    title: "Shopify Master Class",
  },
];
