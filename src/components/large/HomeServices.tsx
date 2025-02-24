import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeServicesSwiper from "../medium/slider/HomeServicesSlider";

const HomeServices = () => {
  return (
    <section className="bg-white py-10 mt-5">
      <Conatainer full={false}>
        <div className="w-full h-auto flex flex-col justify-center items-center bg-white">
          <div className="mt-3">
            <h2 className="py-1">
              Our Special{" "}
              <span className="text-blue border-b-2 border-blue">Services</span>
            </h2>
          </div>
          <div className="w-[100%] flex mt-10 lg:mt-12">
            <HomeServicesSwiper />
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeServices;
