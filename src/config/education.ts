/**
 * Centralized Education and Certifications Configuration
 * 
 * Strict rule: Does not invent a real institution, graduation year, or credentials.
 * Provides a clean interface for the real owner to update when ready.
 */

export interface CertificationItem {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface EducationConfig {
  institution: string;
  program: string;
  level: string;
  description: string;
  status: string;
  isDemonstration: boolean;
  coreSubjects: string[];
  certifications: CertificationItem[];
  emptyCertificationsNotice: string;
}

export const educationConfig: EducationConfig = {
  institution: "University — To be specified",
  program: "Computer Science",
  level: "Undergraduate studies — Demonstration profile",
  description:
    "Studying computer science fundamentals, programming, algorithms, and computer systems.",
  status: "Details to be confirmed",
  isDemonstration: true,
  coreSubjects: [
    "Introduction to Computer Science & Algorithms",
    "Computer Architecture & Systems",
    "Data Structures & Problem Solving",
    "Operating Systems Fundamentals",
    "Computer Networking Fundamentals",
    "Discrete Mathematics"
  ],
  // Real certifications can be appended here once earned and verified
  certifications: [],
  emptyCertificationsNotice: "No verified certifications have been added yet."
};
