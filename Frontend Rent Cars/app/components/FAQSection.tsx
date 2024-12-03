import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Combined list of FAQ items
  const faqItems: FAQItem[] = [
    {
      question: 'How much does it cost to rent a car  for a week?',
      answer: 'Based on the average daily cost of ₹ 6,693, it will cost you around ₹ 46,854 for a week on our site.',
    },
    {
      question: 'How much does it cost to rent a car  for a month?',
      answer: 'Based on the average daily cost of ₹ 6,693, it will cost you around ₹ 200,801 for a month on our site.',
    },
    {
      question: 'Which car do people usually rent ?',
      answer: 'Medium is the most popular car group to rent  among our users, followed by small and premium.',
    },
    {
      question: 'How much does it cost to rent Medium car ?',
      answer: 'On average, renting Medium car  costs ₹ 5,906 per day on our site.',
    },
    {
      question: 'How much does it cost to rent Small car ?',
      answer: 'On average, renting Small car  costs ₹ 5,425 per day on our site.',
    },
    {
      question: 'Which rental car companies  have updated their vehicle cleaning and safety policies because of Coronavirus (COVID-19)?',
      answer: 'Enterprise, Alamo, and National have updated their vehicle cleaning and safety policies in response to COVID-19.',
    },
    {
      question: 'What is the best time to rent a car ?',
      answer: 'The best time to rent a car  is typically during off-peak seasons, such as spring or fall, when there is less traffic.',
    },
    {
      question: 'Do I need an international driver’s permit to rent a car ?',
      answer: 'Yes, an international driver’s permit (IDP) is generally required to rent a car  for foreigners.',
    },
  ];

  return (
    <div className="bg-gray-100 py-6 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

        {/* Single Column Layout */}
        <div className="space-y-6 px-10 mb-6">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full text-left py-4 flex justify-between items-center bg-white hover:bg-slate-300 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 mx-10">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className={`transition-transform transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642" />
                </svg>
              </button>
              {expandedIndex === index && (
                <div className="py-4 px-6 bg-gray-50 transition-all duration-300">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
