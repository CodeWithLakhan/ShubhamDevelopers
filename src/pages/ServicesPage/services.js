import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Residential Development',
      description: 'We specialize in creating beautiful residential spaces including apartments, villas, and luxury homes with modern amenities and thoughtful design.'
    },
    {
      icon: '🏢',
      title: 'Commercial Development',
      description: 'From retail spaces to office complexes, we develop commercial properties that meet the needs of businesses and investors.'
    },
    {
      icon: '🏘️',
      title: 'Mixed-Use Projects',
      description: 'Our mixed-use developments combine residential, commercial, and retail spaces to create vibrant, self-contained communities.'
    },
    {
      icon: '🎨',
      title: 'Themed Landscaping',
      description: 'Since our inception, we have been pioneers in creating themed landscaping that enhances the beauty and value of our properties.'
    },
    {
      icon: '📐',
      title: 'Technical Planning',
      description: 'Our highly skilled technical planners ensure that every project is designed with precision, efficiency, and sustainability in mind.'
    },
    {
      icon: '✅',
      title: 'Quality Construction',
      description: 'We maintain the highest standards of construction quality, using premium materials and following best practices in the industry.'
    },
    {
      icon: '🤝',
      title: 'Customer Service',
      description: 'From initial inquiry to post-possession support, we provide exceptional customer service throughout the entire journey.'
    },
    {
      icon: '📋',
      title: 'Legal Compliance',
      description: 'All our projects are fully compliant with local regulations and come with proper documentation and approvals.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600">Our Services</h1>
            <p className="text-xl text-gray-700">
              Comprehensive real estate development solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Shubham Developers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 30 years of experience, we bring expertise, quality, and trust to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-700 font-semibold">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">43+</div>
              <div className="text-gray-700 font-semibold">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2500+</div>
              <div className="text-gray-700 font-semibold">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Contact us today to discuss your real estate needs
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

