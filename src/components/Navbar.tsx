import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenConfigGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfigGuide }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning', href: '#learning' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'learning', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A] shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Minimalist personal typographic / geometric logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 text-inherit focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
          aria-label={`${profileConfig.fullName} - Return to top`}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
            {profileConfig.initials}
          </div>
          <span className="font-semibold text-sm tracking-tight hidden sm:inline-block">
            {profileConfig.fullName}
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-white bg-zinc-800/80 font-semibold'
                      : 'text-zinc-950 bg-zinc-100 font-semibold'
                    : theme === 'dark'
                    ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Toggle + Config Guide + Let's Talk CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenConfigGuide && (
            <button
              onClick={onOpenConfigGuide}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                theme === 'dark'
                  ? 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
              title="View Centralized Config & Customization Guide"
            >
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>Config</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
              theme === 'dark'
                ? 'border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:text-white hover:bg-zinc-800'
                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-violet-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Primary "Let's Talk" CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white shadow-sm hover:shadow-violet-500/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
              theme === 'dark'
                ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white'
                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-zinc-950'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 py-4 space-y-2 transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-[#09090B] border-[#27272A]'
              : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-white bg-zinc-800'
                        : 'text-zinc-900 bg-zinc-100'
                      : theme === 'dark'
                      ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800/60 dark:border-zinc-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-center"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {onOpenConfigGuide && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfigGuide();
                }}
                className={`w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium border ${
                  theme === 'dark'
                    ? 'border-zinc-800 text-zinc-400 bg-zinc-900'
                    : 'border-zinc-200 text-zinc-600 bg-zinc-50'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>View Centralized Config</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
