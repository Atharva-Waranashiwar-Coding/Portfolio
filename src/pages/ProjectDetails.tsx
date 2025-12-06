import { useMemo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectList';
import ReactMarkdown from 'react-markdown';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo<any>(() => {
    if (!id) return null;
    const pid = parseInt(id, 10);
    return projects.find((p) => p.id === pid) || null;
  }, [id]);

  const [caseStudyContent, setCaseStudyContent] = useState<string | null>(null);

  useEffect(() => {
    if (project?.caseStudyRoute) {
      navigate(project.caseStudyRoute, { replace: true });
    }
  }, [navigate, project]);

  if (project?.caseStudyRoute) {
    return null;
  }

  useEffect(() => {
    let mounted = true;
    async function loadCaseStudy() {
      setCaseStudyContent(null);
      if (!project || !project.caseStudy) return;

      // load markdown files from src/posts as raw text
      const modules = (import.meta as any).glob('../posts/*.md', { as: 'raw' });

      const matchKey = Object.keys(modules).find((k) => k.includes(project.caseStudy));
      if (!matchKey) return;

      try {
        const content = await modules[matchKey]();
        if (mounted) setCaseStudyContent(content as string);
      } catch (err) {
        // ignore load errors
      }
    }
    loadCaseStudy();
    return () => { mounted = false; };
  }, [project]);

  if (!project) {
    return (
      <div className="bg-[#100001] text-white min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="text-gray-400 mb-6">The project you are looking for does not exist.</p>
          <button
            className="px-4 py-2 rounded-full bg-[#CA0000] text-white"
            onClick={() => navigate('/projects')}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#100001] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <button
          className="mb-6 text-sm text-gray-300 hover:underline"
          onClick={() => navigate('/projects')}
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-400">{project.relevance}</div>
          <div className="text-gray-400">{project.date}</div>
        </div>

        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Case study or Process section (optional) */}
        {caseStudyContent ? (
          <div className="mb-6 prose max-w-none">
            <ReactMarkdown>{caseStudyContent}</ReactMarkdown>
          </div>
        ) : (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Process</h2>
            {project.process ? (
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                {project.process.map((step: string, idx: number) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-400">A detailed breakdown of this project's process will be available here.</p>
            )}
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-gray-700 text-sm">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CA0000] hover:underline"
            >
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CA0000] hover:underline"
            >
              Visit Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
