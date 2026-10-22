import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { 
  Compass, 
  Cpu, 
  Lightbulb, 
  Target, 
  MapPin, 
  Languages, 
  Sparkles 
} from 'lucide-react';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'focus':
        return <Compass className="w-5 h-5 text-violet-400" />;
      case 'interests':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'philosophy':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'goal':
        return <Target className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Background */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                Curiosity drives everything I build.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-400 dark:text-zinc-400">
              {profileConfig.extendedBiography.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Location & Languages unboxed metadata */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location Card */}
              <div
                className={`p-4 rounded-xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#111116] border-[#27272A]'
                    : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>LOCATION</span>
                </div>
                <div className="font-medium text-sm">
                  {profileConfig.location.city}, {profileConfig.location.country}
                </div>
                {profileConfig.location.isDemo && (
                  <span className="text-[11px] text-zinc-500 block mt-0.5">
                    (Demonstration placeholder)
                  </span>
                )}
              </div>

              {/* Languages Card */}
              <div
                className={`p-4 rounded-xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#111116] border-[#27272A]'
                    : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-1">
                  <Languages className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LANGUAGES</span>
                </div>
                <div className="space-y-1 text-xs">
                  {profileConfig.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="font-medium text-zinc-300 dark:text-zinc-300">
                        {lang.name}
                      </span>
                      <span className="text-zinc-500 text-[11px]">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Interests Tags (unboxed text style) */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-zinc-400 block mb-2">
                AREAS OF ACTIVE INTEREST:
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-400">
                {profileConfig.interests.map((interest, idx) => (
                  <span key={interest} className="inline-flex items-center gap-1.5">
                    <span>{interest}</span>
                    {idx < profileConfig.interests.length - 1 && (
                      <span className="text-zinc-600" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileConfig.aboutCards.map((card) => (
              <div
                key={card.title}
                className={`p-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-[#17171D] border-[#27272A] hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/90 border border-zinc-800 flex items-center justify-center mb-3">
                  {getCardIcon(card.iconName)}
                </div>
                <h3 className="font-semibold text-sm mb-2 text-zinc-100 dark:text-zinc-100">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
