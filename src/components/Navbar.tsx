import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { NAV_ITEMS } from '../constants';
import { Moon, Sun, ChevronDown, CreditCard, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(prev => (prev === label ? null : label));
  };

  return (
    <nav 
      className={`fixed w-[95%] left-1/2 -translate-x-1/2 z-50 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'mt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
          : 'mt-4 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <CreditCard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                CrédiAr
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveSubmenu(item.label)}
                  onMouseLeave={() => item.children && setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  
                  {item.children && activeSubmenu === item.label && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 ease-in-out z-10">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 focus:outline-none transition-transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-b-2xl shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div 
                  className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => item.children && toggleSubmenu(item.label)}
                >
                  <a href={item.href}>{item.label}</a>
                  {item.children && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.children && activeSubmenu === item.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;