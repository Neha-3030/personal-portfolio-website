
const Navbar = ({ activeSection, scrollToSection }) => (
  <nav className="glass fixed top-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl px-8 py-6 rounded-3xl z-50 shadow-2xl">
    
    <div className="flex justify-between items-center">
      <div className="text-3xl font-black gradient-text">NEHA</div>
      <div className="hidden lg:flex space-x-8">
        <button onClick={() => scrollToSection('home')} className={`navbar-link ${activeSection === 'home' ? 'navbar-link-active' : ''}`}>
          Home
        </button>
        <button onClick={() => scrollToSection('about')} className={`navbar-link ${activeSection === 'about' ? 'navbar-link-active' : ''}`}>
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className={`navbar-link ${activeSection === 'skills' ? 'navbar-link-active' : ''}`}>
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className={`navbar-link ${activeSection === 'projects' ? 'navbar-link-active' : ''}`}>
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className={`navbar-link ${activeSection === 'contact' ? 'navbar-link-active' : ''}`}>
          Contact
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
