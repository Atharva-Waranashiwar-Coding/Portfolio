import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactLinks, navItems, resumePath } from '../lib/siteConfig';

function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="terminal-panel">
        <div className="workspace-bar">
          <div className="workspace-dots">
            <span className="workspace-dot" />
            <span className="workspace-dot" />
            <span className="workspace-dot" />
          </div>
          <span className="workspace-title">footer/contact.ts</span>
        </div>

        <div className="terminal-body">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <span className="eyebrow">Available for strong engineering teams</span>
              <div className="space-y-3">
                <p className="font-display text-3xl text-white sm:text-4xl">
                  Code-first portfolio. Product-aware execution.
                </p>
                <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Web development, backend systems, AI-enabled product work, and cloud/platform delivery all stay visible here because that combination is the actual pitch.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-white/72">
              <a href={`mailto:${contactLinks.email}`} className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <Mail size={16} />
                {contactLinks.email}
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-white/55">
                <MapPin size={16} />
                {contactLinks.location}
              </span>
              <a href={resumePath} target="_blank" rel="noreferrer" className="button-secondary mt-2 w-fit">
                resume.pdf
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="font-code transition-colors duration-300 hover:text-white/80">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="font-code">© {new Date().getFullYear()} Atharva Waranashiwar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
