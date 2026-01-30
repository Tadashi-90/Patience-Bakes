import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    product: location.state?.product || 'Decorated Cake',
    details: '',
    date: '',
    delivery: 'No (Self Pickup)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello Patience Bakes! I would like to place an order:
    
*Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Product:* ${formData.product}
*Details:* ${formData.details}
*Date:* ${formData.date}
*Delivery:* ${formData.delivery}

Looking forward to your confirmation!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '260969943543';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Order Now</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Place your order today and experience the magic of Patience Bakes. Remember: No payment, no order!
          </p>
        </div>
      </section>

      <section className="py-24 bg-bakery-cream/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-bakery-cream">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Full Name</label>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl bg-bakery-cream/30 border border-bakery-cream focus:border-primary-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Phone Number</label>
                  <input
                    required
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your number"
                    className="w-full px-6 py-4 rounded-2xl bg-bakery-cream/30 border border-bakery-cream focus:border-primary-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Select Product</label>
                <select 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-bakery-cream/30 border border-bakery-cream focus:border-primary-600 outline-none transition-all appearance-none"
                >
                  <option>Decorated Cake</option>
                  <option>Plain Cake</option>
                  <option>Cake Slices</option>
                  <option>Cupcakes</option>
                  <option>Savory (Meat Pie/Samosa)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Order Details</label>
                <textarea
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Flavor, size, decorations, etc."
                  className="w-full px-6 py-4 rounded-2xl bg-bakery-cream/30 border border-bakery-cream focus:border-primary-600 outline-none transition-all"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Pickup/Delivery Date</label>
                  <input
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="w-full px-6 py-4 rounded-2xl bg-bakery-cream/30 border border-bakery-cream focus:border-primary-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-chocolate uppercase tracking-wider">Delivery Required?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="delivery" 
                        value="Yes (At a fee)"
                        checked={formData.delivery === "Yes (At a fee)"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary-600" 
                      />
                      <span>Yes (At a fee)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="delivery" 
                        value="No (Self Pickup)"
                        checked={formData.delivery === "No (Self Pickup)"}
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary-600" 
                      />
                      <span>No (Self Pickup)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
                <p className="text-sm text-primary-800 font-medium leading-relaxed">
                  <strong>Note:</strong> Orders should be made at least <strong>two days</strong> before the actual day. Extra decors attract extra charges. Payment must be made before processing or delivery.
                </p>
              </div>

              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-bakery-chocolate text-white font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:-translate-y-1"
              >
                Send Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
