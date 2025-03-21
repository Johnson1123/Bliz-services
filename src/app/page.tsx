"use client";
import Herosection from "@/components/large/Herosection";

import HomeServices from "@/components/large/HomeServices";
import HomeAbout from "@/components/large/HomeAbout";
import HomeFAQ from "@/components/large/HomeFAQ";
import HomeContact from "@/components/large/HomeContact";
import HomeTestimonials from "@/components/large/HomeTestimonials";
import HomeCases from "@/components/large/HomeCases";
import HomeWhy from "@/components/large/HomeWhy";
import HeaderSeo from "@/components/layout/HeaderSeo";

export default function Page() {
  return (
    <div className="">
      <HeaderSeo
        keywords="Bliss Services, Education Consultancy, Study Aboard, Work Aboard, Digital Literacy"
        title="Bliss-Services | Educational and Proffessional Consultancy"
        description="Do you want to work Overseas? Study Overseas"
      />
      <Herosection />
      <HomeServices />
      <HomeAbout />
      <HomeCases />
      <HomeFAQ />
      <HomeWhy />
      <HomeContact />
      <HomeTestimonials />
      {/* <HomeBlog /> */}
    </div>
  );
}
