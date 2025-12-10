import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { menuItems } from '../utils/mockData';

const Lounge = () => {
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
        <h1 className={`text-5xl font-bold text-center mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
          Restaurant & Lounge
        </h1>
        <p className={`text-center text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Indulge in our exquisite culinary offerings
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'Appetizer', 'Main Course', 'Dessert'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                category === cat
                  ? 'bg-gold text-navy scale-105'
                  : isDarkMode
                  ? 'bg-dark-surface text-cream hover:bg-gold hover:text-navy'
                  : 'bg-white text-navy hover:bg-gold'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-gold">${item.price}</span>
                  </div>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-emerald text-white text-xs">
                      {item.dietary[0]}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 rounded-full bg-gold text-navy font-semibold hover:scale-105 transition-all"
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
            <div className="sticky top-24 glass-effect p-6 rounded-2xl shadow-xl">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Your Order
              </h3>
              
              {cart.length === 0 ? (
                <p className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div 
                        key={item.id}
                        className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-full bg-gold text-navy font-bold"
                            >
                              -
                            </button>
                            <span className={isDarkMode ? 'text-cream' : 'text-navy'}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-full bg-gold text-navy font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-gold font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-gold">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full py-4 rounded-lg bg-gold text-navy font-bold text-lg hover:scale-105 transition-all">
                      Place Order
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
