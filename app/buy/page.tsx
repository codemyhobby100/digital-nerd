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
      const response = await fetch("/api/buy-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
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
  const features = [
    "Detailed Training",
    "Integration & ​Payment System",
    "Ads Setup & M​arketing",
    "Mentorship",
    "Exclusive Mastermind ​Community"
  ];

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* <Navbar></Navbar> */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              priority
              src="/images/slider-4.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
            <h1 className="text-4xl mb-4 mt-5 text-white ">
              Shopify Master Course
            </h1>
            <h2 className="text-white pb-2 text-2xl">$18.99</h2>
            <p className="text-lg mb-6 text-gray-200">
              Our Shopify Master Course provides essential training to equip you
              with the tools and knowledge needed to succeed in dropshipping
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
                Kindly enter you details below
              </h4>
              <label
                className="inline-block text-lg pt-4 text-white "
                htmlFor="name"
              >
                Enter you name
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
                Enter you email
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
              <label className="inline-block text-lg pt-4 text-white ">
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
                    src="/images/flutterwave.png"
                    alt="Flutterwave"
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <p className="text-white">Flutterwave</p>
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
                    src="/images/now-payment.png"
                    alt="Non-Payment"
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <p className="text-white">Now-Payment</p>
                </div>
              </div>
              <button
                disabled={
                  !formData.paymentMethod || !formData.name || !formData.email
                }
                type="submit"
                className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-35"
              >
                Buy Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCourse;
