import React from "react";
import bgImg from "../../assets/images/contact-bg.png";
import ContactForm from "../medium/Form/ContactForm";
import Conatainer from "../layout/Conatainer";
import ContactInfo from "../medium/Contact.Info";

import Image from "next/image";
import { Phone, Send, Location } from "@/constant/icons";

function ContactContactForm() {
  return (
    <section
      className="h-auto py-8 bg-[#F2F2F2] md:min-h-[100vh] md:py-0 lg:min-h-[100vh] flex items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={true}>
        <div className="w-full py-10 ">
          <div className="lg:grid grid-cols-2 grid-rows-1 gap-5">
            <div className="flex flex-col lg:col-span-1">
              {/* label */}
              <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 px-5 rounded-full py-2 w-max">
                <p className="text-darkblue">GET IN TOUCH</p>
              </div>

              {/* title */}
              <div className="mt-5 w-[90%]">
                <h2 className="py-1 text-black mr-3 w-[100%]">
                  Just say{" "}
                  <span className="text-darkblue border-b-2 border-darkblue ml-1 font-bold">
                    Hello!
                  </span>
                </h2>
              </div>

              {/* COntatc Infomation */}
              <div className="mt-5">
                <ContactInfo
                  Icon={Phone}
                  label="Call Now"
                  text="+88 112 768 99"
                />
                <ContactInfo
                  Icon={Send}
                  label="Email"
                  text="info@blissServices.com"
                />
                <ContactInfo
                  Icon={Location}
                  label="Adress"
                  text="26 Monlete St, Debby County"
                />
              </div>

              {/* Happy Client */}
              <div className="w-full py-4 bg-white border-l-8  border-darkblue lg:w-[80%] rounded-tr-md rounded-br-md pl-5 flex items-center gap-3 mt-5">
                <div className="flex">
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center border-2 border-white bg-[#f2f2f2] relative overflow-hidden">
                    <Image
                      src="/new/happy-man.jpg"
                      fill
                      objectFit="cover"
                      alt="Happy customer"
                    />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center border-[4px] border-white bg-[#f2f2f2] -ml-3 relative overflow-hidden">
                    <Image
                      src="/new/happy-man.jpg"
                      fill
                      objectFit="cover"
                      alt="Happy customer"
                    />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center border-[4px] border-white bg-[#f2f2f2] -ml-3 relative overflow-hidden">
                    <Image
                      src="/new/happy-man.jpg"
                      fill
                      objectFit="cover"
                      alt="Happy customer"
                    />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center border-[4px] border-white bg-[#f2f2f2] -ml-3 relative overflow-hidden">
                    <Image
                      src="/new/happy-man.jpg"
                      fill
                      objectFit="cover"
                      alt="Happy customer"
                    />
                  </div>
                </div>
                <p className="text-darkblue font-semibold">
                  2.4K HAPPY CLIENTS
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="mt-10  lg:mt-0 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
}

export default ContactContactForm;
