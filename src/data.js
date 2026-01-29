// import profile images
import ProfilePhoto1 from "../src/assets/img/profile1.png";
import ProfilePhoto2 from "../src/assets/img/profile2.png";
import ProfilePhoto3 from "../src/assets/img/profile3.png";

// import about icons
// import Skill1 from "../src/assets/img/skills/skill1.png";
// import Skill2 from "../src/assets/img/skills/skill2.png";
// import Skill3 from "../src/assets/img/skills/skill3.png";
// import Skill4 from "../src/assets/img/skills/skill4.png";
// import Skill5 from "../src/assets/img/skills/skill5.png";
// import Skill6 from "../src/assets/img/skills/skill6.png";

// import social icons
// import FacebookIcon from "../src/assets/img/social/facebook.png";
// import TwitterIcon from "../src/assets/img/social/twitter.png";
// import InstagramIcon from "../src/assets/img/social/instagram.png";
// import YoutubeIcon from "../src/assets/img/social/youtube.png";
// import PinterestIcon from "../src/assets/img/social/pinterest.png";
import LinkedinIcon from "../src/assets/img/social/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc-removebg-preview.png";

import {
  FaHammer,
  FaCarCrash,
  FaComments,
  FaBalanceScale,
  FaFileContract,
} from "react-icons/fa";

// navigation data
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Our Services",
    href: "skills",
  },
  {
    name: "About Us",
    href: "about",
  },
  {
    name: "Contact Us",
    href: "contact",
  },
];

// testimonials data
export const testimonials = [
  {
    text: "After my workplace injury in Hamilton, I was overwhelmed with the WSIB claim process. STC Falcon Legal Services guided me through every step.",
    name: "Jane Cooper",
    image: ProfilePhoto1,
    position: "Construction Worker, Hamilton",
  },
  {
    text: "When I was wrongfully dismissed from my position, STC Falcon Legal Services fought for my rights. Their employment law expertise helped me receive fair compensation and restored my confidence. Highly recommend their professional services.",
    name: "Theresa Webb",
    image: ProfilePhoto2,
    position: "Former Finance Manager, Stoney Creek",
  },
  {
    text: "I had a complex renovation dispute with my contractor. STC Falcon Legal Services helped me navigate Small Claims Court and successfully recovered my losses. Their attention to detail and knowledge of construction disputes was impressive.",
    name: "Kathryn Murphy",
    image: ProfilePhoto3,
    position: "Homeowner, Hamilton Mountain",
  },
];

// skills data
export const skills = [
  {
    icon: <FaCarCrash className="text-4xl text-primary" />,
    title: "Personal Injury - SABs & WSIB",
    slug: "personal-injury",
    description:
      "Injured in an accident or at work in Hamilton or Stoney Creek? STC Falcon Legal Services specializes in Statutory Accident Benefits (SABs) and WSIB claims.",
  },
  // {
  //   icon: <FaBriefcase className="text-4xl text-primary" />,
  //   title: "Employment Law",
  //   slug: "employment-law",
  //   description:
  //     "Facing a wrongful dismissal, workplace discrimination, or other employment issue in Ontario? STC Falcon Legal Services provides legal advice and representation to both employees and employers in a wide range of employment law matters.",
  // },
  {
    icon: <FaFileContract className="text-4xl text-primary" />,
    title: "Contract Disputes",
    slug: "contract-disputes",
    description:
      "Facing a contract dispute in Hamilton? We help resolve disagreements related to breach of contract, non-performance, and other issues.",
  },
  {
    icon: <FaHammer className="text-4xl text-primary" />,
    title: "Construction & Renovation Disputes",
    slug: "construction-disputes",
    description:
      "Experiencing problems with a contractor in Hamilton/Niagara? STC Falcon Legal Services assists with construction projects, renovations, and property damage disputes.",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-primary" />,
    title: "Debt Collection & Small Claims Court",
    slug: "debt-collection",
    description:
      "Recover unpaid invoices or debts in Hamilton. We navigate the Small Claims Court process to help you collect what you're owed.",
  },
  {
    icon: <FaComments className="text-4xl text-primary" />,
    title: "Mediation & Tribunal Representation",
    slug: "mediation-tribunal",
    description:
      "Seeking mediation in Hamilton? We offer alternative dispute resolution and represent clients at various tribunals across Ontario.",
  },
];

// social data
export const social = [
  {
    icon: LinkedinIcon,
  },
  // {
  //   icon: FacebookIcon,
  // },
  // {
  //   icon: TwitterIcon,
  // },
  // {
  //   icon: InstagramIcon,
  // },
  // {
  //   icon: YoutubeIcon,
  // },
  // {
  //   icon: PinterestIcon,
  // },
];

export const whyChooseUs = [
  {
    title: "Licensed Expertise",
    description: "Deep knowledge of Ontario’s legal frameworks.",
  },
  {
    title: "Affordable Solutions",
    description: "Streamlined processes to save you time and money.",
  },
  {
    title: "Tailored Support",
    description: "Services customized to your unique needs.",
  },
  {
    title: "Collaborative Approach",
    description: "Focused on practical outcomes and client satisfaction.",
  },
];
