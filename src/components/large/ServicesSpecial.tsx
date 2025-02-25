import React from "react";
import ServicesSpacialBox from "../medium/ServicesSpacialBox";
import Conatainer from "../layout/Conatainer";
import { specialServics } from "@/constant/data";

const ServicesSpecial = () => {
  return (
    <section className="h-[100vh] min-h-[450px] max-h-[850px] flex items-center">
      <Conatainer full={false}>
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
          <div className="bg-gradient-to-r from-gray-200 to-[#fff] px-7 rounded-full py-2 w-max">
            <p className="text-blue font-semibold text-sm">
              CONSULTING SERVICES
            </p>
          </div>
          <div className="mt-3">
            <h2 className="py-1">
              Our Special{" "}
              <span className="text-blue border-b-2 border-blue">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 mt-10">
            {specialServics.map((item, i) => {
              return <ServicesSpacialBox {...item} key={i} />;
            })}
          </div>
        </div>
      </Conatainer>
    </section>
  );
};
export default ServicesSpecial;
