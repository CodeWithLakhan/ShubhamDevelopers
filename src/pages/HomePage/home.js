import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaHome, FaRulerCombined, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Counter Component
const Counter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    
    const animateCounter = () => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = target;
  
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
  
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
  
        setCount(currentValue);
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
  
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasAnimated, target, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};


const Home = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: 'Vrindavan Heights',
      location: 'Mandal',
      description: '2BHK and 1 BHK Flats',
      images: [
        '/images/vrindawanHeightsv1.jpeg',
        '/images/vrindawanHeightsv2.jpg', // Add more images here
      ],
      brochure: '/brochures/vrindavan-heights.pdf', 
      mapLink: '' 
    },
    {
      id: 2,
      name: 'Shubham Row House',
      location: 'NavjeevanPark, Near SPDM College',
      description: '2BHK Row Houses ',
      images: [
        '/images/ShubhamRowHouseV1.jpg',
        '/images/ShubhamRowHouseV2.jpg', // Add more images here
      ],
      brochure: '', 
      mapLink: '' 
    },
    {
      id: 3,
      name: 'Bunglow (Sold)',
      location: 'Mahaveer Lawns, Mandal Shivar',
      description: '',
      images: [
        '/images/BunglowSoldv1.jpeg',
        '/images/BunglowSoldv2.jpeg', // Add more images here
      ],
      brochure: '', 
      mapLink: '' 
    },
    
  ];

  /* Stats Restored */
  const stats = [
    // { 
    //   number: 43, 
    //   suffix: '+', 
    //   label: 'Years of Experience',
    //   icon: <FaBuilding className="text-white text-3xl" />,
    //   gradient: 'from-primary to-secondary',
    //   bgGradient: 'from-primary to-secondary'
    // },
    { 
      number: 50, 
      suffix: '+', 
      label: 'Happy Customers',
      icon: <FaSmile className="text-white text-3xl" />,
      gradient: 'from-secondary to-accent',
      bgGradient: 'from-secondary to-accent'
    },
    { 
      number: 50, 
      suffix: '+', 
      label: 'Total Units',
      icon: <FaHome className="text-white text-3xl" />,
      gradient: 'from-primary to-secondary',
      bgGradient: 'from-primary to-secondary'
    },
    { 
      number: 2, 
      suffix: 'Lakhs+', 
      label: 'Construction Area (Sq.ft.)',
      icon: <FaRulerCombined className="text-white text-3xl" />,
      gradient: 'from-secondary to-accent',
      bgGradient: 'from-secondary to-accent'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: 'url(/images/coverImage.png)' }}
        >
          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-60 transition-all duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-heading font-bold mb-3 md:mb-6 text-white drop-shadow-2xl animate-fade-in tracking-tight">
              Shubham Developers
            </h1>
            <p className="text-base md:text-3xl mb-4 md:mb-6 text-white font-body font-light drop-shadow-lg">
              Turning Blueprints into Reality.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <Link 
                to="/projects" 
                className="bg-primary text-white px-4 py-2 md:px-8 md:py-4 text-xs md:text-base rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform"
              >
                View Projects
              </Link>
              <button className="border-2 border-white text-white px-4 py-2 md:px-8 md:py-4 text-xs md:text-base rounded-lg font-semibold hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform">
                Quick Inquiry
              </button>
            </div>
            
            <a 
              href="https://www.instagram.com/my1st_residence?igsh=MTdxbm42OHp3MTNpaQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-white/80 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
            >
              <FaInstagram className="text-xl" />
              <span className="font-medium text-sm">Follow us on Instagram</span>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-2">Our Achievements</h2>
            <p className="text-gray-600 font-body">Building dreams</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border border-accent"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.bgGradient} rounded-full flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Number */}
                <div className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  <Counter target={stat.number} suffix={stat.suffix} duration={2000} />
                </div>
                
                {/* Label */}
                <div className="text-gray-700 font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
                
                {/* Decorative Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold font-body tracking-wider uppercase text-sm">About</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SINCE 1991</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gujarat's one of the greatest emerging real estate developers
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4">
              Shubham Developers is Gujarat's one of the greatest emerging real estate developers 
              with signature projects especially in the cities of Ahmedabad, Vapi & Umbergaon. 
              Commenced in 1991 by the hands of a highly skilled technical planner with a vision 
              to create themed landscaping, Shubham Developers has transformed itself from a 
              small company started into a whole concept company that engineers ideas into reality.
            </p>
            <Link 
              to="/about" 
              className="inline-block text-primary font-semibold hover:text-secondary transition"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section> */}

      {/* Ongoing Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold font-body tracking-wider uppercase text-sm">Real Estate Developers</span>
            <h2 className="text-4xl font-heading font-bold mt-2 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ongoing Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ongoingProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
                <div className="h-64 bg-gray-100 overflow-hidden relative">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={project.images.length > 1}
                    className="project-swiper h-full"
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className="h-64 flex items-center justify-center bg-gray-100">
                          <img 
                            src={image} 
                            alt={`${project.name} ${imgIndex + 1}`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none z-10"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                  {project.description && (
                    <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={project.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold hover:from-primary hover:to-secondary transition-all duration-300 text-center text-sm flex items-center justify-center gap-2 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Brochure
                    </a>
                    <a
                      href={project.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View Map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              See More Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-24 bg-gradient-to-br from-white to-accent/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center ">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-t-[10rem] rounded-b-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border-8 border-white shadow-2xl w-80 h-[30rem] md:w-96 md:h-[32rem]">
                  <img 
                    src="/images/BhaveshAgrawal.jpeg" 
                    alt="Mr. Bhavesh Agrawal" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  
                  {/* Name Tag on Image */}
                  <div className="absolute bottom-6 left-6 text-white text-left">
                    <p className="font-heading font-bold text-2xl tracking-wide">Mr. Bhavesh Agrawal</p>
                    <p className="font-body text-sm font-light opacity-90 uppercase tracking-widest">Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-primary font-semibold font-body tracking-wider uppercase text-sm mb-2 block animate-fade-in-up">The Man Behind the Vision</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-800 leading-tight">
                Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dreams</span><br />
                Into Reality
              </h2>
              
              <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed relative">
                <p>
                  <span className="text-6xl absolute -top-8 -left-4 text-primary/10 font-serif">"</span>
                   With a profound vision for transforming Shirpur's skyline, <strong>Mr. Bhavesh Shubhashchandra Agrawal</strong> combines deep industry knowledge with creative brilliance.
                </p>
                <p>
                  As the driving force behind Shubham Developers, his commitment to quality construction and innovative design has redefined modern living in the district.
                  A visionary leader by profession and a builder by passion, he ensures every project stands as a testament to trust and excellence.
                </p>
              </div>

              {/* Signature/CTA */}
              <div className="mt-10 flex flex-col items-center md:items-start gap-4">
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <p className="text-gray-500 text-sm italic">"Building not just homes, but legacies."</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
