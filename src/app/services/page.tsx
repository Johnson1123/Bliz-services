import ServicesAbout from "@/components/large/ServicesAbout";
import ServicesBanner from "@/components/large/ServicesBanner";
import ServicesOverlayBox from "@/components/large/ServicesOverlayContainer";
import ServicesOverview from "@/components/large/ServicesOverview";
import ServicesSpecial from "@/components/large/ServicesSpecial";
import ServiceBannerMotion from "@/components/large/ServiceSwiper";
import HeaderSeo from "@/components/layout/HeaderSeo";
import React from "react";

export default function Services() {
  return (
    <>
      <HeaderSeo
        keywords="Bliss Services, Education Consultancy, Study Aboard, Work Aboard, Digital Literacy"
        title="Bliss-Services | Educational and Proffessional Consultancy"
        description="Do you want to work Overseas? Study Overseas"
      />
      <main className="relative left-0 right-0">
        <div className="relative left-0 right-0">
          <ServicesBanner />
          <ServicesOverlayBox />
        </div>
        <ServicesAbout />
        <ServiceBannerMotion />
        <ServicesSpecial />
        {/* <HomeContact /> */}
        <ServicesOverview />
      </main>
    </>
  );
}
