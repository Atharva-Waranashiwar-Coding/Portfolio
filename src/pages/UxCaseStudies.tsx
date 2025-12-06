import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';

type CaseStudy = {
  title: string;
  summary: string;
  status: 'available' | 'coming-soon';
  path?: string;
  tag: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: 'Career Growth Platform',
    summary: 'Guided goal-setting, mentor matching, and curated learning paths for early-career professionals.',
    status: 'available',
    path: '/case-study/career-growth-platform',
    tag: 'Live',
  },
  {
    title: 'Mentor Scheduling Experience',
    summary: 'Streamlined booking, reminders, and feedback loops for mentor-mentee sessions.',
    status: 'coming-soon',
    tag: 'Coming soon',
  },
  {
    title: 'Learning Path Builder',
    summary: 'Drag-and-drop playlists of resources with adaptive milestones and nudges.',
    status: 'coming-soon',
    tag: 'Coming soon',
  },
];

function UxCaseStudies() {
  return (
    <div className="bg-[#100001] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">UX Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold">UX Case Studies</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Selected product design and research work focused on momentum, clarity, and measurable impact. The
            Career Growth Platform is fully documented; others are in progress and will be added soon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => {
            const isAvailable = study.status === 'available' && study.path;
            const targetPath = study.path ?? '#';
            return (
              <div
                key={study.title}
                className="rounded-2xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#0c0000] p-6 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isAvailable
                        ? 'bg-[#ca0000] text-white'
                        : 'border border-gray-600 text-gray-300'
                    }`}
                  >
                    {study.tag}
                  </span>
                  {study.status === 'coming-soon' && (
                    <div className="inline-flex items-center gap-1 text-gray-400 text-xs">
                      <Clock size={14} />
                      Updating soon
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{study.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{study.summary}</p>
                </div>
                <div className="mt-auto">
                  {isAvailable ? (
                    <Link
                      to={targetPath}
                      className="inline-flex items-center gap-2 text-[#ca0000] font-semibold hover:translate-x-1 transition-transform"
                    >
                      View case study
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-500 font-semibold">
                      Coming soon
                      <ExternalLink size={16} className="opacity-50" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UxCaseStudies;
