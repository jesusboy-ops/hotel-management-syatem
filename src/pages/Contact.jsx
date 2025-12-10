import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl shadow-xl">
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  isDarkMode ? 'bg-dark-surface text-cream' : 'bg-white text-navy'
                } focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  isDarkMode ? 'bg-dark-surface text-cream' : 'bg-white text-navy'
                } focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="6"
                className={`w-full px-4 py-3 rounded-lg ${
                  isDarkMode ? 'bg-dark-surface text-cream' : 'bg-white text-navy'
                } focus:outline-none focus:ring-2 focus:ring-gold`}
              />
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gold text-navy font-bold hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                📍 Address
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                123 Paradise Avenue<br />
                Resort City, RC 12345<br />
                Paradise Island
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                📞 Phone
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                +1 (555) 123-4567<br />
                +1 (555) 123-4568
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                📧 Email
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                info@paradisehotel.com<br />
                reservations@paradisehotel.com
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                🕐 Hours
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                24/7 Front Desk<br />
                Concierge: 6 AM - 11 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
