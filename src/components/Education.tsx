import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { educationConfig } from '../config/education';
import { GraduationCap, Award, BookOpen, AlertCircle, PlusCircle, Check } from 'lucide-react';

export const Education: React.FC = () => {
  const { theme } = useTheme();
  const [showConfigTips, setShowConfigTips] = useState(false);

  return (
    <section id="education" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Formal undergraduate academic journey and continuous certification tracking. Fictional
            academic credentials are never fabricated.
          </p>
        </div>

        {/* Education Primary Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-[#17171D] border-[#27272A]'
              : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-950/40 border border-violet-800/60 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-violet-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 dark:text-zinc-100">
                    {educationConfig.program}
                  </h3>
                  {educationConfig.isDemonstration && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-amber-900/30">
                      Demo Profile
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-zinc-300">
                  {educationConfig.institution}
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  {educationConfig.level} · {educationConfig.status}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowConfigTips(!showConfigTips)}
              className="text-xs font-medium text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-1 self-start sm:self-center"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{showConfigTips ? 'Hide guide' : 'Edit in config'}</span>
            </button>
          </div>

          <p className="text-sm text-zinc-400 dark:text-zinc-400 leading-relaxed mb-6">
            {educationConfig.description}
          </p>

          {/* Core Subjects Studied */}
          <div className="pt-5 border-t border-zinc-800/60 dark:border-zinc-800">
            <span className="text-xs font-semibold text-zinc-400 block mb-3 font-mono">
              REPRESENTATIVE COURSEWORK & CORE CURRICULUM:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {educationConfig.coreSubjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg border border-zinc-800/70 bg-zinc-900/40 text-xs text-zinc-300 flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Config Tip Helper Box */}
          {showConfigTips && (
            <div className="mt-6 p-4 rounded-xl bg-violet-950/20 border border-violet-800/40 text-xs text-violet-200 space-y-1">
              <span className="font-semibold block text-violet-300">
                Centralized Configuration Note:
              </span>
              <p className="text-zinc-400">
                You can easily customize the institution name, degree title, graduation status, and completed coursework in{' '}
                <code className="font-mono text-violet-300">src/config/education.ts</code>.
              </p>
            </div>
          )}
        </div>

        {/* Certifications Subsection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold tracking-tight text-zinc-200">
              Verified Certifications
            </h3>
          </div>

          {educationConfig.certifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationConfig.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-4 rounded-xl border ${
                    theme === 'dark' ? 'bg-[#17171D] border-[#27272A]' : 'bg-white border-zinc-200'
                  }`}
                >
                  <div className="font-semibold text-sm text-zinc-100">{cert.name}</div>
                  <div className="text-xs text-zinc-400 mt-1">
                    {cert.issuingOrganization} · {cert.issueDate}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-violet-400 hover:underline mt-2 inline-block"
                    >
                      Verify Credential →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`p-6 rounded-xl border text-center space-y-2 ${
                theme === 'dark'
                  ? 'bg-[#111116] border-[#27272A]'
                  : 'bg-zinc-50 border-zinc-200'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-zinc-800/60 mx-auto flex items-center justify-center text-zinc-400">
                <Award className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-zinc-300">
                {educationConfig.emptyCertificationsNotice}
              </p>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                In strict accordance with personal data guidelines, only genuinely completed and verified
                certifications will be rendered here.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
