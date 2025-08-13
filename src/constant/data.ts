import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import { AccordionItemData, bannerDataI, heroServiceSectionI } from "./types";
import { GraduationCap, Engineering } from "./icons";
import {
  broadcast,
  businessGroup,
  insurance,
  policy,
  processIcon,
} from "@/assets/icons";
import { title } from "process";

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
    image: "/new/study-abroad-1.jpg",
    title: "Study Abroad",
    url: "/",
    text: "We offer fantastic assistance if you wish to further your education overseas",
  },
  {
    image: "/new/leadership-banner.jpg",
    title: "Work Abroad",
    url: "/",
    text: "We’re familiar with the local job demand and work legislation",
  },
  // {
  //   image: "/new/happy-teaam.jpg",
  //   title: "Digital Literacy",
  //   url: "/",
  //   text: "Expand your business globally with strategic market entry services",
  // },
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

// education

export const educationServicesProgram = [
  {
    image: "/new/canada-education.jpg",
    name: "Canada",
    text: "Canada, which is home to some of the best universities in the world, is emerging as a model for high-quality graduate education and research. In the QS and Times Higher Education global university rankings, respectively, 26 and 27, Canadian universities are ranked. Academic research in a variety of sectors, including technology, medicine, agriculture, telecommunications, and environmental science, is also supported and encouraged by the Canadian government. ",
  },
  {
    image: "/new/united-state-education.jpg",
    name: "United State",
    text: "The prestige of earning a degree from a US-accredited university continues to make the US the top choice for overseas students. Higher education institutions in the US are renowned for having exceptionally high standards for the quality of their teaching methods, intellectual rigor, and learning experiences.",
  },
  {
    image: "/new/united-kingdom-education.jpg",
    name: "United Kingdom",
    text: "The prestige of earning a degree from a US-accredited university continues to make the US the top choice for overseas students. Higher education institutions in the US are renowned for having exceptionally high standards for the quality of their teaching methods, intellectual rigor, and learning experiences.",
  },
];

export const workServicesProgram = [
  {
    image: "/new/canada-education.jpg",
    name: "United State",
    text: "Nearly all of the largest corporations in the world have operations in the USA, which means that there are plenty of jobs there. In America, you will have access to job chances that you won’t find anyplace else in the globe. Just one internship with a well-known company could transform your career",
  },
  {
    image: "/new/united-state-education.jpg",
    name: "United Kingdom",
    text: "You will be in excellent company as a foreign worker in the UK, which has numerous multinational communities. It’s not surprising that the UK is a popular choice for overseas graduates looking to launch their careers given the country’s diversified employment sectors, favorable working conditions, and abundance of employment chances.",
  },
  {
    image: "/new/united-kingdom-education.jpg",
    name: "Canada",
    text: "It has a remarkable degree of economic independence thanks to its trustworthy and open public finance system. The banking and financial systems in Canada are robust. The nation provides its workforce with first-rate medical facilities, paid time off, and holidays that include parental and maternal leave.",
  },
];

export const educationPrograms = [
  {
    title: "Graduate Programs",
    text: [
      "Stand out for advancement opportunities.",
      "Gain specialized knowledge.",
      "Maintain cutting-edge industry skills and learn new technology",
    ],
  },
  {
    title: "Undergraduate Programs",
    text: [
      "Prepare for a new career field.",
      "Broaden your skillset.",
      "Expand your strategic and leadership capabilities.",
    ],
  },
  {
    title: "Associate Degree Programs",
    text: [
      " Prepare for better opportunities.",
      "Improve your skills.",
      "Learn cutting-edge industry skills and new technologies.",
    ],
  },
];

export const workPrograms = [
  {
    title: "WORK IN THE UK",
    text: [
      "Better Working Conditions.",
      "Excellent Pay and Benefits.",
      "Higher Chances For Success.",
      "Experience a multicultural Nation.",
      "Better Social Amenities",
    ],
  },
  {
    title: "WORK IN CANADA",
    text: [
      "Excellent Working Conditions.",
      "Good Pay and Benefits.",
      "Higher Chances For Success.",
      "Experience a multicultural Nation.",
      "Better Social Amenities.",
    ],
  },
];

