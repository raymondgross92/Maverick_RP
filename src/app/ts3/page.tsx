import Link from 'next/link';
import { Headphones, Download } from 'lucide-react';

export default function TS3Page() {
    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 pt-32 lg:pt-40 selection:bg-maverick-red selection:text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-maverick-red/10 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <a href="/" className="text-maverick-red hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-12 inline-block relative z-50">
                    &larr; Zurück zur Startseite
                </a>

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 relative inline-block">
                        Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Setup</span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Verbinde dich mit unserem TeamSpeak Server und installiere Salty Chat für das beste Ingame-Voice Erlebnis im Maverick State.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Card 1: TeamSpeak */}
                    <a
                        href="ts3server://185.142.213.111?port=9987"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-8 glass-panel rounded-3xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="mb-6 p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner group-hover:bg-neon-cyan/10 transition-colors duration-500">
                            <Headphones strokeWidth={1.5} className="w-16 h-16 text-neon-cyan" />
                        </div>

                        <h2 className="text-3xl font-black uppercase tracking-widest mb-4">TeamSpeak 3</h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Verbinde dich direkt mit unserem TS3 Server. Klicke hier, um TeamSpeak automatisch zu starten und dem Server beizutreten.
                        </p>

                        <div className="mt-auto px-6 py-3 bg-white/10 rounded-lg uppercase tracking-widest text-sm font-bold group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                            Verbinden
                        </div>
                    </a>

                    {/* Card 2: Salty Chat */}
                    <a
                        href="https://saltyhub.net/saltychat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-8 glass-panel rounded-3xl border border-white/10 hover:border-maverick-red/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-maverick-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="mb-6 p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner group-hover:bg-maverick-red/10 transition-colors duration-500">
                            <Download strokeWidth={1.5} className="w-16 h-16 text-maverick-red" />
                        </div>

                        <h2 className="text-3xl font-black uppercase tracking-widest mb-4">Salty Chat</h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Lade dir die neueste Version von Salty Chat herunter. Dieses Plugin wird zwingend für das Spielen auf dem Server benötigt.
                        </p>

                        <div className="mt-auto px-6 py-3 bg-white/10 rounded-lg uppercase tracking-widest text-sm font-bold group-hover:bg-maverick-red group-hover:text-white transition-all duration-300">
                            Download
                        </div>
                    </a>

                </div>
            </div>
        </main>
    );
}
