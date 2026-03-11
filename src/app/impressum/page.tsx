export default function Impressum() {
    return (
        <main className="min-h-screen relative flex flex-col bg-black overflow-hidden selection:bg-maverick-red selection:text-white pt-32 lg:pt-40 pb-12">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-white">Impressum</h1>

                <div className="space-y-10 text-white/70 leading-relaxed">
                    <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Betreiber der Website</h3>
                        <p className="mb-4">
                            [Name der Organisation / Vor- und Nachname]<br />
                            [Straße und Hausnummer]<br />
                            [Postleitzahl und Ort]<br />
                            [Land, falls relevant]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <p className="mb-4">
                            Telefon: [Deine Telefonnummer, optional]<br />
                            E-Mail: [Deine E-Mail-Adresse]<br />
                            Discord: [Link zum Discord-Server, optional]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                        <p className="mb-4">
                            [Vor- und Nachname des inhaltlich Verantwortlichen]<br />
                            [Straße und Hausnummer]<br />
                            [Postleitzahl und Ort]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Streitschlichtung</h2>
                        <p className="mb-4">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-maverick-red transition-colors underline underline-offset-4">https://ec.europa.eu/consumers/odr/</a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
                        <p className="mb-4">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
