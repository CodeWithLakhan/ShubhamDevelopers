import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">Contact Us</h1>
            <p className="text-xl text-gray-700">
              Get in touch with us for your real estate needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-gray-700 font-semibold mb-2">
                    Interested Project
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a project</option>
                    <option value="shubham-evergreen">Shubham Evergreen</option>
                    <option value="shubham-anthem">Shubham Anthem</option>
                    <option value="shubham-pleasure">Shubham Pleasure</option>
                    <option value="aastha-elegance">Aastha Elegance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Address</h3>
                  <p className="text-gray-700">
                    608/A, Pinnacle Business Park,<br />
                    Corporate Road,<br />
                    Near Prahladnagar Garden,<br />
                    Ahmedabad - 380015
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Phone</h3>
                  <a href="tel:+919099541414" className="text-blue-600 hover:text-blue-700">
                    +91 90995 41414
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ongoing Projects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Shubham Anthem</li>
                    <li>• Shubham Pleasure</li>
                    <li>• Shubham Evergreen</li>
                    <li>• Aastha Elegance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

