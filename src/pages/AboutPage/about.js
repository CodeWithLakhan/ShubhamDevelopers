import React from 'react';

const About = () => {
  const milestones = [
    { year: '1991', title: 'Company Founded', description: 'Started as a small company with a vision to create themed landscaping' },
    { year: '2000s', title: 'Expansion Phase', description: 'Expanded operations to multiple cities including Ahmedabad, Vapi & Umbergaon' },
    { year: '2010s', title: 'Growth & Recognition', description: 'Became one of Gujarat\'s greatest emerging real estate developers' },
    { year: 'Present', title: 'Industry Leader', description: '43+ projects, 2500+ happy customers, 3300+ total units' }
  ];

  const achievements = [
    'Gujarat\'s one of the greatest emerging real estate developers',
    'Signature projects in Ahmedabad, Vapi & Umbergaon',
    'Highly skilled technical planning and themed landscaping',
    'Transformed from a small company to a whole concept company',
    'Engineers ideas into reality with quality construction'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-blue-600 font-semibold">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-blue-600">
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

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Milestones</h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="text-3xl font-bold text-blue-600">{milestone.year}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-blue-600">43+</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-blue-600">2500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-blue-600">3300+</div>
              <div className="text-gray-600">Total Units</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-blue-600">35Lakhs+</div>
              <div className="text-gray-600">Construction Area (lakhs Sq.ft.)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

