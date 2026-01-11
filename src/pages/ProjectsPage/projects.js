import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const ongoingProjects = [
    {
      id: 1,
      name: 'Shubham Evergreen',
      location: 'Vapi',
      description: '3BHK and 4BHK Luxurious Flats & Showroom at Vapi',
      type: 'Residential & Commercial',
      image: '/images/coverImage.png'
    },
    {
      id: 2,
      name: 'Shubham Anthem',
      location: 'Shela',
      description: '3 & 4 BHK Precious Living & Shops at Shela',
      type: 'Residential & Commercial',
      image: '/images/coverImage.png'
    },
    {
      id: 3,
      name: 'Aastha Elegance',
      location: 'Dholka',
      description: '3 & 4 BHK Magnificient Villa at Dholka',
      type: 'Villas',
      image: '/images/coverImage.png'
    },
    {
      id: 4,
      name: 'Shubham Pleasure',
      location: 'Sanand',
      description: '2 & 3 Bhk Living Homes, at Sanand',
      type: 'Residential',
      image: '/images/coverImage.png'
    }
  ];

  const upcomingProjects = [
    {
      id: 5,
      name: 'Upcoming Project',
      location: 'Sanand',
      description: '2 & 3 BHK Lifestyle Apartments & Retail Spaces',
      type: 'Residential & Commercial',
      image: '/images/coverImage.png'
    }
  ];

  const completedProjects = [
    {
      id: 6,
      name: 'Sample Completed Project',
      location: 'Ahmedabad',
      description: 'Completed residential project',
      type: 'Residential',
      image: '/images/coverImage.png'
    }
  ];

  const getProjects = () => {
    switch (activeTab) {
      case 'ongoing':
        return ongoingProjects;
      case 'upcoming':
        return upcomingProjects;
      case 'completed':
        return completedProjects;
      default:
        return ongoingProjects;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent/50 via-background to-accent/50 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Projects</h1>
            <p className="text-xl text-gray-700">
              Signature projects in Ahmedabad, Vapi & Umbergaon
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'ongoing'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Upcoming Projects
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === 'completed'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Completed Projects
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjects().map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary bg-accent/20 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-2">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:from-primary hover:to-secondary transition shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

