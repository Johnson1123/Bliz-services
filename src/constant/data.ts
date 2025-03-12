import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import { AccordionItemData } from "./types";
import { GraduationCap, Engineering } from "./icons";
import { broadcast, insurance, policy, processIcon } from "@/assets/icons";

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
    label: "Call Us",
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
    image: "/new/study-abroad-services.jpg",
    title: "Study Abroad",
    url: "/",
    text: "We offer fantastic assistance if you wish to further your education overseas",
  },
  {
    image: "/new/work-abroad-service-man.jpg",
    title: "Work Abroad",
    url: "/",
    text: "We’re familiar with the local job demand and work legislation",
  },
  {
    image: "/new/learn-digital-skills.jpg",
    title: "Digital Literacy",
    url: "/",
    text: "Expand your business globally with strategic market entry services",
  },
];
export const homeCases = [
  {
    image: "/new/couple-relocation.jpg",
    name: "John Olamide",
    url: "/",
    text: "Study Abroad",
  },
  {
    image: "/new/relocation-abroad.jpg",
    name: "Olumide Elijah",
    url: "/",
    text: "Relocation",
  },
  {
    image: "/new/hr-manager-welcoming-successful-candidate.jpg",
    name: "Okarfor Emmanuel",
    url: "/",
    text: "Skills",
  },
];

export const homeAboutParagrahText = [
  "Personalized Guidance",
  "End-To-End Support",
  "Proven Success",
  "Trusted Partnerships",
];

export const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: "Hassle-Free Process",
    content: {
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation",
    },
  },
  {
    id: 2,
    title: "Faster Turnaround",
    content: {
      description: "Steps to obtain a work permit:",
    },
  },
  {
    id: 3,
    title: "Affordable Pricing",
    content: {
      description: "Our comprehensive immigration services include:",
    },
  },
  {
    id: 4,
    title: "Ongoing Support",
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

export const serviceOverlay = [
  {
    title: "Get a free qoutes",
    text: "Keep you updated of recent development",
    image: broadcast,
    background: "white",
  },
  {
    title: "Fast & Easy process",
    text: "Keep you updated of recent development",
    image: processIcon,
    background: "other",
  },
  {
    title: "Control over policy",
    text: "Keep you updated of recent development",
    image: policy,
    background: "white",
  },
  {
    title: "Insurance Policy",
    text: "Keep you updated of recent development",
    image: insurance,
    background: "white",
  },
];

export const specialServics = [
  {
    title: "Study Overseas",
    text: "Shape your life and explore more through education",
    image: "/new/service-services-education.jpg",
    link: ",",
  },
  {
    title: "Mass Litracy",
    text: "Shape your life and explore more through education",
    image: "/new/services-services-1.jpg",
    link: ",",
  },
  {
    title: "Work Aboard",
    text: "Shape your life and explore more through education",
    image: "/new/services-services-skills.jpg",
    link: ",",
  },
];

export const homeProgressData = [
  {
    label: "University Addmissions",
    percentage: 85,
  },
  {
    label: "Job Placement Success",
    percentage: 95,
  },
  {
    label: "Bussiness Expansion",
    percentage: 87,
  },
];
export default SocialLinks;
