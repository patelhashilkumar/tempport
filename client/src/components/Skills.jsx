import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const customSkills = [
        { category: "Languages", items: ["Python", "C++", "JavaScript", "C", "Java"] },
        { category: "Frameworks", items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"] },
        { category: "Tools & DB", items: ["MongoDB", "MySQL", "Git/GitHub", "VS Code"] },
        { category: "Soft Skills", items: ["Problem Solving", "Teamwork", "Adaptability", "Project Management"] }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-50 text-gray-900 border-b border-gray-200">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter text-primary">
                        Technical <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 stroke-text">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {customSkills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 border-t-4 border-primary hover:border-accent shadow-lg transition-all hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-display font-bold uppercase mb-6 text-gray-800">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
