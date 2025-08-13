"use client";
import ServicesBanner from "@/components/common/Services.Banner";
import EducationQuoteBanner from "@/components/large/EducationQuoteBanner";
import FAQ from "@/components/large/FAQ";
import OurServices from "@/components/large/Our.Services";
import Programs from "@/components/large/Programs";
import ServicesPrograms from "@/components/large/Services.Programs";
import {
  bannerData,
  educationServices,
  heroSeviceSection,
  workFAQ,
  workPrograms,
  workServicesProgram,
} from "@/constant/data";
import React from "react";

function page() {
  return (
    <div>
      <ServicesBanner {...heroSeviceSection[1]} />
      <ServicesPrograms
        title1="Get Hired Through One of"
        title2="Our Employment Programs!"
        data={workServicesProgram}
      />
      <Programs
        data={workPrograms}
        title="Our Immigration"
        spanTitle="Programs"
        formatBoxTitle={false}
      />
      <EducationQuoteBanner {...bannerData[2]} />
      <OurServices
        title="Why Choose "
        spanTitle="Bliz Services"
        data={educationServices}
      />
      <FAQ data={workFAQ} />
    </div>
  );
}

export default page;
