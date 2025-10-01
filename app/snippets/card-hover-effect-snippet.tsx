import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiListChecks,
  PiCopy,
  PiPresentationChart,
  PiHeadset,
  PiTrophy,
  PiBookOpen,
  PiStudent,
  PiChartLineUp,
  PiUsersThree,
} from "react-icons/pi";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiListChecks className="w-8 h-8 text-red-500" /></div>,
        title: "Daily Action Plan",
        description: "Receive daily, actionable tasks designed to move you closer to landing your first client.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiCopy className="w-8 h-8 text-red-500" /></div>,
        title: "Premium Templates",
        description: "Access proven proposals, contracts, and outreach scripts to convert prospects into paying clients.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiPresentationChart className="w-8 h-8 text-red-500" /></div>,
        title: "Live Workshop",
        description: "Join weekly sessions on branding, pricing, client acquisition, and scaling your freelance business.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiHeadset className="w-8 h-8 text-red-500" /></div>,
        title: "Active Support & Conversation",
        description: "Get your questions answered and engage in valuable conversations with our active community and support team.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiTrophy className="w-8 h-8 text-red-500" /></div>,
        title: "Quick Win Challenge",
        description: "Participate in challenges designed to help you land your first client or increase your rates quickly.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiBookOpen className="w-8 h-8 text-red-500" /></div>,
        title: "Educational Resource",
        description: "Access a library of curated resources, guides, and tools to accelerate your learning and growth.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiStudent className="w-8 h-8 text-red-500" /></div>,
        title: "Free Skill Acquisition",
        description: "Learn new, in-demand digital skills for free to expand your service offerings and income potential.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiChartLineUp className="w-8 h-8 text-red-500" /></div>,
        title: "Free Forex Signals",
        description: "Receive timely and potentially profitable Forex trading signals at no extra cost.",
    },
    {
        icon : <div className="bg-red-100 p-4 rounded-full"><PiUsersThree className="w-8 h-8 text-red-500" /></div>,
        title: "Learn From Others",
        description: "Gain insights and inspiration from the experiences and success stories of other community members.",
    }
];