import React from "react";

function ContactInfotext({ label, text }: { label: string; text: string }) {
  return (
    <div className="">
      <p className="text-darkblue font-semibold text-lg">{label}</p>
      <p className="text-gray-400 font-normal text-base">{text}</p>
    </div>
  );
}

export default ContactInfotext;
