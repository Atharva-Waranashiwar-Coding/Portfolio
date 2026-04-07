import { Bot, Cloud, Code2, Cpu, Database, PencilRuler, PanelsTopLeft, Server, type LucideIcon } from 'lucide-react';
import { skillCategories } from '../lib/content';
import PageIntro from './PageIntro';
import Reveal from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: Server,
  ai: Bot,
  cloud: Cloud,
  data: Database,
  languages: Code2,
  product: PencilRuler,
  embedded: Cpu,
};

function SkillSection() {
  return (
    <section className="section-shell">
      <PageIntro
        eyebrow="Capabilities"
        title="An engineering toolkit organized like a real working stack."
        description="Instead of a generic skills cloud, this section is grouped the way the work actually happens: UI systems, backend services, AI features, cloud/platform delivery, data foundations, product thinking, and embedded work."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.id] ?? Code2;
          const fileName = `${category.id}.config`;

          return (
            <Reveal key={category.id} delay={index * 60} variant={index % 2 === 0 ? 'left' : 'right'}>
              <article className="code-card panel-hover h-full">
                <div className="code-card-header">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--accent-strong)]">
                      <Icon size={18} />
                    </div>
                    <span className="code-card-title">{fileName}</span>
                  </div>
                  <span className="section-note">loaded</span>
                </div>

                <div className="space-y-6 p-7 sm:p-8">
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl text-white">{category.title}</h3>
                    <p className="max-w-2xl text-sm leading-7 text-white/68">{category.summary}</p>
                  </div>

                  <div className="space-y-6">
                    {category.sections.map((section) => (
                      <div key={`${category.id}-${section.title}`} className="space-y-3">
                        <p className="workspace-section-label">{section.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {section.items.map((item) => (
                            <span key={item} className="chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default SkillSection;
