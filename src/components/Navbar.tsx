import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: "Home", path: "/" },
  { name: "My Journey", path: "/myjourney" },
  { name: "Projects", path: "/projects" },
  { name: "Insights", path: "/blog" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-[#b00000] to-[#CA0000] shadow-md">
      <div className="flex h-20 items-center">

        {/* Red Section only for the Name */}
        <div className="flex items-center bg-[#100001] px-6 h-full clip-diagonal-right border-r-2 border-[#CA0000] w-1/3">
          <Link
            to="/"
            className="text-white text-2xl font-bold tracking-wide whitespace-nowrap font-display"
          >
            Atharva Waranashiwar
          </Link>
        </div>

        {/* Black Background - Navigation Links */}
        <div className="flex items-center gap-8 ml-auto pr-8 animate-fade-in">
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

      </div>
    </nav>
  );
}

export default Navbar;