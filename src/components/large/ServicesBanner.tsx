import React from "react";

export default function ServicesBanner() {
  return (
    <section className="Services__banner-bg h-[calc(100vh-170px)] lg:h-[calc(100vh-150px)] min-h-[450px] max-h-[500px] lg:max-h-[600px] w-[100vw]">
      <div className="w-full h-full flex flex-col gap-2 justify-start items-center md:justify-center pt-20 md:pt-0">
        <h2 className="text-white font-bold">Consulting for Every Business</h2>
        <p className="text-white font-light">
          The Best Consulting Firm you can Con
        </p>
      </div>
    </section>
  );
}
