
import { ExternalLink, Github, Bot, Gamepad2, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot built with modern AI technologies for automated customer support.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      icon: Bot,
      tech: ["Python", "TensorFlow", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Game Hub",
      description: "Interactive gaming platform with multiple mini-games and leaderboards.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      icon: Gamepad2,
      tech: ["JavaScript", "Node.js", "Socket.io"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing development skills.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop",
      icon: Globe,
      tech: ["React", "TypeScript", "Tailwind"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my development skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 right-4">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Github size={16} />
                    <span className="text-sm text-white">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm text-white">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
