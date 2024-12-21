import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

import {
  SiCodechef, SiLeetcode,
  SiCodeforces,
} from "react-icons/si";  // Import from the correct module

// ... your other imports


import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Shreeyanshi Gupta",
  greet: "Hello there! 👋🏻",
  description:
    "I am  is a dedicated and enthusiastic second-year student with a current CGPA of 8.48, actively pursuing her passion for coding and development.",
};
export const PROJECTS = [
  {
    id: 1,
    name: "Breast Cancer Detection",
    description:
      "A machine learning application designed to detect breast cancer using classification algorithms. Built with Python and Scikit-learn, it provides insightful visualizations and accurate predictions.",
    image: projectImage1,
    githubLink: "https://github.com/shreeyanshi123/Breast-Cancer",
  },

  {
    id: 2,
    name: "California Housing Analysis",
    description:
      "A data-driven project analyzing California housing prices using Python, Pandas, and Matplotlib. Includes insights on price trends, neighborhood statistics, and predictive modeling.",
    image: projectImage2,
    githubLink: "https://github.com/shreeyanshi123/CaliforniaHousing",
  },
  {
    id: 3,
    name: "Recipe Book",
    description:
      "A digital recipe book application allowing users to browse, save, and share recipes.",
    image: projectImage3,
    githubLink: "https://github.com/shreeyanshi123/Recipe-Book",
  },
  {
    id: 4,
    name: "Restaurant Application",
    description:
      "A restaurant management application featuring menu display, online reservations, and customer feedback. Developed using Next.js and Tailwind CSS.",
    image: projectImage4,
    githubLink: "ongoing",
  },
  {
    id: 5,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage5,
    githubLink: "https://github.com/shreeyanshi123/Portfolio",
  },
  {
    id: 6,
    name: "Password Generator",
    description:
      "A user-friendly tool built with JavaScript for generating secure and customizable passwords. Features include options for length, character types, and a copy-to-clipboard function.",
    image: projectImage6,
    githubLink: "https://github.com/shreeyanshi123/Password-Generator",
},

];

export const BIO = [
  "Hi, I’m Shreeyanshi Gupta 👋, a passionate B.Tech student specializing in Information Technology 💻 at IIIT Allahabad. With a strong foundation in programming and development, I thrive on building innovative solutions that blend creativity with technology 🌟. My technical expertise spans C++, Data Structures and Algorithms, React.js, Node.js, MongoDB, and Machine Learning 🤖, with hands-on experience in developing both web-based applications and deep learning models.",

  "I am an active member of IIIT-Allahabad's Web Development 🌐 and AI/ML 🤖 clubs, where I collaborate on impactful projects and stay updated on the latest advancements in technology. My involvement in events like the Google Girl Hackathon 2024 💡 and open-source initiatives such as Opencode'24 🌱 has allowed me to grow as both a developer and a mentor, hosting repositories and encouraging contributions from fellow enthusiasts.",

  "Beyond my academic pursuits, I enjoy creating full-stack applications, such as a Restaurant Management App 🍴 with real-time navigation 🗺️ and secure authentication 🔐 features, and exploring AI applications like image classification models 🐶🐱. I also participate in competitive programming, where I’ve achieved milestones like being a 3-star coder on CodeChef ⭐⭐⭐ and a pupil on Codeforces 🚀.",

  "I believe in continuous learning 📚 and strive to contribute meaningfully to the tech community 🤝. Whether it’s through collaboration, innovation, or mentorship, I’m always eager to explore opportunities that challenge me to grow and make a positive impact 🌍.",

  "Let’s connect and build something amazing together! 🚀"
];
export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
  },

  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },

  {
    icon: <RiTailwindCssFill className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Tailwind CSS",
  },
  {
    icon: <TbBrandCpp className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C++",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Python",
  },
  {
    icon: <TbBrandGithub className="text-4xl text-black lg:text-5xl" />,
    name: "GitHub",
  },
  {
    icon: <SiNumpy className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "NumPy",
  },
  {
    icon: <SiTensorflow className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "TensorFlow",
  },
  {
    icon: <SiKeras className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Keras",
  },
];

export const EXPERIENCES = [
  {
    title: "Web Development Department Member",
    company: "Club of Professionals, IIIT-Allahabad",
    duration: "2024 – Present",
    description:
      "As a member of the Web Development Department, I am responsible for developing and maintaining various projects using the MERN stack. I collaborate with other members to execute web development initiatives that support the club’s activities and objectives. I am involved in both front-end and back-end development, ensuring seamless user experiences.",
  },
  {
    title: "AI/ML Wing Member",
    company: "GeekHaven, IIIT-Allahabad",
    duration: "2024 – Present",
    description:
      "As a member of the AI/ML Wing, I actively explore and implement concepts in Artificial Intelligence and Machine Learning. I contribute to projects and research in the AI/ML domains, experimenting with cutting-edge algorithms and frameworks. This role allows me to deepen my knowledge of AI and apply it in practical, impactful ways.",
  },
  {
    title: "Contributor",
    company: "Hacktoberfest 2024",
    duration: "2024",
    description:
      "I contributed to various open-source projects during Hacktoberfest 2024, completing successful pull requests. This experience allowed me to engage with the global developer community, improve my coding skills, and contribute to meaningful open-source initiatives.",
  },
  {
    title: "Mentor",
    company: "Opencode’24, IIIT-Allahabad",
    duration: "Dec 2024",
    description:
      "During Opencode’24, I served as a mentor for the open-source repositories hosted by IIIT-Allahabad. I managed the ML repository, DeepSeaRov, a multiclass image classification task using deep learning techniques, and the WebD repository, Care Companion, a React.js and Bootstrap-based project focusing on women’s healthcare. I encouraged open-source collaboration, mentored contributors, and managed issues and pull requests throughout the event.",
  }
];
export const EDUCATION = [
  {
    degree: "Bachelors of Technology",
    institution: "Indian Institute of Information Technology, Allahabad",
    duration: "July 2023 - June 2027",
    description:
      "Pursuing B.Tech in Information Technology with a CGPA of 8.48 (till 2nd semester).Actively Participating in college technical society activities",
  },
  {
    degree: "Class XII",
    institution: "Vanita Public School, UP",
    duration: "2021 - 2022",
    description:
      "Graduated with 97.6% under the CBSE curriculum.Focused on computer science, learning Python programming and developing problem-solving skills.",
  },
  {
    degree: "Class X",
    institution: "Vanita Public School, UP",
    duration: "2019 - 2020",
    description:
      "Graduated with 97.8% under the CBSE curriculum.",
  },
];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/", // Replace with actual link
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/", // Replace with actual link
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/_shreeyanshi__",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/shreeyanshi123",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shreeyanshi-gupta-748a0a282",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/_shreeyanshi__/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://codeforces.com/profile/03shree",
    icon: <SiCodeforces fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.codechef.com/users/shreeyanshi03",
    icon: <SiCodechef fontSize={25} className="hover:opacity-80" />,
  },
];