import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { X, Code2, Terminal, Copy, Check, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'overview' | 'vercel' | 'files'>('overview');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(JSON.stringify(profileConfig, null, 2));
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-guide-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#17171D] border-[#27272A] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-mono">
            <Terminal className="w-4 h-4" />
            <span>ARCHITECTURE & CUSTOMIZATION GUIDE</span>
          </div>
          <h3 id="config-guide-title" className="text-xl font-bold tracking-tight">
            Centralized Portfolio Configuration
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            All personal information, projects, skills, education, and learning roadmap items are
            strictly isolated into clean TypeScript configuration modules.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-violet-600 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Config Modules
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'vercel'
                ? 'bg-violet-600 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Vercel Deployment
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'files'
                ? 'bg-violet-600 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Export JSON
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-1">
                <div className="font-mono text-violet-400 font-semibold">src/config/profile.ts</div>
                <p className="text-zinc-400">
                  Full name, initials, titles, extended bio, location, email, GitHub/LinkedIn links, and CV download toggle.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-1">
                <div className="font-mono text-cyan-400 font-semibold">src/config/skills.ts</div>
                <p className="text-zinc-400">
                  All 4 categories (Programming, Web Dev, Systems, Cybersecurity) with honest status badges (Learning, Practiced, Proficient).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-1">
                <div className="font-mono text-emerald-400 font-semibold">src/config/projects.ts</div>
                <p className="text-zinc-400">
                  Project catalog, category tags, technologies, and live demo / repo links (omitted when not ready).
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-1">
                <div className="font-mono text-amber-400 font-semibold">src/config/education.ts</div>
                <p className="text-zinc-400">
                  Degree details, coursework, verified certifications list, and status notes.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-violet-900/40 bg-violet-950/20 text-zinc-300 space-y-1.5 leading-relaxed">
              <div className="font-semibold text-violet-300">Anti-AI-Slop & Privacy Compliant:</div>
              <p className="text-zinc-400">
                Components never render hardcoded duplicate identity information. If a field is empty, the UI hides the link cleanly instead of rendering broken "#" anchors.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Vercel */}
        {activeTab === 'vercel' && (
          <div className="space-y-4 text-xs">
            <p className="text-zinc-300 leading-relaxed">
              This portfolio is built to be deployed seamlessly to Vercel or any static/edge hosting provider:
            </p>

            <ol className="space-y-3 text-zinc-400 list-decimal list-inside leading-relaxed">
              <li>
                <strong className="text-zinc-200">Push to GitHub:</strong>
                <pre className="mt-1 font-mono text-[11px] p-2.5 rounded bg-black/40 border border-zinc-800 text-zinc-300 overflow-x-auto">
                  git init{'\n'}git add .{'\n'}git commit -m "Initial commit of developer portfolio"{'\n'}git remote add origin https://github.com/&lt;your-username&gt;/portfolio.git{'\n'}git push -u origin main
                </pre>
              </li>
              <li>
                <strong className="text-zinc-200">Import in Vercel Dashboard:</strong>
                <p className="mt-1">
                  Visit <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-violet-400 underline">vercel.com/new</a>, select your repository, and click <strong>Deploy</strong>. Vercel automatically detects the build command (<code className="font-mono">npm run build</code>) and output directory (<code className="font-mono">dist</code>).
                </p>
              </li>
              <li>
                <strong className="text-zinc-200">Custom Domain (Optional):</strong>
                <p className="mt-1">
                  In Project Settings &gt; Domains, bind your domain (e.g. <code className="font-mono">alexmorgan.dev</code>) and set up the CNAME/A records.
                </p>
              </li>
            </ol>
          </div>
        )}

        {/* Tab 3: Export JSON */}
        {activeTab === 'files' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between text-zinc-400 font-mono">
              <span>Active profileConfig object</span>
              <button
                onClick={copyConfigSnippet}
                className="flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors"
              >
                {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre className="font-mono text-[11px] p-3 rounded-lg bg-black/50 border border-zinc-800 text-zinc-300 max-h-60 overflow-y-auto">
              <code>{JSON.stringify(profileConfig, null, 2)}</code>
            </pre>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
