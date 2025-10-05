"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send to an API
    console.log("Waitlist submission:", email);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md m-4 p-8 bg-[#0a0b13] border border-neutral-800 rounded-2xl shadow-2xl shadow-red-500/10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {submitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                <p className="text-neutral-400">Thank you for joining. We&apos;ll notify you as soon as Freelance 3.0 is live.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Join the Waitlist for 3.0</h3>
                <p className="text-neutral-400 mb-6 text-center">Be the first to get access and receive exclusive launch-day offers.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-base shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    Notify Me
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};