import React from "react";
import Conatainer from "../layout/Conatainer";
import Testimonials from "../medium/slider/Testimonials";
import Secondary from "../small/Buttons/Secondary";

const HomeTestimonials = () => {
  return (
    <section className="bg-gray-200 bg-[url('/image/testimonial-bg.png')] bg-cover bg-center bg-no-repeat">
      <Conatainer full={false}>
        <div className="w-full h-auto flex flex-col items-center py-16">
          <div className="w-full md:w-full md:flex justify-between items-center">
            <div className="">
              <div className="bg-gray-100 px-5 rounded-full py-2 w-max">
                <p className="text-blue">Our Testimonials</p>
              </div>

              <div className="mt-5 w-[80%]">
                <h2 className="py-1">
                  People Talk about{" "}
                  <span className="text-blue border-b-2 border-blue">
                    Blizz Services
                  </span>
                </h2>
              </div>
            </div>

            <div className="mt-5 md:mt-2">
              <Secondary url="/" text="All Testimonials" />
            </div>
          </div>
          <div className="w-[100%] mt-10">
            <Testimonials />
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeTestimonials;
