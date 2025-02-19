import { Minus, Plus } from "@/constant/icons";
import { AccordionItemData } from "@/constant/types";
import { AnimatePresence, motion } from "framer-motion";

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
      className=" border-gray-200 rounded-[20px] my-5 "
    >
      <button
        className={`w-full py-3 flex gap-5 items-center  hover:bg-gray-50 transition-colors bg-gray-100 rounded-3xl  px-2 ${
          isOpen ? "rounded-br-none rounded-bl-none" : "rounded-3xl"
        }`}
        onClick={onClick}
      >
        <div className="h-[35px] w-[35px] rounded-full bg-slate-900 flex justify-center items-center">
          {isOpen ? (
            <Minus color="#fff" size={25} />
          ) : (
            <Plus color="#fff" size={25} />
          )}
        </div>
        <span className="text-md font-medium text-gray-900">{title}</span>
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

export default AccordionItem;
