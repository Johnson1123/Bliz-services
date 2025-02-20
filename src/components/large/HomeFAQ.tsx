import React from "react";
import Conatainer from "../layout/Conatainer";
import Accordion from "../medium/Accordion";
import { accordionData } from "@/constant/data";
import FAQOvalayImage from "../small/FAQOvalayImage";

const HomeFAQ = () => {
  return (
    <div>
      <Conatainer full={false}>
        <div className="flex flex-col bg-white items-center">
          <div className="w-full lg:grid grid-cols-2">
            {/* Section content */}
            <div className="mt-5 w-full lg:col-span-1">
              <div className="flex flex-col items-center">
                {/* section tage */}
                <div className="bg-gray-100 px-5 rounded-full py-2 w-max">
                  <p className="text-blue">Frequently Ask Questions</p>
                </div>

                {/* Section title */}
                <div className="mt-5 w-[90%]">
                  <h2 className="py-1 text-center">
                    Here are the answers you seek, to some
                    <span className="text-pink border-b-2 border-pink ml-1">
                      Popular Question
                    </span>
                  </h2>
                </div>
              </div>

              {/* Accordion */}
              <Accordion items={accordionData} />
            </div>

            {/* Image Contanier */}
            <div className="md:w-[70%] md:mx-auto lg:col-span-1">
              <FAQOvalayImage />
            </div>
          </div>
        </div>
      </Conatainer>
    </div>
  );
};

export default HomeFAQ;
