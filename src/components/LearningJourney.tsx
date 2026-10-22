import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { learningJourneyData } from '../config/learning';
import { CheckCircle2, CircleDot, ArrowRight, Milestone } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="learning" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            LEARNING ROADMAP
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            My Learning Journey
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
            A transparent view into my ongoing studies and personal roadmap. No false completion dates
            or exaggerated claims of mastery—just steady, disciplined progression.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Subtle connecting vertical line on desktop */}
          <div
            className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-zinc-800"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-10">
            {learningJourneyData.map((stage) => (
              <div
                key={stage.id}
                className="relative flex flex-col md:flex-row md:items-start gap-6 group"
              >
                {/* Timeline Node Indicator */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 shrink-0 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm border shadow-sm transition-all duration-200 group-hover:scale-105 ${
                      stage.status === 'Core Focus'
                        ? 'bg-violet-950/40 border-violet-500 text-violet-400'
                        : stage.status === 'In Progress'
                        ? 'bg-cyan-950/40 border-cyan-500 text-cyan-400'
                        : 'bg-emerald-950/40 border-emerald-500 text-emerald-400'
                    }`}
                  >
                    {stage.stageNumber}
                  </div>
                </div>

                {/* Stage Content Card */}
                <div
                  className={`flex-1 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    theme === 'dark'
                      ? 'bg-[#17171D] border-[#27272A] hover:border-zinc-700'
                      : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-800 text-violet-400">
                        STAGE {stage.stageNumber}
                      </span>
                      <h3 className="font-bold text-lg sm:text-xl text-zinc-100 dark:text-zinc-100">
                        {stage.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        stage.status === 'Core Focus'
                          ? 'bg-violet-950/40 border-violet-800 text-violet-300'
                          : stage.status === 'In Progress'
                          ? 'bg-cyan-950/40 border-cyan-800 text-cyan-300'
                          : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 dark:text-zinc-300 leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-800/60 dark:border-zinc-800">
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 block mb-2 font-mono">
                        TOPICS & CONCEPTS EXPLORED:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {stage.keyMilestones.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CircleDot className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-zinc-400 block mb-2 font-mono">
                        CURRENT ACTIVE HABITS:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {stage.currentSubjects.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Reflection quote */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/40 text-xs italic text-zinc-500 font-mono">
                    "{stage.reflection}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
