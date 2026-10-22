import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ProjectItem } from '../config/projects';
import { X, ExternalLink, Github, Layers, Code, CheckCircle, FolderTree } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#17171D] border-[#27272A] text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="font-semibold text-violet-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono text-[11px]">
              {project.status}
            </span>
          </div>

          <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-zinc-400">
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="pt-4 border-t border-zinc-800/60 dark:border-zinc-800">
          <span className="text-xs font-semibold text-zinc-400 block mb-2">
            TECHNOLOGIES & TOOLS:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/50 dark:bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Purpose & Key Learning Concepts */}
        <div className="pt-5 space-y-4">
          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-semibold text-zinc-200 mb-1">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Objective</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {project.architectureDetails.purpose}
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold text-zinc-400 block mb-2">
              KEY COMPUTER SCIENCE CONCEPTS:
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              {project.architectureDetails.keyConcepts.map((concept, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned / Sample File Structure */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-2">
              <FolderTree className="w-3.5 h-3.5 text-violet-400" />
              <span>DIRECTORY STRUCTURE PREVIEW:</span>
            </div>
            <pre className="font-mono text-xs p-3 rounded-lg bg-black/40 border border-zinc-800 text-zinc-300 overflow-x-auto">
              <code>
                {project.architectureDetails.fileStructurePreview.join('\n')}
              </code>
            </pre>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-500">
            {project.githubUrl || project.liveUrl ? (
              <span>Links configured below:</span>
            ) : (
              <span>Links pending configuration in <code className="font-mono text-violet-400">src/config/projects.ts</code></span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 hover:bg-zinc-800 text-zinc-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
