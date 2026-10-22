import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { skillsData, skillCategories, SkillCategory, SkillStatus } from '../config/skills';
import { Search, Code, Globe, Server, Shield, BookOpen } from 'lucide-react';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.focusArea.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-3.5 h-3.5 text-violet-400" />;
      case 'Web Development':
        return <Globe className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Systems and Networking':
        return <Server className="w-3.5 h-3.5 text-amber-400" />;
      case 'Cybersecurity':
        return <Shield className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const getStatusBadge = (status: SkillStatus) => {
    switch (status) {
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 px-2 py-0.5 rounded">
            <BookOpen className="w-2.5 h-2.5" />
            <span>Learning</span>
          </span>
        );
      case 'Practiced':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-violet-400 bg-violet-950/30 border border-violet-800/40 px-2 py-0.5 rounded">
            <span>Practiced</span>
          </span>
        );
      case 'Proficient':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded">
            <span>Proficient</span>
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Philosophy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              TECHNICAL PROFICIENCIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tools, concepts, and technical interests.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              All unverified technical skills are transparently marked as "Learning". No arbitrary
              percentage bars or fabricated senior expertise.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 ${
                theme === 'dark'
                  ? 'bg-[#111116] border-[#27272A] text-zinc-200 placeholder:text-zinc-500'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-800 placeholder:text-zinc-400'
              }`}
            />
          </div>
        </div>

        {/* Category Tabs (Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-800/80 w-fit max-w-full overflow-x-auto">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                  isSelected
                    ? 'bg-violet-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'bg-[#17171D] border-[#27272A] hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-zinc-900/80 dark:bg-zinc-900 border border-zinc-800">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-100 dark:text-zinc-100">
                      {skill.name}
                    </h3>
                  </div>
                  {getStatusBadge(skill.status)}
                </div>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 leading-relaxed mb-3">
                  {skill.description}
                </p>

                <div className="pt-2 border-t border-zinc-800/60 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>{skill.category}</span>
                  <span className="text-zinc-400">{skill.focusArea}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`p-10 rounded-xl border text-center space-y-2 ${
              theme === 'dark' ? 'bg-[#111116] border-[#27272A]' : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <p className="text-sm font-medium text-zinc-300">No matching skills found</p>
            <p className="text-xs text-zinc-500">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 text-xs text-violet-400 hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
