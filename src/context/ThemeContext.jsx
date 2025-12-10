import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#1a2332', // Deep Navy
    secondary: '#d4af37', // Gold
    accent: '#2d5f4f', // Emerald Green
    background: '#faf8f3', // Cream
    surface: '#ffffff',
    text: '#1a2332',
    textSecondary: '#5a6c7d',
    border: '#e5e1d8',
    error: '#d32f2f',
    success: '#2d5f4f',
    warning: '#f57c00',
  },
  shadows: {
    sm: '0 2px 4px rgba(26, 35, 50, 0.08)',
    md: '0 4px 12px rgba(26, 35, 50, 0.12)',
    lg: '0 8px 24px rgba(26, 35, 50, 0.16)',
    xl: '0 12px 40px rgba(26, 35, 50, 0.2)',
  },
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#d4af37', // Gold
    secondary: '#2d5f4f', // Emerald Green
    accent: '#faf8f3', // Cream
    background: '#0f1419',
    surface: '#1a2332',
    text: '#faf8f3',
    textSecondary: '#a8b2bc',
    border: '#2d3748',
    error: '#ef5350',
    success: '#66bb6a',
    warning: '#ffa726',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
    xl: '0 12px 40px rgba(0, 0, 0, 0.6)',
  },
  glassmorphism: {
    background: 'rgba(26, 35, 50, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
