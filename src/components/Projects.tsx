import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { projectsData, projectCategories, ProjectCategory, ProjectItem } from '../config/projects';
import { ProjectModal } from './ProjectModal';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Info, 
  Code, 
  Terminal, 
  ShieldCheck,
  Layout,
  Cpu
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const renderProjectIllustration = (project: ProjectItem) => {
    switch (project.category) {
      case 'Web Development':
        return (
          <div className="w-full h-36 bg-gradient-to-br from-violet-950/40 via-zinc-900 to-black/60 border-b border-zinc-800/80 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="flex items-center gap-1.5 text-violet-400">
                <Layout className="w-3.5 h-3.5" />
                <span>Next.js · App Router</span>
              </span>
              <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                TypeScript
              </span>
            </div>
            <div className="space-y-1.5 py-1 text-zinc-400 text-xs">
              <div className="h-2 w-3/4 bg-violet-500/20 rounded" />
              <div className="h-2 w-1/2 bg-zinc-800 rounded" />
              <div className="h-2 w-2/3 bg-cyan-500/20 rounded" />
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800/60">
              <span>Tailwind CSS</span>
              <span className="text-emerald-400">Responsive UI</span>
            </div>
          </div>
        );

      case 'Programming':
        return (
          <div className="w-full h-36 bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-black/60 border-b border-zinc-800/80 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>Algorithms & Memory</span>
              </span>
              <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                C & Python
              </span>
            </div>
            <div className="bg-black/50 p-2 rounded border border-zinc-800/70 text-zinc-300 text-[10.5px] leading-tight">
              <code>int *ptr = malloc(sizeof(int) * 10);</code>
              <br />
              <code className="text-zinc-500"># O(n log n) sorting exercises</code>
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800/60">
              <span>Data Structures</span>
              <span className="text-cyan-400">Big-O Analysis</span>
            </div>
          </div>
        );

      case 'Cybersecurity':
        return (
          <div className="w-full h-36 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-black/60 border-b border-zinc-800/80 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none">
            <div className="flex items-center justify-between text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Defensive Security Lab</span>
              </span>
              <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                Linux Sandbox
              </span>
            </div>
            <div className="p-2 rounded bg-black/50 border border-zinc-800/70 text-zinc-300 text-[10.5px] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400">TCP/IP Stack Dissection</span>
                <span className="text-zinc-500">UFW / iptables</span>
              </div>
              <p className="text-zinc-400 text-[10px]">
                OWASP Web Security Testing Notes
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800/60">
              <span>Traffic Analysis</span>
              <span className="text-emerald-400">Defensive Audit</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
              FEATURED PROJECTS & LABS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Demonstrations, exercises, and study implementations.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Default projects represent study concepts and learning implementations. Links are hidden
              or cleanly annotated until actual repositories are configured.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/80 border border-zinc-800/80">
            {projectCategories.map((cat) => {
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
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col rounded-xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-[#17171D] border-[#27272A] hover:border-zinc-700'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* Visual Header / Illustration */}
                {renderProjectIllustration(project)}

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Metadata Header (Category & Status) */}
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                      <span className="text-violet-400 font-semibold">{project.category}</span>
                      <span className="text-[11px] bg-zinc-800/70 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-zinc-100 dark:text-zinc-100">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & Actions */}
                  <div className="space-y-3 pt-2">
                    {/* Technologies (Clean unboxed tokens) */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900/60 dark:bg-zinc-900 border border-zinc-800/80 rounded text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-zinc-800/60 dark:border-zinc-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Inspect Details</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span
                            className="text-[10px] text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-900/40 border border-zinc-800/60 cursor-default"
                            title="Repository URL not configured yet"
                          >
                            Repo Pending
                          </span>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`p-12 rounded-xl border text-center space-y-2 ${
              theme === 'dark' ? 'bg-[#111116] border-[#27272A]' : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <p className="text-sm font-medium text-zinc-300">No projects found in this category</p>
            <p className="text-xs text-zinc-500">
              Switch back to "All Projects" to explore the full portfolio catalog.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-2 text-xs text-violet-400 hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
