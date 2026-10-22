/**
 * Centralized Technical Skills Configuration
 * 
 * Strict rule: All unverified skills default to "Learning".
 * No fake percentages or claims of mastery.
 */

export type SkillCategory = 
  | 'Programming'
  | 'Web Development'
  | 'Systems and Networking'
  | 'Cybersecurity';

export type SkillStatus = 'Learning' | 'Practiced' | 'Proficient';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  description: string;
  focusArea: string;
}

export const skillCategories: { id: 'All' | SkillCategory; label: string }[] = [
  { id: 'All', label: 'All Disciplines' },
  { id: 'Programming', label: 'Programming' },
  { id: 'Web Development', label: 'Web Development' },
  { id: 'Systems and Networking', label: 'Systems & Networking' },
  { id: 'Cybersecurity', label: 'Cybersecurity' }
];

export const skillsData: SkillItem[] = [
  // Category A: Programming
  {
    id: 'c-lang',
    name: 'C',
    category: 'Programming',
    status: 'Learning',
    description: 'Pointers, memory management, data structures, and procedural logic.',
    focusArea: 'Memory & Algorithms'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    status: 'Learning',
    description: 'Scripting, algorithm problem solving, basic automation, and OOP principles.',
    focusArea: 'Scripting & Logic'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    status: 'Learning',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, and event handling.',
    focusArea: 'Web Interactivity'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    status: 'Learning',
    description: 'Static type checking, interfaces, generics, and strict code reliability.',
    focusArea: 'Type Safety'
  },

  // Category B: Web Development
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Web Development',
    status: 'Learning',
    description: 'Semantic page structuring, accessible document outlines, and modern web standards.',
    focusArea: 'Semantic Structure'
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Web Development',
    status: 'Learning',
    description: 'Responsive layout design, Flexbox, Grid, custom properties, and transitions.',
    focusArea: 'Responsive Styling'
  },
  {
    id: 'react',
    name: 'React',
    category: 'Web Development',
    status: 'Learning',
    description: 'Component lifecycles, custom hooks, state management, and declarative UIs.',
    focusArea: 'Component Architecture'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Web Development',
    status: 'Learning',
    description: 'App Router architecture, server/client component boundaries, and Vercel workflows.',
    focusArea: 'Full-Stack Framework'
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'Web Development',
    status: 'Learning',
    description: 'Utility-first styling, design system tokens, responsive variants, and dark themes.',
    focusArea: 'Design Systems'
  },

  // Category C: Systems and Networking
  {
    id: 'linux-fundamentals',
    name: 'Linux Fundamentals',
    category: 'Systems and Networking',
    status: 'Learning',
    description: 'Directory navigation, file permissions, shell environment, and package management.',
    focusArea: 'Operating Systems'
  },
  {
    id: 'command-line',
    name: 'Command-Line Basics',
    category: 'Systems and Networking',
    status: 'Learning',
    description: 'Bash navigation, text manipulation with grep/sed/awk, and process inspection.',
    focusArea: 'Terminal Utilities'
  },
  {
    id: 'computer-architecture',
    name: 'Computer Architecture Fundamentals',
    category: 'Systems and Networking',
    status: 'Learning',
    description: 'CPU execution cycles, register files, cache hierarchies, and binary representations.',
    focusArea: 'Hardware-Software Interface'
  },
  {
    id: 'networking-fundamentals',
    name: 'Networking Fundamentals',
    category: 'Systems and Networking',
    status: 'Learning',
    description: 'TCP/IP stack, OSI model, subnetting, DNS resolution, and packet structures.',
    focusArea: 'Data Transmission'
  },
  {
    id: 'git-github',
    name: 'Git and GitHub',
    category: 'Systems and Networking',
    status: 'Learning',
    description: 'Branching strategies, commit hygiene, merge workflows, and remote repository sync.',
    focusArea: 'Version Control'
  },

  // Category D: Cybersecurity
  {
    id: 'cybersecurity-fundamentals',
    name: 'Cybersecurity Fundamentals',
    category: 'Cybersecurity',
    status: 'Learning',
    description: 'CIA triad, defense-in-depth principles, security hygiene, and attack surfaces.',
    focusArea: 'Foundational Security'
  },
  {
    id: 'networking-security',
    name: 'Networking Security Concepts',
    category: 'Cybersecurity',
    status: 'Learning',
    description: 'Firewall rules, port scanning concepts, TLS/SSL encryption, and traffic analysis.',
    focusArea: 'Network Defense'
  },
  {
    id: 'web-security',
    name: 'Web Security Fundamentals',
    category: 'Cybersecurity',
    status: 'Learning',
    description: 'OWASP Top 10 vulnerabilities (XSS, CSRF, SQL Injection) and mitigation fundamentals.',
    focusArea: 'Application Security'
  },
  {
    id: 'security-awareness',
    name: 'Security Awareness',
    category: 'Cybersecurity',
    status: 'Learning',
    description: 'Phishing detection, credential management, least privilege, and social engineering risks.',
    focusArea: 'Operational Security'
  },
  {
    id: 'threat-modeling',
    name: 'Basic Threat Modeling Concepts',
    category: 'Cybersecurity',
    status: 'Learning',
    description: 'Identifying assets, mapping attack vectors, and conceptual STRIDE methodologies.',
    focusArea: 'Risk Assessment'
  }
];
