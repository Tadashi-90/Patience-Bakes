import React from 'react';

const services = [
  {
    title: "Delivery Services",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    description: "Enjoy our fresh bakes from the comfort of your home. We deliver across Kandemba at a reasonable fee.",
    features: ["On-time delivery", "Safe packaging", "Real-time updates"],
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "Baking Classes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: "Master the art of baking with our professional classes. Learn vanilla, chocolate, and red velvet secrets.",
    features: ["Vanilla & Chocolate", "Red Velvet Special", "Cupcake Mastery"],
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Custom Orders",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    description: "Need something unique for your event? We specialize in custom cake designs tailored to your theme.",
    features: ["Personalized designs", "Wide flavor choice", "Premium ingredients"],
    color: "from-purple-500 to-indigo-600"
  }
];

const ServiceCard = ({ service }) => (
  <div className="group relative p-8 rounded-[2.5rem] bg-white border border-bakery-cream hover:border-primary-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-100/50 overflow-hidden">
    {/* Gradient Background Effect */}
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`}></div>
    
    <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
      {service.icon}
    </div>
    
    <h3 className="text-2xl font-display font-bold text-bakery-chocolate mb-4">
      {service.title}
    </h3>
    
    <p className="text-bakery-chocolate/60 mb-8 leading-relaxed">
      {service.description}
    </p>
    
    <ul className="space-y-3 mb-8">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-bakery-chocolate/80">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
          {feature}
        </li>
      ))}
    </ul>
    
    <button className="flex items-center gap-2 text-primary-600 font-bold group/btn">
      Learn More
      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#FFFBF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-base font-bold text-primary-600 uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate leading-tight">
              More than just <span className="italic text-primary-600">Baking</span>
            </h3>
          </div>
          <p className="text-bakery-chocolate/60 max-w-sm">
            We provide a comprehensive range of services to ensure your celebrations are sweet and your skills are sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
