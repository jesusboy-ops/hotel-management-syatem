import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const BookingForm = ({ selectedRoom, onSubmit }) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl shadow-xl">
      <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
        {selectedRoom ? `Book ${selectedRoom.name}` : 'Book Your Stay'}
      </h3>

      <div className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream' 
                : 'bg-white border-gray-300 text-navy'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream' 
                : 'bg-white border-gray-300 text-navy'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream' 
                : 'bg-white border-gray-300 text-navy'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream placeholder-gray-500' 
                : 'bg-white border-gray-300 text-navy placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Email */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream placeholder-gray-500' 
                : 'bg-white border-gray-300 text-navy placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1 (555) 123-4567"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDarkMode 
                ? 'bg-dark-surface border-gray-600 text-cream placeholder-gray-500' 
                : 'bg-white border-gray-300 text-navy placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-lg bg-gold text-navy font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
