"use client";
import EducationQuoteBanner from "@/components/large/EducationQuoteBanner";
import FAQ from "@/components/large/FAQ";
import OurServices from "@/components/large/Our.Services";
import Programs from "@/components/large/Programs";
import ServicesPrograms from "@/components/large/Services.Programs";
import {
  bannerData,
  educationFAQ,
  educationPrograms,
  educationServices,
  educationServicesProgram,
  heroSeviceSection,
} from "@/constant/data";
import React from "react";
import SessionBannerTwo from "../../components/common/Session.Banner";
import ServicesBanner from "@/components/common/Services.Banner";

function Page() {
  return (
    <div>
      <ServicesBanner {...heroSeviceSection[0]} />

      <ServicesPrograms
        title1="Study In The Most"
        title2="Renowned Universities in:"
        data={educationServicesProgram}
      />
      <EducationQuoteBanner {...bannerData[0]} />
      <Programs
        data={educationPrograms}
        title="Degree"
        spanTitle="Programs"
        formatBoxTitle={true}
      />
      {/* <SessionBannerTwo /> */}
      <OurServices
        title="Why Choose "
        spanTitle="Bliz Services"
        data={educationServices}
      />
      <EducationQuoteBanner {...bannerData[1]} />
      <FAQ data={educationFAQ} />
    </div>
  );
}

export default Page;
