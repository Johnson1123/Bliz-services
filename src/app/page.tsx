"use client";
import Herosection from "@/components/large/Herosection";

import HomeServices from "@/components/large/HomeServices";
import HomeAbout from "@/components/large/HomeAbout";
import HomeFAQ from "@/components/large/HomeFAQ";
import HomeContact from "@/components/large/HomeContact";
import HomeTestimonials from "@/components/large/HomeTestimonials";
import HomeBlog from "@/components/large/HomeBlog";

export default function Page() {
  // Example data for the Accordion

  return (
    <div className="">
      <Herosection />
      <HomeServices />
      <HomeAbout />
      <HomeFAQ />
      <HomeContact />
      <HomeTestimonials />
      <HomeBlog />
    </div>
  );
}
