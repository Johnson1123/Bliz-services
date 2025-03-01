import React from "react";
import Conatainer from "../layout/Conatainer";
import TransparentBlue from "../small/Buttons/TransparentBlue";
import HomeCasesSlider from "../medium/slider/HomeCasesSlider";
import MetricsContainer from "../medium/MetricsContainer";

function HomeCases() {
  return (
    <section className="h-auto min-h-[100vh] py-16 md:min-h-[100vh] md:max-h-[800px] lg:max-h-[600px] lg:py-0 lg:min-h-[100vh] xl:max-h-[850px] xl:py-16 3k:max-h-[800px] flex items-center">
      <Conatainer full={false}>
        <div className="">
          <div className="bg-gradient-to-r from-gray-200 to-gray-50 px-7 rounded-full py-2 w-max">
            <p className="text-blue">COMPLETE CASE STUDY</p>
          </div>

          <div className="md:grid grid-cols-10 gap-1 items-end">
            <div className="mt-5 w-[90%] md:col-span-4">
              <h2 className="py-1 ">
                We specialize in seamless{" "}
                <strong className="text-blue border-b-2 border-blue">
                  International Relocations
                </strong>
              </h2>
            </div>

            <div className="mt-7 col-span-3">
              <p>
                We make relocating abroad stress-free with expert guidance at
                every step. From visas to settling in, we handle it all
                seamlessly.
              </p>
            </div>
            <div className="mt-5 lg:mt-0 col-span-3 xl:col-start-9 xl:col-end-11">
              <TransparentBlue text={"All Case Studies"} url="/" />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <HomeCasesSlider />
        </div>

        <div className="mt-16">
          <MetricsContainer />
        </div>
      </Conatainer>
    </section>
  );
}

export default HomeCases;
