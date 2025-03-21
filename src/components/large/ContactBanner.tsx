import React from "react";

function ContactBanner() {
  return (
    <section className="Services__banner-bg h-[calc(100vh-170px)] lg:h-[calc(100vh-200px)] min-h-[400px] max-h-[500px] lg:max-h-[600px] w-[100vw] servicesContainer">
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center md:justify-center  md:pt-0">
        <h2 className="text-white font-bold">Contact Us</h2>
        <p className="text-white font-light">
          Build Yourself, Build Your Career
        </p>
      </div>
    </section>
  );
}

export default ContactBanner;
