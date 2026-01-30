import React from 'react';

const policies = [
  {
    title: "Payment First",
    text: "No payment, no order. We require full payment to confirm and start processing your order.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Advanced Booking",
    text: "Orders should be made at least two days before the actual day to ensure quality and availability.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Extra Decor",
    text: "Extra decors (e.g., different flavors, edible prints, faux balls, alcohol, etc.) attract extra charges.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l6.857-2.143L11 3z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Pickup Timing",
    text: "Cakes are to be picked up at the agreed time. Please be punctual to ensure freshness.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Delivery Terms",
    text: "Payment for both the product and the delivery fee must be made before delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: "bg-orange-100 text-orange-600"
  }
];

const Terms = () => {
  return (
    <section id="terms" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-bakery-cream/10 -skew-y-3 origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header Section */}
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-base font-bold text-primary-600 uppercase tracking-[0.3em] mb-4">Our Policy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-6 leading-tight">
              Terms & <span className="text-primary-600 italic">Conditions</span>
            </h3>
            <p className="text-lg text-bakery-chocolate/60 leading-relaxed mb-8">
              To ensure the best experience and highest quality for all our customers, we maintain a few simple guidelines.
            </p>
            <div className="p-8 rounded-[2.5rem] bg-bakery-chocolate text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <p className="relative z-10 text-sm font-medium leading-relaxed">
                "By placing an order with Patience Bakes, you acknowledge and agree to these terms. We appreciate your cooperation in helping us maintain our sweet standards!"
              </p>
            </div>
          </div>

          {/* Grid Section */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-[2rem] bg-white border border-bakery-cream hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-100/30 transition-all duration-500"
              >
                <div className={`inline-flex p-4 rounded-2xl ${policy.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {policy.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-bakery-chocolate mb-3">{policy.title}</h4>
                <p className="text-bakery-chocolate/60 text-sm leading-relaxed">
                  {policy.text}
                </p>
              </div>
            ))}
            
            {/* Special Note Card */}
            <div className="md:col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100 flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-white items-center justify-center text-3xl shadow-sm flex-shrink-0">
                ✨
              </div>
              <p className="text-primary-900 font-medium italic">
                Questions about our terms? Feel free to reach out via WhatsApp or our contact form!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
