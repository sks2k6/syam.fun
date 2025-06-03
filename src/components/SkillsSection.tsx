
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-purple-500",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Vue.js"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "MongoDB"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"]
    },
    {
      title: "Tools & Languages",
      icon: Code2,
      color: "from-purple-500 to-indigo-500",
      skills: ["Git", "Docker", "VS Code", "Figma", "Postman", "GitHub"]
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-yellow-500 to-orange-500",
      skills: ["UI/UX Design", "Responsive Design", "Adobe XD", "Figma", "Color Theory"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Constantly learning and improving my skills across various technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white/90">{skill}</span>
                    <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
