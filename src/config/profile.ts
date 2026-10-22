/**
 * Centralized Personal Profile Configuration
 * 
 * Edit this single file to personalize the portfolio.
 * All components dynamically consume this data.
 */

export interface Language {
  name: string;
  proficiency: string;
  isNative?: boolean;
}

export interface ProfileCard {
  title: string;
  description: string;
  iconName: 'focus' | 'interests' | 'philosophy' | 'goal';
}

export interface ProfileConfig {
  fullName: string;
  initials: string;
  professionalTitle: string;
  roleBadge: string;
  shortIntro: string;
  extendedBiography: string[];
  location: {
    city: string;
    country: string;
    isDemo: boolean;
  };
  contact: {
    email: string;
    isPlaceholderEmail: boolean;
  };
  social: {
    github: string;
    linkedin: string;
    isPlaceholder: boolean;
  };
  status: {
    label: string;
    isAvailableForHire: boolean;
  };
  cv: {
    filePath: string;
    isConfigured: boolean;
  };
  interests: string[];
  languages: Language[];
  aboutCards: ProfileCard[];
  meta: {
    siteTitle: string;
    metaDescription: string;
    canonicalPlaceholder: string;
  };
}

export const profileConfig: ProfileConfig = {
  fullName: "Alex Morgan",
  initials: "AM",
  professionalTitle: "Computer Science Student | Aspiring Software Developer",
  roleBadge: "COMPUTER SCIENCE STUDENT",
  shortIntro:
    "Hello, I'm Alex Morgan, a computer science student passionate about technology, software development, and digital innovation. I'm continuously learning new skills, exploring modern web technologies, and building personal projects to improve my technical abilities.",
  extendedBiography: [
    "I'm a computer science student interested in understanding how technology works and how software can solve real-world problems. My learning journey includes programming fundamentals, web development, computer systems, networking, and cybersecurity.",
    "I believe in continuous learning, experimentation, and building practical projects to transform theoretical knowledge into useful digital experiences.",
    "My current goal is to strengthen my programming skills, develop a solid technical foundation, and gradually specialize in areas such as software engineering and cybersecurity."
  ],
  location: {
    city: "Oran",
    country: "Algeria",
    isDemo: true // Set to false when updated with real general location
  },
  contact: {
    email: "hello@example.com",
    isPlaceholderEmail: true // Set to false when replaced with a verified inbox
  },
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    isPlaceholder: true // Set to false when personalized
  },
  status: {
    label: "Currently learning and building personal projects.",
    isAvailableForHire: false
  },
  cv: {
    filePath: "/cv.pdf",
    isConfigured: false // Set to true once a real public/cv.pdf file is added
  },
  interests: [
    "Software development",
    "Frontend development",
    "Programming and algorithms",
    "Computer systems",
    "Computer networking",
    "Cybersecurity",
    "Learning new technologies",
    "UI/UX design"
  ],
  languages: [
    { name: "Arabic", proficiency: "Native proficiency", isNative: true },
    { name: "French", proficiency: "Intermediate proficiency" },
    { name: "English", proficiency: "Intermediate proficiency" }
  ],
  aboutCards: [
    {
      title: "Current Focus",
      description: "Building programming fundamentals and exploring modern web technologies.",
      iconName: "focus"
    },
    {
      title: "Technical Interests",
      description: "Software development, computer systems, networking, and cybersecurity.",
      iconName: "interests"
    },
    {
      title: "Learning Philosophy",
      description: "Learn the fundamentals, practice consistently, and improve through real projects.",
      iconName: "philosophy"
    },
    {
      title: "Long-Term Goal",
      description: "Develop strong engineering skills and explore a specialization in cybersecurity.",
      iconName: "goal"
    }
  ],
  meta: {
    siteTitle: "Alex Morgan | Computer Science Student & Developer",
    metaDescription:
      "Explore the learning journey, technical interests, example projects, and skills of Alex Morgan, a computer science student interested in software development and cybersecurity.",
    canonicalPlaceholder: "https://portfolio-alex-morgan.vercel.app"
  }
};