export const educationServices = [
  {
    image: businessGroup,
    title: "Flexibility",
    text: "We'll collaborate with you and ensure that we meet your expectations.",
  },
  {
    image: businessGroup,
    title: "Quality",
    text: "We'll collaborate with The educational institutions we partner with have produced the most successful graduates. and ensure that we meet your expectations.",
  },
  {
    image: businessGroup,
    title: "Global",
    text: "We'll We've been very successful in helping students to further their education globally. with you and ensure that we meet your expectations.",
  },
  {
    image: businessGroup,
    title: "Expertise",
    text: "We'll We have a team of experts and consultants who will assist you with your application. with you and ensure that we meet your expectations.",
  },
  {
    image: businessGroup,
    title: "Support",
    text: "We'll collaborate We pride ourselves on excellent customer support for your convenience. you and ensure that we meet your expectations.",
  },
  {
    image: businessGroup,
    title: "Certified",
    text: "We'll collaborate with you and ensure that we meet All educational institutions are certified by a reputable board in their respective countries. expectations.",
  },
];

export const educationFAQ = [
  {
    title: "What is the duration of my credential's evaluation?",
    content:
      "A duration of two weeks will be expected for the board to evaluate and authenticate your credentials, if this takes longer than two weeks without a definite response, please contact us.",
  },
  {
    title: "What documents do I need to submit?",
    content:
      "a data page of your international passport your transcripts from your previous school and a few other documents that will be listed at the beginning of your application",
  },
  {
    title: "What if I get rejected at the institution of my choice",
    content:
      "if this happens, fortunately you can always re-apply to another institution",
  },
  {
    title: "How long is this process",
    content:
      "this process varies based on different institutions, but bear in mind that we will keep you updated throughout the process.",
  },
  {
    title: "What countries can I apply to?",
    content:
      "Your application is valid for the United States of America, the United Kingdom and Canada",
  },
];

export const workFAQ = [
  {
    title: "What are my options of working Abroad?",
    content: "there are many options but here are a few:",
    image: "/images/praying-1.png",
    list: [
      "Through an agency  program provider. ",
      "Work abroad as a teacher.",
      "Move abroad, then find work.",
      "Get a working holiday visa.",
      "Do a work exchange.",
      "Volunteer.",
      "Freelance/digital nomad.",
    ],
  },
  {
    title: "Do I need a Visa to Work Abroad",
    content:
      "Yes you do, this will be process is very important and will be carried out after you have been accepted by the company",
    image: "/images/praying-1.png",
  },
];

export const bannerData: bannerDataI[] = [
  {
    quote: `"An Investment In Knowledge Pays The Best Interest."`,
    author: "Benjamin Franklin",
    link: "/contact-us",
    center: false,
    text: "Studying abroad can provide the structure for students to build the necessary skills to be successful in life and give them an edge over their competition.",
    image: "",
  },
  {
    quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    author: "",
    link: "/contact-us",
    center: true,
    text: "Obtain a worldwide perspective, meet people from all over the world, and explore new places—all while earning credits toward your degree.",
    image: "",
  },
];

export const heroSeviceSection: heroServiceSectionI[] = [
  {
    tag: "STUDY OVERSEAS",
    title1: "Boost your",
    title2: "Employability",
    image: "",
    list: [
      "Do you want to have access to greater starting pay and a quicker transfer into career-relevant jobs after graduation?",
      "Do you want to learn important life skills, and develop resilience?",
      "Do you want to take advantage of your chance to travel the world and get insight into your field of study from a new, global viewpoint?",
    ],
  },
  {
    tag: "WORK OVERSEAS",
    title1: "Explore Different",
    title2: "Employment",
    image: "",
    list: [
      "Do you want to benefit from social amenities working overseas?",
      "Do you want to work in an environment where you'll experience financial stability?",
      "Do you want to experience working overseas?",
    ],
  },
];
