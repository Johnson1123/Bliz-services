import React from "react";
import Conatainer from "../layout/Conatainer";
import FAQOvalayImage from "../small/FAQOvalayImage";
import bgImg from "../../../public/Image/why-work-with-us.jpg";
import Image from "next/image";
// import bgImg from "/image/public/Image/why-work-with-us.jpg";

const SessionBannerTwo = () => {
  return (
    <section className="h-max py-16 md:min-h-[100vh] lg:min-h-[100vh] lg:max-h-[600px] lg:py-0 3k:max-h-[800px] flex items-center bg-[#EAEAEA]">
      <Conatainer full={false}>
        <div className="flex flex-col  items-center">
          <div className="w-full lg:grid grid-cols-2 items-start justify-start gap-4 grid-rows-1">
            {/* Section content */}
            <div className="w-full lg:col-span-1 row-span-1 relative top-0 left-0 h-32">
              <div className="relative left-0 right-0 bg-transparent">
                <Image
                  src={"/new/banner-two.png"}
                  height={300}
                  width={300}
                  alt="Study abroad banner "
                  className="w-full drop-shadow-2xl filter brightness-110 contrast-125 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                />
                <Image
                  src={"/new/bg-trans-img.png"}
                  height={300}
                  width={300}
                  alt="Study abroad banner "
                  className="w-full drop-shadow-2xl filter brightness-110 absolute contrast-125 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>

              <div className="h-[150px] w-[150px] bg-white rounded-full flex flex-col justify-center items-center absolute top-10 left-5 z-50">
                <p>
                  <span className="big-title text-blue font-900">4k</span>
                  <span className="medium-title text-blue font-900">+</span>
                </p>
                <p className="inline-block text-sm">STUDENT ACTIVE</p>
              </div>
            </div>

            {/* Image Contanier */}
            <div className="hidden md:block sm:landscape:hidden md:landscape:block  md:w-[100%] md:mx-auto lg:col-span-1 row-span-1">
              <h3 className="text-blue mb-5">
                Knowledge will bring you the opportunity to make a difference.
              </h3>

              <span className="inline-block h-1 w-full bg-blue"></span>

              <p className="mt-5">
                Researchers have discovered that education boosts the brain’s
                creative side, enhancing one’s capacity for problem-solving and
                stimulating original thought.
              </p>
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default SessionBannerTwo;
