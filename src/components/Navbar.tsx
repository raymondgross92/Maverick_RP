import Link from 'next/link';

export function Navbar() {
    return (
        <header className="absolute top-0 w-full p-6 lg:p-10 flex justify-between items-center z-50">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img src="/Maverick_Transparent_1_1.png" alt="Maverick State Roleplay Logo" className="h-16 lg:h-20 w-auto object-contain" />
            </Link>
            <nav className="hidden md:flex gap-8 font-semibold uppercase tracking-widest text-sm text-white/50">
                <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Discord</a>
                <a href="ts3server://deine-ts-ip.de" className="hover:text-white transition-colors duration-300">TS3</a>
                <Link href="/regeln" className="hover:text-white transition-colors duration-300">Regeln</Link>
            </nav>
        </header>
    );
}
