import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" 
          alt="Luxury Hotel"
          className="w-full h-full object-cover animate-zoom-in"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-4xl">
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 text-shadow animate-fade-in-up ${
          isDarkMode ? 'text-cream' : 'text-cream'
        }`}>
          Welcome to Paradise
        </h1>
        <p className={`text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up animation-delay-200 ${
          isDarkMode ? 'text-cream' : 'text-cream'
        }`}>
          Experience luxury redefined in our world-class hotel
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <button 
            onClick={() => navigate('/booking')}
            className="px-10 py-4 text-lg font-semibold rounded-full bg-gold text-navy hover:scale-105 hover:shadow-2xl transition-all duration-300 uppercase tracking-wider"
          >
            Book Now
          </button>
          <button 
            onClick={() => navigate('/booking')}
            className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-cream text-cream hover:scale-105 hover:bg-white/10 transition-all duration-300 uppercase tracking-wider"
          >
            Explore Rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
