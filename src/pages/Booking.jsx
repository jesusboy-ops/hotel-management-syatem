import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { rooms } from '../utils/mockData';
import RoomCard from '../components/RoomCard/RoomCard';
import BookingForm from '../components/BookingForm/BookingForm';

const Booking = () => {
  const { isDarkMode } = useTheme();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type.toLowerCase() === filter);

  const handleBooking = (formData) => {
    console.log('Booking:', { room: selectedRoom, ...formData });
    alert('Booking confirmed! Check console for details.');
    setShowModal(false);
    setSelectedRoom(null);
  };

  const openBookingModal = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-5xl font-bold text-center mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
          Our Rooms & Suites
        </h1>
        <p className={`text-center text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Choose from our selection of luxurious accommodations
        </p>

        {/* Filter Bar */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
          {['all', 'suite', 'standard'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 font-semibold transition-all ${
                filter === type
                  ? 'bg-gold text-navy scale-105'
                  : isDarkMode
                  ? 'bg-dark-surface text-cream hover:bg-gold hover:text-navy'
                  : 'bg-white text-navy hover:bg-gold'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map(room => (
            <RoomCard 
              key={room.id} 
              room={room} 
              onBook={openBookingModal}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedRoom(null);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold hover:bg-red-600 transition-all"
            >
              ✕
            </button>
            <BookingForm 
              selectedRoom={selectedRoom}
              onSubmit={handleBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
