import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { testimonials } from '../../utils/mockData';

const TestimonialsCarousel = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-16 px-8 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <h2 className={`text-center text-4xl md:text-5xl font-bold mb-12 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
        What Our Guests Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect p-12 rounded-3xl shadow-2xl transition-all duration-500">
          <div className="text-5xl text-gold mb-6">
            {''.repeat(testimonials[currentIndex].rating)}
          </div>
          <p className={`text-xl md:text-2xl leading-relaxed mb-8 italic ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            "{testimonials[currentIndex].text}"
          </p>
          <div>
            <h4 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              {testimonials[currentIndex].name}
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {new Date(testimonials[currentIndex].date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex ? 'bg-gold w-8' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
