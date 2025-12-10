import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import { orders } from '../../utils/mockData';

const OrdersDashboard = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('active');
  const [orderList, setOrderList] = useState(orders);

  const tabs = [
    { id: 'active', label: 'Active Orders', icon: '🔥' },
    { id: 'past', label: 'Past Orders', icon: '📋' },
    { id: 'menu', label: 'Menu Management', icon: '📝' },
  ];

  const updateOrderStatus = (orderId, newStatus) => {
    setOrderList(orderList.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const activeOrders = orderList.filter(o => o.status !== 'delivered');
  const pastOrders = orderList.filter(o => o.status === 'delivered');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              Orders Dashboard
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Manage and track all food & beverage orders
            </p>
          </div>

          {activeTab === 'active' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Active Orders ({activeOrders.length})
                </h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold">
                    Pending
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold">
                    Preparing
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold">
                    Ready
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeOrders.map((order) => (
                  <div key={order.id} className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          {order.id}
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Room {order.room}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'pending' ? 'bg-yellow-500 text-white' :
                        order.status === 'preparing' ? 'bg-blue-500 text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        Items:
                      </h4>
                      <ul className={`space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {order.items.map((item, index) => (
                          <li key={index} className="text-sm">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {new Date(order.time).toLocaleTimeString()}
                      </span>
                      <span className="text-gold font-bold text-lg">₦{order.total.toLocaleString()}</span>
                    </div>

                    <div className="flex gap-2">
                      {order.status === 'pending' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          className="flex-1 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
                        >
                          Start Preparing
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
                        >
                          Mark Delivered
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'past' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Past Orders
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Order ID</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Room</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Items</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Time</th>
                      <th className={`text-left py-3 px-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastOrders.map((order) => (
                      <tr key={order.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{order.id}</td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{order.room}</td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {order.items.join(', ')}
                        </td>
                        <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {new Date(order.time).toLocaleString()}
                        </td>
                        <td className={`py-3 px-4 font-bold text-gold`}>₦{order.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="glass-effect p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Menu Management
                </h2>
                <button className="px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:scale-105 transition-all">
                  Add New Item
                </button>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Menu management interface coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersDashboard;
