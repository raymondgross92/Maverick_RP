import Link from 'next/link';

export default function Regeln() {
    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 pt-32 lg:pt-40 selection:bg-maverick-red selection:text-white">
            <div className="max-w-[1400px] mx-auto relative">
                <a href="/" className="text-maverick-red hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-12 inline-block">
                    &larr; Zurück zur Startseite
                </a>

                <div className="mb-16 pb-8 border-b border-white/10">
                    <p className="text-maverick-red font-mono text-sm tracking-[0.2em] uppercase mb-4">
            
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        Maverick State <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Roleplay</span>
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-8 text-sm text-white/40 font-mono">
                        <div>
                            <span className="text-maverick-red">Stand:</span> 09.05.2025
                        </div>
                        <div>
                            <span className="text-maverick-red">Freigegeben:</span> 09.05.2025
                        </div>
                        <div>
                            <span className="text-maverick-red">Gültig für:</span> Maverick State Server (IC)
                        </div>
                    </div>
                </div>

                
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start relative">
          {/* Sticky Sidebar */}
          <aside className="sticky top-24 hidden lg:flex flex-col w-64 xl:w-72 shrink-0 gap-2 p-6 border border-white/5 bg-white/[0.01] rounded-2xl z-10 transition-colors hover:bg-white/[0.03] hover:border-white/10">
            <h3 className="text-maverick-red font-mono uppercase tracking-[0.2em] text-xs mb-6">Inhaltsverzeichnis</h3>
            <nav className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
              <a href="#vorwort" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>Vorwort</a>
              <a href="#allgemein" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>1.0 Allgemein</a>
              <a href="#roleplay" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>2.0 RolePlay</a>
              <a href="#charwipe" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>3.0 Charwipe</a>
              <a href="#staatsfraktionen" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>4.0 Staatsfraktionen</a>
              <a href="#fraktionen" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>5.0 Fraktionen</a>
              <a href="#streaming" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>6.0 Streaming</a>
              <a href="#fahrzeuge" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>7.0 Fahrzeuge</a>
              <a href="#crime" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>8.0 Crime</a>
              <a href="#festhalten" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>9.0 Festhalten</a>
              <a href="#krieg" className="text-white/40 hover:text-white hover:translate-x-2 transition-all flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-maverick-red opacity-0 -ml-4 transition-all"></span>10.0 Krieg</a>
            </nav>
          </aside>
          
          <style dangerouslySetInnerHTML={{__html: `
            nav a:hover span { opacity: 1; margin-left: 0; }
          `}} />

          <div className="flex-1 min-w-0">
            <div className="space-y-12 text-white/80 leading-relaxed font-medium">

                    <section id="vorwort" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">Vorwort</h2>
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
                            <p className="mb-4">
                                Dieses Regelwerk befasst sich ausschliesslich mit spieltechnisch unerlaubten oder unerwünschten Handlungen sowie Fehlverhalten, die vom Support geahndet werden können.
                            </p>
                            <p>
                                Die Serverleitung behält sich das Recht vor, Regeln jederzeit zu ändern oder neu zu interpretieren. Solche Änderungen sind verbindlich und müssen akzeptiert werden. Es liegt in deiner Verantwortung, dich eigenständig und Regelmässig über Regeländerungen und Anpassungen zu informieren.
                            </p>
                        </div>
                    </section>

                    <section id="allgemein" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">1.0 Allgemeine Regeln</h2>
                        <div className="space-y-6">
                            <RuleItem number="1.1" title="Roleplay Ausrichtung">
                                Auf Maverick State legen wir grossen Wert auf hochwertiges und realistisches Roleplay. Dabei steht Fairness für alle an erster Stelle. Es geht nicht darum, ständig Leute einzuknasten oder dafür zu sorgen, dass die eine Seite, egal ob Crime oder Polizei, immer gewinnt. Lasst auch mal jemanden entkommen, lasst beim Raub mal jemanden zurück, der einwandert – kleine Verluste machen das RP spannender und lebendiger für alle Beteiligten.<br /><br />
                                Auch bei Schiessereien muss nicht immer direkt auf den Kopf gezielt werden. Zieht das Ganze ruhig mal ein bisschen in die Länge, ein paar Fehlschüsse, ein bisschen Deckungsspiel, und vor allem: geile Sprüche zwischendurch! So wird es filmreif, cinematisch und für alle Beteiligten ein Highlight.<br /><br />
                                Wir wollen filmreifes RP, wir sind nicht ein Server wie alle anderen FiveM Server.
                            </RuleItem>

                            <RuleItem number="1.2" title="Diskriminierung/Mobbing/Beleidigungen und Sexuelle Gewalt">
                                Die Würde des Menschen ist unantastbar. Wir dulden keine Beleidigungen, keinen Extremismus sowie Verurteilungen aufgrund von Religion, Herkunft oder sexueller Orientierung. Ebenso ist das Ausspielen von sexueller Gewalt und Vergewaltigungen strengstens untersagt. Nicht IC als auch nicht OOC. (Das gesunde Mass an Beleidigungen IC ist natürlich davon nicht betroffen).
                            </RuleItem>

                            <RuleItem number="1.3" title="Mindestalter">
                                Unser Server ist ausschliesslich ab 16 Jahren bespielbar.
                            </RuleItem>

                            <RuleItem number="1.4" title="Fremdwerbung">
                                Reklame und Werbung, in jeglicher Form, sind verboten.
                            </RuleItem>

                            <RuleItem number="1.5" title="Charakter">
                                Zum RP gehört der Respekt vor dem eigenen und dem Leben anderer. Selbstmord zur Vermeidung einer Strafe ist verboten. Das Leben aller ist das höchste Gut und gilt es,um jeden Preis zu schützen. Das Schützen eines Fraktionsbosses ist jedoch gestattet.
                            </RuleItem>

                            <RuleItem number="1.6" title="Nutzungsrecht">
                                Die Serverleitung hat jederzeit das Recht, dem Nutzer das Nutzungsrecht zu entziehen und ihn vom Projekt auszuschliessen.
                            </RuleItem>

                            <RuleItem number="1.7" title="Accountsharing">
                                Die Weitergabe deines Accounts ist strengstens verboten.
                            </RuleItem>

                            <RuleItem number="1.8" title="Homeland Security">
                                Die Homeland Security Beamte sind Mitarbeiter unseres Server-Teams und greifen in der Regel bei schwerwiegenden Regelverstössen in das RP ein, um den Beschuldigten aus dem RP zu holen und mit ihm im Discord über diesen Regelverstoss zu sprechen. Sollte der Einsatz mit der Homeland Security abgeschlossen sein, hat sich der zu Verantwortung gezogene Spieler unverzüglich im Discord unter dem Channel “Support-Warteraum” einzufinden. Beamte der Homeland Security geniesst diplomatische Immunität und Schutz vor Strafverfolgung. Die Behinderung der Homeland Security wird sanktioniert. Das Homeland Security Auto darf niemals geklaut werden!
                            </RuleItem>

                            <RuleItem number="1.9" title="Support">
                                Bei einem Supportfall, im Idealfall immer einen Videobeweis mitzusenden. So ist es einfacher den Fall zu bearbeiten. Ein Supportfall muss innerhalb von 48 Stunden nach Regelbruch / Situation eröffnet werden. Teammitglieder dürfen nicht privat angeschrieben werden.
                            </RuleItem>

                            <RuleItem number="1.10" title="Lügen im Support">
                                Wir bitten euch natürlich, im Support immer ehrlich zu sein. Lügen jeglicher Art im Support oder bei Gesprächen werden hart sanktioniert.
                            </RuleItem>

                            <RuleItem number="1.11" title="Streitigkeiten">
                                Wir dulden keine Streitigkeiten ausserhalb des RPs. Was im RP passiert, sollte/muss auch im RP bleiben.
                            </RuleItem>

                            <RuleItem number="1.12" title="Unruhe Stiften">
                                Mitglieder, die in der Community Unruhe stiften, werden permanent aus dem Projekt ausgeschlossen.
                            </RuleItem>

                            <RuleItem number="1.13" title="Umgang">
                                Ein respektvoller Umgang ist Pflicht!
                            </RuleItem>

                            <RuleItem number="1.14" title="Kommunikation">
                                Man hat sicherzustellen, ein funktionsfähiges Kommunikations-Equipment (Mikrofon, Tastatur, etc.) zu besitzen. Sollte man störende Hintergrundgeräusche haben, so ist man verpflichtet, die Push-to-Talk Funktion zu nutzen.
                            </RuleItem>

                            <RuleItem number="1.15" title="Mangelnde Rp Qualität">
                                Homeland Security von MAS behalten es uns vor, Spieler jederzeit aufgrund mangelnder RP-Qualität aus dem Projekt auszuschliessen.
                            </RuleItem>

                            <RuleItem number="1.16" title="Zweitcharakter">
                                Zweit Chars muss man beim Serverteam über das Ticketsystem beantragen.
                            </RuleItem>

                            <RuleItem number="1.17" title="Inaktive Spieler">
                                Nach drei Monaten Abwesenheit wird der Charakter gelöscht. Der Spieler hat keinen Anspruch mehr auf Besitztümer, Geld oder sonstige Inhalte, die mit diesem Charakter verbunden sind. (Nur kurz einloggen das man kurz da war zählt nicht als anwesend). Dies gilt auch für Tebex-Einkäufe. Rückerstattungen oder Übertragungen auf andere Charaktere sind nicht möglich.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="roleplay" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">2.0 Regeln für das RolePlay</h2>
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl mb-6">
                            Unser Ziel ist es, nicht allzu stark mit Regeln ins RP einzugreifen. Allerdings gibt es das ein oder andere, was geregelt werden muss. Vorweg: Handelt im RP nach dem Volleyball-Effekt. Spielt dem anderen zu und übernimmt Situationen so wie sie kommen.
                        </div>

                        <div className="space-y-6">
                            <RuleItem number="2.1" title="Power-RP">
                                Power-RP, das Aufzwingen einer Situation, ohne der Gegenpartei eine Möglichkeit zu geben, angemessen auf diese zu reagieren, ist verboten.
                            </RuleItem>

                            <RuleItem number="2.2" title="Fail-RP">
                                Das unrealistische Handeln im RP ist strengstens untersagt.
                            </RuleItem>

                            <RuleItem number="2.2.3" title="Ninja RP">
                                Das Einmischen in Situationen, in denen man nichts verloren hat, ist untersagt.
                            </RuleItem>

                            <RuleItem number="2.3" title="Trolling">
                                Das absichtliche Stören anderer Spieler, ohne ersichtlichen RP-Hintergrund, ist strengstens verboten. Dazu zählt das unnötige schaden von spielern ohne Rp hintergrund, wie z.B.: Unnötiges Anzünden von Fahrzeugen oder Entwenden von Fahrzeugen, um sie zu verstecken. Wie auch random Beleidigungen die keinen RP Hintergrund haben.
                            </RuleItem>

                            <RuleItem number="2.4" title="Ausspielen von extremen Beeinträchtigungen">
                                Das Ausspielen von extremen körperlichen und/oder seelischen Beeinträchtigungen sowie Schwangerschaften sind verboten.
                            </RuleItem>

                            <RuleItem number="2.5" title="RDM und VDM">
                                Random-Deathmatch (RDM) und Vehicle-Deathmatch (VDM) sind verboten.
                            </RuleItem>

                            <RuleItem number="2.6" title="Spielername">
                                Habe einen vernünftigen Vor- und Nachnamen. Bekannte Namen aus der Öffentlichkeit, Wortspiele, Filme und Fernsehen sind nicht erwünscht und können zu einem Char-Reset führen. Namen von Charakteren von Streamern oder Youtubern sind nicht erwünscht.<br /><br />
                                Beispiele: Sven Rumpe / Mark Rumpe, Helmut Müller, Jack Sparrow etc.<br /><br />
                                Wird so ein Name vom Serverteam entdeckt kann der Char ohne vorwarnung Gelöscht werden.
                            </RuleItem>

                            <RuleItem number="2.7" title="Third-Person-Perspektive">
                                Das Ausnutzen der Third-Person-Perspektive ist verboten. Seid euch bewusst, was euer Charakter bildlich wahrnehmen kann und was nicht.
                            </RuleItem>

                            <RuleItem number="2.8" title="Die Nutzung eines Soundboards">
                                Die Nutzung eines Soundboards ist gestattet, aber nicht für Musik, sondern nur für kurze Sounds. Achtet hier aber bitte darauf, dass ihr nicht gegen Punkt 2.3. verstösst. Bedeutet, dass ihr es in einem angemessenen Rahmen UND einer angemessenen Lautstärke nutzen könnt. Solltet ihr trotzdem aufgefordert werden, dieses abzuschalten, folgt dieser Aufforderung. Für Musik nutzt ihr bitte das Radio im Fahrzeug-Menu.
                            </RuleItem>

                            <RuleItem number="2.9" title="New Life Regel">
                                Sollte man nicht von einem Sanitäter wieder zurückgeholt werden, gilt die New-Life-Regel. Das bedeutet, dass du dich dem Ort deines Knock-Outs 20 Minuten lang ab dem Zeitpunkt deines Erwachens, nicht nähern darfst. Außerdem erinnerst du dich nicht daran, wer der Schuldige für deine Ohnmacht ist. Du weißt jedoch noch, was dir zugestoßen und schemenhaft passiert ist.
                            </RuleItem>

                            <RuleItem number="2.10" title="Externe Kommunikationskanäle (Meta Gaming)">
                                Externe Kommunikationskanäle sind nicht erlaubt. Nutzt die vorgesehenen Möglichkeiten, welche wir euch Ingame bieten. Während RP auf einem privaten Discord oder Teamspeakserver zu sein, ist strengstens verboten!
                            </RuleItem>

                            <RuleItem number="2.11" title="RP-Flucht">
                                Die bewusste Flucht vor einer RP-Situation, durch Ausloggen oder in ein Haus oder in eine für andere Spieler nicht zugängliche Zone, ist strengstens verboten. Ebenso verboten ist das Ausloggen, um einen Verlust von Gegenständen zu umgehen. Dazu zählt auch das Respawnen, wenn man von einem Sanitäter wiederbelebt wird, um einer RP Situation zu entgehen.
                            </RuleItem>

                            <RuleItem number="2.12" title="Verletzungen">
                                Das Ausspielen von Verletzungen ist dringend in einem angemessenen Rahmen nachzugehen und ist Pflicht. Wenn ihr zu Boden geht, dann fangt nicht an wieder mit zu schiessen!
                            </RuleItem>

                            <RuleItem number="2.13" title="Roleplay mit Staatsfraktionen">
                                Es ist zwingend das Roleplay mit den Staats-Fraktionen auszuspielen. Dies gilt z.B. bei Verkehrsunfall, U-Haft, Bewusstlosigkeit etc.
                            </RuleItem>

                            <RuleItem number="2.14" title="Meta-Gaming">
                                Informationen, welche außerhalb des RPs erlangt wurden, dürfen unter keinen Umständen im RP genutzt werden. Channels im Discord sind nur erlaubt zur IC Benutzung, wenn der Channel so beschrieben wird. Meta Gaming wird hart sanktioniert! Fraktionsdiscords müssen mindestens ein Teammitglied enthalten, um dies zu kontrollieren.
                            </RuleItem>

                            <RuleItem number="2.14.2" title="Autos erkennen">
                                Autos, die kein ersichtliches Kennzeichen besitzen, darf der Halter nicht erkannt werden.
                            </RuleItem>

                            <RuleItem number="2.14.3" title="Spielerzahlen">
                                Die IC Spielerzahlen dürfen nicht IC verwendet werden.
                            </RuleItem>

                            <RuleItem number="2.15" title="AFK – Away From Keyboard">
                                Solltet ihr mal kurz vom PC weggehen, hebt NICHT eure Hand und sagt : ”Bin kurz im Kopf.”. Versucht z.B. eine Toilette aufzufinden oder sagt, ihr müsst draußen ein Telefonat führen oder anderes. Nach ca. 10 min. werdet ihr gekickt (Automatisch).
                            </RuleItem>

                            <RuleItem number="2.16" title="Verschleierung eines Charakters">
                                Ein Charakter ist dann verschleiert, wenn er mindestens ein Bandana, ein Cap und eine Sonnenbrille trägt. Um sicherzustellen, dass eine Person nicht identifiziert werden kann, müssen auch bestimmte Körperteile, wie beispielsweise Tätowierungen, verdeckt sein. Wenn alle charakteristischen Merkmale verhüllt sind, sollte es unmöglich sein, die Person anhand ihres Aussehens oder anderen Merkmalen zu erkennen.<br />
                                Man darf ebenfalls anhand der Stimme nicht erkannt werden. Stimmverzerrer sind nur erlaubt, wenn diese für anonyme Telefonanrufe genutzt werden!
                            </RuleItem>

                            <RuleItem number="2.17" title="Alte Freunde – Regel">
                                Du darfst drei Leute kennen, die schon länger auf Maverick State spielen. Solltest du mit einem Freundeskreis einreisen, so könnt ihr euch alle untereinander kennen, ihr solltet aber innerhalb von zwei Wochen gemeinsam einreisen.
                            </RuleItem>

                            <RuleItem number="2.18" title="Bug-Using/Spielmechanik">
                                Das Ausnutzen eines Bugs ist strengstens verboten. Solltet ihr einen Bug durch Zufall entdecken, meldet dies sofort per Bug-Ticket im Discord.<br />
                                Als Bug-Using wird auch das Ausnutzen von unrealistischer Benutzung unserer Features (zB. einen Rucksack in einen weiteren Rucksack zu packen) angesehen.<br /><br />
                                Jegliche Art von Spiel erweiternden Modifikationen sind strengstens verboten. Verboten sind ebenfalls: das Verwenden von Crosshairs, Aimbots, Wallhacks, Format Auflösungen, Makros und Hotkeys, die euch einen Vorteil verschaffen.
                            </RuleItem>

                            <RuleItem number="2.19" title="Schuss Ankündigung">
                                Der Einsatz einer Schusswaffe muss vorher angekündigt werden! Der Gegenpartei muss der Situation entsprechend Reaktionszeit gewährt werden (min. 10 sek).<br />
                                Als Schuss Ankündigung zählt schon das Anvisieren mit einer Schusswaffe. Seid kreativ mit einem Schuss Ankündigung.
                            </RuleItem>

                            <RuleItem number="2.20" title="NPC">
                                Von NPCs dürfen weder das Fahrzeug entwendet werden noch dürfen diese getötet werden. Diese Regel tritt außer Kraft, sobald ein NPCs dich angreift. (Notwehr). Die Notwehr tritt außer Kraft, wenn der NPC provoziert wird.
                            </RuleItem>

                            <RuleItem number="2.21" title="OOC-Chat">
                                Der In-Game Chat sollte nur für dringende Probleme oder Commands benutzt werden, er ist nicht für Supportfälle oder als Informations- / Kommunikations-Chat geeignet. Dies würde unter Meta Gaming fallen.
                            </RuleItem>

                            <RuleItem number="2.22" title="AFK-Farming (Away from Keyboard)">
                                AFK-Farming ist verboten. Das bedeutet, solltest du Gehälter erhalten oder auf einer Route farmen, musst du jederzeit ansprechbar sein und auf RP-Situationen eingehen können.<br />
                                Das Beziehen staatlicher Gehälter, während man anderen Aktivitäten nachgeht, wird als AFK-Farming angesehen.
                            </RuleItem>

                            <RuleItem number="2.23" title="Job – Fahrzeuge">
                                Alle Fahrzeuge, welche man durch einen Job erhält, dürfen nicht für andere Geldverdienste missbraucht werden, z.B. dürfen damit keine Drogen hergestellt werden, nur weil diese einen größeren Kofferraum haben.
                            </RuleItem>

                            <RuleItem number="2.24" title="Videobeweis">
                                Jeglicher Regelverstoß, welcher von einem Spieler im Support gemeldet wird, muss mit einem Videobeweis den Regelverstoß erkenntlich zeigen. Dies gilt auch für die Erstattung von Gelder und Gegenständen. Dies gilt auch für Items, die bei Bugs verloren gehen.
                            </RuleItem>

                            <RuleItem number="2.25" title="Tebex Käufe">
                                Solltest du dich entschlossen haben, ein Produkt aus dem Tebex Store zu erwerben, muss dieses im Spiel in deinem Besitz bleiben. Es ist verboten, diese wieder zu verkaufen (egal ob Ingame-Währung oder Echtgeld) noch dieses zu verschenken.
                            </RuleItem>

                            <RuleItem number="2.26" title="Ausrauben">
                                Das Ausrauben ist nur gestattet, wenn die Person ansprechbar ist und an der RP-Situation teilnimmt. Bewusstlose Personen dürfen nicht ausgeraubt werden.
                            </RuleItem>

                            <RuleItem number="2.26.2" title="Polizei">
                                Die Polizei ist befugt, Personen zu durchsuchen, um deren Identität festzustellen, Tat Gegenstände und Beweise sicherzustellen oder Waffen zu beschlagnahmen.<br />
                                Medic: Der Medic Mitarbeiter darf Personen hingegen ausschließlich zur Feststellung ihrer Identität durchsuchen. (Medic darf bei einem bewussten Person nur nach dem Ausweis durchsuchen. Es werden keine Gegenstände von einer bewussten Person entwendet.)
                            </RuleItem>

                            <RuleItem number="2.27" title="Was ist mit welchem Motorrad gestattet?">
                                Supermoto: Treppen fahren, Schotterstraßen max. 80 km/h, kleinere Sprünge<br />
                                Enduro: Treppen fahren, Schotterstraßen, keine Geschw. Begrenzung, mittlere Sprünge<br />
                                Motocross: Treppen fahren, Schotterstraßen, keine Geschw. Begrenzung, große Sprünge<br />
                                Naked Bike & Superbike: Schotterstraßen max. 40 km/h<br />
                                Chopper: Schotterstraßen max. 30 km/h<br /><br />
                                Wird gegen diese Vorlagen verstoßen, gilt dies als Fail RP und wird geahndet.
                            </RuleItem>

                            <RuleItem number="2.28" title="Ort des Ausloggens">
                                Spieler dürfen sich nur in ihrem Hotelzimmer, ihrem Haus oder ihrer Wohnung ausloggen, um den Realismus im Roleplay aufrechtzuerhalten.<br /><br />
                                In besonderen Fällen, in denen ein fundierter RP-Hintergrund vorliegt, sind Ausnahmen gestattet. Diese Fälle könnten Folgendes umfassen:<br />
                                - Obdachlose Charaktere: Spieler, die einen Obdachlosen-Charakter spielen, können sich an passenden Orten wie Unterführungen oder verlassenen Gebäuden ausloggen. Es sollte jedoch darauf geachtet werden, dass kein RP von anderen Personen beeinträchtigt wird.<br />
                                - Übernachten in der eigenen Firma: Wenn ein Spieler eine eigene Firma oder Geschäftsstelle besitzt, kann er sich dort ausloggen, sofern diese über geeignete Zimmer und Betten verfügt.<br />
                                - Kriminelle Anwesen: Spieler mit kriminellen Charakteren können sich in ihrer eigenen Hood ausloggen, sofern diese über geeignete Zimmer und Betten verfügt.<br /><br />
                                Spieler sollten immer sicherstellen, dass sie vor dem Ausloggen keine laufenden Interaktionen oder Szenarien mit anderen Spielern haben, um ein reibungsloses Roleplay für alle zu gewährleisten.
                            </RuleItem>

                            <RuleItem number="2.29" title="Führerschein">
                                Nach der Einreise hat die betroffene Person eine Woche Zeit, um einen Auto- oder Motorradführerschein zu erwerben. Während dieser Frist darf die Polizei keine Busse verhängen. Diese Regelung gilt ausschliesslich für Auto- und Motorradführerscheine. Für alle anderen Führerscheinkategorien ist unmittelbar eine Fahrschulung zu absolvieren.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="charwipe" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">3.0 Charwipe</h2>
                        <div className="space-y-6">
                            <RuleItem number="3.1" title="BloodOut">
                                Die Durchführung eines Bloodouts erfordert ein hohes und tiefgründiges RP-Niveau. Diese Interaktion mit einer anderen Person stellt die letzte Handlung für deinen Charakter dar und sollte als letzte Ehrerweisung betrachtet werden. Ein Bloodout sollte eine wohlüberlegte Entscheidung sein und muss von der Crime Verwaltung per Antrag genehmigt werden. Das RP beider beteiligten Parteien sollte in diese Richtung laufen und von großer Bedeutung sein. Dies sollte sich in Dialogen, Konflikten und möglicherweise Verhandlungen widerspiegeln.<br /><br />
                                Wichtige Punkt durchführung des Bloodouts:<br />
                                - Der Bloodout muss immer vom Fraktionschef oder Vizechef der beteiligten Parteien genehmigt werden.<br />
                                - Der Bloodout muss mit Videobeweisen festgehalten werden, um die Integrität des Roleplays zu gewährleisten.<br />
                                - Der Videobeweis muss nach der Durchführung des Bloodouts der Crime-Verwaltung vorgelegt werden.<br /><br />
                                Besondere Bedingungen:<br />
                                Der Bloodout ist grundsätzlich endgültig, was bedeutet, dass der Charakter mit dem Bloodout alles von der Fraktion vergisst. Eine Ausnahme ist möglich, wenn die Gruppierung oder der Gruppenführer die Person ziehen lässt oder wenn der Spieler es schafft, seinem Bloodout zu entkommen.<br /><br />
                                Diese Regeln sollen sicherstellen, dass Bloodouts innerhalb des Roleplays ernsthaft und verantwortungsbewusst behandelt werden und zur Qualität des RP-Servererlebnisses beitragen.<br /><br />
                                Ein BloodOut benötigt einen BlackOut-Antrag, welcher von der Crime-Verwaltung angenommen werden muss.
                            </RuleItem>

                            <RuleItem number="3.2" title="Hinrichtung">
                                Eine Hinrichtung ist mit triftigen RP-Hintergrund zu beantragen. Die Crime-Verwaltung entscheidet darüber, ob dieser Antrag angenommen wird. Sollte einem Hinrichtungs-Antrag stattgegeben werden, so gilt dieser beidseitig. Der Spieler wird jedoch nicht darüber informiert, dass ein Hinrichtungs-Antrag gegen ihn angenommen wurde.
                            </RuleItem>

                            <RuleItem number="3.3" title="Suizid / Ausreise">
                                Ein Suizid ist nur mit triftigem RP-Hintergrund im Support anzumelden.<br /><br />
                                Eine Ausreise ist anzumelden. Sollten noch offene RP-Stränge vorliegen, müssen diese erst ausgespielt werden, bevor eine Ausreise genehmigt wird.<br />
                                Sollte dein Charakter sterben oder ausreisen, dürfen keine Items und Fahrzeuge auf den neuen Charakter oder auf einen anderen Spieler übergeben/-schrieben werden.<br /><br />
                                Fahrzeuge oder Gegenstände aus unserem Shop werden über das Homeland-Team auf den neuen Charakter überschrieben.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="staatsfraktionen" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">4.0 Staatsfraktionen</h2>
                        <div className="space-y-6">
                            <RuleItem number="4.1" title="Illegale Aktivitäten in der Führungsebene">
                                Für die Führungsebene von einer Staatsfraktion sind alle illegale Aktivitäten während des Dienstes sowohl auch in ihrer Freizeit untersagt
                            </RuleItem>
                            <RuleItem number="4.2" title="Korruption im Allgemeinen">
                                Korruption ohne vorherigen Antrag beim Support ist verboten. Korruption muss stets aus sinnigem RP-Hintergrund hervorgehen. Diese ist auch unverzüglich nach dem RP beim Support zu melden und die Situation zu schildern.<br />
                                Beachtet: Sollte es der Ansicht des Supports nach keinem triftigen Grund gewesen sein, kann dies zu einer Sanktion führen.
                            </RuleItem>
                            <RuleItem number="4.3" title="Ausgabe von Waffen (Staatsfraktion)">
                                Die Ausgabe von Fraktionswaffen ist nicht gestattet.<br />
                                Ausnahme hier sind RP-Situationen, die dazu führen, dass ein Austausch stattfindet. Hier ist aber maximal eine Waffe zum Austausch gedacht. (Ausser, es wir per. Antrag gestellt)
                            </RuleItem>
                        </div>
                    </section>

                    <section id="fraktionen" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">5.0 Fraktionen und Gewerbe</h2>
                        <div className="space-y-6">
                            <RuleItem number="5.1" title="Gründung einer Fraktion / eines Gewerbes">
                                Um eine Fraktion oder ein Gewerbe zu gründen, müsst ihr euch ein Konzept ausdenken und dieses uns präsentieren. Die Crime-Verwaltung prüft das Konzept und gibt zeitnah Rückmeldung.
                            </RuleItem>
                            <RuleItem number="5.2" title="Fraktionsgröße">
                                Eine Fraktion darf maximal aus sieben Mitgliedern bestehen. Dies zählt nicht für Staatsfraktionen. Für eine Fraktion müssen vier Gründungsmitglieder vorhanden sein.
                            </RuleItem>
                            <RuleItem number="5.3" title="Geiselnahmen">
                                Geiselnahmen bedürfen nicht zwingend einem RP-Hintergrund. Das Erschießen einer Geisel ist nur dann gestattet, sollte der Verhandlungspartner absolut unkooperativ agieren oder Forderungen gänzlich nicht erfüllt werden.
                            </RuleItem>
                            <RuleItem number="5.4" title="Zusammenschluss von Fraktionen">
                                Der temporäre Zusammenschluss von Fraktionen ist grundsätzlich untersagt. Langfristige Partnerschaften sind bei der Crime-Verwaltung zu beantragen.
                            </RuleItem>
                            <RuleItem number="5.5" title="Fraktionskriege">
                                Ein Krieg kann nur mit vernünftigen RP-Hintergrund und Inkenntnissetzung der Crime-Verwaltung entstehen. Ein Ende kann nur entstehen, wenn eine der Parteien finanziell oder personell stärker technisch unterlegen ist und eine Niederlage klar kommuniziert wird. In Ausnahmefällen, sollte keine Einigung möglich sein, kann die Crime-Verwaltung darüber entscheiden.<br /><br />
                                Fraktionen, die sich in einem Krieg befinden, dürfen ohne Schuss Ankündigung aufeinander schießen (Kollateralschäden werden im Rahmen eines Krieges NICHT als RDM gewertet. Trotzdem wird dazu aufgerufen, diese zu vermeiden).<br /><br />
                                Während des Krieges ist jeder Anhänger einer Fraktion verpflichtet, die Farben seiner Fraktion sichtbar zu tragen.<br /><br />
                                Die Polizei ist unabhängig von diesen Regelungen und fungiert als neutrale, dritte Partei. Fraktionen dürfen bei Offensivaktionen von Zivilisten nicht unterstützt werden.
                            </RuleItem>
                            <RuleItem number="5.6" title="Offensiv Zusammenschluss von Zivilisten">
                                Ein Zusammenschluss von Zivilisten für eine Offensivaktion darf nicht über eine Gruppengröße von maximal 5 Spielern gehen. (Gilt nur, wenn man selber nicht in eine andere Fraktion ist.)
                            </RuleItem>
                            <RuleItem number="5.7" title="Geldwäsche">
                                Umgang mit dem Geldwäsche-Tisch<br />
                                Der Tisch muss mindestens 10 Meter von einer Stromquelle entfernt aufgestellt werden und sich in einem Raum befinden. Dies schließt auch Garagen ein. Das Aufstellen des Tisches in einem Holzhaus ohne Stromquelle ist untersagt, ebenso in Garagen oder isolierten Häusern.<br />
                                Der Tisch darf ausschließlich mit einem Boot über das Wasser transportiert werden. Ein Transport per Schwimmen ist nicht gestattet, da die Computerteile beschädigt werden würden. Ein Verstoß gilt als FailRP.
                            </RuleItem>
                            <RuleItem number="5.8" title="Anpflanzen">
                                Das Anpflanzen von Drogen auf isolierten Grundstücken ist erlaubt. In Häusern, Garagen und unter überdeckten Objekten ist der Anbau der Drogen nicht gestattet. (z.B. im Garten gestalten)
                            </RuleItem>
                            <RuleItem number="5.9" title="Items von Medizinern">
                                Die medizinischen Items welche zur Verfügung gestellt werden, sind ausschließlich von Angestellten des Medic Departaments zu verwenden. Die einzige Ausnahme gilt für Spieler, welche explizit von Sanitätern aufgefordert werden, Hilfe zu leisten.<br />
                                Jeglicher Besitz von diesen Items für Spieler, welche nicht im Medic Departament angestellt sind, wird geahndet und kann zum Spielausschluss führen.<br /><br />
                                Hier eine Liste zu den Items:<br />
                                - Verbandtuch<br />
                                - Verbandpäckchen<br />
                                - Elastische Binde<br />
                                - Wundschnellverband<br />
                                - Blut-Infusion (500ml)<br />
                                - Notfall Wiederbelebungs-Kit<br />
                                - Rucksack Blau/Rot
                            </RuleItem>
                            <RuleItem number="5.9.1" title="Items von Mechanikern">
                                Es ist untersagt, Mechaniker- und Abschlepp Gegenstände wie Reparaturkits, Abschleppseile, Werkzeugkästen oder sonstige für den Pannendienst relevante Ausrüstung zu entwenden oder unbefugt zu nutzen. Diese Gegenstände sind essentiell für den Dienstbetrieb und dürfen nur von autorisierten Personen verwendet werden.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="streaming" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">6.0 Streaming</h2>
                        <div className="space-y-6">
                            <RuleItem number="6.1" title="Streaming Erlaubnis">
                                Jeder darf auf unserem Projekt streamen. Bitte schickt uns nur per Support-Ticket euren Twitch-Link und verweist in eurem Stream auf unseren Server. Entweder mit dem Maverick State Roleplay Logo im Stream oder mit Verweis im Streaming Titel. Danach könnt ihr sofort starten.
                            </RuleItem>
                            <RuleItem number="6.2" title="Aufenthalt in Streams">
                                Es ist nicht erlaubt, sich in Streams anderer Streamer aufzuhalten, die aktuell auf unserem Projekt streamen, solange man sich selbst IC befindet. Ausgenommen von dieser Regel sind Mitglieder des Managements.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="fahrzeuge" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">7.0 Fahrzeuge</h2>
                        <div className="space-y-6">
                            <RuleItem number="7.1" title="Unfälle">
                                Bei schweren Fahrzeugunfällen, wie zum Beispiel einem Sturz aus großer Höhe, Ohnmacht (Blackscreen), dem Herausschleudern aus dem Fahrzeug, einem schweren Motorradunfall oder einem Überschlag des Fahrzeugs, ist es verpflichtend, den Unfall realistisch auszuspielen. Dazu gehören folgende Punkte:<br />
                                - Im Fahrzeug verbleiben (bzw. im Falle eines Motorradunfalls am Boden bleiben).<br />
                                - Den Notruf kontaktieren, da man in dieser Situation als handlungsunfähig gilt.<br />
                                - Während dieser Zeit darf man essen, trinken, funken und das Telefon nutzen.<br /><br />
                                Sollte kein Rettungsdienst (Medic Departaments) im Dienst sein oder sich innerhalb von 15 Minuten melden, darf jede hilfsbereite Person beim Verlassen des Fahrzeugs unterstützen. Ist dies ebenfalls nicht möglich, darf man sich selbst befreien.<br />
                                Ein schwerer Unfall muss immer mit einem anschließenden Krankenhausaufenthalt ausgespielt werden. (Bei Überschlag pflichtig)
                            </RuleItem>
                            <RuleItem number="7.2" title="Fehlende Reifen">
                                Bei einem einzelnen fehlenden Reifen ist es erlaubt, mit maximal 20 km/h weiterzufahren. Fehlen mehrere Reifen, muss das Fahrzeug sofort angehalten werden, jedoch darf man noch langsam zum Straßenrand fahren.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="crime" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">8.0 Crime Regelwerk</h2>
                        <div className="space-y-6">
                            <RuleItem number="8.1" title="Rückkehr in sein Hauptquartier">
                                Ein Spieler, der im Medic Departament aufwacht, darf in seine Hood zurückkehren. Jedoch darf dieser durch seine Verletzungen nicht mehr aktiv in der aktuellen Situation mit der Fraktion mitwirken, bis diese zu Ende ist.
                            </RuleItem>
                            <RuleItem number="8.2" title="Abfangen von Spielern">
                                Das Abfangen eines Spielers vor dem Medic Departament ist verboten, jedoch darf ein Spieler bei der Rückkehr in seine Hood / zuhause vor dem Gelände abgefangen werden.
                            </RuleItem>
                            <RuleItem number="8.3" title="Anlass zum Raid">
                                Raids im Allgemeinen sind nur mit triftigem Grund gestattet. z.B. Gefangennahme von Fraktionsmitgliedern mit hohem Wert oder Schulden im Wert von 250`000 $
                            </RuleItem>
                            <RuleItem number="8.4" title="Voraussetzungen">
                                Das Raiden von Fraktionsgebäuden wird erst ab einer Anzahl von 7 Spielern (Gangmitglieder) erlaubt. Es sind maximal 2 Versuche in einem Monat erlaubt. Sind von der Angreifer Partei nur noch 2 Mitglieder übrig, wird der Rückzug verlangt. Danach wird der Raid aufgelöst und nicht mehr weitergeführt.
                            </RuleItem>
                            <RuleItem number="8.5" title="Verteidigung des Raids">
                                Die Fraktion, welche verteidigt, kann bis zum letzten Mitglied seine Hood verteidigen, jedoch ist das Flüchten oder Aufgeben dem Spieler selbst überlassen.
                            </RuleItem>
                            <RuleItem number="8.6" title="Forderungen eines Raids">
                                Wenn es der angreifenden Fraktion gelingt, einen Gefangenen zu nehmen, kann diese in einem Monat bis zu Max. 250`000 $ Warenwert erbeuten.<br />
                                Es dürfen keine Fahrzeuge verlangt werden, damit der Warenwert erreicht wird. Jedoch darf man verlangen, die Fahrzeuge auszuparken, um nachzuschauen, ob sich Waren darin befinden.
                            </RuleItem>
                            <RuleItem number="8.7" title="Aufhalten auf Fremden-Hauptquartier">
                                Sollte sich ein Fraktionsmitglied einer anderen Gang unerwünscht auf dem Gelände einer anderen Fraktion aufhalten, kann die Fraktion, welcher das Grundstück gehört, ohne Schuss Call handeln.
                            </RuleItem>
                            <RuleItem number="8.8" title="Staatsfraktionen auf Fremden-Hauptquartier">
                                Sollte eine Staatsfraktion sich auf dem Grundstück befinden, muss zwingend ein Schuss Call erfolgen
                            </RuleItem>
                        </div>
                    </section>

                    <section id="festhalten" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">9.0 Festhalten von Spielern</h2>
                        <div className="space-y-6">
                            <RuleItem number="9.1" title="Grundregeln">
                                Das Festhalten von Spielern ist Max. 2-3h erlaubt. Sollte die Fraktion der Forderung nicht nachkommen, darf die Fraktion den Spieler bis zu 2 Tage festhalten. Ausgenommen sind Zivilisten) Die Fraktion darf versuchen, das Mitglied mittels Raids aus der Gefangenschaft zu befreien.
                            </RuleItem>
                            <RuleItem number="9.2" title="Raid (*)">
                                Anders als beim normalen Raid darf man hier mit 4 Mitgliedern den Versuch starten. Es darf hier nichts entwendet werden, dies gilt nur, um den oder die Gefangenen zu befreien.
                            </RuleItem>
                            <RuleItem number="9.3" title="Forderungen für Gefangenahme">
                                In der Zeit, bei welcher das Mitglied gefangen gehalten wird, darf man das Befreien des Mitglieds maximal einmal versuchen. Sollte das nicht gelingen, muss die Fraktion den Forderungen nachkommen.<br /><br />
                                Forderungen für Gefangene, sofern bekannt ist, in welcher Hierarchiestufe der Gefangene sich befindet:<br />
                                - Für Fraktionsleiter/STV.: Max. 250`000 $<br />
                                - Mitglieder: Max. 150`000 $<br />
                                - Läufer: Max. 50`000 $<br /><br />
                                Sollte dies nicht bekannt sein, darf max. 50`000$ pro Gefangenen verlangt werden. Sollten mehrere Mitglieder einer anderen Fraktion sich in Gefangennahme befinden, darf ein maximaler Wert von 350`000 $ gefordert werden.
                            </RuleItem>
                        </div>
                    </section>

                    <section id="krieg" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-widest text-maverick-red">10.0 Kriegsregeln</h2>
                        <div className="space-y-6">
                            <RuleItem number="10.1" title="Kriegsgründe und Beantragung">
                                Krieg darf nur um Routen geführt werden und bedarf RP Hintergrund. Es gibt Ausnahmefälle, diese müssen aber mit dem Management besprochen werden. Ein Krieg muss beim Management beantragt und genehmigt werden. Produktion und Ankauf von Waffen sind während des Krieges untersagt.
                            </RuleItem>
                            <RuleItem number="10.2" title="Frak-Konto">
                                Der Krieg darf nur gestartet werden, wenn bei beiden Fraktionen mindestens 400’000 $ auf dem Konto liegen. Wer eine Route besitzt, muss zu jeder Zeit 400’000 $ auf dem Konto haben. Dieser Kontostand darf zu keiner Zeit unterschritten werden.<br />
                                Fraktionen ohne Routenbesitz müssen nur zur Kriegszeit 400’000 $ auf dem Konto haben und dürfen das Geld während des Krieges auch nicht ausgeben.
                            </RuleItem>
                            <RuleItem number="10.3" title="Kriegsparteien">
                                Es dürfen maximal zwei Fraktionen miteinander Krieg führen. Während eines Krieges ist es einer Drittpartei untersagt die bekriegte Route anzufechten.<br />
                                Zusammenschluss von Fraktionen ist untersagt. Fraktionen dürfen während dem Krieg keine Mitglieder rekrutieren.<br />
                                Während des Krieges sind immer die Farben der Fraktion zu tragen und es sind nur Autos in Fraktionsfarben zu fahren.
                            </RuleItem>
                            <RuleItem number="10.4" title="Raid">
                                Nach 5 Tagen ist ein Raid der Gegner Fraktion erlaubt. Nach einem erfolgreichen Raid ist der Krieg nicht automatisch vorbei, der Gegner muss aufgeben.<br />
                                Ein Kriegsraid unterscheidet sich grundlegend von einem normalen Raid, bei erfolgreichem Raid dürfen hier keine Gegenstände entwendet werden. Ein Raid Versuch ist ab 4 Personen erlaubt.
                            </RuleItem>
                            <RuleItem number="10.5" title="Wann ist der Krieg vorbei?">
                                Wer es schafft, den gegnerischen Anführer lebendig gefangen zu nehmen, ohne dass dieser erst von den Medics hochgeholt wurde, gewinnt den Krieg automatisch.<br />
                                Ein Krieg endet erst wenn eine Fraktion aufgibt oder gar keine Kriegsmittel mehr hat
                            </RuleItem>
                            <RuleItem number="10.6" title="Ende des Krieges">
                                Sobald eine Fraktion aufgibt, muss die Fraktion dem Gewinner die 400’000 $ bezahlen.<br />
                                Die Route Ansprüche gehen auf den Gewinner des Krieges.<br />
                                Die bekriegte Route kann nach einem Krieg 4 Wochen lang nicht beansprucht werden. Wer bereits eine Route besitzt und einen Krieg verliert, verliert auch alle Ansprüche auf seine bisherige Route.
                            </RuleItem>
                        </div>
                    </section>

                </div>
            </div>
        </div></div></main>
    );
}

// Helper component to keep the list clean and formatted consistently
function RuleItem({ number, title, children }: { number: string, title: string, children: React.ReactNode }) {
    return (
        <div className="p-6 md:p-8 border-l-2 border-transparent hover:border-maverick-red hover:bg-white/[0.02] transition-colors rounded-r-2xl group">
            <h3 className="text-xl font-bold text-white mb-3 inline-flex items-center gap-4">
                <span className="text-maverick-red font-mono text-sm group-hover:bg-maverick-red group-hover:text-black px-2 py-0.5 rounded-sm transition-colors">{number}</span>
                {title}
            </h3>
            <div className="pl-4 md:pl-12 text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
}
