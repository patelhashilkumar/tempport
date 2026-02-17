import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="py-24 bg-white text-gray-900 border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-[1400px] text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-primary/5 p-12 py-20 rounded-3xl"
                >
                    <FlaskConical size={64} className="text-primary mx-auto mb-6" />
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6"> Research & <br /> Patents</h2>
                    <p className="text-gray-600 text-xl max-w-lg mx-auto mb-8">
                        Currently working on innovative research in the field of Artificial Intelligence and Machine Learning.
                    </p>
                    <div className="inline-block px-8 py-3 bg-white border border-gray-200 shadow-sm rounded-full font-bold uppercase tracking-widest text-sm text-gray-500">
                        Coming Soon
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Research;
