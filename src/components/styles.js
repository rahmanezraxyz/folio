import {
  lpm,
  ipeim,
  enis,
  lordroid,
  quebec,
  bl,
} from "../images";
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    " font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const experiences = [
  {
    title: "Baccalaureat in Mathematics",
    company_name: "Pioneer High School of Monastir (LPM)",
    icon: lpm,
    iconBg: "#E6DEDD",
    date: "2015 - 2019",
    points: [
      "Pioneer High School of Monastir is a prestigious educational institution in Tunisia known for academic excellence.",
      "The school offers diverse programs and extracurricular activities to nurture students' talents and skills. ",
      "With dedicated educators, it fosters critical thinking and leadership development.",
      "The school provides a nurturing and enriching learning environment for students' holistic growth.",
    ],
  },
  {
    title: "Mathematics and Physics Preparatory Cycle",
    company_name: "Monastir Preparatory Engineering Institute (IPEIM)",
    icon: ipeim,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Monastir Preparatory Engineering Institute (IPEIM) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.",
      "With comprehensive courses and experienced faculty, IPEIM emphasizes rigorous training and practical skills development.",
      "The institute's state-of-the-art facilities create an ideal learning environment for students to excel in their engineering pursuits.",
    ],
  },
  {
    title: "Computer Engineer",
    company_name: "National Engineering School of Sfax (ENIS)",
    icon: enis,
    iconBg: "#383E56",
    date: "2021 - present",
    points: [
      "The National Engineering School of Sfax (ENIS) is a prestigious institution in Tunisia, renowned for engineering education and research",
      "With a qualified faculty and modern facilities, ENIS fosters a conducive learning environment.",
      "Emphasizing innovation and practical experience, it prepares graduates for success in engineering and technology.",
    ],
  },
  {
    title: "Intern",
    company_name: "LORDROID",
    icon: lordroid,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "During my internship at LORDROID, a mobile development company, I gained hands-on experience in developing innovative mobile applications using Android Studio and Java.",
      "This opportunity significantly enhanced my programming skills, particularly in Java, and honed my ability to write efficient and robust code.",
      "Working on diverse projects further cultivated my creativity and problem-solving abilities.",
    ],
  },
  {
    title: "Intern",
    company_name: "Quebec Training Center",
    icon: quebec,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Designed and developed an immersive language learningplatform utilizing Spring Boot microservices, Angular, andMySQL, featuring seamless multimedia integration for acomprehensive educational experience.",
      "Developed user progress tracking and interactive communitytools",
      "Implemented responsive design for consistent user experiences.",
      "Ensured data security measures for user privacy.",
    ],
  },
  {
    title: "End of Studies Internship",
    company_name: "Berger Levrault",
    icon: bl,
    iconBg: "#E6DEDD",
    date: "March 2024 - August 2024",
    points: [
      "Creating an automation process for migrating from JSON to Protobuf and from REST to gRPC, with the goal of improving the efficiency and effectiveness of data exchanges for java applications.",
      "Engagement in a software telemetry initiative aimed at enhancing the monitoring and analysis of web applications.",
      "Contributing to the deployment of a real-time data collection and analysis solution.",
    ],
  },
];


export { styles,experiences };
