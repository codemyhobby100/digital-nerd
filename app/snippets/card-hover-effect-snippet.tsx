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
        title: "Daily Action Plans",
        description: "Get specific, actionable tasks that move you closer to your first client every single day.",
    },
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><FaRegMoneyBillAlt className="w-8 h-8 text-green-600" /></div>,
        title: "Premium Templates",
        description: "Access proven proposals, contracts, and outreach scripts that convert prospects into paying clients.",
    },
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-green-600" /></div>,
        title: "Live Workshops",
        description: "Weekly sessions on branding, pricing, client acquisition, and scaling your freelance business.",
    },
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><MdOutlineAdminPanelSettings className="w-8 h-8 text-green-600" /></div>,
        title: "Community Support",
        description: "Connect with fellow creators, get feedback on your work, and celebrate wins together.",
    },
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiChalkboardTeacherLight className="w-8 h-8 text-green-600" /></div>,
        title: "Quick Wins Challenges",
        description: "30-day challenges designed to help you land your first client or increase your rates.",
    },
    {
        icon : <div className="bg-green-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-green-600" /></div>,
        title: "Growth Accountability",
        description: "Weekly check-ins and progress tracking to keep you motivated and on track.",
    }
];
