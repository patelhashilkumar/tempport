import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-white pt-24">
            {/* Call to Action Section */}
            <div className="container mx-auto px-4 max-w-[1400px] mb-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-gray-900 leading-none">
                            Have a Project?
                        </h2>
                        <h2 className="text-6xl md:text-9xl font-display font-bold uppercase text-primary leading-none mt-2">
                            Let's Talk
                        </h2>
                    </div>

                    <motion.a
                        href="mailto:hashilpatel9909@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-48 h-48 rounded-full bg-accent flex items-center justify-center relative group cursor-pointer"
                    >
                        <ArrowUpRight size={64} className="text-primary group-hover:rotate-45 transition-transform duration-300" />
                        <span className="absolute bottom-8 text-xs font-bold uppercase tracking-widest text-primary">Email Me</span>
                    </motion.a>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-primary text-white pt-20 pb-10">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/20 pb-20">
                        {/* Brand */}
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-4xl font-display font-bold italic mb-6">HASHIL<span className="text-accent">.</span></h3>
                            <a href="mailto:hashilpatel9909@gmail.com" className="text-lg md:text-2xl font-bold hover:text-accent transition-colors">
                                hashilpatel9909@gmail.com
                            </a>
                            <a href="tel:+919327086366" className="block mt-3 text-lg md:text-2xl font-bold hover:text-accent transition-colors">
                                +91 9327086366
                            </a>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 opacity-70">Socials</h4>
                            <ul className="space-y-4 font-medium">
                                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-accent transition-colors">Behance</a></li>
                            </ul>
                        </div>

                        {/* Menu */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 opacity-70">Menu</h4>
                            <ul className="space-y-4 font-medium">
                                <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                                <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
                                <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
                                <li><a href="#education" className="hover:text-accent transition-colors">Education</a></li>
                                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Address */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 opacity-70">Office</h4>
                            <address className="not-italic font-medium leading-relaxed opacity-90">
                                123 Street Name,<br />
                                City Location, Country<br />
                                390001
                            </address>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium opacity-60">
                        <p>&copy; 2026 Hashil Patel. All Rights Reserved.</p>
                        <div className="flex space-x-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
