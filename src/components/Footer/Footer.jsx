import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-dark-surface' : 'bg-navy'} text-cream py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Paradise Hotel</h3>
            <p className="text-sm text-gray-300">
              Experience luxury and comfort in the heart of paradise. Your perfect getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/booking" className="hover:text-gold transition-colors">Book a Room</a></li>
              <li><a href="/order" className="hover:text-gold transition-colors">Order Food</a></li>
              <li><a href="/policies" className="hover:text-gold transition-colors">Policies</a></li>
              <li><a href="/faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@paradisehotel.com</li>
              <li>📍 123 Paradise Ave, Resort City</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform">
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Paradise Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
