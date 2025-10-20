"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface WaitlistPopupProps {
  onClose: () => void;
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        onClick={onClose} // Close on overlay click
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full text-white shadow-2xl shadow-red-500/10"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close waitlist popup"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
              Fiverr 3.0 is Coming!
            </h2>
            <p className="text-neutral-300 mb-6">
              Be the first to know when our next-generation program launches and get exclusive early-bird access.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkEWt0y5rq6ueg4JZue2T-Oe4k1Gq1bjP46i7zVTez4HjbMw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-block w-full px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 ring-2 ring-red-400/60"
            >
              Join the Waitlist
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistPopup;