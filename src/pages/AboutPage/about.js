import SEO from '../../components/SEO';
import React from 'react';
import JourneySection from '../../components/JourneySection';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us | Shubham Developers"
        description="Learn more about Shubham Developers, our mission, vision, and the team behind the best real estate projects in Shirpur."
        url="/about"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-gray-800 mb-6">
            Building <span className="text-primary">Legacies</span>
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
            Shubham Developers has been at the forefront of transforming the real estate landscape in Shirpur, 
            combining technical excellence with architectural innovation.
          </p>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary/20 rounded-t-[10rem] rounded-b-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border-8 border-white shadow-2xl w-72 h-[26rem] md:w-96 md:h-[32rem]">
                  <img 
                    src="/images/BhaveshAgrawal.png" 
                    alt="Mr. Bhavesh Agrawal" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white text-left">
                    <p className="font-heading font-bold text-2xl tracking-wide">Mr. Bhavesh Agrawal</p>
                    <p className="font-body text-sm font-light opacity-90 uppercase tracking-widest">Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-primary font-semibold font-body tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gray-800 leading-tight">
                A Visionary <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Approach</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed relative">
                 <p>
                   <strong>Mr. Bhavesh Shubhashchandra Agrawal</strong> established Shubham Developers with a singular mission: to bring world-class construction standards to the heart of Shirley. As a visionary leader, his approach goes beyond mere aesthetics; it is rooted in structural integrity and functional design.
                 </p>
                 <p>
                   "We don't just build structures; we create environments where families thrive. Every project is a personal commitment to quality, ensuring that our customers invest not just in a home, but in a better future."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Project Glimpses */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-800">Architectural Excellence</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Elevation 1 */}
            <div className="transform md:translate-y-12 rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-105 hover:z-10">
              <div className="bg-white p-3 shadow-2xl rounded-2xl border border-gray-100">
                <img src="/images/elevation1.jpeg" alt="Elevation Design 1" className="w-full h-auto object-cover rounded-xl shadow-inner" />
                <p className="text-center text-xs font-bold text-gray-500 mt-3 tracking-widest uppercase">Modern Elevation</p>
              </div>
            </div>

            {/* Elevation 2 - Center Focus */}
            <div className="transform md:-translate-y-8 z-10 hover:scale-110 transition-all duration-700 my-8 md:my-0">
              <div className="bg-white p-3 shadow-2xl rounded-2xl border-4 border-white ring-1 ring-gray-100">
                 <img src="/images/elevation2.jpeg" alt="Elevation Design 2" className="w-full h-auto object-cover rounded-xl shadow-lg" />
                 <p className="text-center text-xs font-bold text-gray-500 mt-3 tracking-widest uppercase">Premium Design</p>
              </div>
            </div>

            {/* Elevation 3 */}
            <div className="transform md:translate-y-8 -rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-105 hover:z-10">
              <div className="bg-white p-3 shadow-2xl rounded-2xl border border-gray-100">
                <img src="/images/elevation3.jpeg" alt="Elevation Design 3" className="w-full h-auto object-cover rounded-xl shadow-inner" />
                <p className="text-center text-xs font-bold text-gray-500 mt-3 tracking-widest uppercase">Future Concepts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-heading">50+</div>
              <div className="text-gray-600 font-body font-medium">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-heading">50+</div>
              <div className="text-gray-600 font-body font-medium">Total Units</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-heading">2L+</div>
              <div className="text-gray-600 font-body font-medium">Sq.ft. Constructed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
