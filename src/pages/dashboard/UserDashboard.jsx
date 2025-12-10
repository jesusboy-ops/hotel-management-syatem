import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import { bookings } from '../../utils/mockData';

const UserDashboard = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'bookings', label: 'My Bookings', icon: '🏨' },
    { id: 'checkin', label: 'Check-In', icon: '✈️' },
    { id: 'orders', label: 'My Orders', icon: '🍽️' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'rewards', label: 'Rewards', icon: '🎁' },
  ];

  const userBookings = bookings.filter(b => b.guestName === 'Michael Brown');
  const upcomingBooking = bookings[0];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              Welcome Back, Michael! 👋
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Here's what's happening with your account
            </p>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Active Bookings', value: '2', icon: '🏨', color: 'bg-blue-500' },
                  { label: 'Reward Points', value: '2,450', icon: '🎁', color: 'bg-purple-500' },
                  { label: 'Total Spent', value: '₦785K', icon: '💰', color: 'bg-green-500' },
                  { label: 'Member Since', value: '2023', icon: '⭐', color: 'bg-gold' },
                ].map((stat, index) => (
                  <div key={index} className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center text-2xl`}>
                        {stat.icon}
                      </div>
                    </div>
                    <h3 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      {stat.value}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Upcoming Stay */}
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 glass-effect p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      Upcoming Stay
                    </h2>
                    <span className="px-4 py-2 rounded-lg bg-emerald text-white font-semibold text-sm">
                      Confirmed
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" 
                        alt="Room"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        {upcomingBooking.room}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Booking ID: {upcomingBooking.id}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                        <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Check-in
                        </p>
                        <p className={`text-lg font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {upcomingBooking.checkIn}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          After 3:00 PM
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                        <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Check-out
                        </p>
                        <p className={`text-lg font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {upcomingBooking.checkOut}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          Before 11:00 AM
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                        <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Guests
                        </p>
                        <p className={`text-lg font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {upcomingBooking.guests} Adults
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 py-3 bg-gold text-navy font-semibold hover:scale-105 transition-all">
                      View Details
                    </button>
                    <button className={`flex-1 py-3 font-semibold hover:scale-105 transition-all border-2 ${
                      isDarkMode ? 'border-cream text-cream' : 'border-navy text-navy'
                    }`}>
                      Modify Booking
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <div className="glass-effect p-6 rounded-2xl shadow-lg">
                    <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: '🔑', label: 'Digital Key', desc: 'Access your room' },
                        { icon: '🍽️', label: 'Order Food', desc: 'Room service' },
                        { icon: '💆', label: 'Book Spa', desc: 'Wellness center' },
                        { icon: '🚗', label: 'Valet Service', desc: 'Request pickup' },
                      ].map((action, index) => (
                        <button
                          key={index}
                          className={`w-full p-4 rounded-xl text-left hover:scale-105 transition-all ${
                            isDarkMode ? 'bg-dark-surface hover:bg-dark-bg' : 'bg-white hover:bg-cream'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{action.icon}</span>
                            <div>
                              <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                                {action.label}
                              </p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {action.desc}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-effect p-6 rounded-2xl shadow-lg">
                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {[
                    { action: 'Booking Confirmed', detail: 'Deluxe Ocean Suite', time: '2 hours ago', icon: '✅' },
                    { action: 'Reward Points Earned', detail: '+250 points', time: '1 day ago', icon: '🎁' },
                    { action: 'Room Service Order', detail: 'Breakfast delivered', time: '2 days ago', icon: '🍽️' },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl flex items-center justify-between ${
                        isDarkMode ? 'bg-dark-surface' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl">
                          {activity.icon}
                        </div>
                        <div>
                          <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                            {activity.action}
                          </p>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {activity.detail}
                          </p>
                        </div>
                      </div>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                My Bookings
              </h2>
              {userBookings.map((booking) => (
                <div key={booking.id} className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-102 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300" 
                      alt="Room"
                      className="w-full md:w-48 h-48 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                            {booking.room}
                          </h3>
                          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Booking ID: {booking.id}
                          </p>
                        </div>
                        <span className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold">
                          {booking.status}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Check-in</p>
                          <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>{booking.checkIn}</p>
                        </div>
                        <div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Check-out</p>
                          <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>{booking.checkOut}</p>
                        </div>
                        <div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Guests</p>
                          <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>{booking.guests}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-600">
                        <span className="text-2xl font-bold text-gold">${booking.totalAmount}</span>
                        <div className="flex gap-2">
                          <button className="px-6 py-2 bg-gold text-navy font-semibold hover:scale-105 transition-all">
                            View Details
                          </button>
                          <button className="px-6 py-2 bg-red-500 text-white font-semibold hover:scale-105 transition-all">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'checkin' && (
            <div className="glass-effect p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Online Check-in
              </h2>
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                  <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Step 1: Verify Booking
                  </h3>
                  <input
                    type="text"
                    placeholder="Enter Booking ID (e.g., BK001)"
                    defaultValue="BK001"
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? 'bg-dark-bg text-cream border-gray-600' : 'bg-cream text-navy border-gray-300'
                    } border focus:ring-2 focus:ring-gold`}
                  />
                </div>
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                  <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Step 2: Estimated Arrival Time
                  </h3>
                  <input
                    type="time"
                    defaultValue="15:00"
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? 'bg-dark-bg text-cream border-gray-600' : 'bg-cream text-navy border-gray-300'
                    } border focus:ring-2 focus:ring-gold`}
                  />
                </div>
                <button 
                  onClick={() => alert('Check-in completed successfully! Your digital key will be available 2 hours before arrival.')}
                  className="w-full py-4 bg-gold text-navy font-bold text-lg hover:scale-105 transition-all shadow-xl"
                >
                  Complete Check-in
                </button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                My Orders
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: 'ORD001', items: ['Grilled Salmon', 'Caesar Salad'], status: 'Delivered', time: '2 hours ago', total: 26000 },
                  { id: 'ORD002', items: ['Wagyu Steak'], status: 'Preparing', time: '30 mins ago', total: 35000 },
                  { id: 'ORD003', items: ['Chocolate Lava Cake'], status: 'Delivered', time: '1 day ago', total: 9000 },
                ].map((order, index) => (
                  <div key={index} className="glass-effect p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {order.id}
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {order.time}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Items:
                      </p>
                      <ul className="space-y-1">
                        {order.items.map((item, i) => (
                          <li key={i} className={isDarkMode ? 'text-cream' : 'text-navy'}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-600">
                      <span className="text-2xl font-bold text-gold">₦{order.total.toLocaleString()}</span>
                      <button 
                        onClick={() => alert('Reordering: ' + order.items.join(', '))}
                        className="px-4 py-2 bg-gold text-navy font-semibold hover:scale-105 transition-all"
                      >
                        Reorder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="glass-effect p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Profile Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Michael Brown"
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? 'bg-dark-surface text-cream border-gray-600' : 'bg-white text-navy border-gray-300'
                    } border focus:ring-2 focus:ring-gold`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="michael.brown@email.com"
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? 'bg-dark-surface text-cream border-gray-600' : 'bg-white text-navy border-gray-300'
                    } border focus:ring-2 focus:ring-gold`}
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+234 801 234 5678"
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? 'bg-dark-surface text-cream border-gray-600' : 'bg-white text-navy border-gray-300'
                    } border focus:ring-2 focus:ring-gold`}
                  />
                </div>
                <button 
                  onClick={() => alert('Profile updated successfully!')}
                  className="w-full py-4 bg-gold text-navy font-bold text-lg hover:scale-105 transition-all shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl shadow-lg text-center">
                <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Your Reward Points
                </h2>
                <p className="text-7xl font-bold text-gold mb-4">2,450</p>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  You're 550 points away from your next reward!
                </p>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-6">
                  <div className="bg-gold h-4 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { reward: 'Free Night Stay', points: 5000, icon: '🏨' },
                  { reward: 'Spa Treatment', points: 2000, icon: '💆' },
                  { reward: 'Room Upgrade', points: 1500, icon: '⬆️' },
                  { reward: 'Fine Dining', points: 1000, icon: '🍽️' },
                  { reward: 'Airport Transfer', points: 800, icon: '🚗' },
                  { reward: '$50 Credit', points: 500, icon: '💰' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all shadow-lg text-center"
                  >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      {item.reward}
                    </h3>
                    <p className="text-gold font-bold text-xl mb-4">{item.points} pts</p>
                    <button className={`w-full py-2 font-semibold ${
                      item.points <= 2450 
                        ? 'bg-gold text-navy hover:scale-105' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-all`}>
                      {item.points <= 2450 ? 'Redeem' : 'Locked'}
                    </button>
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

export default UserDashboard;
