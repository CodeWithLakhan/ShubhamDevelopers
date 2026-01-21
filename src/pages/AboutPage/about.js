import React from 'react';
import JourneySection from '../../components/JourneySection';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-800 mb-6">
            Building <span className="text-primary">Legacies</span>
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
            Shubham Developers has been at the forefront of transforming the real estate landscape in Shirpur, 
            combining technical excellence with architectural innovation.
          </p>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary/20 rounded-t-[10rem] rounded-b-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border-8 border-white shadow-2xl w-80 h-[30rem] md:w-96 md:h-[32rem]">
                  <img 
                    src="/images/BhaveshAgrawal.jpeg" 
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
      <section className="py-16 bg-white overflow-visible">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto items-center">
            {/* Image 1 - Rotated & Floating */}
            <div className="transform translate-y-8 md:translate-y-0 rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-10">
              <div className="bg-white p-2 shadow-xl rounded-2xl">
                <img src="/images/vrindawanHeightsv1.jpeg" alt="Project 1" className="w-full h-40 md:h-56 object-cover rounded-xl" />
                <p className="text-center text-xs font-bold text-gray-500 mt-2 tracking-widest uppercase">Vrindavan</p>
              </div>
            </div>

            {/* Image 2 - Offset Up */}
            <div className="transform -translate-y-12 md:-translate-y-16 -rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-10">
              <div className="bg-white p-2 shadow-xl rounded-2xl">
                 <img src="/images/ShubhamRowHouseV1.jpg" alt="Project 2" className="w-full h-48 md:h-64 object-cover rounded-xl" />
                 <p className="text-center text-xs font-bold text-gray-500 mt-2 tracking-widest uppercase">Row Houses</p>
              </div>
            </div>

            {/* Image 3 - Scale Effect */}
            <div className="transform translate-y-4 rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-10">
              <div className="bg-white p-2 shadow-xl rounded-2xl">
                <img src="/images/BunglowSoldv1.jpeg" alt="Project 3" className="w-full h-40 md:h-56 object-cover rounded-xl" />
                <p className="text-center text-xs font-bold text-gray-500 mt-2 tracking-widest uppercase">Luxury Bunglows</p>
              </div>
            </div>
            
            {/* Image 4 - Decoration */}
            <div className="transform -translate-y-8 -rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-10">
               <div className="bg-white p-2 shadow-xl rounded-2xl">
                <img src="/images/IndramangalApartment.jpeg" alt="Project 4" className="w-full h-48 md:h-64 object-cover rounded-xl" />
                <p className="text-center text-xs font-bold text-gray-500 mt-2 tracking-widest uppercase">Indramangal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-heading">50+</div>
              <div className="text-gray-600 font-body font-medium">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-heading">50+</div>
              <div className="text-gray-600 font-body font-medium">Total Units</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-heading">2L+</div>
              <div className="text-gray-600 font-body font-medium">Sq.ft. Constructed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
