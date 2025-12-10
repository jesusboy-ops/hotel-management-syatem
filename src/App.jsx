import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Order from './pages/Order';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Policies from './pages/Policies';
import Login from './pages/Login';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import OrdersDashboard from './pages/dashboard/OrdersDashboard';
import ReceptionDashboard from './pages/dashboard/ReceptionDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          {/* Public routes with Navbar and Footer */}
          <Route path="/" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Home />
              <Footer />
            </div>
          } />
          <Route path="/booking" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Booking />
              <Footer />
            </div>
          } />
          <Route path="/order" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Order />
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Contact />
              <Footer />
            </div>
          } />
          <Route path="/faq" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <FAQ />
              <Footer />
            </div>
          } />
          <Route path="/policies" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Policies />
              <Footer />
            </div>
          } />
          <Route path="/login" element={
            <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-navy'}`}>
              <Navbar />
              <Login />
              <Footer />
            </div>
          } />
          
          {/* Dashboard routes without Navbar and Footer */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/orders" element={<OrdersDashboard />} />
          <Route path="/dashboard/reception" element={<ReceptionDashboard />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
