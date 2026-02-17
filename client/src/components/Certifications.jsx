import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            name: 'Build Generative AI Apps and Solutions with No-Code Tools',
            issuer: 'Google Cloud',
            date: '2024',
            file: '/certificates/Build Generative AI Apps and Solutions with No-Code Tools.pdf'
        },
        {
            name: 'Software Development Processes',
            issuer: 'Coursera / University of Minnesota',
            date: "Apr'24",
            file: '/certificates/Coursera GM7RMWYMNDMC.pdf'
        },
        {
            name: 'Language Principle & Finite Automata Theory',
            issuer: 'Academic',
            date: '2024',
            file: '/certificates/Language Principle & Finite Automata Theory.pdf'
        },
        {
            name: 'ChatGPT Prompt Engineering',
            issuer: 'Infosys',
            date: "Jan'24",
            file: '/certificates/chatgpt.pdf'
        },
        {
            name: 'Master Certificate',
            issuer: 'Professional Development',
            date: '2024',
            file: '/certificates/master.pdf'
        },
        {
            name: 'Computer Science Certification',
            issuer: 'TrueCredential',
            date: '2024',
            file: '/certificates/TC_hashilpatel9909@gmail.com_CS2024-10207'
        }
    ];

    const achievements = [
        { name: 'Global Digital Health Summit', desc: 'Innovation in digital health', date: "Sep'25" },
        { name: 'Adobe India Hackathon', desc: 'Innovation-focused national hackathon', date: "Jul'25" },
        { name: 'Incredible 8', desc: 'Social media competition by LPU', date: "May'24" }
    ];

    return (
        <section id="certifications" className="py-24 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Certifications */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <Award size={48} className="text-primary" />
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Certifications</h2>
                        </div>
                        <div className="space-y-6">
                            {certs.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white p-6 shadow-lg border-l-8 border-primary hover:border-accent transition-all group"
                                >
                                    <h3 className="text-lg font-bold uppercase mb-2">{cert.name}</h3>
                                    <div className="flex justify-between items-center text-sm text-gray-600 font-bold uppercase tracking-wider mb-3">
                                        <span>{cert.issuer}</span>
                                        <span>{cert.date}</span>
                                    </div>
                                    <a
                                        href={cert.file}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider"
                                    >
                                        <ExternalLink size={14} />
                                        View Certificate
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <Trophy size={48} className="text-accent" />
                            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Achievements</h2>
                        </div>
                        <div className="space-y-8">
                            {achievements.map((ach, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white p-6 shadow-lg border-l-8 border-accent hover:border-primary transition-all"
                                >
                                    <h3 className="text-xl font-bold uppercase mb-2">{ach.name}</h3>
                                    <p className="text-gray-600 mb-3">{ach.desc}</p>
                                    <span className="text-xs bg-gray-100 px-2 py-1 font-bold uppercase tracking-widest text-gray-500">{ach.date}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
