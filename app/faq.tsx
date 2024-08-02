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
              What can I expect ​when I join?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              You will get instant access to ​the app with our entire ​course, you will also be ​given an invite to the ​exclusive community with ​coaching and support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              How soon can I start ​seeing some results?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              We&apos;ve seen students get up ​and running in as fast as 7 ​days and start making sales ​in their first weeks but ​building a real business ​takes time.​
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg md:text-xl">
              Is there a guarantee ​for success?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg md:text-xl">
              There are no guarantees for ​any success in any ​business. The only thing we ​can guarantee is that our ​system has been validated ​by the success stories.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
