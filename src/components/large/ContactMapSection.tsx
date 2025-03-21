"use client";
import React, { useState } from "react";
import Conatainer from "../layout/Conatainer";
import bgImg from "../../assets/images/new/Map-bg.png";
import OfficeAddress from "../medium/OfficeAddress";

function ContactMapSection() {
  const [address, setAddress] = useState<number>(1);
  return (
    <section
      className="h-[100vh] map__container-section py-0 bg-[#F2F2F2] md:min-h-[100vh] md:py-0 lg:min-h-[100vh] flex bg-cover bg-no-repeat bg-center relative left-0 right-0"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={true}>
        <div className="flex justify-between">
          <OfficeAddress
            label="United Kingdom"
            email={"example@bliss.com"}
            phone={"+1 (239)-564-875"}
            location="23 Maddison square"
            count={1}
            address={address}
            setAddress={setAddress}
            country="UK"
          />
          <OfficeAddress
            label="United State"
            email={"example@bliss.com"}
            phone={"+1 (239)-564-875"}
            location="23 Ketech Habour Road, Silicon Valley 145764"
            count={2}
            address={address}
            setAddress={setAddress}
            country="US"
          />
          <OfficeAddress
            label="South Africa"
            email={"example@bliss.com"}
            phone={"+1 (239)-564-875"}
            location="23 Nelson Madenla square, Cape Town 34726"
            count={3}
            address={address}
            setAddress={setAddress}
            country="KSA"
          />
        </div>
      </Conatainer>
    </section>
  );
}

export default ContactMapSection;
