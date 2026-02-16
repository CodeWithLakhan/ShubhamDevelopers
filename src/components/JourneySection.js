import React, { useEffect, useState, useRef } from 'react';

const milestones = [
  {
    year: '2022',
    title: 'Indramangal Apartment',
    description: 'Started in 2022 with Indaramangal Apartment.',
    icon: '🏗️' 
  },
  {
    year: '2023',
    title: 'Vrindavan Heights Aparment',
    description: ' Indramangal Row Houses and Vrindavan Hights.',
    icon: '🏢'
  },
  {
    year: '2024',
    title: '10+ Projects.',
    description: 'Bungalows, RowHouses, Aparments',
    icon: '🏆'
  },
  {
    year: '2025',
    title: 'Multiple Projects',
    description: 'Worked on and delivered multiple projects involving planning, execution, and on-site coordination.',
    icon: '🌍'
  },
  {
    year: '2026',
    title: 'Associate Collaborations',
    description: 'Started and managed multiple projects in collaboration with associates across different locations..',
    icon: '🚀'
  }
];

const JourneySection = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start the animation sequence
          let current = 0;
          const interval = setInterval(() => {
            if (current < milestones.length) {
              setVisibleIndex(current);
              current++;
            } else {
              clearInterval(interval);
            }
          }, 800); // 800ms delay between each item
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm font-body">Our History</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Journey So Far
          </h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            From humble beginnings to shaping the skyline.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop - Diagonal/Curved Look) */}
          <div className="hidden md:block absolute top-[7.5rem] left-0 w-full h-1 bg-gray-200 -z-0">
             {/* Animated Progress Line */}
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-linear"
              style={{ width: `${((visibleIndex + 1) / milestones.length) * 100}%` }}
            ></div>
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {milestones.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center transform transition-all duration-700 ${
                  index <= visibleIndex 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-90'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Year Bubble */}
                <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center bg-white shadow-xl mb-6 transition-colors duration-500 z-10 ${
                  index <= visibleIndex ? 'border-primary' : 'border-gray-200'
                }`}>
                  <span className={`text-xl font-bold font-heading ${
                     index <= visibleIndex ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {item.year}
                  </span>
                </div>

                {/* Vertical Line for styling (Mobile) */}
                <div className="md:hidden absolute top-20 bottom-[-2rem] w-0.5 bg-gray-200 -z-10 last:hidden"></div>

                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-accent/20 w-full text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-bold font-heading text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">{item.description}</p>
                </div>
                
                {/* Connector Dot on the line (Desktop) */}
                <div className={`hidden md:block absolute top-[7rem] w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-500 z-20 ${
                   index <= visibleIndex ? 'bg-secondary scale-125' : 'bg-gray-300'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
