// import profile images
import ProfilePhoto1 from "../src/assets/img/profile1.png";
import ProfilePhoto2 from "../src/assets/img/profile2.png";
import ProfilePhoto3 from "../src/assets/img/profile3.png";

// import about icons
import Skill1 from "../src/assets/img/skills/skill1.png";
import Skill2 from "../src/assets/img/skills/skill2.png";
import Skill3 from "../src/assets/img/skills/skill3.png";
import Skill4 from "../src/assets/img/skills/skill4.png";
import Skill5 from "../src/assets/img/skills/skill5.png";
import Skill6 from "../src/assets/img/skills/skill6.png";

// import social icons
import FacebookIcon from "../src/assets/img/social/facebook.png";
import TwitterIcon from "../src/assets/img/social/twitter.png";
import InstagramIcon from "../src/assets/img/social/instagram.png";
import YoutubeIcon from "../src/assets/img/social/youtube.png";
import PinterestIcon from "../src/assets/img/social/pinterest.png";

import {
  FaHammer,
  FaCarCrash,
  FaComments,
  FaBriefcase,
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
  // {
  //   name: "Our team",
  //   href: "team",
  // },
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
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!",
    name: "Jane Cooper",
    image: ProfilePhoto1,
    position: "CEO at ABC Company",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!",
    name: "Theresa Webb",
    image: ProfilePhoto2,
    position: "Finance Manager at XYZ Company",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!",
    name: "Kathryn Murphy",
    image: ProfilePhoto3,
    position: "Contract Manager at LMO Company",
  },
];

// skills data
export const skills = [
  {
    icon: <FaCarCrash className="text-4xl text-primary" />,
    title: "Personal Injury - SABs & WSIB",
    description:
      "Have you been injured in an accident or at work in Ontario? STC Falcon Legal Services can help you navigate the complexities of Statutory Accident Benefits (SABs) and Workplace Safety and Insurance Board (WSIB) claims. We'll fight for the compensation you deserve for medical expenses, lost income, and other damages.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-primary" />,
    title: "Employment Law",
    description:
      "Facing a wrongful dismissal, workplace discrimination, or other employment issue in Ontario? STC Falcon Legal Services provides legal advice and representation to both employees and employers in a wide range of employment law matters.",
  },
  {
    icon: <FaFileContract className="text-4xl text-primary" />,
    title: "Contract Disputes",
    description:
      "Are you involved in a contract dispute in Ontario? STC Falcon Legal Services can help you resolve disagreements related to contracts, including breach of contract, non-performance, and other contractual issues.",
  },
  {
    icon: <FaHammer className="text-4xl text-primary" />,
    title: "Construction & Renovation Disputes",
    description:
      "Experiencing problems with a contractor in Ontario? STC Falcon Legal Services assists homeowners and contractors in resolving disputes related to construction projects, renovations, and property damage.",
  },
  {
    icon: <FaBalanceScale className="text-4xl text-primary" />,
    title: "Debt Collection & Small Claims Court",
    description:
      "Are you trying to recover unpaid invoices or debts in Ontario? STC Falcon Legal Services can help you navigate the Small Claims Court process and pursue legal action to collect what you're owed. We also assist with defending against claims.",
  },
  {
    icon: <FaComments className="text-4xl text-primary" />,
    title: "Mediation & Tribunal Representation",
    description:
      "Seeking an alternative to litigation? STC Falcon Legal Services offers mediation services throughout Ontario. We also represent clients at various tribunals, advocating for their rights and interests.",
  },
];

// social data
export const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
];
