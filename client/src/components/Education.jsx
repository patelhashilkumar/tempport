import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            institution: 'Lovely Professional University',
            location: 'Phagwara, Punjab',
            degree: 'B.Tech - Computer Science and Engineering',
            duration: 'Aug’23 – Aug’27',
            score: 'CGPA: 7'
        },
        {
            institution: 'Army Public School',
            location: 'Ahmedabad, Gujarat',
            degree: 'Senior Secondary (12th)',
            duration: 'Apr’21 – Mar’23',
            score: 'CGPA: 6.21'
        },
        {
            institution: 'Army Public School',
            location: 'Ahmedabad, Gujarat',
            degree: 'Secondary (10th)',
            duration: 'Apr’19 – Mar’21',
            score: 'Percentage: 91.4%'
        }
    ];

    return (
        <section id="education" className="py-24 bg-primary text-white">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-16">
                    Education
                </h2>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/20 pb-12 hover:border-accent transition-colors group"
                        >
                            <div className="md:w-2/3">
                                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase mb-2 group-hover:text-accent transition-colors">{edu.institution}</h3>
                                <p className="text-xl opacity-80">{edu.degree}</p>
                                <p className="text-sm uppercase tracking-widest mt-2 opacity-60">{edu.location}</p>
                            </div>
                            <div className="md:w-1/3 md:text-right mt-6 md:mt-0">
                                <p className="text-2xl font-bold mb-1">{edu.score}</p>
                                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-bold uppercase tracking-widest">{edu.duration}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
