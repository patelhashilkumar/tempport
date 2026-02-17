import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-[1400px]">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-gray-200 pb-12">
                    <StatItem number="02" label="Years Experience" />
                    <StatItem number="05" label="Projects Done" />
                    <StatItem number="10" label="Happy Clients" />
                    <StatItem number="4.9" label="Avg Rating" />
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight leading-[0.9] text-primary mb-8">
                            My Work <br /> Experience
                        </h2>
                        <p className="text-gray-600 text-lg max-w-md">
                            A showcase of my professional journey, internships, and roles where I've honed my skills in development and design.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <ExperienceItem
                            role="Frontend Developer Intern"
                            company="OrbosisGlobal"
                            date="Nov 2025"
                            description="Overseeing end-to-end content migration and SEO integration. building responsive websites with HTML, CSS, JS."
                        />
                        <ExperienceItem
                            role="Computer Science Student"
                            company="Lovely Professional University"
                            date="2023 - Present"
                            description="Pursuing B.Tech CSE, maintaining a CGPA of 7.0. Focusing on Full Stack Web Development and AI."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ number, label }) => (
    <div className="text-center md:text-left">
        <h3 className="text-6xl md:text-8xl font-display font-bold text-primary mb-2">{number}<span className="text-accent text-4xl align-top">+</span></h3>
        <p className="font-bold uppercase tracking-widest text-sm text-gray-500">{label}</p>
    </div>
);

const ExperienceItem = ({ role, company, date, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-l-4 border-gray-200 pl-8 hover:border-accent transition-colors duration-300"
    >
        <span className="inline-block px-3 py-1 bg-gray-100 text-primary text-xs font-bold uppercase tracking-widest rounded mb-2">{date}</span>
        <h3 className="text-2xl font-display font-bold uppercase mb-1">{role}</h3>
        <h4 className="text-lg text-gray-500 mb-4">{company}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

export default Experience;
