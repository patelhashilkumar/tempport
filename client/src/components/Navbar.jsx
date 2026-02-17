import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const sidebarVariants = {
        closed: { x: "100%", transition: { type: "tween" } },
        open: { x: 0, transition: { type: "tween", ease: "easeOut" } }
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 pt-6 px-4 md:px-12 bg-transparent text-white font-display uppercase tracking-widest">
            <div className="flex items-center justify-between h-16 max-w-[1400px] mx-auto">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-shrink-0 cursor-pointer"
                >
                    <h1 className="text-3xl font-bold italic tracking-tighter">
                        HASHIL<span className="text-accent">.</span>
                    </h1>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-bold hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                        </motion.a>
                    ))}

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        href="#contact"
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-full text-sm hover:bg-white transition-colors"
                    >
                        HIRE ME
                    </motion.a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="fixed inset-y-0 right-0 w-full bg-primary z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold hover:text-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
