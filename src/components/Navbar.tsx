import Link from 'next/link';
import { Suspense } from 'react';
import { ServerStatusBadge } from '@/components/ServerStatusBadge';

export function Navbar() {
    return (
        <header className="absolute top-0 w-full p-8 lg:p-14 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            {/* Left: Logo & Connect Button */}
            <div className="flex-1 flex justify-start items-center gap-8 pointer-events-auto">
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <img src="/Maverick_Transparent_1_1.png" alt="Maverick State Roleplay Logo" className="h-20 lg:h-28 w-auto object-contain" />
                </a>

                <a
                    href="fivem://connect/185.142.213.111"
                    className="hidden lg:flex items-center gap-2 bg-maverick-red hover:bg-maverick-red/80 text-white font-bold tracking-widest uppercase text-sm px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_30px_rgba(230,57,70,0.5)] border border-maverick-red/50"
                >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Verbinden
                </a>
            </div>

            {/* Center: Server Status Badge - Nudged slightly to the left from previous right-ward push */}
            <div className="hidden lg:flex flex-none justify-center ml-4 lg:ml-12 pointer-events-auto">
                <Suspense fallback={<div className="h-[72px] w-[500px] glass-panel rounded-2xl animate-pulse" />}>
                    <ServerStatusBadge />
                </Suspense>
            </div>

            {/* Right: Navigation Links */}
            <div className="flex-1 flex justify-end pointer-events-auto">
                <nav className="hidden md:flex gap-6 lg:gap-8 font-semibold uppercase tracking-widest text-sm text-white/50 justify-end flex-wrap text-right">
                    <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
                    <a href="https://discord.gg/x7Fudzcu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Discord</a>
                    <Link href="/ts3" className="hover:text-white transition-colors duration-300">TS3</Link>
                    <Link href="/regeln" className="hover:text-white transition-colors duration-300">Regeln</Link>
                </nav>
            </div>
        </header>
    );
}
