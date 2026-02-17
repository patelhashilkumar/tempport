import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full bg-primary pt-32 pb-20 md:pt-40 md:pb-0 overflow-hidden text-white min-h-[90vh] flex flex-col justify-center">

            <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col z-20"
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase leading-[0.9] tracking-tighter">
                            AI/ML <br />
                            <span className="text-white/90">Engineer</span>
                        </h2>

                        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="max-w-xs text-sm md:text-base font-body text-gray-200 leading-relaxed">
                                <p>
                                    I am Hashil, a passionate Full Stack Developer and AI enthusiast.
                                    I create modern digital experiences that help businesses grow.
                                </p>
                            </div>

                            <div className="flex gap-4 items-center">
                                <SocialIcon href="https://github.com/patelhashilkumar" icon={<Github />} />
                                <SocialIcon href="https://linkedin.com/in/hashil-patel" icon={<Linkedin />} />
                                <SocialIcon href="#" icon={<Instagram />} />
                                <a
                                    href="/resume.pdf"
                                    download="Hashil_Patel_CV.pdf"
                                    className="ml-2 flex items-center gap-2 px-5 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-sm"
                                >
                                    <Download size={18} />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content / Image Area */}
                    <div className="relative h-[500px] md:h-[700px] flex items-end justify-center">
                        {/* Circle Background */}
                        <div className="absolute top-10 md:top-auto md:bottom-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/10 rounded-full blur-3xl"></div>


                        {/* Portrait Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <img
                                src="/hashil.png"
                                alt="Hashil Patel"
                                className="h-[400px] md:h-[650px] object-cover drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 mask-image-gradient"
                                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                            />
                        </motion.div>

                        {/* Floating Text Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden md:block absolute top-[20%] right-[-5%] z-0"
                        >
                            <h2 className="text-[8rem] font-display font-bold uppercase leading-none tracking-tighter text-right opacity-30 md:opacity-100">
                                FULL <br />
                                STACK <br />
                                <span className="text-accent">CODER</span>
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-accent"></div>
        </section>
    );
};

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all text-white"
    >
        {icon}
    </a>
)

export default Hero;
