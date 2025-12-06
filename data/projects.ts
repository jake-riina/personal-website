export type Discipline = "Product Design" | "UX/UI" | "Engineering" | "Business / Strategy";
export type ProjectType = "Physical Product" | "App / Software" | "Research" | "Startup / Concept";
export type Skill = "CAD" | "Prototyping" | "Figma" | "User Research" | "Manufacturing" | "Data";
export type Context = "Academic" | "Internship" | "Startup";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  disciplines: Discipline[];
  projectTypes: ProjectType[];
  skills: Skill[];
  contexts: Context[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "HandsOn Robotic Surgery Training Platform",
    description: "A comprehensive training platform for robotic surgery procedures. Designed to provide hands-on experience and skill development for medical professionals.",
    image: "/HandsOnProjectCover.png",
    disciplines: ["Engineering", "Product Design", "UX/UI"],
    projectTypes: ["App / Software"],
    skills: ["CAD"],
    contexts: ["Academic"],
    link: "/projects/handson"
  },
  {
    id: "2",
    title: "TrustGate: AI Gateway",
    description: "AI-first security platform providing centralized access to hundreds of AI models with robust control, enabling faster deployment with less friction for global scaling.",
    image: "/TrustGateCover.png",
    disciplines: ["Engineering", "UX/UI", "Business / Strategy"],
    projectTypes: ["App / Software"],
    skills: ["Figma", "User Research", "Data"],
    contexts: ["Startup", "Internship"],
    link: "/projects/trustgate"
  },
  {
    id: "3",
    title: "Hangover Hero Mobile App",
    description: "A mobile gaming application designed to provide entertainment and engagement through an interactive side-scrolling experience. Features vibrant visuals and engaging gameplay mechanics.",
    image: "/HHCover.jpg",
    disciplines: ["UX/UI", "Engineering", "Product Design"],
    projectTypes: ["App / Software"],
    skills: ["Figma", "Prototyping", "User Research"],
    contexts: ["Startup"],
    link: "/projects/hangover-hero"
  },
  {
    id: "4",
    title: "E-commerce Platform Strategy",
    description: "Developed business strategy and user experience design for a new e-commerce platform targeting small businesses. Included market research and competitive analysis.",
    image: "/placeholder-project-4.jpg",
    disciplines: ["Business / Strategy", "UX/UI"],
    projectTypes: ["Startup / Concept"],
    skills: ["Figma", "User Research", "Data"],
    contexts: ["Startup"],
    link: "#"
  },
  {
    id: "5",
    title: "Ergonomic Office Chair Design",
    description: "Designed and prototyped an ergonomic office chair with adjustable lumbar support. Used CAD modeling and 3D printing for rapid iteration.",
    image: "/placeholder-project-5.jpg",
    disciplines: ["Product Design"],
    projectTypes: ["Physical Product"],
    skills: ["CAD", "Prototyping", "Manufacturing"],
    contexts: ["Academic"],
    link: "#"
  },
  {
    id: "6",
    title: "Healthcare Data Analytics Tool",
    description: "Built a web application for healthcare providers to visualize patient data and identify trends. Focused on privacy and data security.",
    image: "/placeholder-project-6.jpg",
    disciplines: ["Engineering", "UX/UI"],
    projectTypes: ["App / Software", "Research"],
    skills: ["Figma", "Data", "User Research"],
    contexts: ["Internship"],
    link: "#"
  }
];

