'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-neutral-50 bg-opacity-50 mt-20">
        What to Expect in the Program
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 text-center mx-auto px-4 md:px-6 lg:px-10">
        Culminating with a bonus lesson, it promises to leave learners with a clear vision for future endeavors, ensuring they are well-prepared for the next phase of their entrepreneurial journey to scale past 100k a month.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
}

export default Services;
