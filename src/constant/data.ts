import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const SocialLinks: { Icon: IconType; name: string; url: string }[] = [
  {
    Icon: FaXTwitter,
    name: "twitter",
    url: "https://www.facebook.com/bliazservice",
  },
  {
    Icon: MdFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/bliazservice",
  },
  {
    Icon: FaInstagramSquare,
    name: "Instagram",
    url: "https://www.facebook.com/bliazservice",
  },
  {
    Icon: IoLogoLinkedin,
    name: "LinkedIn",
    url: "https://www.facebook.com/bliazservice",
  },
];

export const location = [
  {
    street: "330 Bay Street",
    state: "Suite 1400, Toronto",
    country: "Ontario M5H 2S8, Canada",
  },
  {
    street: "Bonduma, Buea",
    state: "South West Region",
    country: "Cameroon",
  },
];

export const contact: { email: string; tel1: string; tel2: string } = {
  email: "info@blizservices.com",
  tel1: "+(234) 678 967 385",
  tel2: "+(1) 705 500 5203",
};

export const headerAddress = [
  {
    Icon: MdOutlineLocationOn,
    text: "Ontario M5H 2S8, Canada",
    label: "Office Address",
  },
  {
    Icon: MdEmail,
    text: "info@blizservices.com",
    label: "Send Email",
  },
  {
    Icon: MdOutlineLocalPhone,
    text: "+(234) 678 967 385",
    label: "Call Emergency",
  },
];

export default SocialLinks;
