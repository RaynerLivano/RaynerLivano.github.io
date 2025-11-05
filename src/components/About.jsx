import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["Python", "SQL", "C++", "Java", "Typescript", "JavaScript", "Git", "Postman", "Docker", "Firebase"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "Flask", "Bootstrap", "jQuery", "TailwindCSS", "Framer Motion", "GSAP"]
    },
    {
      title: "Core CS Concepts",
      skills: ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"]
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Side - Title */}
          <div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none">
              DEVELOPER<br />
              DESIGNER<br />
              CREATOR/
            </h1>
          </div>

          {/* Right Side - Skills */}
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-16 tracking-tight">
              Skills
            </h2>

            <div className="space-y-16">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl lg:text-2xl font-light mb-6 text-gray-400">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-lg lg:text-xl text-gray-300 font-light">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;