"use client"

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-white relative overflow-hidden rounded-3xl">
      {/* Optional subtle background pattern for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="max-w-5xl mx-auto py-20 relative z-10">
        <div className="text-4xl pb-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-green-600 to-gray-800 font-bold mt-20">
          What to Expect in the Program
        </div>
        <p className="mt-4 text-lg font-normal text-gray-600 text-center mx-auto px-4 md:px-6 lg:px-10 max-w-3xl">
          We don&apos;t just teach skills - we help you turn them into a sustainable income. Here&apos;s what you get when you join.
        </p>

        <CardHoverEffectDemo />

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Skills into Income?
            </h3>
            <p className="text-gray-600 text-lg">
              Join thousands of creators who have already started their journey to financial freedom through digital skills.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/buy"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Digitalnerdhqvault – Join Now
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Community support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;