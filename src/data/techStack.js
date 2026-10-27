import {
  // Lenguajes
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,

  // Frontend
  SiHtml5,
  SiCss3,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiNextdotjs,
  SiAngular,
  SiLaravel,
  SiNuxtdotjs,
  SiAstro,

  // Backend
  SiNodedotjs,
  SiNestjs,
  SiFastapi,
  SiCodeigniter,
  SiSpringboot,

  // Bases de datos
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,

  // Cloud / DevOps
  SiDocker,
  SiGooglecloud,
  SiLinux,
  SiGithubactions,

  // Control de versiones
  SiGit,
  SiGithub,
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

  // IA
  SiClaude,
  SiOpenai,
} from "react-icons/si";
import { TbFileSearch, TbPlugConnected, TbVectorTriangle } from "react-icons/tb";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Orden en que se muestran los grupos; las etiquetas viven en translations (skills.categories)
export const techCategories = [
  "ai",
  "languages",
  "frontend",
  "backend",
  "databases",
  "cloud",
  "mobile",
  "versionControl",
  "testing",
  "design",
  "management",
];

// `color` es el color de marca que aparece al pasar el cursor; sin color usa el acento.
// `name` puede ser { es, en } cuando no es un nombre propio.
export const techStack = [
  { name: "Claude / Claude Code", Icon: SiClaude, category: "ai", color: "#D97757" },
  { name: "OpenAI Codex", Icon: SiOpenai, category: "ai" },
  { name: "OpenAI API", Icon: SiOpenai, category: "ai" },
  { name: "OpenAI Whisper", Icon: SiOpenai, category: "ai" },
  { name: "MCP (Model Context Protocol)", Icon: TbPlugConnected, category: "ai" },
  { name: "RAG", Icon: TbFileSearch, category: "ai" },
  { name: { es: "Bases de datos vectoriales", en: "Vector databases" }, Icon: TbVectorTriangle, category: "ai" },

  { name: "JavaScript (ECMAScript)", Icon: SiJavascript, category: "languages", color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, category: "languages", color: "#3178C6" },
  { name: "Python", Icon: SiPython, category: "languages", color: "#3776AB" },
  { name: "PHP", Icon: SiPhp, category: "languages", color: "#777BB4" },
  { name: "Java", Icon: FaJava, category: "languages", color: "#E76F00" },

  { name: "HTML5", Icon: SiHtml5, category: "frontend", color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, category: "frontend", color: "#1572B6" },
  { name: "React", Icon: SiReact, category: "frontend", color: "#61DAFB" },
  { name: "Vue.js", Icon: SiVuedotjs, category: "frontend", color: "#4FC08D" },
  { name: "Vite", Icon: SiVite, category: "frontend", color: "#646CFF" },
  { name: "Next.js", Icon: SiNextdotjs, category: "frontend" },
  { name: "Nuxt.js", Icon: SiNuxtdotjs, category: "frontend", color: "#00DC82" },
  { name: "Angular", Icon: SiAngular, category: "frontend", color: "#DD0031" },
  { name: "Astro", Icon: SiAstro, category: "frontend", color: "#BC52EE" },

  { name: "React Native", Icon: SiReact, category: "mobile", color: "#61DAFB" },

  { name: "Node.js", Icon: SiNodedotjs, category: "backend", color: "#5FA04E" },
  { name: "NestJS", Icon: SiNestjs, category: "backend", color: "#E0234E" },
  { name: "FastAPI", Icon: SiFastapi, category: "backend", color: "#009688" },
  { name: "CodeIgniter", Icon: SiCodeigniter, category: "backend", color: "#EF4223" },
  { name: "Laravel", Icon: SiLaravel, category: "backend", color: "#FF2D20" },
  { name: "Spring Boot", Icon: SiSpringboot, category: "backend", color: "#6DB33F" },

  { name: "MySQL", Icon: SiMysql, category: "databases", color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, category: "databases", color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, category: "databases", color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, category: "databases", color: "#FFCA28" },

  { name: "AWS", Icon: FaAws, category: "cloud", color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, category: "cloud", color: "#2496ED" },
  { name: "Google Cloud", Icon: SiGooglecloud, category: "cloud", color: "#4285F4" },
  { name: "Linux", Icon: SiLinux, category: "cloud", color: "#FCC624" },
  { name: "GitHub Actions", Icon: SiGithubactions, category: "cloud", color: "#2088FF" },

  { name: "Git", Icon: SiGit, category: "versionControl", color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, category: "versionControl" },
  { name: "Azure", Icon: VscAzure, category: "versionControl", color: "#0078D4" },
  { name: "GitLab", Icon: SiGitlab, category: "versionControl", color: "#FC6D26" },

  { name: "Jest", Icon: SiJest, category: "testing", color: "#C21325" },
  { name: "Selenium", Icon: SiSelenium, category: "testing", color: "#43B02A" },
  { name: "PHPUnit", Icon: SiPhp, category: "testing", color: "#777BB4" },

  { name: "Figma", Icon: SiFigma, category: "design", color: "#F24E1E" },
  { name: "Adobe XD", Icon: SiAdobexd, category: "design", color: "#FF61F6" },

  { name: "Jira", Icon: SiJira, category: "management", color: "#0052CC" },
  { name: "Trello", Icon: SiTrello, category: "management", color: "#0079BF" },
  { name: "Asana", Icon: SiAsana, category: "management", color: "#F06A6A" },
];
