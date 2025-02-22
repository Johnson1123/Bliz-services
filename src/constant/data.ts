import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import { AccordionItemData } from "./types";
import { GraduationCap, Engineering } from "./icons";

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
    text: "info@blizservices.com",
    label: "Email Us",
  },
  {
    text: "+(234) 678 967 385",
    label: "Call Emergency",
  },
];

export const testimonials = [
  {
    image: "",
    name: "Johnsn Olumide",
    role: "Investor",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 5,
  },
  {
    image: "",
    name: "Sansa",
    role: "Actor ",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 3,
  },
  {
    image: "",
    name: "Arya Stack",
    role: "Social Maketer ",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 2,
  },
  {
    image: "",
    name: "Mother Charity",
    role: "Client ",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 4,
  },
  {
    image: "",
    name: "Jerrmy Flake",
    role: "Backend Developer",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 1,
  },
  {
    image: "",
    name: "Emmauella John",
    role: "Fontend ",
    text: "The Bliss servicess agency company also impress us with their transpa regarding cost. Their services is the best",
    rating: 5,
  },
];

export const homeServices = [
  {
    image: "/graduation.avif",
    title: "Work Overseas",
    url: "/",
    text: "We provide opportunities to everyone that wish to work overseas",
  },
  {
    image: "/graduation.avif",
    title: "Study Overseas",
    url: "/",
    text: "We provide opportunities to everyone that wish to work overseas",
  },
  {
    image: "/graduation.avif",
    title: "Vacation Overseas",
    url: "/",
    text: "We provide opportunities to everyone that wish to work overseas",
  },
];

export const homeAboutParagrahText = [
  "99% Success Rate",
  "Proffessional Experts",
  "Quality Services",
  "World-Wide Clients",
];

export const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: "Study Visa Requirements",
    content: {
      description: "Essential requirements for obtaining a student visa:",
    },
  },
  {
    id: 2,
    title: "Work Permit Process",
    content: {
      description: "Steps to obtain a work permit:",
    },
  },
  {
    id: 3,
    title: "Immigration Services",
    content: {
      description: "Our comprehensive immigration services include:",
    },
  },
];

export const homeContacttexts = [
  {
    Icon: GraduationCap,
    text: "Parturient montes nascetur ridiculus mus is maecenas , neque in feugiat elementum lacus risus. ",
    title: "Study OverSeas Consultant",
  },
  {
    Icon: Engineering,
    text: "Parturient montes nascetur ridiculus mus is maecenas , neque in feugiat elementum lacus risus.",
    title: "Work OverSeas Consultant",
  },
];
export default SocialLinks;
