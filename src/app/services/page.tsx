import ServicesAbout from "@/components/large/ServicesAbout";
import ServicesBanner from "@/components/large/ServicesBanner";
import ServicesOverlayBox from "@/components/large/ServicesOverlayContainer";
import ServicesOverview from "@/components/large/ServicesOverview";
import ServicesSpecial from "@/components/large/ServicesSpecial";
import ServiceSwiper from "@/components/large/ServiceSwiper";
import React from "react";

export default function Services() {
  return (
    <main className="relative left-0 right-0">
      <div className="relative left-0 right-0">
        <ServicesBanner />
        <ServicesOverlayBox />
      </div>
      <ServicesAbout />
      <ServiceSwiper />
      <ServicesSpecial />
      {/* <HomeContact /> */}
      <ServicesOverview />
    </main>
  );
}
