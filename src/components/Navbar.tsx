import { CodeXml, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, resumePath } from '../lib/siteConfig';

function isActivePath(currentPath: string, targetPath: string) {
  if (targetPath === '/') {
    return currentPath === '/';
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,16,23,0.82)] backdrop-blur-2xl">
      <nav className="section-shell">
        <div className="flex h-20 items-center gap-6">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--accent-strong)]">
              <CodeXml size={18} />
            </div>
            <div className="min-w-0">
              <p className="font-code text-[0.72rem] uppercase tracking-[0.2em] text-[var(--accent-strong)]/82">~/atharva</p>
              <p className="font-display text-2xl text-white transition-colors duration-300 group-hover:text-[var(--accent-strong)]">
                builds web systems
              </p>
            </div>
          </Link>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(location.pathname, item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={[
                    'nav-link rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                    isActive ? 'nav-link-active bg-white/8 text-white' : 'text-white/62 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}

            <a href={resumePath} target="_blank" rel="noreferrer" className="button-secondary ml-2">
              resume.pdf
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="ml-auto rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="page-transition border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isActivePath(location.pathname, item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={[
                      'rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300',
                      isActive ? 'bg-white/8 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a href={resumePath} target="_blank" rel="noreferrer" className="button-secondary mt-2 w-full justify-center">
                resume.pdf
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Navbar;
