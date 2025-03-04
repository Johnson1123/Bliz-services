import React from "react";
import Conatainer from "../layout/Conatainer";
import Accordion from "../medium/Accordion";
import { accordionData } from "@/constant/data";
import FAQOvalayImage from "../small/FAQOvalayImage";
import bgImg from "../../../public/Image/why-work-with-us.jpg";

const HomeFAQ = () => {
  return (
    <section
      className="h-max min-h-[100vh] py-16 md:min-h-[100vh] lg:min-h-[100vh] lg:max-h-[600px] lg:py-0 3k:max-h-[800px] flex items-center bg-cover bg-right md:bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={false}>
        <div className="flex flex-col  items-center">
          <div className="w-full lg:grid grid-cols-2 gap-4 grid-rows-1">
            {/* Section content */}
            <div className="mt-5 w-full lg:col-span-1 lg:px-3 row-span-1">
              <div className="flex flex-col">
                {/* section tag */}
                <div className="bg-gradient-to-r from-gray-300 to-gray-50 px-7 rounded-full py-2 w-max">
                  <p className="text-blue">OUR SERVICES BENEFITS </p>
                </div>

                {/* Section title */}
                <div className="mt-5 w-[90%] md:w-full">
                  <h2 className="py-1 text-black">
                    Keep Your Business
                    <span className="text-blue border-b-2 border-blue ml-1">
                      Safe{" "}
                    </span>
                    &
                    <span className="text-blue border-b-2 border-blue ml-1">
                      Ensure High{" "}
                    </span>
                    Availability
                  </h2>
                </div>
              </div>

              {/* Accordion */}
              <Accordion items={accordionData} />
            </div>

            {/* Image Contanier */}
            <div className="hidden sm:landscape:hidden md:landscape:block md:block md:w-[100%] md:mx-auto lg:col-span-1 row-span-1">
              <FAQOvalayImage />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeFAQ;
