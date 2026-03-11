import { Suspense } from 'react';
import { CustomMapsSection } from '@/components/CustomMapsSection';
import { IntroSequence } from '@/components/IntroSequence';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-black overflow-hidden selection:bg-maverick-red selection:text-white">
      <IntroSequence />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section Content */}
        <section className="flex-grow flex flex-col items-center px-6 relative pt-[40vh]">
          {/* Subtle gradient overlay to make text pop against 3D */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* The Status Badge has been moved to the Navigation Header */}
          </div>
        </section>

        {/* Features Section */}
        <CustomMapsSection />

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center relative z-10 bg-black/80 backdrop-blur-xl mt-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="text-white/40 uppercase tracking-widest text-xs font-semibold">
              &copy; {new Date().getFullYear()} Maverick RP
            </p>
            <div className="flex gap-6 text-white/30 text-xs uppercase tracking-widest font-medium">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>

          {/* Absolute positioned Partner Logo in bottom right */}
          <div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-8 flex items-center justify-end gap-3 pointer-events-auto z-20">
            <span className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-right hidden sm:block">
              Proudly<br/>Hosted By
            </span>
            <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold sm:hidden">
              Hosted By
            </span>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block mx-1"></div>
            <a href="https://www.hosttech.ch/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-all duration-300 block hover:scale-105">
              <span className="sr-only">Partner: Hosttech</span>
              <Image src="/Hosttech_logo.png" alt="Hosttech Logo" width={250} height={80} className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
