import { motion } from "framer-motion";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToAbout: () => void;
  scrollToShopifyStores: () => void;
  scrollToFaq: () => void;
  scrollToPricing: () => void;
  scrollToServices: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  onClose,
  scrollToAbout,
  scrollToShopifyStores,
  scrollToFaq,
  scrollToPricing,
  scrollToServices,
}) => {
  return (
    <motion.div
      className="w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <div onClick={scrollToAbout} className="text-black text-2xl cursor-pointer">
          About
        </div>
        <div onClick={scrollToShopifyStores} className="text-black text-2xl cursor-pointer">
          Testimonials
        </div>
        <div onClick={scrollToPricing} className="text-black text-2xl cursor-pointer">
          Courses
        </div>
        <div onClick={scrollToFaq} className="text-black text-2xl cursor-pointer">
          FAQ
        </div>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
