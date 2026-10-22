import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { X, FileText, Download, CheckCircle, Terminal, Info } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-7 shadow-2xl transition-all ${
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
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-800/60 flex items-center justify-center text-violet-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="text-base font-bold">
              Curriculum Vitae / Resume Setup
            </h3>
            <span className="text-xs text-zinc-400">Personal portfolio verification standard</span>
          </div>
        </div>

        {profileConfig.cv.isConfigured ? (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-zinc-300">
              Your resume PDF is configured and ready for download.
            </p>
            <a
              href={profileConfig.cv.filePath}
              download="Alex_Morgan_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-xl border border-amber-900/40 bg-amber-950/20 text-amber-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold block">Demonstration Mode Notice</span>
                <p className="text-amber-300/80 leading-relaxed text-[11px]">
                  Per strict portfolio guidelines, no fake resume file or fabricated credentials are generated. Follow the instructions below to attach your real PDF.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-zinc-300 block font-mono">
                HOW TO ADD YOUR REAL CV (3 STEPS):
              </span>
              <ol className="space-y-2 text-zinc-400 list-decimal list-inside leading-relaxed">
                <li>
                  Place your actual PDF resume into the repository directory:{' '}
                  <code className="text-violet-400 font-mono">public/cv.pdf</code>
                </li>
                <li>
                  Open <code className="text-violet-400 font-mono">src/config/profile.ts</code>
                </li>
                <li>
                  Set <code className="text-cyan-400 font-mono">cv.isConfigured = true</code>
                </li>
              </ol>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-zinc-800 font-mono text-[11px] text-zinc-400">
              <span className="text-zinc-500 block mb-1">// In src/config/profile.ts:</span>
              <code>
                cv: &#123;{'\n'}
                {'  '}filePath: "/cv.pdf",{'\n'}
                {'  '}<span className="text-emerald-400">isConfigured: true</span>{'\n'}
                &#125;
              </code>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
