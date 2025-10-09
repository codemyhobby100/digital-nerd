"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Update video/poster paths per testimonial below.
// Place files in public/videos/... and public/images/... or use remote URLs
// (ensure domains are allowed in next.config.js images.remotePatterns if using poster images via <Image>).
type StoreTestimonial = {
  videoSrc: string;
  quote: string;
  name: string;
};

const stores: StoreTestimonial[] = [
  {
    videoSrc: "/images/testimony.mp4", // <-- changed from /images/testomp-1.mp4
    quote:
      "I enjoyed the course from start to finish. It was clear, practical, and full of useful insights. I’m glad I invested in it",
    name: "DEON",
  },
  {
    videoSrc: "/images/testimony5.mp4",
    quote: "Fiverr 1.0 was an eye opener and the ultimate game changer to my freelance journey on Fiverr. With every penny ",
    name: "H.S.M",
  },
  {
    videoSrc: "/images/testimony6.mp4",
    quote:
      "Earn with Joshuaa was a memorable one, everything was well explained and easy to follow. I definitely learned a lot and feel more confident now",
    name: "STUDENTS",
  },
];

type ImageTestimonial = {
  imageSrc: string;
  alt: string;
};

const imageTestimonials: ImageTestimonial[] = [
  {
    imageSrc: "/images/testimonial6.jpg",
    alt: "Testimonial from a happy member.",
  },
  {
    imageSrc: "/images/timeline2.jpg",
    alt: "Testimonial from a happy member.",
  },
  {
    imageSrc: "/images/testimonial5.jpeg",
    alt: "Testimonial from a happy member.",
  },
  {
    imageSrc: "/images/testimonial-2.jpg",
    alt: "Testimonial from a happy member.",
  },
];


const VideoTestimonialCard: React.FC<StoreTestimonial> = ({
  videoSrc,
  quote,
  name,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    // Attempt play on user gesture
    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);
  const handleOnPlay = () => setIsPlaying(true);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-square">
        <video
          ref={videoRef}
          preload="metadata"
          controls={isPlaying}
          playsInline
          className="h-full w-full rounded-lg object-cover"
          onPause={handlePause}
          onEnded={handleEnded}
          onPlay={handleOnPlay}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Animated play overlay (white button with green play icon) */}
        {!isPlaying && (
          <button
            type="button"
            aria-label="Play testimonial video"
            title="Play"
            onClick={handlePlayClick}
            className="absolute inset-0 grid place-items-center rounded-lg transition-opacity"
          >
            <span className="relative inline-flex h-16 w-16 items-center justify-center">
              {/* animated green rings */}
              <span className="absolute inset-0 rounded-full bg-red-400/25 blur-md opacity-70 animate-pulse" />
              <span className="absolute -inset-2 rounded-full bg-red-400/15 animate-ping" />
              {/* core white button */}
              <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-red-400/60 transition-transform duration-200 hover:scale-105">
                {/* green play icon */}
                <svg
                  aria-hidden="true"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="translate-x-[1px] fill-red-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
        &quot;{quote}&quot;
      </p>
      <p className="text-neutral-800 font-bold text-lg mt-2">- {name}</p>
    </div>
  );
};

const ImageTestimonialCard: React.FC<ImageTestimonial> = ({
  imageSrc,
  alt,
}) => {
  return (
    <div className="group relative aspect-square w-full h-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

const ShopifyStores = () => {
  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-gray-700 bg-opacity-50">
          Success stories from <br/> Members Themselves.  
        </div>

        <p className="mt-2 mb-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our our 2024 participants saying about their results.
        </p>

        {/* Use a responsive grid with gaps to create space between items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10">
          {stores.map((store, index) => (
            <VideoTestimonialCard
              key={index}
              videoSrc={store.videoSrc}
              quote={store.quote}
              name={store.name}
            />
          ))}
        </div>

        {/* Image Testimonials Section */}
        <div className="text-3xl pt-16 md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-gray-700 bg-opacity-50">
          And More...
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 md:px-10 mt-8">
            {imageTestimonials.map((testimonial, index) => (
              <ImageTestimonialCard
                key={index}
                imageSrc={testimonial.imageSrc}
                alt={testimonial.alt}
              />
            ))}
          </div>
        </div>


        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link
            href={"/digitalvault"}
            type="button"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-200 ring-2 ring-red-400/60"
          >
            Unlock Access
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;