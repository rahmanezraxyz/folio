import {
  lps,
  enis,
  dg,
  rd, ipeis, tl,
} from "../images";
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    " lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    " font-black ",
  sectionSubText:
    "sm:text-[18px] text-[14px]  tracking-wider ",
};

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Telnet",
    icon: tl,
    iconBg: "#E6DEDD",
    date: "Jul. 2024 - Present",
      points: [
          "- Developed features handling timeout and error conditions, improving transaction reliability.",
          "- Optimized Ingenico’s payment solution, reducing lag and improving uptime by 15% across 10 functionalities.",
          "- Refactored legacy code using SOLID principles, reducing technical debt by 20% and maintenance time by 25%.",
          "- Migrated 20+ projects from SVN to Bitbucket, automating scripts to streamline deployment.",
          "- Collaborated with a Scrum team using Jira, achieving an average sprint completion rate of 95%.",
      ],  
  },
  {
    title: "End of Studies Internship",
    company_name: "ReDX (Revolutionary Digital\n" +
        "Transformation Technologies)",
    icon: rd,
    iconBg: "#E6DEDD",
    date: "Feb. 2024 - Jun. 2024",
    points: [
      "- Optimized NextVision, an application for interpreting seismic data using parallel programming.",
      "- Analyzed existing algorithms in NextVision.",
      "- Created a Docker environment to reduce setup time by 50%, for seamless deployment.",
      "- Developed a hybrid CPU-GPU algorithm, Improving execution time by 5.39x.",
      "- Tested and benchmarked to confirm performance enhancements.",
    ],
  },
  {
    title: "Master Degree in Computer Engineering",
    company_name: "National School of Engineers of Sfax (ENIS) | GPA(3.63/4.0)",
    icon: enis,
    iconBg: "#383E56",
    date: "Sep. 2021 – Jun. 2024",
    points: [
      "Master's program focused on advanced topics in computer engineering.",
      "Gained practical experience in software development, high-performance computing, and research projects.",
      "Collaborated on various academic and industry-led projects, achieving technical proficiency in a range of technologies.",
    ],
  },
  {
    title: "DevOps Engineer Intern",
    company_name:  "ReDX (Revolutionary Digital\n" +
        "Transformation Technologies)",
    icon: rd,
    iconBg: "#E6DEDD",
    date: "Jun. 2023 - Aug. 2023",
    points: [
      "- Developed a Cloud-Based HPC Training Platform with Advanced Features and Enhanced User Experience.",
      "- Designed and implemented dashboards for six distinct roles, each with customized KPIs and departmental metrics.",
      "- Secured communication between backend and frontend using JWT authentication.",
      "- Created features for course progress tracking and automated certification issuance.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Djagora FABLAB",
    icon: dg,
    iconBg: "#E6DEDD",
    date: "Jul. 2022 - Aug. 2022",
    points: [
      "- Developed a mobile application for patient monitoring, used by over 50 patients during initial testing, improving healthcare accessibility and efficiency.",
      "- Implemented real-time visualization features for tracking patient conditions, with updates displayed within a 1-second delay.",
      "- Designed an alert system capable of sending notifications in under 5 seconds, reducing response time for critical emergencies by 40%.",

    ],
  },
  {
    title: "Mathematics and Physics Preparatory Cycle",
    company_name: "Sfax Preparatory Engineering Institute (IPEIS) | Ranked in the top 20 % In the National Exam for Entrance to Engineering Schools",
    icon: ipeis,
    iconBg: "#383E56",
    date: "Sep. 2019 - Jun. 2021",
    points: [
      "Sfax Preparatory Engineering Institute (IPEIS) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.",
      "With comprehensive courses and experienced faculty, IPEIS emphasizes rigorous training and practical skills development.",
    ],
  },
  {
    title: "Baccalaureat in Mathematics",
    company_name: "Pioneer High School of Sfax (LPS)",
    icon: lps,
    iconBg: "#E6DEDD",
    date: "Sep. 2015 - Jun. 2019",
    points: [
      "Pioneer High School of Sfax is a prestigious educational institution in Tunisia known for academic excellence.",
      "The school offers diverse programs and extracurricular activities to nurture students' talents and skills.",
      "With dedicated educators, it fosters critical thinking and leadership development.",
      "The school provides a nurturing and enriching learning environment for students' holistic growth.",
    ],
  },
];


export { styles,experiences };
