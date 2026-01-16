import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Vrindavan Heights',
      location: 'Mandal',
      description: '2BHK and 1 BHK Flats. A perfect blend of comfort and affordability.',
      type: 'Residential',
      status: 'ongoing',
      images: [
        '/images/vrindawanHeightsv1.jpeg',
        '/images/vrindawanHeightsv2.jpg'
      ]
    },
    {
      id: 2,
      name: 'Shubham Row House',
      location: 'Navjeevan Park, Near SPDM College',
      description: '2BHK Luxurious Row Houses designed for modern families.',
      type: 'Residential',
      status: 'ongoing',
      images: [
         '/images/ShubhamRowHouseV1.jpg',
         '/images/ShubhamRowHouseV2.jpg'
      ]
    },
    {
      id: 3,
      name: 'Luxurious Bunglows',
      location: 'Mahaveer Lawns, Mandal Shivar',
      description: 'Premium standalone bunglows offering privacy and grandeur. (Sold Out)',
      type: 'Villas',
      status: 'completed',
      images: [
        '/images/BunglowSoldv1.jpeg',
        '/images/BunglowSoldv2.jpeg'
      ]
    },
    {
      id: 4,
      name: 'Indramangal Apartment',
      location: 'City Center',
      description: 'Classic residential complex defining standard urban living.',
      type: 'Residential',
      status: 'completed',
      images: [
        '/images/IndramangalApartment.jpeg'
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Masterpieces</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-body font-light max-w-2xl mx-auto">
            Crafting landmarks that redefine Skylines and Lifestyles.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-0 z-40 shadow-sm/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-4">
            {['all', 'ongoing', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                  activeTab === tab
                    ? 'bg-primary border-primary text-white shadow-lg scale-105'
                    : 'bg-transparent border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                } capitalize tracking-wide font-body`}
              >
                {tab} Projects
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 min-h-[50vh]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                {/* Image Gallery (Swiper) */}
                <div className="h-72 relative bg-gray-100">
                  {project.images.length > 1 ? (
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3500, disableOnInteraction: false }}
                      loop={true}
                      className="h-full project-swiper"
                    >
                      {project.images.map((img, index) => (
                        <SwiperSlide key={index}>
                           <div className="h-full w-full relative">
                              <img src={img} alt={`${project.name} ${index + 1}`} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="h-full w-full relative">
                        <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${
                    project.status === 'ongoing' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                   {/* Type Tag */}
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-2 block">{project.type}</span>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-4 text-sm font-medium">
                     <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     {project.location}
                  </div>
                  
                  <p className="text-gray-600 font-body leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <button className="w-full py-3 rounded-xl border-2 border-gray-100 font-semibold text-gray-600 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 group-hover:shadow-md">
                    View Details
                  </button>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-gray-50 rounded-tl-[3rem] -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <div className="text-6xl mb-4">🏗️</div>
               <h3 className="text-2xl font-bold text-gray-400">No projects found in this category.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
