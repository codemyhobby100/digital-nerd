"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
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

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist for 3.0</h3>
              <p className="text-neutral-400 mb-6">Be the first to get access and receive exclusive launch-day offers.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIIbb4jp86qtFH_BUln5K_zaNO-mcqkHHNIZSFsEWX1KZGMQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-base shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};