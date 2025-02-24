import React from "react";
import Conatainer from "../layout/Conatainer";
import { homeContacttexts } from "@/constant/data";
import HomeContactBox from "../small/HomeContactBox";
import ContactForm from "../medium/Form/ContactForm";

export default function HomeContact() {
  return (
    <section className="bg-darkblue bg-[url('/image/contact-bg.png')] bg-cover bg-no-repeat bg-center">
      <Conatainer full={true}>
        <div className="w-full py-10 px-3">
          <div className="lg:grid grid-cols-2 grid-rows-1 gap-5">
            <div className="flex flex-col lg:col-span-1">
              <div className="bg-gradient-to-r px-5 rounded-full py-2 w-max">
                <p className="text-white">Consultancy Services</p>
              </div>
              <div className="mt-5 w-[90%]">
                <h2 className="py-1 text-white mr-3 w-[100%]">
                  If you have any Question?{" "}
                  <span className="text-blue border-b-2 border-blue ml-1">
                    Get In Touch
                  </span>
                </h2>
              </div>

              <div className="flex flex-col gap-5 mt-10">
                {homeContacttexts.map((item, i) => {
                  return <HomeContactBox {...item} key={i} />;
                })}
              </div>
            </div>
            <div className="mt-5 md:mt-10 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
}
