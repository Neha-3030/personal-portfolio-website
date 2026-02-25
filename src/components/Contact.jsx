const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black gradient-text mb-6">Let's Connect</h2>
          <div className="glass inline-block px-8 py-4 rounded-full shadow-xl mx-auto">
            <span className="text-xl font-semibold text-purple-300">Get In Touch</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl hover-lift">
              <h3 className="text-2xl font-bold gradient-text mb-4">Email</h3>
              <p className="text-gray-300 mb-4">neha@shinde.com</p>
              <button className="btn-secondary w-full">Copy Email</button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl text-center hover-lift">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-400">+91 xxxxx x3210</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center hover-lift">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-400">Pune, India</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass p-12 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <textarea 
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-transparent transition-all resize-vertical"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full text-xl py-6 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
