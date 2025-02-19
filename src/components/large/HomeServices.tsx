import React from "react";
import Conatainer from "../layout/Conatainer";
import HomeServicesSwiper from "../medium/slider/HomeServicesSlider";

type Props = {};

const HomeServices = (props: Props) => {
  return (
    <Conatainer full={false}>
      <div className="w-full h-auto flex flex-col justify-center items-center bg-white">
        <div className="bg-gradient-to-r from-gray-300 to-[#fff] px-5 rounded-full py-2 w-max">
          <p className="text-blue">Consultancy Services</p>
        </div>

        <div className="mt-3">
          <h2 className="py-1">
            Our Special{" "}
            <span className="text-pink border-b-2 border-pink">Services</span>
          </h2>
        </div>
        <div className="w-[100%] mt-10">
          <HomeServicesSwiper />
        </div>
      </div>
    </Conatainer>
  );
};

export default HomeServices;
