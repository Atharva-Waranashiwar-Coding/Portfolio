import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Target, Wand2, Zap, X } from 'lucide-react';
import heroImage from '../data/career_growth_case_study/hero_image.png';
import designGoalsImg from '../data/career_growth_case_study/design_goals.png';
import personaOne from '../data/career_growth_case_study/persona/persona-1.png';
import personaTwo from '../data/career_growth_case_study/persona/persona-2.png';
import journeyMapImg from '../data/career_growth_case_study/user_journey_stages/user_journey_map.png';
import journeyStagesImg from '../data/career_growth_case_study/user_journey_stages/user_stages.png';
import taskAnalysis from '../data/career_growth_case_study/research_artifacts/task_analysis.png';
import dovetailResearch from '../data/career_growth_case_study/research_artifacts/dovetail_research_interviews.png';
import usabilityIssues from '../data/career_growth_case_study/research_artifacts/usability_issues_by_task.png';
import usabilityPerformance from '../data/career_growth_case_study/research_artifacts/usability_performance_score_by_Participant.png';
import lowFidelity from '../data/career_growth_case_study/research_artifacts/low_fidelity_design.png';
import highFidelity from '../data/career_growth_case_study/research_artifacts/post_cognitive_walkthrough_high_fidelity_desgn.png';
import skillAssessment1 from '../data/career_growth_case_study/final_solution/skill_assessment/skill_assessment_1.png';
import learningPathImg from '../data/career_growth_case_study/final_solution/receiving_personalised_learning_path/learning_path.png';
import portfolioImg from '../data/career_growth_case_study/final_solution/building_portfolio/portfolio.png';
import communityImg from '../data/career_growth_case_study/final_solution/mentors_peers_community/community.png';
import dashboardImg from '../data/career_growth_case_study/final_solution/profile_growth_dashboard/profile_dashboard.png';

type ListBlock = {
  title: string;
  items: string[];
};

const methods: string[] = [
  'Task Analysis & future-state flows',
  'Observation + interview guides (moderated sessions)',
  'Cognitive walkthroughs with users + AI-simulated feedback',
  'Thematic analysis in Dovetail (tagging, clustering needs, requirements)',
  'Low- and high-fidelity prototyping in Figma Make',
  'Heuristic evaluation (Nielsen + mobile heuristics)',
  'Moderated usability tests with structured metrics (errors, confusion, quotes)',
];

const keyInsights: string[] = [
  'Users lacked clarity and trust—needed explainability for AI-generated skills, learning paths, and scores (radar interpretation, missing context).',
  'Cognitive overload from dense modules, long pages, and unclear labels (high sensitivity in multiple participants).',
  'Navigation lacked transparency, making it hard to retrace steps or know where tasks began/ended.',
  'Mentorship vs. peer community expectations diverged: professionals wanted immediacy; students valued structure.',
  'Progress tracking motivated users, but hierarchy and redundant metrics needed simplification.',
];

const opportunities: string[] = [
  'Provide explainable AI.',
  'Reduce cognitive effort through progressive disclosure.',
  'Create unified, predictable navigation.',
  'Offer immediate value in mentorship and community flows.',
  'Simplify the learning path and portfolio-building processes.',
];

const personaDetails = {
  name: 'Aanya Deshmukh — Early-Career Student Explorer',
  age: '22',
  context: 'Graduate student seeking internships; uses desktop for structured career tasks.',
  goals: ['Understand real skill gaps', 'Build a credible portfolio', 'Follow a guided learning plan'],
  frustrations: ['Cognitive overload', 'Unclear AI scoring', 'Lack of rationale behind recommendations'],
  needs: ['Guidance, transparency, reassurance', 'Simple navigation', 'Visual summaries and clear next steps'],
};

const journeyStages: string[] = [
  'Trigger / Motivation: Wants clarity about skills or next steps.',
  'Exploration: Uploads résumé, browses mentors, or checks learning modules.',
  'Action: Engages with assessments, roadmaps, portfolio tools, or mentors.',
  'Reflection: Evaluates usefulness, clarity, and confidence.',
  'Outcome / Next Steps: Continues learning, joins peers, schedules mentorship, or saves portfolio.',
];

const journeyPainPoints: string[] = [
  'Unclear scoring and rationale in AI decisions.',
  'Navigation confusion (tabs, breadcrumbs, labels).',
  'External redirects breaking flow.',
  'Lack of immediate feedback in mentorship flow.',
  'Dense dashboards requiring extra effort.',
];

