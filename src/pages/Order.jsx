import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { menuItems } from '../utils/mockData';

const Order = () => {
  const { isDarkMode } = useTheme();
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');

  const filteredItems = category === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart(cart.map(i => {
      if (i.id === itemId) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Order Food & Beverages
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Indulge in our exquisite culinary offerings delivered to your room
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'Appetizer', 'Main Course', 'Dessert'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 font-semibold transition-all shadow-lg ${
                category === cat
                  ? 'bg-gold text-navy scale-105'
                  : isDarkMode
                  ? 'bg-dark-surface text-cream hover:bg-gold hover:text-navy'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Items' : cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-gold text-navy font-semibold text-sm shadow-lg">
                    {item.category}
                  </div>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-gold">₦{item.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-emerald/20 text-emerald border border-emerald/30' 
                          : 'bg-emerald/10 text-emerald border border-emerald/20'
                      }`}>
                        {item.dietary[0]}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-gold">★</span>
                        <span className={`text-sm font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                          4.8
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-5 py-2 bg-gold text-navy font-semibold hover:scale-105 transition-all shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 glass-effect p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Your Order
                </h3>
                <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </div>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your cart is empty
                  </p>
                  <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Add items to get started
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div 
                        key={item.id}
                        className={`p-4 rounded-xl ${isDarkMode ? 'bg-dark-surface' : 'bg-white'} shadow-md`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h4 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                              {item.name}
                            </h4>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              ₦{item.price.toLocaleString()} each
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 font-bold text-lg"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-gold text-navy font-bold hover:scale-110 transition-all"
                            >
                              -
                            </button>
                            <span className={`font-semibold min-w-[20px] text-center ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-gold text-navy font-bold hover:scale-110 transition-all"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-gold font-bold text-lg">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Subtotal
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        ₦{total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Service Fee
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        ₦{(total * 0.1).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-300 dark:border-gray-600">
                      <span className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        Total
                      </span>
                      <span className="text-2xl font-bold text-gold">
                        ₦{(total * 1.1).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 bg-gold text-navy font-bold text-lg hover:scale-105 transition-all shadow-xl">
                    Place Order
                  </button>
                  <p className={`text-xs text-center mt-3 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Estimated delivery: 30-45 minutes
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
