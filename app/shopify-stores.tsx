"use client";

import Image from "next/image";

// Update image paths per testimonial below. You can use local images (public/images/...)
// or remote URLs (ensure domains are allowed in next.config.js images.domains).
const stores = [
  {
    image: "/images/testimonial.jpg",
    quote:
      "if you're a level 1 seller on fiverr there is a faster way to land orders. on Set Coach @Hon_Joshuaa explained this, i never knew this was possible, wow",
    name: "T.E",
  },
  {
    image: "/images/testimonial3.jpg",
    quote: "This program was worth every penny!,",
    name: "H.S.M",
  },
  {
    image: "/images/testimonial5.jpeg",
    quote:
      "Fiverr 1.0 changed my freelancing path. I was frustrated and doing it wrong; with clear strategies and mentorship, I doubled my income within months.",
    name: "a****10****E",
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Success Stories <br />
        </div>

        <p className="mt-2 mb-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          Don't just take our word for it. Here's what our our 2024 participants saying about their results.
        </p>

        {/* Use a responsive grid with gaps to create space between items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start"
            >
              <Image
                src={store.image}
                alt={`Testimonial from ${store.name}`}
                width={240}     // reduced size
                height={240}    // reduced size
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 200px"
                className="rounded-lg mx-auto object-cover"
              />

              <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                &quot;{store.quote}&quot;
              </p>
              <p className="text-neutral-800 font-bold text-lg mt-2">- {store.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;