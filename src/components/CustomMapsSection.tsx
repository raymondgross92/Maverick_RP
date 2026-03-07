'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Briefcase, ShieldAlert, Flame, Crosshair, Users } from 'lucide-react';

const features = [
    {
        icon: <Gamepad2 strokeWidth={1.5} className="w-16 h-16 text-neon-cyan" />,
        title: 'Server Beitreten',
        description: (
            <>
                1. Discord verbinden<br />
                2. Salty Chat installieren<br />
                3. TS3 verbinden<br />
                4. Server beitreten
            </>
        ),
        label: 'TUTORIAL',
        color: 'neon-cyan',
        bgColor: 'bg-neon-cyan',
        borderColor: 'border-neon-cyan',
        shadowColor: 'shadow-neon-cyan',
        // Custom rotation and translation for organic, scattered look
        transform: 'rotate-[-2deg] translate-y-4 hover:rotate-0 hover:translate-y-0',
        delay: 0,
    },
    {
        icon: <Briefcase strokeWidth={1.5} className="w-16 h-16 text-maverick-red" />,
        title: 'Dynamic Economy',
        description: 'Player-driven market, crypto-trading, and deep business management.',
        label: 'FINANCE',
        color: 'maverick-red',
        bgColor: 'bg-maverick-red',
        borderColor: 'border-maverick-red',
        shadowColor: 'shadow-maverick-red',
        transform: 'rotate-[3deg] -translate-y-6 hover:rotate-0 hover:translate-y-0',
        delay: 0.1,
    },
    {
        icon: <ShieldAlert strokeWidth={1.5} className="w-16 h-16 text-white" />,
        title: 'LSPD & DOJ',
        description: 'Highly immersive justice system and a serious RP police force.',
        label: 'GOVERNMENT',
        color: 'white',
        bgColor: 'bg-white',
        borderColor: 'border-white',
        shadowColor: 'shadow-white',
        transform: 'rotate-[-4deg] translate-y-8 hover:rotate-0 hover:translate-y-0',
        delay: 0.2,
    },
    {
        icon: <Flame strokeWidth={1.5} className="w-16 h-16 text-orange-500" />,
        title: 'Tuning Scene',
        description: 'Over 500+ custom import vehicles with advanced, realistic handling.',
        label: 'MOTORSPORTS',
        color: 'orange-500',
        bgColor: 'bg-orange-500',
        borderColor: 'border-orange-500',
        shadowColor: 'shadow-orange-500',
        transform: 'rotate-[2deg] -translate-y-2 hover:rotate-0 hover:translate-y-0',
        delay: 0.3,
    },
    {
        icon: <Crosshair strokeWidth={1.5} className="w-16 h-16 text-purple-500" />,
        title: 'Turf Wars',
        description: 'Fight for control over territories and manage black market weapons.',
        label: 'CRIMINAL',
        color: 'purple-500',
        bgColor: 'bg-purple-500',
        borderColor: 'border-purple-500',
        shadowColor: 'shadow-purple-500',
        transform: 'rotate-[-3deg] translate-y-6 hover:rotate-0 hover:translate-y-0',
        delay: 0.4,
    },
    {
        icon: <Users strokeWidth={1.5} className="w-16 h-16 text-zinc-400" />,
        title: 'Community First',
        description: 'A dedicated, hand-picked player base focused on story-driven interactions.',
        label: 'CULTURE',
        color: 'zinc-400',
        bgColor: 'bg-zinc-500',
        borderColor: 'border-zinc-500',
        shadowColor: 'shadow-zinc-500',
        transform: 'rotate-[4deg] -translate-y-8 hover:rotate-0 hover:translate-y-0',
        delay: 0.5,
    }
];

export function CustomMapsSection() {
    return (
        <section className="relative py-32 px-6 max-w-[1600px] mx-auto z-10 w-full mb-32 overflow-hidden">

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-maverick-red/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            {/* Scattered "Polaroid" / Glass Card Layout */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 relative z-20 p-4">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 100, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            delay: feature.delay,
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            mass: 1
                        }}
                        // Apply the custom scatter transform on load, reset to 0 on hover
                        className={`w-[320px] h-[400px] sm:w-[350px] shrink-0 relative group transition-all duration-500 hover:z-50 ${feature.transform}`}
                    >
                        {/* Dark glass backdrop card */}
                        <div className={`absolute inset-0 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-black/90 group-hover:border-${feature.color}/30 shadow-2xl`} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>

                            {/* Internal glowing orb */}
                            <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${feature.bgColor}`} />

                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                                <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed max-w-[250px] mx-auto">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
