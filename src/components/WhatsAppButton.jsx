import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '260969943543'; // Zambia country code + 0969943543
  const message = encodeURIComponent("Hello Patience Bakes! I'm interested in your bakery products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
      <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl transform transition-transform group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.888 11.887-2.01 0-3.987-.509-5.741-1.474l-6.243 1.7zm6.386-3.628c1.576.933 3.129 1.423 4.827 1.423 5.176 0 9.387-4.211 9.387-9.387 0-2.507-1.012-4.858-2.812-6.658s-4.151-2.812-6.657-2.812c-5.176 0-9.386 4.211-9.386 9.387 0 1.799.526 3.356 1.529 4.881l-1.004 3.667 3.759-.982zm11.331-6.711c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.675.151-.199.301-.771.978-.945 1.177-.175.199-.349.226-.651.075-.301-.151-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.675-2.083-.175-.301-.019-.463.132-.613.135-.134.301-.351.451-.526.151-.175.201-.301.301-.501.1-.199.05-.376-.025-.526-.075-.151-.675-1.628-.925-2.228-.243-.584-.489-.505-.675-.514-.175-.008-.376-.01-.576-.01s-.526.075-.802.376c-.275.301-1.052 1.028-1.052 2.507s1.077 2.907 1.227 3.107c.151.199 2.119 3.235 5.132 4.542.717.311 1.276.496 1.712.635.72.229 1.375.196 1.893.118.577-.088 1.781-.727 2.032-1.428.25-.7.25-1.303.175-1.428-.075-.125-.275-.199-.576-.351z" />
        </svg>
      </div>
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-bakery-chocolate px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold text-sm border border-bakery-cream">
        Chat with us!
      </div>
    </a>
  );
};

export default WhatsAppButton;
