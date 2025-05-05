import React, { useState, useEffect } from "react";
import { Droplet, Home, Settings, Menu, X, Droplets } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/cropdatabase");
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold">Irrigo</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              icon={<Home size={18} />}
              href="/dashboard"
              label="Dashboard"
              active={currentPath === "/dashboard"}
            />
            <NavLink
              icon={<Droplet size={18} />}
              href="/viewmore"
              label="View More"
              active={currentPath === "/viewmore"}
            />
            <NavLink
              icon={<Settings size={18} />}
              href="/cropdatabase"
              label="Crop Settings"
              active={currentPath === "/cropdatabase"}
            />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-slate-800 py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLink
              icon={<Home size={18} />}
              href="/dashboard"
              label="Dashboard"
              active
            />
            <MobileNavLink
              icon={<Droplet size={18} />}
              href="/viewmore"
              label="View More"
            />
            <MobileNavLink
              icon={<Settings size={18} />}
              href="/cropdatabase"
              label="Crop Settings"
            />
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ icon, href, label, active }) => {
  return (
    // <a
    //   href={href}
    //   className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
    //     active
    //       ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400"
    //       : "hover:bg-slate-800/80 text-slate-300 hover:text-white"
    //   }`}
    // >
    //   {icon}
    //   <span>{label}</span>
    // </a>
    <Link
      to={href}
      className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400"
          : "hover:bg-slate-800/80 text-slate-300 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNavLink = ({ icon, href, label, active }) => {
  return (
    <a
      href={href}
      className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400"
          : "text-slate-300 hover:bg-slate-700"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default Header;
