import React, { useState } from 'react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

/**
 * FAQ Section Component
 * Features:
 * - Accordion-style expandable questions
 * - Keyboard navigation support
 * - Smooth animations for expand/collapse
 * - Accessible ARIA attributes
 * - Single or multiple open items support
 */
export const FAQ: React.FC<FAQProps> = ({
  title,
  faqs,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section 
      id="faqs" 
      className={`lg:px-20 px-8 flex flex-col md:flex-row items-center justify-center py-20 bg-white ${className}`}
    >
      <div className="container flex flex-col md:flex-row">
        {/* Title Section */}
        <div className="md:w-1/3 mb-12 md:mb-0 md:pr-8">
             {/* Title */}
       <h2 className="section-title">
  {title}
</h2>
        </div>
        
        {/* FAQ Items */}
        <div className="md:w-2/3">
          <div className="max-w-2xl mx-auto">
{faqs.map((faq) => {
              const isOpen = openItems.has(faq.id);
              
              return (
                <div key={faq.id} className="mb-4">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    onKeyDown={(e) => handleKeyDown(e, faq.id)}
                    className="w-full text-left bg-brand-light p-4 rounded-lg flex justify-between items-center hover:bg-brand-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                    
                    {/* Expand/Collapse Icon */}
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </button>
                  
                  {/* Answer Panel */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mt-2">
                      <p className="text-gray-600 bg-brand-light p-4 rounded-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};