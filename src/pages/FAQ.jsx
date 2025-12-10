import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const FAQ = () => {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability.',
    },
    {
      question: 'Do you offer airport transportation?',
      answer: 'Yes, we provide complimentary airport shuttle service. Please inform us of your arrival details at least 24 hours in advance.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we offer complimentary valet parking for all our guests. Self-parking is also available.',
    },
    {
      question: 'Are pets allowed?',
      answer: 'Yes, we are a pet-friendly hotel. We welcome pets up to 25 lbs with a small additional fee. Please inform us in advance.',
    },
    {
      question: 'What amenities are included?',
      answer: 'All rooms include free Wi-Fi, flat-screen TV, mini-bar, coffee maker, and premium toiletries. Suites also include additional living space and premium amenities.',
    },
    {
      question: 'Do you have a cancellation policy?',
      answer: 'Cancellations made 48 hours before check-in are fully refundable. Cancellations within 48 hours will incur a one-night charge.',
    },
    {
      question: 'Is breakfast included?',
      answer: 'Breakfast is included with suite bookings. Standard rooms can add breakfast for an additional $25 per person.',
    },
    {
      question: 'Do you offer room service?',
      answer: 'Yes, 24-hour room service is available. You can order from our extensive menu through the in-room tablet or by calling the front desk.',
    },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 px-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-5xl font-bold text-center mb-4 ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
          Frequently Asked Questions
        </h1>
        <p className={`text-center text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Find answers to common questions about your stay
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center ${
                  isDarkMode ? 'hover:bg-dark-surface' : 'hover:bg-white/50'
                } transition-all`}
              >
                <span className={`font-semibold text-lg ${isDarkMode ? 'text-cream' : 'text-navy'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                } ${isDarkMode ? 'text-gold' : 'text-navy'}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
