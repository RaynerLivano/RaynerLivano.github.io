import React from "react";

const Works = () => {
  const projects = [
    {
      number: "01",
      title: "NURA",
      category: "Modern Marketing Website",
      tags: ["DEVELOPMENT", "2025"],
      image: "/api/placeholder/1200/800"
    },
    {
      number: "02",
      title: "Project Two",
      category: "E-commerce Platform",
      tags: ["DESIGN", "2024"],
      image: "/api/placeholder/1200/800"
    },
    {
      number: "03",
      title: "Project Three",
      category: "Mobile Application",
      tags: ["DESIGN", "2024"],
      image: "/api/placeholder/1200/800"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight">
            Selected Works /
          </h1>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="grid grid-cols-12 gap-12 xl:gap-16 border-t border-gray-800 py-16 xl:py-20 hover:bg-gray-900 transition-colors cursor-pointer group"
            >
              {/* Left: Number */}
              <div className="col-span-12 lg:col-span-1 flex items-start justify-start lg:justify-center">
                <span className="text-6xl lg:text-7xl xl:text-8xl font-light text-gray-600">
                  {project.number}
                </span>
              </div>
              
              {/* Middle: Image */}
              <div className="col-span-12 lg:col-span-6 xl:col-span-6">
                <div className="relative overflow-hidden bg-gray-800 aspect-video w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right: Info */}
              <div className="col-span-12 lg:col-span-5 xl:col-span-5 flex flex-col justify-between py-4">
                <div>
                  <p className="text-sm xl:text-base text-gray-500 mb-4 tracking-wider uppercase">
                    {project.category}
                  </p>
                  <h2 className="text-5xl xl:text-7xl font-light tracking-tight leading-tight">
                    {project.title}
                  </h2>
                </div>

                <div className="flex gap-4 mt-8">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-5 py-2.5 border border-gray-700 rounded-full text-xs xl:text-sm tracking-wider uppercase"
                    >
                      {tag}
                    </span>
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

export default Works;