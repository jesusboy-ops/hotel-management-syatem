import { useTheme } from '../../context/ThemeContext';

const RoomCard = ({ room, onBook }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group ${
      isDarkMode ? 'shadow-lg shadow-black/50' : 'shadow-xl'
    }`}>
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {!room.available && (
          <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold text-sm shadow-lg">
            Unavailable
          </div>
        )}
        
        {room.available && (
          <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-emerald text-white font-semibold text-sm shadow-lg">
            Available
          </div>
        )}

        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm">View Details →</p>
        </div>
      </div>
      
      {/* Room Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            {room.name}
          </h3>
          <div className="flex items-center gap-1">
            <span className="text-gold text-lg">★</span>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
              4.9
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            isDarkMode ? 'bg-dark-bg text-gold' : 'bg-gold/10 text-gold'
          }`}>
            {room.type}
          </span>
          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {room.size}
          </span>
          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            👥 {room.capacity}
          </span>
        </div>
        
        {/* Amenities */}
        <div className="mb-4">
          <p className={`text-xs font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            AMENITIES
          </p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  isDarkMode 
                    ? 'bg-emerald/20 text-emerald border border-emerald/30' 
                    : 'bg-emerald/10 text-emerald border border-emerald/20'
                }`}
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Starting from
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gold">₦{room.price.toLocaleString()}</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  /night
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => alert('Room details: ' + room.name)}
              className={`flex-1 px-4 py-3 font-semibold transition-all duration-300 border-2 ${
                isDarkMode 
                  ? 'border-gold text-gold hover:bg-gold hover:text-navy' 
                  : 'border-navy text-navy hover:bg-navy hover:text-white'
              }`}
            >
              View Details
            </button>
            <button 
              disabled={!room.available}
              onClick={() => onBook && onBook(room)}
              className={`flex-1 px-4 py-3 font-semibold transition-all duration-300 shadow-lg ${
                room.available 
                  ? 'bg-gold text-navy hover:scale-105 hover:shadow-xl cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              {room.available ? 'Book Now' : 'Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
