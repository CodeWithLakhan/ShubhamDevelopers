import SEO from '../../components/SEO';
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
      location: 'Near Mandal gate, Shirpur',
      description: '2BHK and 1 BHK Flats. A perfect blend of comfort and affordability.',
      tags: ['Residential', 'Flats'],
      status: ['completed' , 'ready possession'],
      images: ['/images/vrindawanHeightsv1.jpeg', '/images/vrindawanHeightsv2.jpg'],
      floormap: '#asjdn',
      locationLink: 'https://maps.app.goo.gl/PAa28XQdwnw81YiW8?g_st=awb'
    },
    {
      id: 2,
      name: 'Shubham Row House',
      location: 'Navjeevan Park, Near SPDM College',
      description: '2BHK Luxurious Row Houses designed for modern families.',
      tags: ['Residential', 'Row House'],
      status: ['ongoing', 'booking open'],
      images: ['/images/ShubhamRowHouseV1.jpg', '/images/ShubhamRowHouseV2.jpg'],
      floormap: 'https://asmd.com',
      locationLink: 'https://maps.app.goo.gl/KRDf49pUfKcmqgnt7?g_st=awb'
    },
    {
      id: 6,
      name: 'Shivtara Residency',
      location: 'Mahaveer Vihar, Near City pride mall',
      description: '2BHK Luxurious Row Houses. ',
      tags: ['Residential', 'Row House'],
      status: ['ongoing'],
      images: ['/images/ShivtaraV1.jpg', '/images/ShivtaraV2.jpg'],
      floormap: '#',
      locationLink: 'https://maps.app.goo.gl/QoG5m6oaiuChmMBy7?g_st=awb'
    },
    {
      id: 4,
      name: 'Indramangal Apartment',
      location: 'Mahaveer Vihar, Near City pride Mall',
      description: 'Classic residential 2BHK Flats defining standard urban living.',
      tags: ['Residential', 'Apartment'],
      status: ['completed','ready possession'],
      images: ['/images/IndramangalApartment.jpeg'],
      floormap: '',
      locationLink: ''
    },
    {
      id: 3,
      name: '4BHK Luxurious Bunglow',
      location: 'Mahaveer Lawns, Mandal Shivar',
      description: 'Premium standalone bunglows offering privacy and grandeur. (Sold Out)',
      tags: ['Residential', 'Bunglow'],
      status: ['completed', 'sold out'],
      images: ['/images/BunglowSoldv1.jpeg', '/images/BunglowSoldv2.jpeg'],
      floormap: '',
      locationLink: ''
    },
    
    {
      id: 5,
      name: 'Shubham Residency',
      location: 'Vasant anna nagar, Karvand road',
      description: 'Premium standalone 2BHK Row Houses.',
      tags: ['Residential', 'Row House'],
      status: ['ongoing'],
      images: ['/images/ShubhamResidencyView1.jpg', '/images/ShubhamResidencyView2.jpg'],
      floormap: '#',
      locationLink: 'https://maps.app.goo.gl/Fv3ZBh4ehCPoHsQ6A?g_st=awb'
    },
    {
      id: 7,
      name: 'Bunglow (Sold)',
      location: 'Laxmi Nagar Mandal ',
      description: 'Premium standalone Elevated bunglow.',
      tags: ['Residential', 'Bunglow'],
      status: ['completed','sold'],
      images: ['/images/SoldBunglow2.jpeg'],
      floormap: '#',
      locationLink: ''
    },
    
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status.includes(activeTab));

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Projects | Shubham Developers"
        description="Explore our portfolio of successful residential and commercial projects delivered by Shubham Developers in Shirpur."
        url="/projects"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-heading font-bold mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-body font-light max-w-2xl mx-auto">
            Crafting landmarks that redefine Skylines and Lifestyles.
          </p>
        </div>
      </section>



      

      {/* Filter Tabs */}
      <section className="py-6 md:py-12 bg-white md:sticky top-0 z-40 shadow-sm/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {['all', 'ongoing', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-all duration-300 font-semibold capitalize tracking-wide font-body
                  md:px-8 md:py-3 md:rounded-full md:border-2 md:text-base cursor-pointer
                  text-sm
                  ${
                  activeTab === tab
                    ? 'text-primary underline decoration-2 underline-offset-4 font-bold md:no-underline md:bg-primary md:border-primary md:text-white md:shadow-lg md:scale-105'
                    : 'text-gray-500 hover:text-primary md:bg-transparent md:border-gray-200 md:text-gray-500 md:hover:border-primary'
                }`}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                {/* Image Gallery (Swiper) */}
                <div className="h-56 relative bg-gray-100">
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
                  
                  {/* Status Badges */}
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 items-end">
                    {project.status.map((status, idx) => (
                      <div key={idx} className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${
                        status === 'ongoing' ? 'bg-green-500' : 
                        status === 'completed' ? 'bg-blue-500' :
                        status === 'booking open' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}>
                        {status}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative">
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2 mb-3">
                     {project.tags.map((tag, i) => (
                       <span key={i} className="text-secondary text-[10px] font-bold tracking-widest uppercase bg-secondary/10 px-2 py-1 rounded-md">
                         {tag}
                       </span>
                     ))}
                   </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-4 text-sm font-medium">
                     <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     {project.location}
                  </div>
                  
                  <p className="text-gray-600 font-body leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    {project.floormap && project.floormap !== '#' && (
                      <a 
                        href={project.floormap}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex-1 py-2.5 text-sm rounded-xl border border-gray-300 bg-gray-100 font-bold text-gray-800 hover:border-secondary hover:text-white hover:bg-secondary transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>📐</span> Floor Map
                      </a>
                    )}
                    {project.locationLink && project.locationLink !== 'https://maps.google.com' && (
                      <a 
                        href={project.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 text-sm rounded-xl border border-gray-300 bg-gray-100 font-bold text-gray-800 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>📍</span> Location
                      </a>
                    )}
                  </div>
                  
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


      {/* Architectural Highlights - Creative Showcase */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Design Excellence</span>
              <h2 className="text-4xl font-heading font-bold text-gray-800">Visualizing the Future</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative h-64 md:h-96 rounded-3xl overflow-hidden cursor-pointer">
                 <img src="/images/elevation1.jpeg" alt="Elevation 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                 <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-heading">Modern Aesthetics</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Clean lines and continuous spaces.</p>
                 </div>
              </div>

              {/* Card 2 - Larger/Center */}
              <div className="group relative h-72 md:h-[28rem] mt-4 md:-mt-12 rounded-3xl overflow-hidden shadow-2xl z-10 cursor-pointer border-4 border-white">
                 <img src="/images/elevation2.jpeg" alt="Elevation 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                 <div className="absolute bottom-8 left-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">FEATURED</div>
                    <h3 className="text-3xl font-bold font-heading">Premium Living</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Designed for the elite lifestyle.</p>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="group relative h-64 md:h-96 rounded-3xl overflow-hidden cursor-pointer">
                 <img src="/images/elevation3.jpeg" alt="Elevation 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                 <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-heading">Urban Harmony</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Blending nature with structure.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
