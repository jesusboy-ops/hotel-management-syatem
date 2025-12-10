import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    
    // Route to appropriate dashboard based on email
    const email = formData.email.toLowerCase();
    let dashboardRoute = '/dashboard/user'; // default
    
    if (email.includes('admin')) {
      dashboardRoute = '/dashboard/admin';
    } else if (email.includes('kitchen') || email.includes('orders')) {
      dashboardRoute = '/dashboard/orders';
    } else if (email.includes('reception')) {
      dashboardRoute = '/dashboard/reception';
    } else if (email.includes('demo')) {
      dashboardRoute = '/dashboard/user'; // demo can access any, default to user
    }
    
    alert(`Welcome! Redirecting to ${dashboardRoute.split('/').pop()} dashboard...`);
    navigate(dashboardRoute);
  };

  return (
    <div className={`min-h-screen pt-20 pb-16 px-6 flex items-center justify-center ${
      isDarkMode ? 'bg-dark-bg' : 'bg-cream'
    }`}>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-0 glass-effect rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side - Image */}
        <div className="relative hidden md:block h-full min-h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" 
            alt="Luxury Hotel"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
            <h2 className="text-5xl font-bold mb-6">
              Welcome to<br />Paradise Hotel
            </h2>
            <p className="text-xl mb-8 text-cream/90">
              Experience luxury and comfort like never before
            </p>
            <div className="space-y-3">
              {[
                'Exclusive member benefits',
                'Priority booking access',
                'Loyalty rewards program',
                'Personalized service',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-navy font-bold">✓</span>
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isSignUp ? 'Join us today' : 'Welcome back'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div>
                <label className={`block mb-2 font-medium text-sm ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required={isSignUp}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 ${
                    isDarkMode 
                      ? 'bg-dark-surface border-gray-600 text-cream' 
                      : 'bg-white border-gray-300 text-navy'
                  } border focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
                />
              </div>
            )}

            <div>
              <label className={`block mb-2 font-medium text-sm ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 ${
                  isDarkMode 
                    ? 'bg-dark-surface border-gray-600 text-cream' 
                    : 'bg-white border-gray-300 text-navy'
                } border focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
              />
            </div>

            <div>
              <label className={`block mb-2 font-medium text-sm ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                placeholder="••••••••"
                className={`w-full px-4 py-3 ${
                  isDarkMode 
                    ? 'bg-dark-surface border-gray-600 text-cream' 
                    : 'bg-white border-gray-300 text-navy'
                } border focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-gold" />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-gold hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gold text-navy font-bold text-lg hover:scale-105 transition-all shadow-xl"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gold font-semibold hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-4 ${isDarkMode ? 'bg-dark-surface text-gray-400' : 'bg-white text-gray-600'}`}>
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className={`px-4 py-3 border ${
                isDarkMode ? 'border-gray-600 hover:bg-dark-bg' : 'border-gray-300 hover:bg-gray-50'
              } font-semibold transition-all flex items-center justify-center gap-2`}>
                <span className="text-xl">G</span> Google
              </button>
              <button className={`px-4 py-3 border ${
                isDarkMode ? 'border-gray-600 hover:bg-dark-bg' : 'border-gray-300 hover:bg-gray-50'
              } font-semibold transition-all flex items-center justify-center gap-2`}>
                <span className="text-xl">f</span> Facebook
              </button>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className={`mt-6 p-4 rounded-lg ${
            isDarkMode ? 'bg-dark-bg/50 border border-gold/20' : 'bg-gold/5 border border-gold/20'
          }`}>
            <p className={`text-xs font-bold mb-3 text-gold text-center`}>
              🔐 Demo Credentials
            </p>
            <div className={`space-y-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex justify-between">
                <span className="font-semibold">User:</span>
                <span>user@paradisehotel.com / user2024</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Admin:</span>
                <span>admin@paradisehotel.com / admin@2024</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Kitchen:</span>
                <span>kitchen@paradisehotel.com / kitchen2024</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Reception:</span>
                <span>reception@paradisehotel.com / reception2024</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2 border-gold/20">
                <span className="font-semibold text-gold">Demo (All):</span>
                <span className="text-gold">demo@paradisehotel.com / demo123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
