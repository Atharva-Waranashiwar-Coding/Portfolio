import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // if using lucide-react, or replace with svg

const navItems = [
  { name: "Home", path: "/" },
  { name: "My Journey", path: "/myjourney" },
  { name: "Projects", path: "/projects" },
  { name: "Insights", path: "/blog" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#b00000] to-[#CA0000] shadow-md">
      <div className="flex h-20 items-center px-6">

        {/* Left Section */}
        <div className="flex items-center bg-[#100001] h-full clip-diagonal-right border-r-2 border-[#CA0000] px-4 sm:px-6 w-[65%] sm:w-1/3 min-w-[180px]">
          <Link
            to="/"
            className="text-white text-lg sm:text-2xl font-bold tracking-wide whitespace-nowrap font-display"
          >
            Atharva Waranashiwar
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto pr-8 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-white font-semibold text-[18px] pb-1 whitespace-nowrap hover:-translate-y-1 hover:text-gray-200 transition-all duration-300 after:block after:content-[''] after:h-[2px] after:bg-white after:transition-all after:duration-300 after:w-0 hover:after:w-full after:mx-auto ${
                location.pathname === item.path ? 'after:w-full' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto pr-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-[#1a1a1a] md:hidden animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)} // close menu after click
              className={`w-full text-center py-4 text-white font-semibold text-lg border-b border-[#CA0000] ${
                location.pathname === item.path ? 'bg-[#ca0000]/30' : 'hover:bg-[#ca0000]/20'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;