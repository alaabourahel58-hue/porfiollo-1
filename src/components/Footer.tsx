import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        theme === 'dark'
          ? 'bg-[#09090B] border-[#27272A] text-zinc-400'
          : 'bg-zinc-50 border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Personal Motto */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                {profileConfig.initials}
              </div>
              <span className="font-bold text-sm tracking-tight text-zinc-200">
                {profileConfig.fullName}
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Learning, building, and improving every day.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 text-xs font-medium" aria-label="Footer Navigation">
            <a href="#home" className="hover:text-zinc-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-zinc-200 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">Projects</a>
            <a href="#learning" className="hover:text-zinc-200 transition-colors">Learning</a>
            <a href="#education" className="hover:text-zinc-200 transition-colors">Education</a>
            <a href="#contact" className="hover:text-zinc-200 transition-colors">Contact</a>
          </nav>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Note & Attribution */}
        <div className="pt-6 border-t border-zinc-800/60 dark:border-zinc-800 text-center md:flex md:items-center md:justify-between text-[11px] text-zinc-500 space-y-2 md:space-y-0">
          <div>
            © {currentYear} {profileConfig.fullName}. All rights reserved.
          </div>
          <div>
            Personal portfolio template. Replace demonstration content with verified information before publication.
          </div>
        </div>

      </div>
    </footer>
  );
};
