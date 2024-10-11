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
    date: "Feb. 2024 - Jun. 2024",
      points: [
          "- Contributed to the enhancement of a three-layer payment host gateway for Ingenico's payment solution integration.",
          "- Improved WebSocket features by applying SOLID principles, design patterns, and leveraging the latest C++ features.",
          "- Managed the development cycle by using SVN for the version control and the CI/CD processes using Bamboo.",
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
      "- Optimization of NextVision, an application for seismic data interpretation using parallel CPU-GPU graph algorithms.",
      "- Developed a hybrid CPU-GPU algorithm, resulting in a significant\n" +
      "execution time improvement of 5.39x.",
      "- Created a Docker environment to ensure portability and simplify application deployment.",
    ],
  },
  {
    title: "Master Degree in Computer Engineering",
    company_name: "National School of Engineers of Sfax (ENIS)",
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
      "- Developed a web-based platform for online training tailored to\n" +
      "High Performance Computing (HPC) courses.",
      "- Created an AWS Lambda function to offer solutions tailored to client requirements and budget.",
      "- Developed a dashboard for super administrators and managers.",
      "- Monitored user progress in their courses.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Djagora FABLAB",
    icon: dg,
    iconBg: "#E6DEDD",
    date: "Jul. 2022 - Aug. 2022",
    points: [
      "- During my internship at Djagora FABLAB, I developed a mobile application for patient monitoring.",
      "-  Gained hands-on experience in developing innovative mobile applications using Android Studio and Java .",
      "- This opportunity significantly enhanced my programming skills, particularly in Java, and honed my ability to write efficient and robust code.",

    ],
  },
  {
    title: "Mathematics and Physics Preparatory Cycle",
    company_name: "Sfax Preparatory Engineering Institute (IPEIS)",
    icon: ipeis,
    iconBg: "#383E56",
    date: "Sep. 2019 - Jun. 2021",
    points: [
      "Sfax Preparatory Engineering Institute (IPEIS) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.",
      "With comprehensive courses and experienced faculty, IPEIS emphasizes rigorous training and practical skills development.",
      "The institute's state-of-the-art facilities create an ideal learning environment for students to excel in their engineering pursuits.",
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
