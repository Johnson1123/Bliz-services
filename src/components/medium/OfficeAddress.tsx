import { Phone, Send } from "@/constant/icons";
import Image from "next/image";
import React from "react";

function OfficeAddress({
  label,
  setAddress,
  address,
  location,
  phone,
  email,
  count,
  country,
}: {
  label: string;
  setAddress: any;
  address: number;
  count: number;
  location: string;
  phone: string;
  email: string;
  country: string;
}) {
  return (
    <div className="lg:relative left-0 right-0 h-[100%] w-auto lg:w-[250px]">
      <button
        className="bg-pink text-white cursor-pointer py-3 px-5 lg:px-10 lg:py-5 text-lg font-semibold w-full"
        onClick={() => {
          setAddress(count);
        }}
      >
        <span className="hidden lg:inline">{label}</span>
        <span className="lg:hidden">{country}</span>
      </button>

      {count == address && (
        <div className="h-auto w-[250px]  lg:w-[100%]  bg-white p-7 rounded-br-lg rounded-bl-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:translate-x-0 lg:translate-y-0 lg:left-0 lg:top-[68px]">
          {/* office Image */}
          <Image
            src={"/new/playful-image.jpg"}
            alt="Bliss Services Office Images"
            height={100}
            width={100}
            className="w-full"
          />

          {/* Office Address */}
          <div className="mt-5 w-full">
            <p className="text-gray-400">{location}</p>
            <div className="flex gap-3 items-center w-full mt-5">
              <Send className="text-darkblue -rotate-[45]" size={14} />
              <p
                className="text-gray-400 w-[85%] flex-1 text-sm"
                style={{ overflowWrap: "break-word" }}
              >
                {email}
              </p>
            </div>
            <p className="flex gap-3 items-center mt-3">
              <Phone className="text-darkblue text-sm" size={12} />
              <span className="text-gray-400 text-sm">{phone}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OfficeAddress;
