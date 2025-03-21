import ContactBanner from "@/components/large/ContactBanner";
import React from "react";
import ContactContactForm from "../../components/large/Contatct.contactForm";
import HeaderSeo from "@/components/layout/HeaderSeo";
import ContactMapSection from "../../components/large/ContactMapSection";

function Page() {
  return (
    <>
      <HeaderSeo
        keywords="Bliss Services, Education Consultancy, Study Aboard, Work Aboard, Digital Literacy"
        title="Bliss-Services | Educational and Proffessional Consultancy"
        description="Do you want to work Overseas? Study Overseas"
      />
      <main className="">
        <ContactBanner />
        <ContactContactForm />
        <ContactMapSection />
      </main>
    </>
  );
}

export default Page;
