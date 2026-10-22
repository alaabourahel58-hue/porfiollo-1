/**
 * Centralized Projects Configuration
 * 
 * Strict rule: Default projects are explicitly marked as demo or learning projects.
 * No fake repositories or non-existent live demo links.
 */

export type ProjectCategory = 'Web Development' | 'Programming' | 'Cybersecurity';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  status: 'Demo project' | 'Learning project' | 'Educational demonstration';
  githubUrl?: string; // Only populated if a genuine repository exists
  liveUrl?: string;   // Only populated if a genuine deployment exists
  architectureDetails: {
    purpose: string;
    keyConcepts: string[];
    technicalHighlights: string[];
    fileStructurePreview: string[];
  };
  themeColor: 'violet' | 'cyan' | 'emerald';
}

export const projectCategories: { id: 'All' | ProjectCategory; label: string }[] = [
  { id: 'All', label: 'All Projects' },
  { id: 'Web Development', label: 'Web Development' },
  { id: 'Programming', label: 'Programming' },
  { id: 'Cybersecurity', label: 'Cybersecurity' }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A responsive portfolio website designed to present personal information, technical interests, and example projects in a clean and accessible interface.',
    longDescription:
      'Built as a modular, single-page application utilizing modern frontend tooling. Focuses on accessibility, responsive design systems, theme transitions, and clean code separation through centralized configuration.',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'Demo project',
    // GitHub and Live URLs are left undefined or empty per instructions
    githubUrl: undefined,
    liveUrl: undefined,
    themeColor: 'violet',
    architectureDetails: {
      purpose: 'Provide a clean, performant, and easily customizable digital portfolio.',
      keyConcepts: [
        'Centralized configuration pattern for zero-duplication editing',
        'Responsive layout systems across mobile, tablet, and desktop',
        'Dark and light theme support with persistent local storage',
        'Accessible semantic HTML with visible keyboard focus states'
      ],
      technicalHighlights: [
        'Modular React component hierarchy',
        'Utility-first styling with custom dark-mode token palette',
        'Strict TypeScript interfaces for all configuration data',
        'Vite-powered development and production build'
      ],
      fileStructurePreview: [
        'src/config/profile.ts',
        'src/components/Navbar.tsx',
        'src/components/Hero.tsx',
        'src/components/Projects.tsx'
      ]
    }
  },
  {
    id: 'programming-practice',
    title: 'Programming Practice Collection',
    description:
      'A collection of beginner programming exercises covering algorithms, conditions, loops, functions, and basic data structures.',
    longDescription:
      'A structured study repository documenting algorithmic thinking and problem-solving fundamentals. Covers memory mechanics in C and modular scripting logic in Python.',
    category: 'Programming',
    technologies: ['C', 'Python'],
    status: 'Learning project',
    githubUrl: undefined,
    liveUrl: undefined,
    themeColor: 'cyan',
    architectureDetails: {
      purpose: 'Solidify foundational computer science concepts through repeated hands-on problem solving.',
      keyConcepts: [
        'Pointer arithmetic, dynamic memory allocation (malloc/free) in C',
        'Control flow, recursive algorithms, and time complexity basics',
        'Fundamental linear data structures (linked lists, stacks, queues)',
        'Unit testing functions and writing clean modular code'
      ],
      technicalHighlights: [
        'Comprehensive commented problem solutions',
        'Comparative implementations between procedural C and high-level Python',
        'Algorithmic complexity notes (Big-O notation)',
        'Organized directory structure by topic and difficulty'
      ],
      fileStructurePreview: [
        'src/c_foundations/pointers/',
        'src/c_foundations/data_structures/',
        'src/python_scripts/algorithms/',
        'tests/runner.sh'
      ]
    }
  },
  {
    id: 'cybersecurity-lab',
    title: 'Cybersecurity Learning Lab',
    description:
      'A conceptual learning project documenting basic networking concepts, security terminology, and defensive cybersecurity exercises in a controlled educational environment.',
    longDescription:
      'Educational laboratory notes and test scenarios exploring virtual network topologies, packet inspection, defensive host hardening, and core security threat modeling.',
    category: 'Cybersecurity',
    technologies: ['Linux', 'Networking fundamentals', 'Documentation'],
    status: 'Educational demonstration',
    githubUrl: undefined,
    liveUrl: undefined,
    themeColor: 'emerald',
    architectureDetails: {
      purpose: 'Explore fundamental security principles and network mechanics within an isolated virtual lab environment.',
      keyConcepts: [
        'TCP/IP stack analysis using Wireshark and tcpdump in sandbox networks',
        'Linux host firewall configuration (iptables/UFW)',
        'Understanding OWASP Web Application security vulnerability vectors',
        'Documenting risk assessments and structured threat modeling'
      ],
      technicalHighlights: [
        'Structured lab journal with reproducible testing steps',
        'Network packet flow diagrams and port protocol maps',
        'Educational security checklist for personal web applications',
        'Ethical testing guidelines strictly enforced'
      ],
      fileStructurePreview: [
        'docs/network_protocols.md',
        'docs/linux_hardening_guide.md',
        'labs/sandbox_firewall_rules.sh',
        'reports/threat_model_template.md'
      ]
    }
  }
];
