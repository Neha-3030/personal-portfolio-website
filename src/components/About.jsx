const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black gradient-text mb-6">About Neha</h2>
        <div className="glass inline-block px-8 py-4 rounded-full">
          <span className="text-xl font-semibold text-purple-300">My Story</span>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Passionate frontend developer with 1+ years experience building beautiful, performant web applications. 
            Specializing in React, Tailwind CSS, and modern UI/UX design.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl text-center hover-lift">
              <div className="text-3xl mb-2">10+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover-lift">
              <div className="text-3xl mb-2">1+</div>
              <div className="text-gray-400">Years Exp</div>
            </div>
          </div>
        </div>
        
        {/* 👩‍💻 EMOJI → PHOTO REPLACED */}
        <div className="glass p-12 rounded-3xl animate-glow">
  <div className="w-full flex justify-center">
    <img 
  src="/neha-photo.jpg" 
  alt="Neha"
  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/30 hover:scale-110 transition-all duration-500 mx-auto"
  loading="lazy"
/>

  </div>
</div>

      </div>
    </div>
  </section>
);

export default About;
