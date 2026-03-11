"use client";
import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

const categories: { title: string; icon: React.ElementType; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Next.js", icon: "▲" },
      { name: "HTML5", icon: "🔶" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Vite", icon: "⚡" },
      { name: "Webpack", icon: "📦" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎯" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const CategoryIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              className="glass-card p-6 rounded-xl hover:glow-border transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CategoryIcon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-mono">{`<${cat.title} />`}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-muted/30 rounded-lg p-3 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-lg block mb-1">{skill.icon}</span>
                    <span className="text-xs font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
