import { useState } from 'react';
import {projects} from '../components/projectList'

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('All');
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const focusAreas = ["All", "Full Stack", "AI/ML", "Cloud", "IoT / Embedded"];
  
  const stacks = ["React", "Firebase", "GCP", "FastAPI", "Python", "AWS", "MongoDB", "Node.js", "SQLAlchemy"];

  const sortedProjects = [...projects].sort((a, b) => parseInt(b.date) - parseInt(a.date));

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesFocus = selectedFocus === "All" || project.focus.includes(selectedFocus);
    const matchesStacks = selectedStacks.length === 0 || selectedStacks.every((stack) => project.stack.includes(stack));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.brief.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFocus && matchesStacks && matchesSearch;
  });

  return (
    <div className="bg-[#100001] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-full text-black w-full max-w-md"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {focusAreas.map((focus) => (
          <button
            key={focus}
            onClick={() => setSelectedFocus(focus)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedFocus === focus ? 'bg-[#CA0000] text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
            } transition-all`}
          >
            {focus}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => {
              if (selectedStacks.includes(stack)) {
                setSelectedStacks(selectedStacks.filter((s) => s !== stack));
              } else {
                setSelectedStacks([...selectedStacks, stack]);
              }
            }}
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              selectedStacks.includes(stack) ? 'bg-[#CA0000] text-white' : 'bg-gray-700 hover:bg-gray-600'
            } transition-all`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#100001] p-6 rounded-2xl shadow-lg hover:scale-[1.03] hover:shadow-[0_0_15px_#ca0000] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px]"
            onClick={() => setSelectedProject(project)}
          >
            <div className="mb-4">
              {/* Title + Date */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-gray-400 text-xs">{project.date}</span>
              </div>

              {/* Relevance*/}
              <p className="text-gray-400 text-sm mb-2">{project.relevance}</p>
              
              {/* Brief */}
              <p className="text-gray-400 text-sm">{project.brief}</p>
            </div>
          
            {/* Focus Badge */}
            <div className="flex flex-wrap gap-2">
              {project.focus.map((focusArea: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#CA0000] text-white px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {focusArea}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-lg w-full relative animate-fade-in">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.stack.map((tech: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-gray-700 text-sm">{tech}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CA0000] hover:underline"
                >
                  GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CA0000] hover:underline"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;