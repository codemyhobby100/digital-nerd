"use client"

  import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

  const Services = () => {
    return (
      <div className="max-w-5xl mx-auto py-20">
        <div className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-neutral-50 bg-opacity-50 mt-20">
          What to Expect in the Program
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 text-center mx-auto px-4 md:px-6 lg:px-10">
          We don&apos;t just teach skills - we help you turn them into a sustainable income. Here&apos;s what you get when you join.
        </p>

        <CardHoverEffectDemo />
      </div>
    );
  }

  export default Services;