const journeyEmotions: string[] = [
  '🙂 Curiosity → Motivation → Relief',
  '😐 Uncertainty during loading or unclear steps',
  '😟 Frustration when context or explanation is missing',
];

const journeyOpportunities: string[] = [
  'Visual clarity (tooltips, legends, examples).',
  'Fewer steps per task.',
  'Unified navigation.',
  'Real-time mentorship availability.',
  'Progressive disclosure in complex flows.',
];

const designGoals: string[] = [
  'Reduce cognitive load with simplified workflows and progressive disclosure.',
  'Enhance explainability so users trust AI-generated insights and paths.',
  'Unify the experience between assessment, learning, portfolio, and mentorship.',
  'Create motivational structures through streaks, milestones, and clear tracking.',
  'Ensure accessibility and consistency across terminology, layout, and interactions.',
];

const processBlocks: ListBlock[] = [
  {
    title: 'A. Ideation & Concept Development',
    items: [
      'Task analysis produced future-state flows across five tasks, clarifying mental models and constraints.',
      'Cognitive walkthrough scripts refined task expectations and evaluator prompts.',
      'AI-simulated feedback surfaced predictable pain points before real testing.',
    ],
  },
  {
    title: 'B. Wireframes (Low Fidelity)',
    items: [
      'Figma Make generated monochrome wireframes emphasizing hierarchy and clean IA.',
      'Five core tasks visualized in 10–12 frames with arrows and placeholders.',
    ],
  },
  {
    title: 'C. Information Architecture',
    items: [
      'Navigation simplified to Home, My Learning, Portfolio, Mentors, Profile based on cognitive load data.',
      'Dashboard merged under Profile to reduce redundancy.',
    ],
  },
  {
    title: 'D. High-Fidelity Prototyping',
    items: [
      'Addressed issues from walkthroughs: resume/LinkedIn above the fold; target-role selection before skill gaps; clearer Overview vs Customize; certificates section heading; mentor availability and profile depth.',
    ],
  },
  {
    title: 'E. Interaction Decisions',
    items: [
      'Added tooltips (“How this is calculated”), success confirmations, and breadcrumb states.',
      'Integrated customizable modules for learning paths.',
      'Added drag-and-drop portfolio interactions with real-time verification.',
    ],
  },
  {
    title: 'F. Visual Design Decisions',
    items: [
      'Color palette supporting trust, clarity, and motivation (Indigo, Royal Blue, Emerald).',
      'Typography (Inter/Roboto) for scannability and digital clarity.',
    ],
  },
];

type Feature = {
  title: string;
  bullets: string[];
  media: { src: string; alt: string }[];
};

const features: Feature[] = [
  {
    title: 'Skill Gap Assessment',
    bullets: ['Resume/LinkedIn upload', 'Editable detected skills', 'Radar visualization with tooltips'],
    media: [
      { src: skillAssessment1, alt: 'Skill assessment radar overview' },
    ],
  },
  {
    title: 'Personalized Learning Path',
    bullets: [
      'AI roadmap with transparent rationale',
      'Weekly timeline with customizable modules',
      'Save, reorder, and replace courses',
    ],
    media: [{ src: learningPathImg, alt: 'Personalized learning path timeline' }],
  },
  {
    title: 'Portfolio Builder',
    bullets: ['Drag-and-drop uploads', 'Issuer verification', 'Real-time preview and export'],
    media: [{ src: portfolioImg, alt: 'Portfolio builder interface' }],
  },
  {
    title: 'Mentorship & Peer Community',
    bullets: ['Mentor cards with profiles + availability', 'Peer groups with topic filters', 'Lightweight discussion interface'],
    media: [{ src: communityImg, alt: 'Mentorship and peer community screen' }],
  },
  {
    title: 'Progress Dashboard',
    bullets: ['Streaks, milestones, radar benchmarks', 'AI-suggested goals'],
    media: [{ src: dashboardImg, alt: 'Progress dashboard with milestones and radar' }],
  },
];

