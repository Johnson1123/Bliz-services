"use client";
import Herosection from "@/components/large/Herosection";
import Conatainer from "@/components/layout/Conatainer";
import Accordion from "@/components/medium/Accordion";
import InvertedBorder from "@/components/medium/InvertedBorder";

export default function Page() {
  interface AccordionItemData {
    id: number;
    title: string;
    content: {
      description: string;
    };
  }
  // Example data for the Accordion
  const accordionData: AccordionItemData[] = [
    {
      id: 1,
      title: "Study Visa Requirements",
      content: {
        description: "Essential requirements for obtaining a student visa:",
      },
    },
    {
      id: 2,
      title: "Work Permit Process",
      content: {
        description: "Steps to obtain a work permit:",
      },
    },
    {
      id: 3,
      title: "Immigration Services",
      content: {
        description: "Our comprehensive immigration services include:",
      },
    },
  ];

  return (
    <div className="h-auto">
      <Herosection />
      <Conatainer>
        <InvertedBorder />
        <Accordion items={accordionData} />
      </Conatainer>
    </div>
  );
}
