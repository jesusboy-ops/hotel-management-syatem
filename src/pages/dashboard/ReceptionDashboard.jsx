import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import { bookings } from '../../utils/mockData';

const ReceptionDashboard = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('calendar');

  const tabs = [
    { id: 'calendar', label: 'Booking Calendar', icon: '📅' },
    { id: 'checkin', label: 'Check-ins', icon: '✅' },
    { id: 'checkout', label: 'Check-outs', icon: '🚪' },
    { id: 'requests', label: 'Guest Requests', icon: '🔔' },
  ];

  const todayCheckIns = bookings.filter(b => b.status === 'confirmed');
  const currentGuests = bookings.filter(b => b.status === 'checked-in');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="lg:ml-64 p-4 md:p-6 lg:p-8 pt-20 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              Reception Dashboard
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage guest check-ins, check-outs, and requests
            </p>
          </div>

          {activeTab === 'calendar' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-2xl">
                      ✅
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    {todayCheckIns.length}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Today's Check-ins
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald flex items-center justify-center text-2xl">
                      👥
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    {currentGuests.length}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Current Guests
                  </p>
                </div>
                <div className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-2xl">
                      🏨
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    12
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Available Rooms
                  </p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-2xl shadow-lg">
                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  All Bookings
                </h2>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-surface' : 'bg-white'} hover:scale-102 transition-all`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                            {booking.guestName}
                          </h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {booking.room} • {booking.guests} guests
                          </p>
                          <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {booking.checkIn} → {booking.checkOut}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed' ? 'bg-green-500 text-white' :
                            booking.status === 'pending' ? 'bg-yellow-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {booking.status}
                          </span>
                          <p className="text-gold font-bold mt-2">₦{booking.totalAmount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'checkin' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Today's Check-ins
              </h2>
              <div className="space-y-4">
                {todayCheckIns.map((booking) => (
                  <div key={booking.id} className={`p-6 rounded-lg ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {booking.guestName}
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {booking.room} • Check-in: {booking.checkIn}
                        </p>
                      </div>
                      <button 
                        onClick={() => alert(`Guest ${booking.guestName} checked in successfully!`)}
                        className="px-6 py-3 bg-gold text-navy font-semibold hover:scale-105 transition-all"
                      >
                        Check In
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Guest Requests
              </h2>
              <div className="space-y-4">
                {[
                  { room: '305', request: 'Extra towels needed', time: '10 mins ago', priority: 'low' },
                  { room: '512', request: 'Room service - breakfast', time: '25 mins ago', priority: 'high' },
                  { room: '208', request: 'AC not working properly', time: '1 hour ago', priority: 'high' },
                ].map((req, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    req.priority === 'high' ? 'border-red-500' : 'border-yellow-500'
                  } ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className={`font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          Room {req.room}
                        </h4>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {req.request}
                        </p>
                        <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          {req.time}
                        </p>
                      </div>
                      <button 
                        onClick={() => alert('Request resolved successfully!')}
                        className="px-4 py-2 bg-emerald text-white font-semibold hover:scale-105 transition-all"
                      >
                        Resolve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceptionDashboard;
