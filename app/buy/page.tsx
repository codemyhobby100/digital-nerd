"use client";
import React, { useState } from "react";
import "../globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { MdCheckCircleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
type Props = {};

const GetCourse = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodSelect = (method: string) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        // Default a payment method if none selected so users can enroll smoothly
        paymentMethod: formData.paymentMethod || "FLUTTERWAVE",
      };

      const response = await fetch("/api/buy-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        alert("Payment failed. Please try again.");
        return;
      }
      const info = await response.json();
      console.log({ info });
      router.push(info.paymentURL);
    } catch (err) {
      console.error(err);
    }
  };

  // Updated features from reference
  const features = [
    "Freelancing basics",
    "Freelancing overview",
    "Managing orders and delivery",
    "Creating a niche-based profile",
    "Grow your freelance business",
    "Marketing your service as a freelancer",
    "LinkedIn profile optimization",
    "Job scraping and applying techniques"
  ];

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* <Navbar></Navbar> */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              priority
              src="/images/banner5.jpg"
              alt="Course banner"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            {/* Title and short program descriptor */}
            <h1 className="text-4xl mb-2 mt-5 text-white">
              Course
            </h1>
            <p className="text-sm text-gray-300 mb-4">
              One-on-one freelancing programs
            </p>

            <span className="flex items-center space-x-4 pb-3">
              {/* <h2 className="text-green-500 text-2xl line-through">$49.99</h2> */}
              <h2 className="text-white text-2xl">N30,000</h2>
              <div>
                <button className="inline-flex h-9 animate-shimmer items-center 
                justify-center rounded-md border border-slate-800 
                bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-4 text-sm font-medium text-gray-300 transition-colors 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
                focus:ring-offset-slate-50">
                  Limited offer
                </button>
              </div>
            </span>

            {/* Short value proposition from reference */}
            <p className="text-lg mb-6 text-gray-200">
              Build skills, get clients and grow your income.
            </p>

            <ul>
              {features.map((feature) => (
                <li
                  key={feature}
                  className="text-base py-2 flex space-x-2 items-center text-gray-200"
                >
                  <MdCheckCircleOutline className="text-green-600 mr-2 text-xl" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="mt-2 text-white text-4xl capitalize">
                Kindly enter your details below
              </h4>

              <label
                className="inline-block text-lg pt-4 text-white "
                htmlFor="name"
              >
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                pattern="[A-Za-z\s]+"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <label
                className="inline-block text-lg pt-4 text-white "
                htmlFor="email"
              >
                Enter your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              {/* Payment selection can be re-enabled later if needed */}
              {/* <label className="inline-block text-lg pt-4 text-white ">
                Select a payment method
              </label>
              <div className="flex justify-around gap-4 mb-6">
                <div
                  onClick={() => handlePaymentMethodSelect("FLUTTERWAVE")}
                  className={`p-4 rounded-lg bg-gray-800 border border-gray-700 text-center cursor-pointer w-full ${
                    formData.paymentMethod === "FLUTTERWAVE"
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                >
                  <img
                    src="/images/bank-1.png"
                    alt="Flutterwave"
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <p className="text-white">Bank/Card payment</p>
                </div>
                <div
                  onClick={() => handlePaymentMethodSelect("NOWPAY")}
                  className={`p-4 rounded-lg bg-gray-800 border border-gray-700 text-center cursor-pointer w-full ${
                    formData.paymentMethod === "NOWPAY"
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                >
                  <img
                    src="/images/crypto-3.png"
                    alt="Cryptocurrency"
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <p className="text-white">Cryptocurrency</p>
                </div>
              </div> */}

              <button
                // Allow enroll without explicit payment choice; defaults inside handleSubmit
                disabled={!formData.name || !formData.email}
                type="submit"
                className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-35"
              >
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCourse;