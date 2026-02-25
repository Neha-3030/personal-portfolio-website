const Hero = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="glass inline-flex px-8 py-4 rounded-full mb-12 shadow-xl">
          <span className="text-xl font-semibold text-purple-300">Frontend Developer</span>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight gradient-text-hero">
          Hi, I'm <span className="text-pink-400">Neha</span>
        </h1>
        
        <p className="text-2xl text-gray-300 mb-12 max-w-lg leading-relaxed">
          Passionate about creating stunning web experiences with React & modern tools.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <button onClick={() => scrollToSection('projects')} className="btn-primary text-xl px-12 py-6 shadow-2xl">
            My Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-secondary text-xl px-12 py-6">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* 🔥 PHOTO REPLACED ✨ */}
      <div className="glass p-12 lg:p-20 rounded-3xl animate-float shadow-2xl">
        <img 
          src="/hero-photo.jpg"
          alt="Neha"
          className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/30 hover:scale-105 transition-all duration-500 mx-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Hero;
