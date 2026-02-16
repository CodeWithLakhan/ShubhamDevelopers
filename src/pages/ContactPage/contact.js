import SEO from '../../components/SEO';
import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useForm } from '@formspree/react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '2 BHK', // Default value
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your inquiry! We will get back to you soon.');
  // };
  const [state, handleSubmit] = useForm("maqobdbp");


  const propertyTypes = [
    '1 BHK',
    '2 BHK', 
    'Row House',
    'Bungalow',
    'Commercial',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us | Shubham Developers"
        description="Get in touch with Shubham Developers for your next home or commercial property. Located in Shirpur."
        url="/contact"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Get In Touch</span>
          <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-body font-light max-w-2xl mx-auto">
            Have a query about our projects? We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white p-5 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
              
              <h2 className="text-3xl font-heading font-bold mb-2 text-gray-800">Send us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              {state.succeeded ? (
                 <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-4xl mx-auto mb-6">
                       <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-8">Thank you for your inquiry. Our team will get back to you shortly.</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-semibold"
                    >
                      Send Another Message
                    </button>
                 </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your User Name"
                      className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none hover:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide">Email <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none hover:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">I am interested in</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {propertyTypes.map((type) => (
                      <label key={type} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value={type}
                          checked={formData.propertyType === type}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div className="w-full px-2 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-center text-xs md:text-base font-medium transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-gray-100 peer-checked:shadow-md">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none hover:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Office</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-800">Visit Us</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  We invite you to visit our office for a cup of coffee and a discussion about your dream home.
                </p>
              </div>

              <div className="grid gap-8">
                {/* Address Card */}
                <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg md:text-2xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Office Address</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Pitreshwar Colony, 38A,<br />
                      Shirpur, Dist Dhule<br />
                      Maharashtra 425405
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-lg md:text-2xl shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Call Us</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-2">Mon - Sat, 9am to 7pm</p>
                    <a href="tel:+919284844534" className="text-lg md:text-2xl font-bold text-gray-800 hover:text-primary transition-colors block">
                      +91 92848 44534
                    </a>
                  </div>
                </div>

                 {/* Email Card (Optional/Generic) */}
                <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-primary/30 transition-all hover:-translate-y-1">
                   <div className="w-10 h-10 md:w-14 md:h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent text-lg md:text-2xl shrink-0">
                     <FaEnvelope />
                   </div>
                   <div>
                     <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Email Us</h3>
                     <a href="mailto:shuhbamdevelopers2023@gmail.com" className="text-sm md:text-lg text-gray-600 hover:text-primary transition-colors break-all">
                       shubhamdevelopers2023@gmail.com
                     </a>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Visual Glimpse - Expanding Accordion */}
      <section className="min-h-[600px] md:min-h-[500px] md:h-[500px] flex flex-col md:flex-row overflow-hidden bg-gray-900 border-t-4 border-white">
         
         {/* Panel 1 */}
         <div className="relative flex-1 group hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/20">
            <img src="/images/IndramangalApartment.jpeg" alt="Glimpse 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
               <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Urban Serenity</h3>
               <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Peace in the city center.</p>
            </div>
         </div>

         {/* Panel 2 */}
         <div className="relative flex-1 group hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/20">
            <img src="/images/elevation2.jpeg" alt="Glimpse 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
               <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Visionary Design</h3>
               <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Where ideas take shape.</p>
            </div>
         </div>

         {/* Panel 3 */}
         <div className="relative flex-1 group hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/20">
            <img src="/images/ShubhamResidencyView1.jpg" alt="Glimpse 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
               <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Family First</h3>
               <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Homes built for memories.</p>
            </div>
         </div>
         
         {/* Panel 4 */}
         <div className="relative flex-1 group hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden">
             <img src="/images/elevation3.jpeg" alt="Glimpse 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
               <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Commercial Ready</h3>
               <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">Tomorrow's Businesses today.</p>
             </div>
         </div>

      </section>
    </div>
  );
};

export default Contact;
