import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeServicesSwiper from "../medium/slider/HomeServicesSlider";
import Image from "next/image";

const HomeServices = () => {
  return (
    <section className="h-auto py-24 lg:py-0 landscape:sm:min-h-[500px] md:min-h-[550px] md:max-h-[700px] lg:min-h-[100vh] lg:h-[100vh] 3k:max-h-[800px] flex items-center relative top-0 left-0 bg-gray-100 md:bg-white">
      <Conatainer full={false}>
        <div className="w-full flex flex-col justify-center items-center bg-white">
          <div className="mt-3">
            <h2 className="py-1 text-black">
              Our Special{" "}
              <span className="text-blue border-b-2 border-blue">Services</span>
            </h2>
          </div>
          <div className="w-[100%] flex mt-10 lg:mt-12">
            <HomeServicesSwiper />
          </div>
        </div>
      </Conatainer>
      <div className="hidden md:block absolute left-0 top-[60%] translate-y-[-60%]">
        <Image src={"/services-bg.png"} alt="" height={100} width={100} />
      </div>
    </section>
  );
};

export default HomeServices;
