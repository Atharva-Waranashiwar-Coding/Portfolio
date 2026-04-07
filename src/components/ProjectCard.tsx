import { ArrowUpRight, FileCode2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../lib/content';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  clickable?: boolean;
};

function ProjectCard({ project, featured = false, clickable = true }: ProjectCardProps) {
  const content = (
    <>
      <div className="workspace-bar">
        <div className="workspace-dots">
          <span className="workspace-dot" />
          <span className="workspace-dot" />
          <span className="workspace-dot" />
        </div>
        <div className="flex min-w-0 items-center justify-between gap-3 w-full">
          <span className="workspace-title">{project.slug}.mdx</span>
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <FileCode2 size={15} />
            {clickable ? (
              <span className="inline-flex items-center gap-2 text-sm text-white/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                Open
                <ArrowUpRight size={16} />
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-7">
        <div className="space-y-5">
          <div className="space-y-3">
            <span className="eyebrow text-[0.65rem]">{project.associatedWith}</span>
            <h3 className={featured ? 'font-display text-3xl text-white sm:text-4xl' : 'font-display text-2xl text-white sm:text-3xl'}>
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-white/68 sm:text-base">{project.brief}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.disciplines.map((discipline) => (
              <span key={discipline} className="chip">
                {discipline}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="section-note">selected stack</p>
          <div className="space-y-2">
            {project.keywords.slice(0, 4).map((keyword, index) => (
              <div key={keyword} className="code-line">
                <span className="code-line-number">{index + 1}</span>
                <span className="code-line-content">{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  if (!clickable) {
    return (
      <article
        className={[
          'workspace-window flex h-full flex-col',
          featured ? 'min-h-[360px]' : 'min-h-[340px]',
        ].join(' ')}
      >
        {content}
      </article>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={[
        'workspace-window panel-hover group flex h-full flex-col',
        featured ? 'min-h-[360px]' : 'min-h-[340px]',
      ].join(' ')}
    >
      {content}
    </Link>
  );
}

export default ProjectCard;
