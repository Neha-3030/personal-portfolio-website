const Skills = () => {
  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-blue-400" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-yellow-400" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-cyan-400" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
    { name: "Vite", level: 88, color: "from-purple-500 to-purple-400" },
    { name: "Git", level: 87, color: "from-orange-500 to-orange-400" }
  ];

  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black gradient-text mb-6">My Skills</h2>
          <div className="glass inline-block px-8 py-4 rounded-full shadow-xl">
            <span className="text-xl font-semibold text-purple-300">What I Bring to Table</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills List */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass p-8 rounded-3xl group hover-lift">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold gradient-text">{skill.name}</h3>
                  <span className="text-xl font-semibold text-white/80">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-4">
                  <div 
                    className={`h-4 rounded-full animate-glow bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div>
            <div className="glass p-12 rounded-3xl text-center mb-12 hover-lift">
              <h3 className="text-3xl font-bold gradient-text mb-6">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4 text-2xl">
                <div>⚛️ React</div>
                <div>⚡ Vite</div>
                <div>🎨 Tailwind</div>
                <div>📱 Next.js</div>
                <div>🔥 Framer Motion</div>
                <div>⚙️ Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
