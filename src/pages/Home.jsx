import HeroBanner from '../components/HeroBanner/HeroBanner';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={isDarkMode ? 'bg-dark-bg' : 'bg-cream'}>
      <HeroBanner />
      
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-cream' : 'text-navy'
          }`}>
            About Paradise Hotel
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800" 
                alt="Hotel Lobby"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl">
                <p className="text-4xl font-bold text-gold">25+</p>
                <p className={`text-sm ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Years Experience</p>
              </div>
            </div>
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Welcome to Paradise Hotel, where luxury meets comfort. Nestled in the heart of paradise, 
                our world-class hotel offers an unforgettable experience with stunning ocean views, 
                exceptional service, and premium amenities.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Whether you're here for business or leisure, our dedicated team ensures every moment 
                of your stay is perfect. From our elegant suites to our award-winning restaurants, 
                every detail is crafted with you in mind.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gold text-navy font-semibold hover:scale-105 transition-all shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 px-6 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Luxury Rooms' },
              { number: '50K+', label: 'Happy Guests' },
              { number: '15+', label: 'Restaurants' },
              { number: '4.9', label: 'Guest Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold text-gold mb-2">{stat.number}</h3>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={`py-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-cream' : 'text-navy'
          }`}>
            Our Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏊', title: 'Infinity Pool', desc: 'Stunning rooftop pool with panoramic views' },
              { icon: '🍽️', title: 'Fine Dining', desc: 'Award-winning restaurants and bars' },
              { icon: '💆', title: 'Luxury Spa', desc: 'World-class spa and wellness center' },
              { icon: '🏋️', title: 'Fitness Center', desc: 'State-of-the-art gym facilities' },
              { icon: '🎯', title: 'Concierge', desc: '24/7 personalized concierge service' },
              { icon: '🚗', title: 'Valet Parking', desc: 'Complimentary valet parking service' },
            ].map((item, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  {item.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isDarkMode ? 'text-cream' : 'text-navy'
          }`}>
            Special Offers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-3xl">
                  🎉
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Early Bird Special
                  </h3>
                  <p className="text-gold font-semibold">Save up to 30%</p>
                </div>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Book 60 days in advance and enjoy exclusive discounts on all room types.
              </p>
              <button 
                onClick={() => navigate('/booking')}
                className="px-6 py-3 bg-gold text-navy font-semibold hover:scale-105 transition-all"
              >
                Book Now
              </button>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-emerald flex items-center justify-center text-3xl">
                  💑
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Romantic Getaway
                  </h3>
                  <p className="text-emerald font-semibold">Complimentary Spa</p>
                </div>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Perfect for couples. Includes champagne, roses, and couples massage.
              </p>
              <button 
                onClick={() => navigate('/booking')}
                className="px-6 py-3 bg-emerald text-white font-semibold hover:scale-105 transition-all"
              >
                View Package
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl shadow-2xl">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Ready for Your Dream Vacation?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Book your stay today and experience luxury like never before
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/booking')}
              className="px-10 py-4 bg-gold text-navy font-bold text-lg hover:scale-105 transition-all shadow-lg"
            >
              Book Your Stay
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className={`px-10 py-4 font-bold text-lg hover:scale-105 transition-all border-2 ${
                isDarkMode ? 'border-cream text-cream' : 'border-navy text-navy'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
