import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import { journeyItems } from '../lib/content';

function MyJourney() {
  const workCount = journeyItems.filter((item) => item.type === 'Work').length;
  const educationCount = journeyItems.filter((item) => item.type === 'Education').length;

  return (
    <div className="section-shell py-14 sm:py-16 lg:py-20">
      <PageIntro
        eyebrow="Journey"
        title="A clearer progression from engineering fundamentals to product, AI, and cloud-backed software work."
        description="This page is structured like version history rather than a generic timeline. It shows how the work evolved from embedded systems and academic engineering into modern web development, backend systems, AI product work, and platform delivery."
        align="center"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Reveal variant="left">
          <div className="code-panel">
            <p className="workspace-section-label">chapters</p>
            <p className="mt-3 font-display text-4xl text-white">{journeyItems.length}</p>
            <p className="mt-2 text-sm leading-7 text-white/62">A compact history of how the technical profile was built up.</p>
          </div>
        </Reveal>
        <Reveal delay={80} variant="scale">
          <div className="code-panel">
            <p className="workspace-section-label">work roles</p>
            <p className="mt-3 font-display text-4xl text-white">{workCount}</p>
            <p className="mt-2 text-sm leading-7 text-white/62">Professional stops that shaped engineering scope and product responsibility.</p>
          </div>
        </Reveal>
        <Reveal delay={140} variant="right">
          <div className="code-panel">
            <p className="workspace-section-label">education blocks</p>
            <p className="mt-3 font-display text-4xl text-white">{educationCount}</p>
            <p className="mt-2 text-sm leading-7 text-white/62">Academic phases that reinforced software, cloud, AI, and systems thinking.</p>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <div className="timeline-rail absolute left-4 top-0 h-full w-px md:left-8" />

        <div className="space-y-8">
          {journeyItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} variant="up">
              <div className="relative pl-12 md:pl-20">
                <span className="absolute left-4 top-12 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[var(--accent-strong)] bg-[var(--accent)] shadow-[0_0_0_8px_rgba(6,18,25,1)] md:left-8" />

                <article className="workspace-window">
                  <div className="workspace-bar">
                    <div className="workspace-dots">
                      <span className="workspace-dot" />
                      <span className="workspace-dot" />
                      <span className="workspace-dot" />
                    </div>
                    <span className="workspace-title">{item.id}.history</span>
                  </div>

                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.34fr,0.66fr]">
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={item.type === 'Work' ? 'chip bg-white/12 text-white' : 'chip'}>
                          {item.type}
                        </span>
                        <span className="workspace-section-label">{item.durationLabel}</span>
                      </div>

                      <div className="space-y-2">
                        <h2 className="font-display text-3xl text-white">{item.title}</h2>
                        <p className="text-sm text-white/58">{item.subtitle}</p>
                      </div>

                      <p className="text-sm leading-7 text-white/68">{item.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={`${item.id}-${tag}`} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="workspace-section-label">details</p>
                      <div className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <div key={`${item.id}-${detail}`} className="code-line">
                            <span className="code-line-number">{detailIndex + 1}</span>
                            <span className="code-line-content">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
