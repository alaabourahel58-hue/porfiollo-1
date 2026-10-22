/**
 * Centralized Learning Journey Configuration
 * 
 * Strict rule: Communicates ongoing learning without fabricating completion dates
 * or professional claims.
 */

export interface LearningStage {
  id: string;
  stageNumber: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Active Exploration' | 'Core Focus';
  keyMilestones: string[];
  currentSubjects: string[];
  reflection: string;
}

export const learningJourneyData: LearningStage[] = [
  {
    id: 'stage-1',
    stageNumber: '01',
    title: 'Foundations',
    description:
      'Learning programming fundamentals, logical reasoning, algorithms, and computer science concepts.',
    status: 'Core Focus',
    keyMilestones: [
      'Imperative programming logic and variables',
      'Memory addresses, pointers, and manual memory management in C',
      'Fundamental algorithm analysis (sorting, searching, recursion)',
      'Basic data structures: arrays, linked lists, stacks'
    ],
    currentSubjects: [
      'Problem solving on algorithmic platforms',
      'Data structure implementations from scratch',
      'Discrete mathematics and boolean logic basics'
    ],
    reflection:
      'Building deep intuition for how computers execute instructions and manage memory under the hood.'
  },
  {
    id: 'stage-2',
    stageNumber: '02',
    title: 'Building',
    description:
      'Practicing through small projects and exploring web development, development tools, and version control.',
    status: 'In Progress',
    keyMilestones: [
      'Component-driven frontend design with React',
      'Modern CSS layouts, responsive grids, and design systems',
      'Git workflows, commit discipline, and GitHub collaboration basics',
      'Interacting with RESTful endpoints and managing client state'
    ],
    currentSubjects: [
      'TypeScript strict typing patterns',
      'Accessible web practices and semantic HTML',
      'Next.js framework exploration'
    ],
    reflection:
      'Translating abstract computer science principles into tangible, usable user interfaces.'
  },
  {
    id: 'stage-3',
    stageNumber: '03',
    title: 'Exploring Cybersecurity',
    description:
      'Studying networking fundamentals, operating systems, and the basic principles of defensive security.',
    status: 'Active Exploration',
    keyMilestones: [
      'OSI and TCP/IP model layer mechanics',
      'Linux system administration and shell command fluency',
      'Core security principles: confidentiality, integrity, availability',
      'Web application vulnerabilities and secure coding awareness'
    ],
    currentSubjects: [
      'Packet inspection and network protocol analysis in lab sandboxes',
      'System permissions and least-privilege concepts',
      'Introductory defensive security practices'
    ],
    reflection:
      'Understanding how systems communicate across networks and learning how to protect systems proactively.'
  }
];
