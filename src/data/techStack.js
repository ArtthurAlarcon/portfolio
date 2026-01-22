import {
  // Lenguajes
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
//   SiJava,

  // Frontend
  SiHtml5,
  SiCss3,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiNextdotjs,
  SiAngular,
  SiLaravel,

  // Mobile
  SiReact as SiReactNative, // reutilizamos React icon para React Native

  // Backend
  SiNodedotjs,
  SiFastapi,
  SiCodeigniter,
  SiSpringboot,

  // Bases de datos
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,

  // Cloud / DevOps
//   SiAmazonaws,
  SiDocker,
  SiGooglecloud,
  SiLinux,
  SiGithubactions,

  // Control de versiones
  SiGit,
  SiGithub,
  SiIcloud ,
  SiGitlab,

  // Testing
  SiJest,
  SiSelenium,

  // UI/UX
  SiFigma,
  SiAdobexd,

  // Project Management
  SiJira,
  SiTrello,
  SiAsana,
} from "react-icons/si";

import { FaAws, FaJava  } from "react-icons/fa"; // ✅ AWS aquí

export const techStack = [
  // Lenguajes
  { name: "JavaScript (ECMAScript)", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "PHP", Icon: SiPhp },
  { name: "Java", Icon: FaJava  },

  // Frontend
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "React", Icon: SiReact },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Vite", Icon: SiVite },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Angular", Icon: SiAngular },

  // Mobile
  { name: "React Native", Icon: SiReactNative },

  // Backend
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "CodeIgniter", Icon: SiCodeigniter },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Spring Boot", Icon: SiSpringboot },

  // Bases de datos
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firebase", Icon: SiFirebase },

  // Nube y CI/CD
  { name: "AWS", Icon: FaAws },
  { name: "Docker", Icon: SiDocker },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Linux", Icon: SiLinux },
  { name: "GitHub Actions", Icon: SiGithubactions },

  // Control de versiones y repositorios
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Azure", Icon: SiIcloud  },
  { name: "GitLab", Icon: SiGitlab },

  // Testing
  { name: "Jest", Icon: SiJest },
  { name: "Selenium", Icon: SiSelenium },
  { name: "PHPUnit", Icon: SiPhp  },

  // UI/UX
  { name: "Figma", Icon: SiFigma },
  { name: "Adobe XD", Icon: SiAdobexd },

  // Gestión de proyectos
  { name: "Jira", Icon: SiJira },
  { name: "Trello", Icon: SiTrello },
  { name: "Asana", Icon: SiAsana },
];
