
import { Instagram, Bot, MessageCircle, Contact, Gamepad2, Code, Laptop, Coffee, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Certifications', value: '8+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Clock, label: 'Hours of Coding', value: '1000+' }
  ];

  const socialButtons = [
    { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-500', href: '#instagram' },
    { icon: Bot, label: 'Bot Projects', color: 'from-blue-500 to-cyan-500', href: '#bot' },
    { icon: MessageCircle, label: 'WhatsApp Group', color: 'from-green-500 to-emerald-500', href: '#whatsapp' },
    { icon: Contact, label: 'Contact Me', color: 'from-gray-500 to-slate-500', href: '#contact' },
    { icon: Gamepad2, label: 'Games', color: 'from-red-500 to-orange-500', href: '#games' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Me */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              I'm Syam, a passionate coding student with a love for creating innovative digital solutions. 
              Currently exploring the vast world of programming, I specialize in web development and enjoy 
              building interactive applications that solve real-world problems. My journey in tech is driven 
              by curiosity and a desire to make a positive impact through code.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <stat.icon className="mx-auto mb-3 text-purple-400" size={32} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Code className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">Frontend Development</h3>
                <p className="text-white/70 leading-relaxed">Creating beautiful, responsive user interfaces with modern frameworks and cutting-edge design principles.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Laptop className="mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">Full Stack Development</h3>
                <p className="text-white/70 leading-relaxed">Building complete web applications from database design to user interface implementation.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group">
                <Coffee className="mx-auto mb-4 text-orange-400 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">Always Learning</h3>
                <p className="text-white/70 leading-relaxed">Constantly improving and learning new technologies to stay at the forefront of development.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {socialButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`group relative overflow-hidden bg-gradient-to-r ${button.color} p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                <div className="relative z-10 text-center">
                  <button.icon className="mx-auto mb-3 text-white group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-white font-semibold">{button.label}</span>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
