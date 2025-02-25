import React from "react";
import Conatainer from "../layout/Conatainer";
import { businessGroup } from "@/assets/icons";
import Image from "next/image";
import FAQOvalayImage from "../small/FAQOvalayImage";

const ServicesOverview = () => {
  return (
    <section className="h-[100vh] min-h-[450px] max-h-[650px] flex items-center">
      <Conatainer full={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:align-center">
          <div className="col-span-1 md:order-last">
            <div className="bg-gradient-to-r from-gray-200 to-white px-7 rounded-full py-2 w-max">
              <p className="text-blue font-semibold text-sm">
                COMPANY OVERVIEW
              </p>
            </div>
            <div className="mt-2">
              <h2 className="py-1">
                We Offer{" "}
                <span className="text-blue border-b-2 border-blue">
                  Bussiness Insight{" "}
                </span>
                World class consulting
              </h2>
            </div>
            <div className="py-3">
              <p className="text-base text-gray-600 font-semibold">
                Morem ipsum dolor sit amet, consectetur adipiscing elita florai
                psum dolor sit amet, consecteture borem.
              </p>
              <p className="text-base text-gray-500 font-light mt-4">
                Morem ipsum dolor sit amet, consectetur adipiscing elita florai
                psum dolor sit amet, consecteture.borem ipsum dolor sit amet,
                consectetur adipiscing elita florai psum.
              </p>
            </div>
            {/* divider */}
            <div className="h-[1px] w-full bg-gray-200 my-7"></div>

            <div className="">
              <div className="flex justify-between items-center">
                <div className="h-[50px] w-[50px] bg-white rounded-md flex justify-center items-center">
                  <Image
                    src={businessGroup}
                    alt="Icon"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="flex flex-col gap-3 w-[80%]">
                  <h3 className="text-lg font-bold">
                    Special Business Consultant
                  </h3>
                  <p className="text-base">
                    Morem ipsum dolor sit amet, consectetur adipiscing elita
                    florai psum dolor sit amet, consecteture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* overlay image container */}
          <div className="col-span-1">
            <FAQOvalayImage />
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default ServicesOverview;
