import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openFullScreen = (index) => {
    setSelectedImageIndex(index);
  };

  const closeFullScreen = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'Escape') closeFullScreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleDownload = (e) => {
    e.stopPropagation();
    const selectedImage = project.images[selectedImageIndex];
    if (selectedImage) {
        const link = document.createElement('a');
        link.href = selectedImage;
        link.download = selectedImage.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  return (
    <>
      <div 
        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
      >
        {/* Image Gallery (Swiper) */}
        <div className="h-56 relative bg-gray-100 cursor-pointer">
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
                   <div 
                      className="h-full w-full relative onClick-trigger" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullScreen(index);
                      }}
                   >
                      <img src={img} alt={`${project.name} ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Expand Icon - Visible on mobile, hover on desktop */}
                      <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <FaExpand size={14} />
                      </div>
                   </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div 
                className="h-full w-full relative" 
                onClick={(e) => {
                    e.stopPropagation();
                    openFullScreen(0);
                }}
            >
                <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Expand Icon - Visible on mobile, hover on desktop */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20">
                   <FaExpand size={14} />
                </div>
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
                download
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

      {/* Full Screen Image Modal */}
      {selectedImageIndex !== null && createPortal(
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 transition-all duration-300 backdrop-blur-sm"
            onClick={closeFullScreen}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <img 
                    src={project.images[selectedImageIndex]} 
                    alt={`Full Screen View ${selectedImageIndex + 1}`} 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
                
                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/70 transition-all border border-white/10 group/nav"
                      title="Previous Image"
                    >
                      <FaChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/70 transition-all border border-white/10 group/nav"
                      title="Next Image"
                    >
                      <FaChevronRight className="w-6 h-6 group-hover/nav:translate-x-1 transition-transform" />
                    </button>
                  </>
                )}

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-3">
                     {/* Download Button */}
                     <button 
                        onClick={handleDownload}
                        className="bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/70 transition-all border border-white/10"
                        title="Download Image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>

                    {/* Close Button */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            closeFullScreen();
                        }}
                        className="bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/70 transition-all border border-white/10"
                        title="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
