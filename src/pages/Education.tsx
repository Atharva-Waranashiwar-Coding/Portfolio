import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import { education } from '../lib/content';

function Education() {
  return (
    <div className="section-shell py-14 sm:py-16 lg:py-20">
      <PageIntro
        eyebrow="Education"
        title="Academic work framed as the systems foundation behind the portfolio."
        description="The coursework matters here because it supports the pitch: software engineering, cloud, AI, UX, algorithms, and information systems all reinforce the kind of work I want to be hired for."
      />

      <div className="mt-10 grid gap-6">
        {education.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 80} variant={index % 2 === 0 ? 'left' : 'right'}>
            <article className="code-card panel-hover">
              <div className="code-card-header">
                <span className="code-card-title">{entry.id}.module</span>
                <span className="section-note">{entry.durationLabel}</span>
              </div>

              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-display text-4xl text-white">
                      {entry.degree} in {entry.field}
                    </h2>
                    <p className="text-base text-white/62">{entry.school}</p>
                  </div>

                  <p className="text-sm leading-8 text-white/68">{entry.summary}</p>
                </div>

                <div className="space-y-4">
                  <p className="workspace-section-label">selected coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.courseworks.map((coursework) => (
                      <span key={`${entry.id}-${coursework}`} className="chip">
                        {coursework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Education;
