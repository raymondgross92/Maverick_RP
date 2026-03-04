import { Suspense } from 'react';
import { Hero3D } from '@/components/3d/Hero3D';
import { ServerStatusBadge } from '@/components/ServerStatusBadge';
import { CustomMapsSection } from '@/components/CustomMapsSection';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-black overflow-hidden selection:bg-maverick-red selection:text-white">
      {/* 3D Background */}
      <Hero3D />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Header placeholder */}
        <header className="absolute top-0 w-full p-6 lg:p-10 flex justify-between items-center z-50">
          <div className="font-black text-2xl tracking-tighter uppercase text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-maverick-red rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-black/40 backdrop-blur-sm -rotate-45" />
            </div>
            Maverick <span className="text-maverick-red">RP</span>
          </div>
          <nav className="hidden md:flex gap-8 font-semibold uppercase tracking-widest text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Rules</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Store</a>
          </nav>
          <a
            href="https://discord.gg/placeholder"
            className="flex items-center gap-2 bg-maverick-red hover:bg-maverick-red/80 transition-colors text-white px-6 py-2.5 rounded-sm uppercase tracking-wider font-bold text-sm shadow-[0_0_20px_rgba(234,0,39,0.3)]"
          >
            Join Server
          </a>
        </header>

        {/* Hero Section Content */}
        <section className="flex-grow flex flex-col justify-center items-center text-center px-6 relative mt-32 md:mt-20 lg:mt-0">
          {/* Subtle gradient overlay to make text pop against 3D */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
              Write Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-maverick-red animate-pulse">
                Legacy
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
              Join the most immersive GTA V roleplay experience. Choose your path, build your empire, and dominate the streets of Los Santos.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a href="#" className="glass-panel px-8 py-4 rounded-sm uppercase font-black tracking-widest hover:bg-white/10 transition-colors border-white/20">
                Play Now
              </a>
              <a href="#" className="px-8 py-4 rounded-sm uppercase font-black tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2">
                Server Rules
              </a>
            </div>

            <div className="mt-20 w-fit">
              <Suspense fallback={<div className="h-20 w-80 glass-panel rounded-2xl animate-pulse" />}>
                <ServerStatusBadge />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <CustomMapsSection />

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center relative z-10 bg-black/80 backdrop-blur-xl mt-auto">
          <p className="text-white/40 uppercase tracking-widest text-xs font-semibold">
            &copy; {new Date().getFullYear()} Maverick RP. Not affiliated with Rockstar Games.
          </p>
        </footer>
      </div>
    </main>
  );
}
