import React, { useState } from 'react';

const faqs = [
  {
    question: "How far in advance should I place my order?",
    answer: "We require orders to be made at least two days before the actual day to ensure we have enough time to bake and decorate your treats with the care they deserve."
  },
  {
    question: "What are your payment terms?",
    answer: "Our policy is strictly 'no payment, no order'. Full payment must be made to confirm your booking and start the baking process."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we offer delivery services across Kandemba at a reasonable fee. Please note that payment for both the order and delivery must be made before the delivery takes place."
  },
  {
    question: "Are there extra charges for cake decorations?",
    answer: "Yes, extra decors such as different flavors, edible prints, faux balls, alcohol, or complex designs attract extra charges beyond the base price."
  },
  {
    question: "Can I pick up my order myself?",
    answer: "Absolutely! Orders can be picked up at our location in Kandemba at the time agreed upon during your order confirmation."
  },
  {
    question: "What flavors of cakes do you offer for classes?",
    answer: "Our plain cake baking classes cover vanilla, chocolate, and red velvet flavors. We also have classes for cupcakes!"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-primary-600 uppercase tracking-[0.3em] mb-4">Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate">
            Frequently Asked <span className="text-primary-600 italic">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-3xl transition-all duration-300 ${
                activeIndex === index ? 'border-primary-200 bg-primary-50/30' : 'border-bakery-cream hover:border-primary-100'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-bakery-chocolate">{faq.question}</span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-bakery-chocolate/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
