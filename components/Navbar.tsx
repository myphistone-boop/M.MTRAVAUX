import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Prioritize saved theme, but default to 'light' instead of system preference
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Interventions', path: '/interventions' },
    { name: 'Gros Œuvre', path: '/gros-oeuvre' },
    { name: 'Avis', path: '/avis' },
    { name: 'À Propos', path: '/a-propos' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Background is immediate, shadow and padding are animated
  const navbarClasses = isScrolled || isMobileMenuOpen
    ? 'bg-white dark:bg-neutral-900 shadow-md py-3' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[padding,box-shadow] duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
            <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center">
              <Icons.Electric className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-white leading-none">{COMPANY_INFO.name}</span>
              <span className="text-[8px] tracking-[0.2em] text-accent uppercase font-medium mt-1">Électricien</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-accent transition-colors relative py-1 ${
                  location.pathname === link.path ? 'text-accent' : 'text-primary dark:text-gray-300'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 text-primary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
              {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
            <Link to="/devis" className="px-5 py-2.5 bg-primary dark:bg-accent text-white dark:text-primary text-xs font-bold uppercase rounded-full shadow-lg hover:scale-105 transition-transform">
              Devis
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 text-primary dark:text-white">
              {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-primary dark:text-white">
              <Icons.Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-neutral-950 z-[60] transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col`}>
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-accent rounded-xl flex items-center justify-center">
              <Icons.Electric className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-primary dark:text-white">{COMPANY_INFO.name}</span>
          </div>
          <button onClick={closeMenu} className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-primary dark:text-white">
            <Icons.Close size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-neutral-950">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={closeMenu} className="block text-2xl font-display font-bold text-primary dark:text-white border-b dark:border-neutral-800 pb-4">
              {link.name}
            </Link>
          ))}
          <Link to="/devis" onClick={closeMenu} className="block w-full py-5 bg-primary dark:bg-accent text-white dark:text-primary text-center font-bold rounded-xl shadow-xl mt-8">
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
};