export default function Datenschutz() {
    return (
        <main className="min-h-screen relative flex flex-col bg-black overflow-hidden selection:bg-maverick-red selection:text-white pt-32 lg:pt-40 pb-12">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-white">Datenschutzerklärung (DSGVO)</h1>

                <div className="space-y-10 text-white/70 leading-relaxed">
                    <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Allgemeine Hinweise</h3>
                        <p className="mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Datenschutz</h3>
                        <p className="mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-4">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im <strong>Impressum</strong> aufgeführt. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                        </p>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Ihre Rechte: Widerruf, Auskunft, Löschung und Sperrung</h3>
                        <p className="mb-4">
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten (Art. 15 bis 21 DSGVO). Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Hosting</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Externes Hosting durch Hosttech</h3>
                        <p className="mb-4">
                            Diese Website wird bei unserem Partner <strong>hosttech GmbH</strong> gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.
                        </p>
                        <p className="mb-4">
                            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Server-Log-Dateien</h3>
                        <p className="mb-4">
                            Der Provider der Seiten (Hosttech) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-white/80">
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p>
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies & Tracking</h2>
                        <h3 className="text-xl font-semibold text-white/90 mb-2">Essenzielle Cookies</h3>
                        <p className="mb-4">
                            Unsere Internetseiten verwenden teilweise so genannte „Cookies“. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Wir verwenden auf dieser Webseite ausschließlich essenzielle (technisch notwendige) Cookies, die für den Betrieb der Seite erforderlich sind (z.B. Session-Status).
                        </p>
                        <p>
                            Es findet derzeit kein aktives Tracking (wie Google Analytics) und kein Einsatz von Marketing-Cookies statt. Sollte sich dies in Zukunft ändern, werden wir vorab Ihre explizite Zustimmung über einen Cookie-Banner einholen.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
