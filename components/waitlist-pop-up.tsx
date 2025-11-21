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
              Join Our Private Community!
            </h2>
            <p className="text-neutral-300 mb-6">
              Get exclusive access to our community of creators and freelancers.
            </p>
            <Link
              href="/digitalvault"
              onClick={onClose}
              className="inline-block w-full px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 ring-2 ring-red-400/60"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistPopup;