export default function Impressum() {
    return (
        <main className="min-h-screen bg-black text-white p-8 md:p-24 pt-32 lg:pt-40 selection:bg-maverick-red">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Impressum</h1>

                <div className="space-y-8 text-white/70 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Max Mustermann<br />
                            Musterstraße 1<br />
                            12345 Musterstadt
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <p>
                            Telefon: +49 (0) 123 44 55 66<br />
                            E-Mail: info@maverick-rp.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p>
                            Max Mustermann<br />
                            Musterstraße 1<br />
                            12345 Musterstadt
                        </p>
                    </section>

                    <p className="text-sm text-white/40 mt-12">
                        Dies ist ein Platzhalter-Impressum für das Maverick RP Demo-Projekt.
                    </p>
                </div>
            </div>
        </main>
    );
}
