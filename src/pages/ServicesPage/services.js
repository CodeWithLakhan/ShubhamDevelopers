import SEO from '../../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCity, FaTree, FaDraftingCompass, FaHardHat, FaHandshake, FaCheckCircle, FaAward, FaUsers, FaClock } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Development',
      description: 'We specialize in creating beautiful residential spaces including apartments, villas, and luxury homes with modern amenities and thoughtful design.'
    },
    {
      icon: <FaCity />,
      title: 'Commercial Development',
      description: 'From retail spaces to office complexes, we develop commercial properties that meet the needs of businesses and investors.'
    },
    {
      icon: <FaTree />,
      title: 'Themed Landscaping',
      description: 'Since our inception, we have been pioneers in creating themed landscaping that enhances the beauty and value of our properties.'
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Technical Planning',
      description: 'Our highly skilled technical planners ensure that every project is designed with precision, efficiency, and sustainability in mind.'
    },
    {
      icon: <FaHardHat />,
      title: 'Quality Construction',
      description: 'We maintain the highest standards of construction quality, using premium materials and following best practices in the industry.'
    },
    {
      icon: <FaHandshake />,
      title: 'Customer Service',
      description: 'From initial inquiry to post-possession support, we provide exceptional customer service throughout the entire journey.'
    },
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', desc: 'Understanding your vision and requirements.' },
    { number: '02', title: 'Planning', desc: 'Designing blueprints and technical layouts.' },
    { number: '03', title: 'Execution', desc: 'Quality construction with premium materials.' },
    { number: '04', title: 'Delivery', desc: 'Handing over your dream space on time.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Services | Shubham Developers"
        description="We offer Residential Development, Commercial Projects, Themed Landscaping, and Technical Planning services tailored to your needs."
        url="/services"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">What We Do</span>
          <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-body font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your dreams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-accent/20"></div>
                
                <div className="text-5xl text-primary mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Workflow</span>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mt-2">How We Build Dreams</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:border-primary transition-colors duration-300 z-10 relative">
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-primary transition-colors">{step.number}</span>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 font-body text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Perspectives - Floating Collage */}
      <section className="py-16 md:py-28 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] -z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             
             {/* Text Content */}
             <div className="w-full lg:w-1/3 text-center lg:text-left">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Aesthetic Living</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6 leading-tight">
                   Where Art Meets <span className="italic text-primary">Architecture</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                   Every project is a canvas where we blend functional design with visual poetry. We don't just build walls; we curate experiences that inspire and elevate everyday living.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto lg:mx-0"></div>
             </div>

             {/* Collage Images */}
             <div className="w-full lg:w-2/3 relative h-96 md:h-[600px]">
                {/* Main Large Image */}
                <div className="absolute top-10 left-0 md:left-10 w-3/4 h-3/4 z-10 transform hover:scale-105 transition-transform duration-700">
                   <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                      <img src="/images/elevation6.jpeg" alt="Artistic Main" className="w-full h-full object-cover" />
                   </div>
                </div>

                {/* Floating Overlay Image 1 (Top Right) */}
                <div className="absolute -top-4 right-4 md:right-10 w-1/3 h-1/3 z-20 animate-float-slow">
                   <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-6 hover:rotate-0 transition-transform duration-500">
                      <img src="/images/elevation5.jpeg" alt="Artistic Detail 1" className="w-full h-full object-cover" />
                   </div>
                </div>

                {/* Floating Overlay Image 2 (Bottom Right) */}
                <div className="absolute bottom-10 right-0 md:right-20 w-56 h-56 z-20 animate-float-delayed">
                   <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
                      <img src="/images/elevation4.jpeg" alt="Artistic Detail 2" className="w-full h-full object-cover" />
                   </div>
                </div>

                {/* Decorative Blob */}
                <div className="absolute bottom-0 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Excellence is our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Standard</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We are more than just developers; we are partners in building your future. With decades of experience and a commitment to quality, we deliver value that lasts a lifetime.
              </p>
              
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <FaAward />, title: 'Proven Expertise', desc: 'Built on trust and reliability..' },
                { icon: <FaCheckCircle />, title: 'Premium Quality', desc: 'No compromise on materials.' },
                { icon: <FaUsers />, title: 'Expert Team', desc: 'Skilled professionals.' },
                { icon: <FaClock />, title: 'On-Time Delivery', desc: 'We value your time.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors backdrop-blur-sm">
                  <div className="text-3xl text-primary mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs and let us help you build your dream reality.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
