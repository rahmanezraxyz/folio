// Import images
import WebImage1 from "../images/ptdnp.png";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/ptdnp2.png";
import MobileImage3 from "../images/ptdnp3.png";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Poster Design",
    category: "Graphic Design",
    img: WebImage2,
    ProjectHeader: {
      title: "Project Poster Design",
      publishDate: "Jul 26, 2024",
      tags: "Poster / Design",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Poster 1",
        img: WebImage2,
      },
      {
        id: 2,
        title: "Poster 2",
        img: UIImage1,
      },
      {
        id: 3,
        title: "Poster 3",
        img: MobileImage1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Poster Design Project",
        },
        {
          id: 2,
          title: "Tools",
          details: "Canva, Adobe Illustrator",
        },
      ],
      ObjectivesHeading: "For",
      ObjectivesDetails:
        "Create an eye-catching poster design for a marketing campaign that effectively communicates the brand message.",
      Technologies: [
        {
          title: "Price",
          techs: ["Start from Rp50.000"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The main challenge was to create a visually appealing design that would stand out while still maintaining the brand identity and conveying the key message effectively.",
        },
        {
          id: 2,
          details:
            "Working within the constraints of print media while ensuring the design would translate well across different sizes and formats.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
        {
          id: 3,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 2,
          title: "PT. Duta Nusa Prima",
          img: MobileImage2,
        },
        {
          id: 3,
          title: "Takoyaki Babon",
          img: UIImage1,
        },
      ],
    },
  },
  {
    id: 2,
    title: "PT. Duta Nusa Prima",
    category: "Logo Design",
    img: WebImage1,
    ProjectHeader: {
      title: "PT. Duta Nusa Prima Logo",
      publishDate: "Jan 12, 2024",
      tags: "Logo / Branding",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Logo Design 1",
        img: WebImage1,
      },
      {
        id: 2,
        title: "Logo more styles",
        img: MobileImage3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "PT. Duta Nusa Prima",
        },
        {
          id: 2,
          title: "Services",
          details: "Contractor and Architecture",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a professional and memorable logo that represents the company's values and services in the industrial sector.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Illustrator"],
        },
      ],
      ProjectDetailsHeading: "Project Details",
      ProjectDetails: [
        {
          id: 1,
          details:
            "PT. Duta Nusa Prima needed a logo redesign to better represent their growing business in the industrial sector. The new logo needed to be professional, modern, and versatile across various applications.",
        },
        {
          id: 2,
          details:
            "The final design incorporates elements that symbolize growth, stability, and innovation - key values of the company.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Poster Design",
          img: WebImage2,
        },
        {
          id: 3,
          title: "Takoyaki Babon",
          img: UIImage1,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Takoyaki Babon",
    category: "Logo and Branding Design",
    img: UIImage1,
    ProjectHeader: {
      title: "Takoyaki Babon Brand Identity",
      publishDate: "Sep 3, 2021",
      tags: "Logo / Food / Branding",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Takoyaki Logo",
        img: UIImage1,
      },
      {
        id: 2,
        title: "Menu Design",
        img: UIImage2,
      },
      {
        id: 3,
        title: "Packaging",
        img: WebImage2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Business",
          details: "Takoyaki Babon",
        },
        {
          id: 2,
          title: "Services",
          details: "Logo Design, Brand Identity, Packaging",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a fun, memorable brand identity for a new takoyaki food business that appeals to young customers and stands out in the competitive food market.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Illustrator", "Photoshop", "Figma", "Procreate"],
        },
      ],
      ProjectDetailsHeading: "Project Details",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Takoyaki Babon is a new food business specializing in Japanese takoyaki with a local twist. The brand needed a complete identity that would appeal to young food enthusiasts.",
        },
        {
          id: 2,
          details:
            "The brand identity includes a playful logo, menu design, packaging, and social media templates that all work together to create a cohesive and memorable brand experience.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
        {
          id: 2,
          name: "Facebook",
          icon: <FiFacebook />,
          url: "https://facebook.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Poster Design",
          img: WebImage2,
        },
        {
          id: 2,
          title: "PT. Duta Nusa Prima",
          img: MobileImage2,
        },
      ],
    },
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: UIImage2,
    ProjectHeader: {
      title: "Cloud Storage Platform UI/UX",
      publishDate: "Oct 15, 2021",
      tags: "UI / UX / Web Design",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Dashboard",
        img: UIImage2,
      },
      {
        id: 2,
        title: "Mobile View",
        img: MobileImage1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "CloudStore Tech",
        },
        {
          id: 2,
          title: "Services",
          details: "UI/UX Design, Web Design",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design an intuitive and user-friendly interface for a cloud storage platform that simplifies file management and sharing.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Figma", "Adobe XD", "Sketch", "InVision"],
        },
      ],
      ProjectDetailsHeading: "Project Details",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The cloud storage platform needed a complete UI/UX overhaul to improve user experience and make complex file management tasks more intuitive.",
        },
        {
          id: 2,
          details:
            "The design process included user research, wireframing, prototyping, and usability testing to ensure the final design met user needs and business goals.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 5,
          title: "React Social App",
          img: MobileImage1,
        },
        {
          id: 6,
          title: "Apple Design System",
          img: WebImage1,
        },
      ],
    },
  },
  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application",
    img: MobileImage1,
    ProjectHeader: {
      title: "Social Media Mobile App",
      publishDate: "Nov 5, 2021",
      tags: "Mobile / React Native / UI",
    },
    ProjectImages: [
      {
        id: 1,
        title: "App Screens",
        img: MobileImage1,
      },
      {
        id: 2,
        title: "User Profile",
        img: UIImage2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "SocialConnect Inc.",
        },
        {
          id: 2,
          title: "Services",
          details: "Mobile App Development, UI Design",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Develop a modern social media application with React Native that focuses on community building and user engagement.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React Native", "JavaScript", "Firebase", "Redux", "Figma"],
        },
      ],
      ProjectDetailsHeading: "Project Details",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The social media app was designed to create meaningful connections between users with similar interests. The project involved designing and developing a complete mobile application from concept to deployment.",
        },
        {
          id: 2,
          details:
            "Key features include user profiles, real-time messaging, content sharing, and community groups, all designed with a focus on user experience and performance.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 4,
          title: "Cloud Storage Platform",
          img: UIImage2,
        },
        {
          id: 6,
          title: "Apple Design System",
          img: WebImage1,
        },
      ],
    },
  },
  {
    id: 6,
    title: "Apple Design System",
    category: "Web Application",
    img: WebImage1,
    ProjectHeader: {
      title: "Apple-inspired Design System",
      publishDate: "Dec 10, 2021",
      tags: "Web / Design System / UI",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Component Library",
        img: WebImage1,
      },
      {
        id: 2,
        title: "Design Tokens",
        img: UIImage1,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "TechDesign Studio",
        },
        {
          id: 2,
          title: "Services",
          details: "Design System, Component Library",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a comprehensive design system inspired by Apple's aesthetic that can be used across multiple web applications to ensure consistency and efficiency.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "React", "Storybook", "Figma"],
        },
      ],
      ProjectDetailsHeading: "Project Details",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The design system project involved creating a complete library of reusable components, design tokens, and documentation that follows Apple's design principles while being adaptable for various web applications.",
        },
        {
          id: 2,
          details:
            "The system includes typography, color palettes, spacing rules, component variants, and interactive states, all documented in Storybook for easy implementation by development teams.",
        },
      ],
      SocialSharingHeading: "Share This",
      SocialSharing: [
        {
          id: 1,
          name: "Twitter",
          icon: <FiTwitter />,
          url: "https://twitter.com/",
        },
        {
          id: 2,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/",
        },
        {
          id: 3,
          name: "YouTube",
          icon: <FiYoutube />,
          url: "https://youtube.com/",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 4,
          title: "Cloud Storage Platform",
          img: UIImage2,
        },
        {
          id: 5,
          title: "React Social App",
          img: MobileImage1,
        },
      ],
    },
  },
];
