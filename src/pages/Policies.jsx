import { useTheme } from '../context/ThemeContext';

const Policies = () => {
  const { isDarkMode } = useTheme();

  const policies = [
    {
      title: 'Check-in & Check-out',
      content: [
        'Check-in time: 3:00 PM',
        'Check-out time: 11:00 AM',
        'Early check-in and late check-out subject to availability',
        'Valid photo ID and credit card required at check-in',
      ],
    },
    {
      title: 'Cancellation Policy',
      content: [
        'Free cancellation up to 48 hours before arrival',
        'Cancellations within 48 hours: one night charge',
        'No-shows will be charged the full reservation amount',
        'Special rates may have different cancellation policies',
      ],
    },
    {
      title: 'Payment Policy',
      content: [
        'We accept all major credit cards',
        'Payment is required at time of booking',
        'Additional charges will be billed to your room',
        'Final bill must be settled at check-out',
      ],
    },
    {
      title: 'Pet Policy',
      content: [
        'Pets up to 25 lbs are welcome',
        'Additional fee: $50 per night',
        'Maximum 2 pets per room',
        'Pets must be supervised at all times',
      ],
    },
    {
      title: 'Smoking Policy',
      content: [
        'All rooms and indoor areas are non-smoking',
        'Designated smoking areas available outdoors',
        'Smoking violation fee: $250',
        'Vaping is also prohibited indoors',
      ],
    },
    {
      title: 'Guest Conduct',
      content: [
        'Quiet hours: 10:00 PM - 7:00 AM',
        'Respect other guests and staff',
        'No parties or events without prior approval',
        'Hotel reserves the right to remove disruptive guests',
      ],
    },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-5xl font-bold text-center mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
          Hotel Policies
        </h1>
        <p className={`text-center text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Please review our policies to ensure a pleasant stay
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h2 className={`text-2xl font-bold mb-4 text-gold`}>
                {policy.title}
              </h2>
              <ul className="space-y-2">
                {policy.content.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <span className="text-emerald mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-12 glass-effect p-8 rounded-2xl shadow-xl text-center`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
            Questions About Our Policies?
          </h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our team is here to help. Contact us anytime for clarification.
          </p>
          <button className="px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:scale-105 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Policies;
