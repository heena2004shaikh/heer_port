import project1 from "../assets/projects/project-1.webp";

import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import blog1 from "../assets/projects/blog1.webp";
import blog2 from "../assets/projects/blog2.webp";



export const HERO_CONTENT = `With a knack for both the front end and back end, I weave seamless digital experiences from pixel-perfect design to robust server-side logic. But I don’t just stop at building great software — I turn data into actionable insights that drive success. Through innovative lead generation strategies and meticulous data analysis, I ensure businesses not only reach their audience but captivate them. Let’s transform potential into performance!`;
export const ABOUT_TEXT = `Whether you're looking to brainstorm, collaborate, or get technical advice, I’m here to help your projects reach new heights. Let's connect and make something extraordinary happen!`;
export const iconClass = ["h-12 w-12 hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration:900"];
export const bggradient = ["absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"]
export const EXPERIENCES = [
  
  {
    year: "2025 - 2025",
    role: "Software Developer Intern",
    company: "Akrypt Technology",
    description: `where I am responsible for building and maintaining responsive, user-friendly web applications using modern frontend technologies. My work involves converting Figma and UI designs into interactive React components, implementing dynamic routing with React Router, and integrating REST APIs using Axios. I regularly use Tailwind CSS for styling and manage application state through Context API and Redux, depending on the complexity.`,
    technologies: ["Redux", "Tailwind Css", "MS SQL Server", "React"],
  },
  {
    year: "2023 - 2024",
    role: "Senior Data Research Executive Executive",
    company: "Bizprospex",
    description: `Drive business growth through innovative lead generation, engaging in inbound & outbound calling, LinkedIn lead generation, and crafting compelling cold emails. Build strong customer relationships, manage sales pipelines, and collaborate with teams to exceed sales targets.`,
    technologies: ["Linkedin Sales Navigator", "Cold Calling", "apollo.io", "Zoominfo"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer",
    company: "Free Lencer",
    description: `I am working as a Freelance Web Developer, where I design and develop responsive and visually appealing websites tailored to client requirements. I work independently with clients to understand their business needs and deliver customized web solutions using HTML, CSS, JavaScript, React, and Tailwind CSS. My projects range from personal portfolios and business landing pages to fully functional dynamic websites. I handle the complete development process—from wireframing and UI design to deployment and maintenance.I stay up to date with modern web trends and continuously improve my skills to offer the best solutions to clients.`,
    technologies: ["Redux", "Tailwind Css", "MS SQL Server", "React"],
  },


];

export const EDUCATION = [
  {
    year: "2021 - 2025",
    role: "Bach. of Engineering",
    university: "Thakur Shivkumarsingh Memorial Engineering College",
    description: `A comprehensive program focused on software development, algorithms, data structures, computer networks, and system design. Equipped with strong analytical and problem-solving skills, ready to tackle real-world technological challenges.`,
  },
  {
    year: "2019 - 2021",
    role: "HSC & SSC",
    university: "Central Board of Secondary Education",
    description: `Completed a well-rounded curriculum with a strong focus on science and mathematics, laying a solid foundation for advanced studies in engineering and technology.`,
  },
];

export const CERTIFICATIONS = [
  {
    year: "2023 - 2024",
    role: "Certified Java Developer",
    university: "Udemy Learning",
    description: `Demonstrated proficiency in Java programming through rigorous coursework and hands-on projects, covering topics such as OOP, data structures, and software design patterns. Recognized for excellent coding skills and problem-solving abilities.`,
  },
  {
    year: "2024 - 2025",
    role: "Full Stack Java Developer",
    university: "Seven Mentor, Pune",
    description: `Gained expertise in both front-end and back-end development, including technologies such as HTML, CSS, JavaScript, and Node.js.Proficient in creating dynamic web applications, managing databases, and ensuring seamless user experiences.`,
  },
]

export const PROJECTS = [
  {
    title: "Quiz App",
    image: project1,
    description:
      "Taking quizzes should be fun and insightful — not boring or unstructured. That’s why I built a full-stack Quiz Application with user authentication, role-based access (Admin & User), test creation, submission tracking, and real-time results. This project combines modern frontend technologies with a robust Java backend to deliver a seamless quiz experience.",
    technologies: ["React.js", "TailwindCSS", "Spring Boot", "JWT", "MySQL", "Spring Security", "React Router"],
    link: "https://github.com/maddy046/CodeClauseInternship_PasswordGenerator"
  },
 
  {
    title: "AI Trip Planner",
    image: project2,
    description:
      "Planning the perfect trip should be exciting — not overwhelming. That’s why I built an intelligent and user-friendly AI Trip Planner that generates personalized itineraries with the help of Google Gemini AI. This project combines powerful tools and modern UI frameworks to deliver seamless travel planning right in your browser.",
    technologies: ["React.js", " Tailwind CSS", "Firebase", "Gemini AI", "React Router"],
    link: "https://github.com/maddy046/PortfolioWebsite"
  },
  {
    title: "E-Learning Website",  
    image: project3,
    description:
      "Built an e-learning platform using HTML, CSS, and JavaScript for the front end, and integrated with backend technologies to provide interactive courses and assessments.",
    technologies: ["ReactJS", "Springboot", "HTML5", "mySQL"],
    link:"https://github.com/maddy046/CourseWebsite"
  },


];

export const CONTACT = {
  address: "Burhanpunr Madhaya Pradesh ",
  phoneNo: "91 8085644502 ",
  email: "heena2004shaikh@gmail.com",
};

export const SOCIAL_MEDIA = [
  {
    name: "Github",
    icon: "fa-github",
    url: "https://github.com/heena2004shaikh",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/heena-shaikh-556731353/",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/maddy01432",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    url: "https://www.twitter.com/your-username",
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/profile.php?id=100007339538234",
  },
]

export const BLOGS = [
  {
    title: "RESTful APIs Explained: A Developer's Road Map from Confusion to Confidence",
    date: "December 15 2024",
    content: "Discover how RESTful APIs power modern web applications. Learn the core principles, best practices, and implementation techniques for building robust API services.",
    author: "Maddy",
    image : blog1

  },
  {
    title: "From Zero to Hero: Mastering Email.js for Modern Web Apps",
    date: "January 5 2025",
    content: "Master Email.js integration in your web projects. Learn to create dynamic contact forms and send emails directly from JavaScript without server setup.",
    author: "Maddy",
    image: blog2
    
  },
  
] 