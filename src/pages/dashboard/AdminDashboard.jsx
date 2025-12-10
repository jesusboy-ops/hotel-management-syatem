import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import { bookings, orders, analyticsData, staffingNeeds, auditLogs } from '../../utils/mockData';

const AdminDashboard = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'bookings', label: 'Bookings', icon: '🏨' },
    { id: 'orders', label: 'Orders', icon: '🍽️' },
    { id: 'pricing', label: 'Dynamic Pricing', icon: '💰' },
    { id: 'staffing', label: 'Staffing', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'audit', label: 'Audit Logs', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const stats = [
    { label: 'Total Bookings', value: '156', change: '+12%', icon: '🏨', color: 'bg-blue-500' },
    { label: 'Revenue', value: '₦18.5M', change: '+8%', icon: '💰', color: 'bg-green-500' },
    { label: 'Occupancy', value: '87%', change: '+5%', icon: '📊', color: 'bg-purple-500' },
    { label: 'Active Orders', value: '23', change: '+3', icon: '🍽️', color: 'bg-orange-500' },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="lg:ml-64 p-4 md:p-6 lg:p-8 pt-20 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              Admin Dashboard
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage your hotel operations and analytics
            </p>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center text-2xl`}>
                        {stat.icon}
                      </div>
                      <span className="text-green-500 font-semibold text-sm">{stat.change}</span>
                    </div>
                    <h3 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      {stat.value}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-2xl shadow-lg">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Recent Bookings
                  </h2>
                  <div className="space-y-3">
                    {bookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                              {booking.guestName}
                            </h4>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {booking.room}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed' ? 'bg-green-500 text-white' :
                            booking.status === 'pending' ? 'bg-yellow-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect p-6 rounded-2xl shadow-lg">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    Active Orders
                  </h2>
                  <div className="space-y-3">
                    {orders.filter(o => o.status !== 'delivered').map((order) => (
                      <div key={order.id} className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                              Room {order.room}
                            </h4>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {order.items.join(', ')}
                            </p>
                          </div>
                          <span className="text-gold font-bold">₦{order.total.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'bookings' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                All Bookings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>ID</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Guest</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Room</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Check-in</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Status</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{booking.id}</td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{booking.guestName}</td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{booking.room}</td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{booking.checkIn}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed' ? 'bg-green-500 text-white' :
                            booking.status === 'pending' ? 'bg-yellow-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 font-bold text-gold`}>₦{booking.totalAmount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Audit Logs
              </h2>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className={`p-4 rounded-lg border-l-4 border-gold ${
                    isDarkMode ? 'bg-dark-surface' : 'bg-white'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        {log.action}
                      </h4>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {log.details}
                    </p>
                    <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      By: {log.user}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Settings
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/50 dark:bg-dark-surface/50">
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      Dark Mode
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Toggle between light and dark theme
                    </p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      isDarkMode ? 'bg-gold text-navy' : 'bg-navy text-gold'
                    }`}
                  >
                    {isDarkMode ? '☀️ Light' : '🌙 Dark'}
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-white/50 dark:bg-dark-surface/50">
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      Two-Factor Authentication
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Add an extra layer of security
                    </p>
                  </div>
                  <button className="px-6 py-3 rounded-full bg-emerald text-white font-semibold">
                    Enable 2FA
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-white/50 dark:bg-dark-surface/50">
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      Notifications
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Manage email and push notifications
                    </p>
                  </div>
                  <button className="px-6 py-3 rounded-full bg-gold text-navy font-semibold">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
