import React from "react";

export default function ServicesBanner() {
  return (
    <section className="Services__banner-bg h-[calc(100vh-170px)] lg:h-[calc(100vh-150px)] min-h-[400px] max-h-[500px] lg:max-h-[600px] w-[100vw] servicesContainer">
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center md:justify-center  md:pt-0">
        <h2 className="text-white font-bold">Consulting for Every Business</h2>
        <p className="text-white font-light">
          The Best Consulting Firm you can Con
        </p>
      </div>
    </section>
  );
}
