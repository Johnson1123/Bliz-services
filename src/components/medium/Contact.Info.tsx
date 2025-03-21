import React from "react";
import ContactInfoIcon from "../small/Icons/Contact.Info.Icon";
import ContactInfotext from "./Contact.Info.text";
import { IconType } from "react-icons";

function ContactInfo({
  Icon,
  label,
  text,
}: {
  Icon: IconType;
  label: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 items-center my-4">
      <ContactInfoIcon Icon={Icon} />
      <ContactInfotext label={label} text={text} />
    </div>
  );
}

export default ContactInfo;
