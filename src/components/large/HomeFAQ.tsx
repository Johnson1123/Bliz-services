import React from "react";
import Conatainer from "../layout/Conatainer";
import Accordion from "../medium/Accordion";
import { accordionData } from "@/constant/data";
import FAQOvalayImage from "../small/FAQOvalayImage";

const HomeFAQ = () => {
  return (
    <section className="bg-[url('/image/why-work-with-us.jpg')] bg-cover bg-center bg-no-repeat py-16">
      <Conatainer full={false}>
        <div className="flex flex-col  items-center">
          <div className="w-full lg:grid grid-cols-2 gap-4 grid-rows-1">
            {/* Section content */}
            <div className="mt-5 w-full lg:col-span-1 lg:px-3 row-span-1">
              <div className="flex flex-col">
                {/* section tage */}
                <div className="bg-gray-100 px-5 rounded-full py-2 w-max">
                  <p className="text-blue">OOUR SERVICES BENEFITS</p>
                </div>

                {/* Section title */}
                <div className="mt-5 w-[90%]">
                  <h2 className="py-1">
                    Keep Your Business
                    <span className="text-blue border-b-2 border-blue ml-1">
                      Safe
                    </span>
                    &
                    <span className="text-blue border-b-2 border-blue ml-1">
                      Ensure High
                    </span>
                    Availability
                  </h2>
                </div>
              </div>

              {/* Accordion */}
              <Accordion items={accordionData} />
            </div>

            {/* Image Contanier */}
            <div className="md:w-[100%] md:mx-auto lg:col-span-1 row-span-1">
              <FAQOvalayImage />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeFAQ;
