import { ArrowLeft, FileCode2 } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { findProject } from '../lib/content';

function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();

  const project = useMemo(() => {
    if (!projectId) {
      return null;
    }

    return findProject(projectId);
  }, [projectId]);

  if (!project) {
    return (
      <div className="section-shell py-20">
        <Reveal>
          <div className="terminal-panel mx-auto max-w-3xl">
            <div className="workspace-bar">
              <div className="workspace-dots">
                <span className="workspace-dot" />
                <span className="workspace-dot" />
                <span className="workspace-dot" />
              </div>
              <span className="workspace-title">project-error.log</span>
            </div>
            <div className="terminal-body text-center">
              <p className="font-display text-4xl text-white">Project not found.</p>
              <p className="mt-4 text-sm leading-7 text-white/62">
                The route does not match any current project entry. Use the projects index to browse the updated portfolio.
              </p>
              <Link to="/projects" className="button-secondary mt-8 inline-flex">
                Back to projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="section-shell py-14 sm:py-16 lg:py-20">
      <Reveal variant="left">
        <div className="workspace-window">
          <div className="workspace-bar">
            <div className="workspace-dots">
              <span className="workspace-dot" />
              <span className="workspace-dot" />
              <span className="workspace-dot" />
            </div>
            <span className="workspace-title">{project.slug}.readme</span>
          </div>

          <div className="space-y-6 p-8 sm:p-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white">
              <ArrowLeft size={16} />
              Back to projects
            </Link>

            <div className="flex items-center gap-3">
              <FileCode2 size={18} className="text-[var(--accent)]" />
              <span className="code-card-title">{project.associatedWith}</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl leading-none text-white sm:text-6xl">{project.title}</h1>
              <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{project.brief}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((discipline) => (
                <span key={discipline} className="chip">
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Reveal delay={70} variant="scale">
          <div className="code-panel">
            <p className="workspace-section-label">engagement</p>
            <p className="mt-3 text-lg font-semibold text-white">{project.associatedWith}</p>
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <div className="code-panel">
            <p className="workspace-section-label">disciplines</p>
            <p className="mt-3 text-lg font-semibold text-white">{project.disciplines.join(' · ')}</p>
          </div>
        </Reveal>
        <Reveal delay={170} variant="scale">
          <div className="code-panel">
            <p className="workspace-section-label">stack signals</p>
            <p className="mt-3 text-lg font-semibold text-white">{project.keywords.slice(0, 3).join(' · ')}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.12fr,0.88fr]">
        <Reveal delay={80} variant="left">
          <article className="terminal-panel">
            <div className="workspace-bar">
              <div className="workspace-dots">
                <span className="workspace-dot" />
                <span className="workspace-dot" />
                <span className="workspace-dot" />
              </div>
              <span className="workspace-title">overview.ts</span>
            </div>
            <div className="terminal-body">
              <p className="workspace-section-label">project overview</p>
              <div className="mt-6 space-y-5">
                {project.overview.map((paragraph, index) => (
                  <div key={paragraph} className="code-line">
                    <span className="code-line-number">{index + 1}</span>
                    <span className="code-line-content">{paragraph}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={140} variant="right">
          <div className="space-y-6">
            <aside className="code-card panel-hover">
              <div className="code-card-header">
                <span className="code-card-title">keywords.json</span>
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword) => (
                    <span key={keyword} className="chip">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <aside className="code-card panel-hover">
              <div className="code-card-header">
                <span className="code-card-title">capabilities.yaml</span>
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ProjectDetails;
