import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass-effect ${isDarkMode ? 'shadow-lg shadow-black/50' : 'shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-gold' : 'text-navy'}`}>
            Paradise Hotel
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className={`hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Home</a>
            <a href="/booking" className={`hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Rooms</a>
            <a href="/order" className={`hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Order</a>
            <a href="/contact" className={`hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Contact</a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-all hover:scale-110 ${
                isDarkMode ? 'bg-gold text-navy' : 'bg-navy text-gold'
              }`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <a href="/login" className="px-6 rounded-[7px] py-2 bg-gold text-navy font-semibold hover:scale-105 transition-all">
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isDarkMode ? 'text-cream' : 'text-navy'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="/" className={`block hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Home</a>
            <a href="/booking" className={`block hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Rooms</a>
            <a href="/order" className={`block hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Order</a>
            <a href="/contact" className={`block hover:text-gold transition-colors ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Contact</a>
            <button
              onClick={toggleTheme}
              className="w-full text-left px-4 py-2 bg-gold text-navy font-semibold"
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <a href="/login" className="block w-full px-6 py-2 text-center bg-gold text-navy font-semibold">
              Sign In
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
