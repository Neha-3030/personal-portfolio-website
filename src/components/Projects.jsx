const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Product Page",
      description: "Interactive product gallery with modal viewer, cart functionality, and glassmorphism design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Drag & drop task board with real-time updates, local storage, and beautiful animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Vite", "Local Storage"],
      live: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location search, charts, and animated weather icons.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "API", "Charts"],
      live: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black gradient-text mb-6">Featured Projects</h2>
          <div className="glass inline-block px-8 py-4 rounded-full shadow-xl">
            <span className="text-xl font-semibold text-purple-300">Recent Work</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group cursor-pointer hover-lift">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="glass px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} className="btn-secondary flex-1 text-center">Live Demo</a>
                <a href={project.github} className="glass px-6 py-3 rounded-xl hover:bg-white/20 transition-all">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
