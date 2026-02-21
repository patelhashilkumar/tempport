import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Seasonal Sales Predictor',
            category: 'Data Science',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
            link: '#'
        },
        {
            id: 2,
            title: 'Mindwell-AI App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
            link: 'https://studio--studio-639994847-66f7a.us-central1.hosted.app/login'
        },
        {
            id: 3,
            title: 'Sign Language Translator',
            category: 'AI / Machine Learning',
            image: 'https://images.unsplash.com/photo-1589254065878-42c014d074b8?q=80&w=2670&auto=format&fit=crop',
            link: '#'
        },
        {
            id: 4,
            title: 'E-Commerce Platform',
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-primary text-white">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight">
                        My Recent <br /> <span className="text-accent">Works</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                        >
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <div className="relative overflow-hidden rounded-none">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary">
                                            <ArrowUpRight size={32} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 border-b border-white/20 pb-6 group-hover:border-accent transition-colors">
                                    <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{project.category}</p>
                                    <h3 className="text-3xl font-display font-bold uppercase">{project.title}</h3>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="#" className="inline-block px-12 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
