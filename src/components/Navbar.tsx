import Link from 'next/link';
import { Suspense } from 'react';
import { ServerStatusBadge } from '@/components/ServerStatusBadge';

export function Navbar() {
    return (
        <header className="absolute top-0 w-full p-8 lg:p-14 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity w-[200px]">
                <img src="/Maverick_Transparent_1_1.png" alt="Maverick State Roleplay Logo" className="h-20 lg:h-28 w-auto object-contain" />
            </Link>

            {/* Center: Server Status Badge */}
            <div className="hidden lg:flex flex-grow justify-center">
                <Suspense fallback={<div className="h-[72px] w-[500px] glass-panel rounded-2xl animate-pulse" />}>
                    <ServerStatusBadge />
                </Suspense>
            </div>

            {/* Right: Navigation Links */}
            <nav className="hidden md:flex gap-8 font-semibold uppercase tracking-widest text-sm text-white/50 w-[200px] justify-end">
                <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
                <a href="https://discord.gg/x7Fudzcu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Discord</a>
                <a href="ts3server://deine-ts-ip.de" className="hover:text-white transition-colors duration-300">TS3</a>
                <Link href="/regeln" className="hover:text-white transition-colors duration-300">Regeln</Link>
            </nav>
        </header>
    );
}
