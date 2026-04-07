import { ArrowRight, Bot, Cloud, Code2, Download, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarqueeStrip from '../components/MarqueeStrip';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SkillSection from '../components/SkillSection';
import {
  education,
  featuredProjects,
  primarySkillCategories,
  siteMetrics,
  topProjectKeywords,
  workExperience,
} from '../lib/content';
import { contactLinks, resumePath } from '../lib/siteConfig';

const capabilityIcons = {
  frontend: Code2,
  backend: Server,
  cloud: Cloud,
  ai: Bot,
} as const;

function Home() {
  return (
    <div className="space-y-20 pb-24">
      <section className="section-shell pt-4 sm:pt-6 lg:pt-8">
        <div className="grid gap-6">
          <Reveal variant="left">
            <div className="workspace-window hero-window h-full">
              <div className="workspace-bar">
                <div className="workspace-dots">
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                </div>
                <span className="workspace-title">~/atharva/portfolio/home-intro.tsx</span>
              </div>

              <div className="coding-grid relative p-6 sm:p-8 lg:p-8 xl:p-9">
                <div className="hero-orb hero-orb-primary" />
                <div className="hero-orb hero-orb-secondary" />

                <span className="eyebrow">Open to roles across the US</span>

                <div className="mt-3 max-w-4xl space-y-4">
                  <h1 className="font-display text-3xl leading-[0.98] text-white sm:text-4xl lg:text-[3.15rem] xl:text-[3.45rem]">
                    Developer-focused portfolio.
                    Built to sell frontend craft, backend depth, AI integration, and cloud delivery.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                    I build web products that feel polished in the browser and stay practical in production.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/projects" className="button-primary">
                    Explore builds
                    <ArrowRight size={16} />
                  </Link>
                  <a href={resumePath} download className="button-secondary">
                    Download resume
                    <Download size={16} />
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-4 xl:grid-cols-4">
                  {siteMetrics.map((metric, index) => (
                    <Reveal key={metric.label} delay={80 + index * 60} variant="scale">
                      <div className="metric-card rounded-[20px] border border-white/10 bg-white/5 p-4">
                        <p className="font-display text-3xl text-white">{metric.value}</p>
                        <p className="mt-2 text-sm leading-6 text-white/55">{metric.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <div className="workspace-window hero-window h-full">
              <div className="workspace-bar">
                <div className="workspace-dots">
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                </div>
                <span className="workspace-title">~/atharva/portfolio/main.tsx</span>
              </div>

              <div className="grid gap-4 p-5 sm:p-6 lg:p-6 xl:p-7">
                <div className="portrait-shell relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(97,230,200,0.12),transparent_44%),rgba(255,255,255,0.03)]">
                  <img
                    src="/assets/hero.jpg"
                    alt="Atharva Waranashiwar portrait"
                    className="h-[265px] w-full object-contain object-center p-3 sm:h-[305px] lg:h-[260px] xl:h-[300px]"
                  />
                  <span className="floating-chip left-5 top-5">frontend.tsx</span>
                  <span className="floating-chip right-5 top-8" style={{ animationDelay: '-2s' }}>
                    infra.tf
                  </span>
                  <span className="floating-chip bottom-8 left-6" style={{ animationDelay: '-4s' }}>
                    ai-agent.py
                  </span>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="code-panel">
                    <p className="workspace-section-label">current role</p>
                    <p className="mt-3 text-lg font-semibold text-white">{workExperience[0]?.position}</p>
                    <p className="mt-1 text-sm text-white/62">{workExperience[0]?.company}</p>
                  </div>
                  <div className="code-panel">
                    <p className="workspace-section-label">availability</p>
                    <p className="mt-3 text-lg font-semibold text-white">{contactLinks.location}</p>
                    <a href={`mailto:${contactLinks.email}`} className="mt-4 block text-sm text-[var(--accent-strong)] transition-colors duration-300 hover:text-white">
                      {contactLinks.email}
                    </a>
                  </div>
                </div>

                <div className="terminal-panel">
                  <div className="terminal-body">
                    <p className="terminal-command">focus --list</p>
                    <p className="terminal-output">frontend systems, backend APIs, AI workflows, cloud delivery</p>
                    <p className="terminal-command">status --current</p>
                    <p className="terminal-output cursor-blink">shipping user-friendly software with engineering depth underneath</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal variant="scale">
          <MarqueeStrip items={['React', 'TypeScript', 'FastAPI', 'OpenAI API', 'Docker', 'AWS', 'GCP', 'Terraform', 'PostgreSQL', 'Airflow', 'MLflow', ...topProjectKeywords.slice(0, 6)]} />
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">Operating Areas</span>
            <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
              Four capability lanes, all visible in the work.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {primarySkillCategories.map((category, index) => {
            const Icon = capabilityIcons[category.id as keyof typeof capabilityIcons];

            return (
              <Reveal key={category.id} delay={index * 60} variant="up">
                <div className="code-card panel-hover h-full">
                  <div className="code-card-header">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--accent-strong)]">
                        <Icon size={18} />
                      </div>
                      <span className="code-card-title">{category.id}.config</span>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <h3 className="font-display text-3xl text-white">{category.title}</h3>
                    <div className="space-y-2">
                      {category.sections.flatMap((section) => section.items).slice(0, 4).map((item, itemIndex) => (
                        <div key={`${category.id}-${item}`} className="code-line">
                          <span className="code-line-number">{itemIndex + 1}</span>
                          <span className="code-line-content">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal variant="left">
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow">Selected Work</span>
              <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
                Projects that show the mix of coding, systems, AI, and cloud thinking.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <Link to="/projects" className="button-secondary w-fit">
              Browse all projects
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90} variant={index % 2 === 0 ? 'left' : 'right'}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 xl:grid-cols-[1.08fr,0.92fr]">
          <Reveal variant="left">
            <div className="code-card panel-hover">
              <div className="code-card-header">
                <span className="code-card-title">experience.log</span>
              </div>
              <div className="space-y-4 p-8 sm:p-10">
                {workExperience.slice(0, 2).map((role, index) => (
                  <Reveal key={role.id} delay={index * 70} variant="scale">
                    <div className="code-panel">
                      <p className="workspace-section-label">{role.durationLabel}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{role.position}</p>
                      <p className="mt-1 text-sm text-white/60">{role.company}</p>
                      <p className="mt-4 text-sm leading-7 text-white/66">{role.summary}</p>
                    </div>
                  </Reveal>
                ))}
                <Link to="/work" className="button-secondary mt-2 w-fit">
                  View full experience
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} variant="right">
            <div className="code-card panel-hover">
              <div className="code-card-header">
                <span className="code-card-title">education.modules</span>
              </div>
              <div className="space-y-4 p-8 sm:p-10">
                {education.map((entry, index) => (
                  <Reveal key={entry.id} delay={index * 80} variant="scale">
                    <div className="code-panel">
                      <p className="text-lg font-semibold text-white">
                        {entry.degree} in {entry.field}
                      </p>
                      <p className="mt-1 text-sm text-white/60">{entry.school}</p>
                      <p className="mt-3 workspace-section-label">{entry.durationLabel}</p>
                    </div>
                  </Reveal>
                ))}
                <div className="flex flex-wrap gap-3">
                  <Link to="/education" className="button-secondary">
                    View education
                  </Link>
                  <Link to="/myjourney" className="button-secondary">
                    See journey
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SkillSection />

      <section className="section-shell" id="contact">
        <Reveal variant="scale">
          <div className="terminal-panel">
            <div className="workspace-bar">
              <div className="workspace-dots">
                <span className="workspace-dot" />
                <span className="workspace-dot" />
                <span className="workspace-dot" />
              </div>
              <span className="workspace-title">contact.sh</span>
            </div>
            <div className="terminal-body">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-6 font-display text-4xl leading-none text-white sm:text-5xl">
                Looking for someone who can code the product and think through delivery.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${contactLinks.email}`} className="button-primary">
                  Email me
                </a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
                  LinkedIn
                </a>
                <a href={resumePath} target="_blank" rel="noreferrer" className="button-secondary">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
