import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: "Home", path: "/" },
  { name: "Academics", path: "/education" },
  { name: "Experience", path: "/work" },
  { name: "Projects", path: "/projects" },
  { name: "Insights", path: "/blog" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#CA0000] shadow-md">
      <div className="flex h-20">

        {/* Red Section only for the Name */}
        <div className="flex items-center bg-[#100001] px-8 h-full clip-diagonal-right mr-8">
          <Link to="/" className="text-white text-2xl font-bold tracking-wide whitespace-nowrap">
            Atharva Waranashiwar &nbsp;&nbsp;        
          </Link>
        </div>

        {/* Black Background - Navigation Links */}
        <div className="flex items-center justify-right gap-8 pl-12 ml-auto mr-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-white font-medium text-lg pb-1 hover:after:w-full after:block after:content-[''] after:h-[2px] after:bg-white after:transition-all after:duration-300 after:w-0 after:mx-auto ${
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