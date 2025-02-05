import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSelector } from './ThemeSelector';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-lighter border-b border-card">
      <motion.div 
        className="h-1 bg-special"
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: '0%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        }}
      />
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="text-xl font-bold font-mono text-fg"
          >
            DevPortfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-special font-mono
                  ${location.pathname === item.path 
                    ? 'text-special' 
                    : 'text-fg-lighter'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ThemeSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-fg-lighter" />
              ) : (
                <Menu className="w-6 h-6 text-fg-lighter" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors hover:text-special font-mono
                    ${location.pathname === item.path 
                      ? 'text-special' 
                      : 'text-fg-lighter'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};