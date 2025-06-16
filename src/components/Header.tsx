import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Compass, HelpCircle } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { mascot } = useMascot();

  const getMascotEmoji = () => {
    switch (mascot) {
      case 'penny': return '🦉';
      case 'coiny': return '🐷';
      case 'foxy': return '🦊';
      case 'leo': return '🦁';
      case 'bella': return '🐝';
      case 'rocky': return '🦝';
      case 'luna': return '🐺';
      case 'max': return '🐯';
      default: return '🦉';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-gradient-to-r from-blue-600 to-blue-500 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
              <span className="text-xl">{getMascotEmoji()}</span>
            </div>
            <h1
              className={`font-bold text-xl md:text-2xl ${
                scrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              Educa$mart
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" text="Início" icon={<Home size={18} />} scrolled={scrolled} />
            <NavLink to="/classes" text="Aulas" icon={<BookOpen size={18} />} scrolled={scrolled} />
            <NavLink to="/resources" text="Recursos" icon={<Compass size={18} />} scrolled={scrolled} />
            <NavLink to="#help" text="Ajuda" icon={<HelpCircle size={18} />} scrolled={scrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"
            aria-label="Alternar menu"
          >
            {isMenuOpen ? (
              <X size={24} className={scrolled ? 'text-blue-600' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-blue-600' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" text="Início" icon={<Home size={18} />} closeMenu={closeMenu} />
              <MobileNavLink to="/classes" text="Aulas" icon={<BookOpen size={18} />} closeMenu={closeMenu} />
              <MobileNavLink to="/resources" text="Recursos" icon={<Compass size={18} />} closeMenu={closeMenu} />
              <MobileNavLink to="#help" text="Ajuda" icon={<HelpCircle size={18} />} closeMenu={closeMenu} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
  scrolled: boolean;
}

const NavLink = ({ to, text, icon, scrolled }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 py-2 px-1 border-b-2 transition-all ${
        isActive
          ? scrolled
            ? 'border-blue-600 text-blue-600'
            : 'border-white text-white'
          : scrolled
            ? 'border-transparent text-gray-600 hover:border-blue-300 hover:text-blue-600'
            : 'border-transparent text-blue-100 hover:border-blue-200 hover:text-white'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  text: string;
  icon: React.ReactNode;
  closeMenu: () => void;
}

const MobileNavLink = ({ to, text, icon, closeMenu }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-6 py-3 ${
        isActive
          ? 'bg-blue-50 text-blue-600 font-medium'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
      onClick={closeMenu}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Header;