const outcomes: ListBlock[] = [
  {
    title: 'What the Solution Accomplished',
    items: [
      'Addressed 18+ usability issues identified during walkthroughs and testing.',
      'Reduced confusion around navigation, portfolio structure, learning path rationale, and mentor booking.',
    ],
  },
  {
    title: 'What Worked Well',
    items: [
      'AI-assisted workflows accelerated ideation and iteration.',
      'High-fidelity designs reflected real user expectations and mental models.',
      'Research synthesis in Dovetail created a strong foundation for requirements.',
    ],
  },
  {
    title: 'What I Would Improve Next',
    items: [
      'More robust onboarding to explain AI scoring and data privacy.',
      'Embedded learning content to eliminate cross-platform friction.',
      'Real-time mentor availability and instant booking.',
    ],
  },
  {
    title: 'Key Lessons Learned',
    items: [
      'Explainability builds trust—opaque AI creates anxiety.',
      'Reducing cognitive load is as impactful as adding new functionality.',
      'AI + human research creates the strongest design outcomes—AI accelerates, humans validate.',
    ],
  },
];

const researchArtifacts = [
  { src: taskAnalysis, alt: 'Task analysis diagram' },
  { src: dovetailResearch, alt: 'Dovetail research synthesis' },
  { src: usabilityIssues, alt: 'Usability issues by task' },
  { src: usabilityPerformance, alt: 'Usability performance score by participant' },
  { src: lowFidelity, alt: 'Low-fidelity wireframes' },
  { src: highFidelity, alt: 'Post-walkthrough high-fidelity design' },
];

const personaImages = [
  { src: personaOne, alt: 'Persona reference 1' },
  { src: personaTwo, alt: 'Persona reference 2' },
];

