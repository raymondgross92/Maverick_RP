export default function Datenschutz() {
    return (
        <main className="min-h-screen bg-black text-white p-8 md:p-24 pt-32 lg:pt-40 selection:bg-maverick-red">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Datenschutzerklärung</h1>

                <div className="space-y-8 text-white/70 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Datenerfassung auf unserer Website</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Server-Log-Dateien</h2>
                        <p>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                    </section>

                    <p className="text-sm text-white/40 mt-12">
                        Dies ist eine Platzhalter-Datenschutzerklärung gemäß DSGVO für das Maverick RP Demo-Projekt.
                    </p>
                </div>
            </div>
        </main>
    );
}
