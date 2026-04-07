import { Search } from 'lucide-react';
import { useDeferredValue, useMemo, useState } from 'react';
import PageIntro from '../components/PageIntro';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projectDisciplines, projects, topProjectKeywords } from '../lib/content';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [selectedKeyword, setSelectedKeyword] = useState('All');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = deferredSearchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesDiscipline = selectedDiscipline === 'All' || project.disciplines.includes(selectedDiscipline);
      const matchesKeyword = selectedKeyword === 'All' || project.keywords.includes(selectedKeyword);

      if (!normalizedSearch) {
        return matchesDiscipline && matchesKeyword;
      }

      const searchContent = [
        project.title,
        project.brief,
        project.associatedWith,
        ...project.keywords,
        ...project.skills,
        ...project.overview,
      ]
        .join(' ')
        .toLowerCase();

      return matchesDiscipline && matchesKeyword && searchContent.includes(normalizedSearch);
    });
  }, [deferredSearchTerm, selectedDiscipline, selectedKeyword]);

  return (
    <div className="section-shell py-14 sm:py-16 lg:py-20">
      <PageIntro
        eyebrow="Projects"
        title="A cleaner project workspace with the builds themselves doing the talking."
        description="Use filters to inspect the portfolio by system type, stack, or focus area. Project windows stay static here unless there is a meaningful link to follow."
      />

      <Reveal delay={90} variant="scale">
        <div className="workspace-window mt-10">
          <div className="workspace-bar justify-between">
            <div className="flex items-center gap-3">
              <div className="workspace-dots">
                <span className="workspace-dot" />
                <span className="workspace-dot" />
                <span className="workspace-dot" />
              </div>
              <span className="workspace-title">project-search.ts</span>
            </div>
            <span className="chip bg-white/12 text-white">
              {filteredProjects.length} / {projects.length} projects
            </span>
          </div>

          <div className="filter-shell grid gap-6 p-6 sm:p-8 xl:grid-cols-[1.1fr,0.9fr]">
            <label className="relative z-10 flex flex-col gap-3">
              <span className="workspace-section-label">search</span>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 focus-within:border-white/18 focus-within:bg-white/8">
                <Search size={18} className="text-white/42" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="search by project, stack, or systems focus"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
            </label>

            <div className="relative z-10 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="workspace-section-label">discipline</p>
                <div className="flex flex-wrap gap-2">
                  {['All', ...projectDisciplines].map((discipline) => (
                    <button
                      key={discipline}
                      type="button"
                      onClick={() => setSelectedDiscipline(discipline)}
                      className={selectedDiscipline === discipline ? 'chip bg-white/12 text-white' : 'chip'}
                    >
                      {discipline}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="workspace-section-label">popular keywords</p>
                <div className="flex flex-wrap gap-2">
                  {['All', ...topProjectKeywords].map((keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() => setSelectedKeyword(keyword)}
                      className={selectedKeyword === keyword ? 'chip bg-white/12 text-white' : 'chip'}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="sticky top-24 z-20 mt-6 flex justify-end">
        <div className="chip border-white/14 bg-[rgba(7,24,32,0.92)] text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          {filteredProjects.length === projects.length
            ? `${projects.length} projects loaded`
            : `${filteredProjects.length} of ${projects.length} projects`}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-6 grid gap-10 lg:grid-cols-2 2xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 6) * 55} variant={index % 3 === 0 ? 'up' : index % 3 === 1 ? 'left' : 'right'}>
              <ProjectCard project={project} clickable={false} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={160} variant="scale">
          <div className="terminal-panel mt-10">
            <div className="workspace-bar">
              <div className="workspace-dots">
                <span className="workspace-dot" />
                <span className="workspace-dot" />
                <span className="workspace-dot" />
              </div>
              <span className="workspace-title">search-empty.log</span>
            </div>
            <div className="terminal-body text-center">
              <p className="font-display text-3xl text-white">No projects match the current filters.</p>
              <p className="mt-4 text-sm leading-7 text-white/62">Try clearing the keyword or discipline filter, or broaden the search term.</p>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

export default Projects;
