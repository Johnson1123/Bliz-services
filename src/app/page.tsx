"use client";
import Herosection from "@/components/large/Herosection";

import HomeServices from "@/components/large/HomeServices";
import HomeAbout from "@/components/large/HomeAbout";
import HomeFAQ from "@/components/large/HomeFAQ";
import HomeTestimonials from "@/components/large/HomeTestimonials";
import HomeWhy from "@/components/large/HomeWhy";
import HeaderSeo from "@/components/layout/HeaderSeo";

export default function Page() {
  return (
    <div className="">
      <HeaderSeo
        keywords="Bliz Services, Education Consultancy, Study Aboard, Work Aboard, Digital Literacy, relocating abroad, study in United State, study in US, study in USA, study in Canada, Study in United Kingdom, Study in UK"
        title="Bliz Services | Educational and Proffessional Consultancy"
        description="Do you want to work Overseas? Study Overseas"
      />
      <Herosection />
      <HomeServices />
      <HomeAbout />
      {/* <HomeCases /> */}
      <HomeFAQ />
      <HomeWhy />
      {/* <HomeContact /> */}
      <HomeTestimonials />
      {/* <HomeBlog /> */}
    </div>
  );
}
