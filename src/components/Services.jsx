import React from 'react';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Full-Stack Development",
      subtitle: "UI/UX & Frontend",
      description: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
      details: [
        "Node.js & Express backend development",
        "React & Vue.js frontend architecture", 
        "RESTful API design & implementation"
      ]
    },
    {
      number: "02",
      title: "Optimization",
      subtitle: "Data & Systems",
      description: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply.",
      details: [
        "Desktop application development",
        "Cross-platform mobile solutions",
        "Performance optimization"
      ]
    },
    {
      number: "03",
      title: "Next.Js Tailwind/CSS, GSAP",
      subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      details: [
        "Custom design systems",
        "Advanced animations with GSAP",
        "Responsive layouts"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
      {/* What I Do Header */}
        <div className="mb-24 border-b border-gray-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            My Experience/
          </h1>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-12 gap-8 items-start py-20">
              {/* Left: Number */}
              <div className="col-span-12 md:col-span-2">
                <span className="text-5xl md:text-6xl font-light text-gray-600">
                  ({service.number})
                </span>
              </div>
              
              {/* Right: Content */}
              <div className="col-span-12 md:col-span-10">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                  {service.title}
                </h2>
                
                {service.subtitle && (
                  <h3 className="text-3xl md:text-5xl font-light mb-10 tracking-tight">
                    {service.subtitle}
                  </h3>
                )}

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed mb-12">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-6 text-sm md:text-base text-gray-500">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-gray-600 min-w-[2rem]">{String(idx + 1).padStart(2, '0')}</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;