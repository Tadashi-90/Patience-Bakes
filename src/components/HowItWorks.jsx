import React from 'react';

const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    description: "Explore our cafeteria or products section to find your favorite treats or cakes.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    color: "text-rose-500 bg-rose-50"
  },
  {
    number: "02",
    title: "Place Your Order",
    description: "Fill out our order form at least two days in advance. Be specific with your cravings!",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "text-blue-500 bg-blue-50"
  },
  {
    number: "03",
    title: "Make Payment",
    description: "Confirm your order by making a payment. Remember, no payment, no order!",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-amber-500 bg-amber-50"
  },
  {
    number: "04",
    title: "Pick Up or Delivery",
    description: "Collect your bakes at the agreed time or have them delivered to your doorstep.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    color: "text-emerald-500 bg-emerald-50"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-bakery-cream/10 relative overflow-hidden">
      {/* Background Line for desktop */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-200/30 to-transparent -translate-y-1/2 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-primary-600 uppercase tracking-[0.3em] mb-4">The Process</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-bakery-chocolate">
            How It <span className="text-primary-600 italic">Works</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number Background */}
              <div className="absolute -top-10 -left-6 text-7xl md:text-8xl font-display font-bold text-primary-100/40 group-hover:text-primary-200/40 transition-colors pointer-events-none">
                {step.number}
              </div>
              
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl shadow-bakery-chocolate/5 border border-white hover:border-primary-100 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  {step.icon}
                </div>
                <h4 className="text-2xl font-display font-bold text-bakery-chocolate mb-4">{step.title}</h4>
                <p className="text-bakery-chocolate/60 leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block text-primary-300 animate-bounce-x">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
