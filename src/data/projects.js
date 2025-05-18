// Import images
import dnp3 from "../images/ptdnp3.png";
import dnp2 from "../images/ptdnp2.png";
import nkm2 from "../images/nkm2.png";
import nkm from "../images/nkm.png";
import nkm3 from "../images/nkm3.png";
import poster from "../images/poster.png";
import poster1 from "../images/poster1.png";
import poster2 from "../images/poster2.png";
import poster3 from "../images/poster3.png";
import ehw from "../images/ehw.webp";
import ehw2 from "../images/ehw2.webp";
import ehw3 from "../images/ehw3.webp";
import msd from "../images/msd.webp";
import msd2 from "../images/msd2.webp";
import msd3 from "../images/msd3.webp";
import takoyaki from "../images/takoyaki.png";
import takoyaki2 from "../images/takoyaki2.png";
import takoyaki3 from "../images/takoyaki3.jpg";
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
    category: "Poster and Infographics",
    img: poster,
    ProjectHeader: {
      title: "Poster Design",
      publishDate: "Jul 26, 2024",
      tags: "Poster / Design",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Poster 1",
        img: poster1,
      },
      {
        id: 2,
        title: "Poster 2",
        img: poster2,
      },
      {
        id: 3,
        title: "Poster 3",
        img: poster3,
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
          img: ptdnp3,
        },
        {
          id: 3,
          title: "Takoyaki Babon",
          img: takoyaki,
        },
      ],
    },
  },
  {
    id: 2,
    title: "PT. Duta Nusa Prima",
    category: "Logo Design",
    img: ptdnp3,
    ProjectHeader: {
      title: "PT. Duta Nusa Prima Logo",
      publishDate: "Jan 12, 2024",
      tags: "Logo / Branding",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Logo Design 1",
        img: ptdnp1,
      },
      {
        id: 2,
        title: "Logo more styles",
        img: ptdnp2,
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
          img: poster,
        },
        {
          id: 3,
          title: "Takoyaki Babon",
          img: takoyaki,
        },
      ],
    },
  },
  {
    id: 3,
    title: "NK Medika",
    category: "Logo and Branding Design",
    img: nkm2,
    ProjectHeader: {
      title: "Apotek NK Medika Identity",
      publishDate: "Sep 3, 2023",
      tags: "Logo / Branding",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Logo",
        img: nkm,
      },
      {
        id: 2,
        title: "Design",
        img: nkm2,
      },
      {
        id: 3,
        title: "Design",
        img: nkm3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Business",
          details: "Apotek NK Medika",
        },
        {
          id: 2,
          title: "Services",
          details: "Medics",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a fun, memorable brand identity for a new takoyaki food business that appeals to young customers and stands out in the competitive food market.",
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
            "NK Medika Pharmacy is a company engaged in the health and pharmaceutical industry, which has become the primary choice for the community in fulfilling their medication and healthcare needs. Known for its excellent reputation, NK Medika Pharmacy offers a variety of quality pharmaceutical products at affordable prices along with friendly and professional service.",
        },
        {
          id: 2,
          details:
            "The brand identity includes a playful logo, menu design, and social media templates that all work together to create a cohesive and memorable brand experience.",
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
          img: poster,
        },
        {
          id: 2,
          title: "PT. Duta Nusa Prima",
          img: ptdnp3,
        },
      ],
    },
  },
  {
    id: 4,
    title: "PT. EHW",
    category: "Logo Design",
    img: ehw,
    ProjectHeader: {
      title: "Logo and Branding",
      publishDate: "Oct 15, 2021",
      tags: "Logo",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Logo1",
        img: ehw2,
      },
      {
        id: 2,
        title: "logo2",
        img: ehw3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "PT. EHW",
        },
        {
          id: 2,
          title: "Services",
          details: "Travel Comapny",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Design an intuitive and user-friendly interface for a cloud storage platform that simplifies file management and sharing.",
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
          title: "Takoyaki Babon",
          img: takoyaki,
        },
        {
          id: 6,
          title: "poster",
          img: poster,
        },
      ],
    },
  },
  {
    id: 5,
    title: "PT. MSD",
    category: "Logo",
    img: msd,
    ProjectHeader: {
      title: "Logo Design",
      publishDate: "Nov 5, 2024",
      tags: "Logo / Brand",
    },
    ProjectImages: [
      {
        id: 1,
        title: "logo",
        img: msd2,
      },
      {
        id: 2,
        title: "logo mockup",
        img: msd,
      },
       {
        id: 3,
        title: "logo",
        img: msd3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "PT. Multi Sumber Dingin",
        },
        {
          id: 2,
          title: "Services",
          details: "Air Conditioner Technology",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Modern Logo",
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
            "The logo and branding identity was designed to create meaningful connections between users with similar interests. The project involved designing and developing a complete mobile application from concept to deployment.",
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
          title: "PT. DNP",
          img: ptdnp3,
        },
        {
          id: 6,
          title: "ehw",
          img: ehw,
        },
      ],
    },
  },
  {
    id: 6,
    title: "Takoyaki Babon Brand",
    category: "Logo",
    img: takoyaki,
    ProjectHeader: {
      title: "Takoyaki Branding",
      publishDate: "Dec 10, 2021",
      tags: "Branding / Logo",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Logo",
        img: takoyaki,
      },
      {
        id: 2,
        title: "Logo",
        img: takoyaki2,
      },
       {
        id: 3,
        title: "Logo",
        img: takoyaki3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Company",
          details: "Takoyaki Babon",
        },
        {
          id: 2,
          title: "Services",
          details: "Takoyaki's Food Store",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Create a comprehensive design system inspired by Apple's aesthetic that can be used across multiple web applications to ensure consistency and efficiency.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Adobe Illustrator, Photoshop"],
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
          title: "PT. MSD",
          img: msd,
        },
        {
          id: 5,
          title: "PT. EHW",
          img: EHW,
        },
      ],
    },
  },
];
