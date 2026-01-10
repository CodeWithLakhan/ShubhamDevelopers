import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Counter Component
const Counter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

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
      name: 'Shubham Evergreen',
      location: 'Vapi',
      description: '3BHK and 4BHK Luxurious Flats & Showroom at Vapi',
      image: '/images/coverImage.png'
    },
    {
      id: 2,
      name: 'Shubham Anthem',
      location: 'Shela',
      description: '3 & 4 BHK Precious Living & Shops at Shela',
      image: '/images/coverImage.png'
    },
    {
      id: 3,
      name: 'Aastha Elegance',
      location: 'Dholka',
      description: '3 & 4 BHK Magnificient Villa at Dholka',
      image: '/images/coverImage.png'
    },
    {
      id: 4,
      name: 'Shubham Pleasure',
      location: 'Sanand',
      description: '2 & 3 Bhk Living Homes, at Sanand',
      image: '/images/coverImage.png'
    }
  ];

  const stats = [
    { number: 43, suffix: '+', label: 'Total Projects' },
    { number: 2500 , suffix: '+', label: 'Happy Customers' },
    { number: 3300, suffix: '+', label: 'Total Units' },
    { number: 35, suffix: 'Lakhs+', label: 'Construction Area (lakhs Sq.ft.)' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in">
              Shubham Developers
            </h1>
            <p className="text-xl md:text-3xl mb-6 text-white font-medium drop-shadow-lg">
              Turning Blueprints into Reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform"
              >
                View Projects
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform">
                Quick Inquiry
              </button>
            </div>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <Counter target={stat.number} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">About</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">SINCE 1991</h2>
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
              className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Real Estate Developers</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Ongoing Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link 
                    to="/projects" 
                    className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center group-hover:gap-2 gap-1"
                  >
                    Learn More 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Upcoming Project</h2>
          <p className="text-xl mb-2 text-gray-700">2 & 3 BHK Lifestyle Apartments & Retail Spaces</p>
          <p className="text-lg mb-8 text-gray-600">At Sanand</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Submit Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
