import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoPlus } from "react-icons/go";

interface AccordionItemData {
  id: number;
  title: string;
  content: {
    description: string;
    bulletPoints?: string[];
    additionalInfo?: string;
  };
}

interface AccordionItemProps extends Omit<AccordionItemData, "id"> {
  isOpen: boolean;
  index: number;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  index,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0 rounded-[20px]"
    >
      <button
        className="w-full py-4 px-6 flex gap-5 items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <div className="h-[35px] w-[35px] rounded-full bg-slate-200 flex justify-center items-center">
          <GoPlus />
        </div>
        <span className="font-medium text-gray-900">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-gray-50 space-y-4">
              <p className="text-gray-600">{content.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={`max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          index={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
