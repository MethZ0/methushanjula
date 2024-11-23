import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

export const HERO_CONTENT = `I am a committed Software Engineering undergraduate seeking a challenging and interesting profession that allows
me to work with leading-edge technologies. My goal is to contribute to innovative projects while continuously
learning, refining my skills, and aligning my growth with the company’s goals and objectives`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Aura Fitness : Gym Management System",
    image: project1,
    description:
      "The Aura Fitness Gym Management System is a web application designed for efficient gym operations. It includes features such as membership management, customer tracking, and inventory control, all within an intuitive and user-friendly interface.",
    technologies: ["React", "Taildwind", "JS", "Node.js","Express", "MongoDB"],
  },
  {
    title: "TaskMaster : Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Android Studio", "Kotlin"],
  },
  {
    title: "Methush Anjula : Personal Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Node.js", "Framer Motion"],
  },
  {
    title: "EXAMME.NET : Online Examination System for Employees",
    image: project4,
    description:
      "EXAMME.NET - Online Examination System for Employees is a web-based platform designed to streamline employee assessments. It features customizable exams, real-time result tracking, and secure exam management, enabling organizations to efficiently evaluate employee skills and performance.",
    technologies: ["PHP", "CSS","XAMPP", "Boostrap",],
  },

  {
    title: "HungryHub : Online Food Ordering System",
    image: project5,
    description:
      "An online food ordering system that allows customers to browse menus, place orders, and track deliveries from local restaurants. It features payment integration and real-time updates, providing a seamless food ordering experience.",
    technologies: ["Java", "MySql", "Eclipse", "Boostrap"],
  }
];

export const CONTACT = {
  address: "Chilaw, Sri Lanka ",
  phoneNo: "+94 76 6696 480 ",
  email: "methushanjula@gmail.com",
};