function CareerGrowthCaseStudy() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const heroMeta = useMemo(
    () => [
      { label: 'Course', value: 'INFO 7375 · Fall 2025' },
      { label: 'Role', value: 'UX Research, IA, Interaction, Visual Design, AI-augmented prototyping' },
      { label: 'Tools', value: 'Miro, Dovetail, Figma & Figma Make, Claude MCP, ChatGPT, Google Sheets' },
    ],
    [],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const renderImage = (src: string, alt: string, className = 'w-full rounded-xl object-cover') => (
    <div className="space-y-2 flex flex-col items-center">
      <p className="text-xs text-gray-300 text-center">{alt}</p>
      <button
        type="button"
        onClick={() => setLightbox({ src, alt })}
        className="group relative w-full overflow-hidden rounded-xl border border-gray-800 bg-[#0e0e0e] p-0 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      >
        <img src={src} alt={alt} className={className} />
      </button>
      <button
        type="button"
        onClick={() => setLightbox({ src, alt })}
        className="inline-flex items-center justify-center rounded-full border border-[#ca0000] bg-[#ca0000]/15 px-3 py-1 text-xs font-semibold text-white hover:bg-[#ca0000]/25 transition-colors"
      >
        Open image
      </button>
    </div>
  );

  return (
    <>
      <div className={`bg-[#0a0000] text-white min-h-screen ${lightbox ? 'blur-md' : ''}`}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0003] via-[#0a0000] to-[#1f0a0a] opacity-80" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#ca0000]/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#7a0000]/30 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-6 py-10 lg:py-16 space-y-8">
            <button
              onClick={() => navigate('/projects')}
              className="mb-2 inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ca0000]/40 bg-[#ca0000]/10 px-4 py-2 text-sm uppercase tracking-wide">
                UX Case Study
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Career Growth Platform — UX Case Study</h1>
              <p className="text-lg text-gray-300 max-w-3xl">INFO 7375 · Fall 2025</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.figma.com/make/IwSKfE77dTaebtGKHsuo1f/Final-Prototype?t=x5EkAl3OBdLMVexE-20&fullscreen=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#ca0000] px-5 py-3 font-semibold hover:-translate-y-0.5 transition-transform"
                >
                  <Play size={18} />
                  Open Figma Prototype
                </a>
                <a
                  href="#final-solution"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ca0000] px-5 py-3 font-semibold text-white hover:bg-[#ca0000]/10 transition-colors"
                >
                  <Play size={18} />
                  Jump to solution
                </a>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {heroMeta.map((meta) => (
                  <div key={meta.label} className="rounded-xl border border-[#ca0000]/30 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-wide text-[#ca0000]/80">{meta.label}</p>
                    <p className="text-sm text-gray-200 mt-1">{meta.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-12 lg:py-16 space-y-10">
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">1. Project Overview</p>
              <p className="text-gray-300 leading-relaxed">
                The Career Growth Platform is an AI-enabled web application designed to help students, job seekers, and
                professionals identify skill gaps, receive personalized learning paths, build portfolios, connect with
                mentors and peers, and track long-term progress. Across ten weeks, I led the full UX lifecycle—from research
                and synthesis to prototyping, heuristic evaluation, and usability testing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My role spanned UX Research, Information Architecture, Interaction Design, Visual Design, and AI-augmented
                prototyping. Tools included Miro, Dovetail, Figma & Figma Make, Claude MCP, ChatGPT, and Google Sheets.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-black/30 p-3">
              {renderImage(heroImage, 'Career Growth Platform hero')}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-4">
            <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">2. Problem Statement</p>
            <p className="text-gray-300 leading-relaxed">
              Learners use fragmented tools—résumé builders, course platforms, spreadsheets, LinkedIn, and notes apps—to
              understand skills, plan learning, track progress, and connect with peers or mentors. Fragmentation leads to
              unclear skill gaps, overwhelming choices with low trust in AI recommendations, and no integration between
              learning, portfolio building, and mentorship.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The platform creates one cohesive system to reduce cognitive overload, build trust through explainable AI,
              and enable meaningful career progression. (Evidence: task analysis, observation logs, thematic insights,
              usability issues, persona needs.)
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-4">
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">3. Research Summary</p>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Methods Used</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Key Insights</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {keyInsights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Opportunities</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {opportunities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-black/30 p-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {researchArtifacts.map((artifact) => (
                  <div key={artifact.alt}>{renderImage(artifact.src, artifact.alt, 'w-full h-32 object-cover')}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">4. Persona (Summarized)</p>
              <h3 className="text-xl font-semibold">{personaDetails.name}</h3>
              <p className="text-sm text-gray-400">Age: {personaDetails.age}</p>
              <p className="text-gray-300">{personaDetails.context}</p>
              <div className="grid gap-3 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-[#ca0000]">Goals</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {personaDetails.goals.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#ca0000]">Frustrations</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {personaDetails.frustrations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#ca0000]">Needs</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {personaDetails.needs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-black/30 p-4 grid gap-4">
              {personaImages.map((persona) => renderImage(persona.src, persona.alt))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-4">
            <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">5. User Journey (Summarized)</p>
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Stages</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {journeyStages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold">Pain Points</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {journeyPainPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold">Emotions</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {journeyEmotions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold">Opportunities</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {journeyOpportunities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-black/30 p-3 grid gap-3">
                {renderImage(journeyMapImg, 'User journey map')}
                {renderImage(journeyStagesImg, 'User journey stages')}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">6. Design Goals</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {designGoals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-black/30 p-3">
              {renderImage(designGoalsImg, 'Design goals visualization')}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-6">
            <div className="flex items-center gap-3">
              <Wand2 size={18} className="text-[#ca0000]" />
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">7. Design Process</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {processBlocks.map((block) => (
                <div key={block.title} className="rounded-xl border border-gray-800/80 bg-black/20 p-4 space-y-2">
                  <p className="text-base font-semibold">{block.title}</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="final-solution" className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Target size={18} className="text-[#ca0000]" />
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">8. Final Solution</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The final product is an integrated, AI-enabled platform that unifies the entire career progression journey.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-gray-800/80 bg-black/20 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <span className="text-xs uppercase tracking-wide text-gray-500">Key Feature</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {feature.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {feature.media.map((media) => (
                      <div key={media.alt}>{renderImage(media.src, media.alt)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-[#ca0000]/40 bg-[#ca0000]/5 p-4 text-sm text-gray-200">
              How it solves the problem: reduces fragmentation by centralizing core tasks, builds trust using explainable
              AI, simplifies complex decisions into clear steps, and motivates users through visual progress and community
              support.
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#120000] p-6 space-y-6">
            <div className="flex items-center gap-3">
              <Zap size={18} className="text-[#ca0000]" />
              <p className="text-sm uppercase tracking-wide text-[#ca0000]/80">9. Outcomes & Reflection</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((block) => (
                <div key={block.title} className="rounded-xl border border-gray-800/80 bg-black/20 p-4 space-y-2">
                  <p className="text-base font-semibold">{block.title}</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setLightbox(null)}
          />

          <div className="relative z-[1000] flex h-full w-full items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ca0000] bg-white text-[#ca0000]"
            >
              <X size={22} />
            </button>

            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white text-black border border-[#ca0000]/30 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full h-full object-contain max-h-[80vh] bg-white"
                />
                <div className="p-4 text-sm text-gray-800 border-t border-[#ca0000]/30 bg-white">
                  {lightbox.alt}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CareerGrowthCaseStudy;
