import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { 
  ArrowRight, 
  Terminal, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  FileText,
  Play,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'profile' | 'terminal' | 'network'>('profile');
  const [copiedCode, setCopiedCode] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ cs-student --status',
    '✓ Loading core modules: Algorithms, Data Structures, Networks',
    '✓ Exploring: Next.js, TypeScript, Tailwind CSS, Linux',
    'Ready for experiments.'
  ]);

  const codeSnippet = `const developer = {
  name: "${profileConfig.fullName}",
  role: "${profileConfig.professionalTitle.split('|')[0].trim()}",
  focus: ["Web Development", "Programming"],
  learning: "Cybersecurity",
  location: "${profileConfig.location.city}, ${profileConfig.location.country}"
};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const runCommand = (cmd: string, output: string) => {
    setTerminalHistory((prev) => [...prev, `$ ${cmd}`, output]);
  };

  const clearTerminal = () => {
    setTerminalHistory(['$ cs-student --status', 'Ready for experiments.']);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient gradients (restrained per specification) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[380px] h-[260px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small introductory label with subtle decorative indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase border transition-colors bg-zinc-900/40 border-zinc-800 text-violet-400 dark:bg-zinc-900/60 dark:border-zinc-800 dark:text-violet-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" aria-hidden="true" />
              <span>{profileConfig.roleBadge}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.15] text-balance">
              Building my future,{' '}
              <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                one line of code
              </span>{' '}
              at a time.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-zinc-400 dark:text-zinc-400">
              I'm a computer science student exploring software development, modern web technologies,
              and cybersecurity. I enjoy learning, experimenting, and turning ideas into practical digital
              experiences.
            </p>

            {/* Availability label */}
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400/80" aria-hidden="true" />
              <span>{profileConfig.status.label}</span>
            </div>

            {/* Primary actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-sm hover:shadow-violet-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>


              {/* CV Download / Instructions Button */}
              <button
                onClick={onOpenCvModal}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  theme === 'dark'
                    ? 'border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                    : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
                title="CV configuration options"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social Links & Honest Note */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-zinc-500">
              <span className="font-medium text-zinc-400">Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profileConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                    theme === 'dark'
                      ? 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300'
                      : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                  }`}
                  aria-label="GitHub Profile (Template Placeholder)"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  {profileConfig.social.isPlaceholder && (
                    <span className="text-[10px] text-zinc-500">(Placeholder)</span>
                  )}
                </a>

                <a
                  href={profileConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                    theme === 'dark'
                      ? 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300'
                      : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                  }`}
                  aria-label="LinkedIn Profile (Template Placeholder)"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  {profileConfig.social.isPlaceholder && (
                    <span className="text-[10px] text-zinc-500">(Placeholder)</span>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Interactive Developer Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-xl border transition-all duration-300 shadow-xl ${
                theme === 'dark'
                  ? 'bg-[#17171D] border-[#27272A] shadow-black/40'
                  : 'bg-white border-zinc-200 shadow-zinc-200/50'
              }`}
            >
              {/* Window Header */}
              <div
                className={`px-4 py-3 border-b flex items-center justify-between gap-2 ${
                  theme === 'dark' ? 'border-[#27272A] bg-[#111116]' : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">dev-workstation</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'profile'
                        ? theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'bg-zinc-200 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'bg-zinc-200 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    terminal
                  </button>
                  <button
                    onClick={() => setActiveTab('network')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'network'
                        ? theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-100 font-semibold'
                          : 'bg-zinc-200 text-zinc-900 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    security.sh
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-5">
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                      <span>// Demonstrative profile structure</span>
                      <button
                        onClick={copyToClipboard}
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
                        title="Copy snippet"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <pre className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300 dark:text-zinc-300 p-3 rounded-lg bg-black/40 border border-zinc-800/80">
                      <code>
                        <span className="text-violet-400">const</span>{' '}
                        <span className="text-cyan-400">developer</span> = &#123;{'\n'}
                        {'  '}name: <span className="text-amber-300">"{profileConfig.fullName}"</span>,{'\n'}
                        {'  '}focus: [<span className="text-emerald-400">"Web Development"</span>, <span className="text-emerald-400">"Programming"</span>],{'\n'}
                        {'  '}learning: <span className="text-emerald-400">"Cybersecurity"</span>,{'\n'}
                        {'  '}location: <span className="text-amber-300">"{profileConfig.location.city}, {profileConfig.location.country}"</span>{'\n'}
                        &#125;;
                      </code>
                    </pre>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 text-xs">
                        <span className="text-zinc-500 block mb-0.5 font-mono text-[11px]">STUDENT STATUS</span>
                        <span className="font-semibold text-zinc-200">Active Undergraduate</span>
                      </div>
                      <div className="p-2.5 rounded-lg border border-zinc-800/70 bg-zinc-900/30 text-xs">
                        <span className="text-zinc-500 block mb-0.5 font-mono text-[11px]">CONFIG LOCATION</span>
                        <span className="font-mono text-violet-400 text-[11px]">src/config/profile.ts</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-500 pb-1 border-b border-zinc-800">
                      <span>bash ~ session</span>
                      <button
                        onClick={clearTerminal}
                        className="flex items-center gap-1 hover:text-zinc-300 transition-colors"
                        title="Reset terminal"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>reset</span>
                      </button>
                    </div>

                    <div className="h-44 overflow-y-auto space-y-1.5 p-2 bg-black/40 rounded-lg border border-zinc-800/80 text-zinc-300">
                      {terminalHistory.map((line, idx) => (
                        <div
                          key={idx}
                          className={
                            line.startsWith('$')
                              ? 'text-cyan-400 font-semibold'
                              : line.startsWith('✓')
                              ? 'text-emerald-400'
                              : 'text-zinc-400'
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                    {/* Quick interactive commands */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="text-zinc-500">Run:</span>
                      <button
                        onClick={() => runCommand('cat interests.txt', profileConfig.interests.slice(0, 4).join(', ') + '...')}
                        className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                      >
                        interests
                      </button>
                      <button
                        onClick={() => runCommand('whoami', `${profileConfig.fullName} - ${profileConfig.professionalTitle}`)}
                        className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                      >
                        whoami
                      </button>
                      <button
                        onClick={() => runCommand('ping security.lab', '64 bytes from lab (10.0.0.1): icmp_seq=1 ttl=64 time=0.042 ms')}
                        className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                      >
                        ping lab
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'network' && (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="text-zinc-500 text-[11px]">
                      // Conceptual Security Lab Exploration
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-zinc-800/80 space-y-2">
                      <div className="flex items-center justify-between text-zinc-300">
                        <span className="text-cyan-400">DEFENSIVE_LAB_STATUS</span>
                        <span className="text-emerald-400 font-semibold">Active Lab</span>
                      </div>
                      <div className="text-zinc-400 text-[11px] leading-relaxed">
                        Educational packet dissection, firewall configuration sandboxes, and web threat mitigation notes.
                      </div>
                      <div className="pt-1 text-[11px] text-zinc-500">
                        * All exercises conducted in isolated local environments.
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-violet-950/20 border border-violet-800/40 text-violet-300 flex items-center gap-2 text-xs">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-violet-400" />
                      <span>Focus: Defensive security and reliable web systems</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer notice */}
              <div
                className={`px-4 py-2.5 border-t text-[11px] text-zinc-500 flex items-center justify-between ${
                  theme === 'dark' ? 'border-[#27272A] bg-[#111116]' : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                <span>Demo card visualization</span>
                <span className="font-mono text-zinc-400">TypeScript · Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
