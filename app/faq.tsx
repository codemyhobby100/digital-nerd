import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              What if I&apos;m just starting out?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              Perfect! Our community is designed for people who just learned a digital skill and want to monetize it. We&apos;ll guide you from zero to your first paying client.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              How quickly will I see results?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              Most members land their first client within 30–60 days. However, results depend on your commitment to implementing our action plans and engaging with the community.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              Absolutely. You can cancel your membership at any time. We believe in earning your trust every month, not locking you in.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              What skills does this work for?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              Any digital skill! Design, writing, coding, marketing, video editing, social media management—if it can be done remotely, we can help you monetize it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              Why should I not sign in?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              If you have an active system that gives you more than 10 leads a day, then this is not for you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
