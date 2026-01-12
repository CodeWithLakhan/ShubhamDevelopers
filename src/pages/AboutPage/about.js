import React from 'react';
import JourneySection from '../../components/JourneySection';

const About = () => {
  

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent/50 via-background to-accent/50 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-primary font-semibold">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SINCE 1991
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Gujarat's one of the greatest emerging real estate developers
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                Shubham Developers is Gujarat's one of the greatest emerging real estate developers 
                with signature projects especially in the cities of Ahmedabad, Vapi & Umbergaon. 
                Commenced in 1991 by the hands of a highly skilled technical planner with a vision 
                to create themed landscaping, Shubham Developers has transformed itself from a small 
                company started into a whole concept company that engineers ideas into reality.
              </p>
              <p className="mb-6 leading-relaxed">
                With over three decades of experience in the real estate industry, we have built a 
                reputation for excellence, quality, and customer satisfaction. Our commitment to 
                creating beautiful, functional spaces has made us a trusted name in Gujarat's 
                real estate market.
              </p>
              <p className="leading-relaxed">
                We believe in transforming dreams into reality, one project at a time. Our team of 
                skilled professionals works tirelessly to ensure that every project meets the highest 
                standards of quality and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent to-background text-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">43+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">2500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">3300+</div>
              <div className="text-gray-600">Total Units</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">35Lakhs+</div>
              <div className="text-gray-600">Construction Area (lakhs Sq.ft.)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

