'use client';

import { motion } from 'framer-motion';
import { Map, Landmark, Shield, Crosshair } from 'lucide-react';

const features = [
    {
        icon: <Map size={32} />,
        title: 'Custom Maps & YMAPs',
        description: 'Explore exclusively designed interiors, custom car dealerships, and optimized Los Santos expansions built for roleplay.',
        color: 'text-neon-cyan',
    },
    {
        icon: <Landmark size={32} />,
        title: 'Dynamic Economy',
        description: 'Player-driven market with realistic inflation, crypto-trading, and deep business management systems.',
        color: 'text-maverick-red',
    },
    {
        icon: <Shield size={32} />,
        title: 'Active DOJ & LSPD',
        description: 'Immersive justice system, serious RP police force, and high-stakes criminal underworld.',
        color: 'text-white',
    },
    {
        icon: <Crosshair size={32} />,
        title: 'Turf Wars & Gangs',
        description: 'Fight for control over territories. Custom graffiti, drug manufacturing, and black market weapons.',
        color: 'text-white/70',
    }
];

export function CustomMapsSection() {
    return (
        <section className="relative py-24 px-6 max-w-7xl mx-auto z-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4"
                >
                    High-Stakes <span className="text-transparent bg-clip-text bg-gradient-to-r from-maverick-red to-orange-600">Features</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/60 max-w-2xl mx-auto text-lg"
                >
                    Welcome to Los Santos like you've never seen it before. Maverick RP redefines serious roleplay with custom systems and unparalleled performance.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
                    >
                        <div className={`mb-6 p-4 rounded-xl bg-white/5 inline-block ${feature.color} group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{feature.title}</h3>
                        <p className="text-white/50 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
