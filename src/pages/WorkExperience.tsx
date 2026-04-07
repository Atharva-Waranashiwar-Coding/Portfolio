import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import { workExperience } from '../lib/content';

function WorkExperience() {
  return (
    <div className="section-shell py-14 sm:py-16 lg:py-20">
      <PageIntro
        eyebrow="Experience"
        title="Professional experience shown like a build log, not a generic resume page."
        description="The work history highlights application engineering, system architecture, AI feature work, and cloud-backed delivery with enough detail to show what was actually built."
      />

      <div className="mt-10 grid gap-6">
        {workExperience.map((role, index) => (
          <Reveal key={role.id} delay={index * 70} variant={index % 2 === 0 ? 'left' : 'right'}>
            <article className="terminal-panel">
              <div className="workspace-bar">
                <div className="workspace-dots">
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                </div>
                <span className="workspace-title">{role.id}.log</span>
              </div>

              <div className="grid gap-8 p-8 sm:p-10 xl:grid-cols-[1.05fr,0.95fr]">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="workspace-section-label">{role.durationLabel}</p>
                    <h2 className="font-display text-4xl text-white">{role.position}</h2>
                    <p className="text-base text-white/62">{role.company}</p>
                  </div>

                  <div className="space-y-3">
                    {role.description.map((detail, detailIndex) => (
                      <div key={`${role.id}-${detail}`} className="code-line">
                        <span className="code-line-number">{detailIndex + 1}</span>
                        <span className="code-line-content">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="workspace-section-label">applied capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span key={`${role.id}-${skill}`} className="chip">
                        {skill}
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

export default WorkExperience;
