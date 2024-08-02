import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront,PiChalkboardTeacherLight } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-green-600" /></div>,
        title: "Shopify S​tore S​etup",
        description:
          "You will learn in detailed Videos ​how to setup your store from sc​ratch to finish.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><FaRegMoneyBillAlt className="w-8 h-8 text-green-600" /></div>,
        title: "Integration & ​Payment System",
        description:
          "You will Learn how to Integrate ​Payment Apps into your store and ​automate Products Fulfilment.",
       
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-green-600" /></div>,
        title: "Ads Setup & M​arketing",
        description:
          "You will Learn how to Promote your Store and Make sales ​through Ads & marketing ​channels such as Facebook & ​Tiktok",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><MdOutlineAdminPanelSettings className="w-8 h-8 text-green-600" /></div>,
        title: "Business Administration",
        description:
          "Receive guidance from experienced Shopify mentors with personalized feedback and one-on-one sessions.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiChalkboardTeacherLight className="w-8 h-8 text-green-600" /></div>,
        title: "Mentorship",
        description:
          "Learn essential management techniques, financial planning, and strategic decision-making for your store.",
      
      },
      {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-green-600" /></div>,
        title: "Support",
        description:
          "Access live Q&A sessions, a community forum, and 24/7 assistance to help you stay on track.",
     
      },
];
