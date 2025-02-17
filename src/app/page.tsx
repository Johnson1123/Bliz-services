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
        bulletPoints: [
          "Valid passport with at least 6 months validity",
          "Acceptance letter from an accredited institution",
          "Proof of financial support",
          "English language proficiency test results",
          "Medical examination records",
        ],
        additionalInfo: "Processing time may vary by country and season.",
      },
    },
    {
      id: 2,
      title: "Work Permit Process",
      content: {
        description: "Steps to obtain a work permit:",
        bulletPoints: [
          "Job offer from a registered employer",
          "Educational credentials assessment",
          "Professional experience documentation",
          "Language proficiency certification",
        ],
        additionalInfo:
          "Additional requirements may apply based on job sector and location.",
      },
    },
    {
      id: 3,
      title: "Immigration Services",
      content: {
        description: "Our comprehensive immigration services include:",
        bulletPoints: [
          "Application review and preparation",
          "Document verification",
          "Legal consultation",
          "Appeal assistance if needed",
        ],
      },
    },
  ];

  // In your component:
  const YourComponent = () => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion items={accordionData} className="bg-white" />
      </div>
    );
  };
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
