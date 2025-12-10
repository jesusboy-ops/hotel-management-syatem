import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ activeTab, setActiveTab, tabs }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`fixed left-0 top-0 w-64 h-screen ${isDarkMode ? 'bg-dark-surface' : 'bg-white'} shadow-xl p-6 overflow-y-auto z-40`}>
      <div className="mb-8">
        <h2 className={`text-2xl font-bold text-gold`}>Dashboard</h2>
      </div>
      
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
              activeTab === tab.id
                ? 'bg-gold text-navy font-semibold'
                : isDarkMode
                ? 'text-cream hover:bg-dark-bg'
                : 'text-navy hover:bg-cream'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
      
      {/* Logout Button */}
      <div className="mt-8 pt-8 border-t border-gray-600">
        <a
          href="/"
          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
            isDarkMode ? 'text-red-400 hover:bg-red-500/10' : 'text-red-600 hover:bg-red-50'
          }`}
        >
          <span className="text-xl">🚪</span>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
