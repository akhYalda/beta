webpackJsonp([47,262],{11:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAIAAAAL/BNYAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAAWhJREFUKJGV001LAmEQB/CZTSQRF1JEyIMHk67b+gFs6ZCH6mLUat+m+iC9UDft4kU7lUJpkVHdTExccy3yYC2G4jMdNjZbXannOj9m/jPw4LOqwp8fZ1UgIiICgEKxuLO9+1StTtIAgIi1Wm1/78Ax7Zj1+y01ESHie6dzdHg86PfFsGC328drnRJRMnmiNBS3Z0YQBL1ks4qRO8/l8/kpjlsQw26PZ/yWjDFEVBQlk8nYbDae5yVpUR9o1kTEcRwAnJ3l2m9txgbSkuT1eg1g1gBQr9dvrq8AMTgXjEQixia/tNH4/u6h2/10uXhZlp1Op0HNGgDUZjObPWVEm/GNQCAwTH+00TidTmvaRzwhh0Vx9FDfF0TEXq+n1BuNhhqNLutxGWN6C7PWNC2VTJVKt2FRjK3HhqeN0ZVK5eKygADl8uNoAHPul9YrMca7+NW1FSObZe5mSw3Nh7YSCZ/PN6E3/us3fAGf6qiB37u5YAAAAABJRU5ErkJggg=="},40:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVEhLxZbbboJAFEX9Nv//oV6w9QLUxqbekJsggno6m0SDkZ7uoNGHnRCzmDUzjJndiqJIXpFWVbr2PLFtR4bDkViDd3nrdBvHsgblWGFYv7CLOAgCGU9sgTyKYsmyTE6nU+Pg/dnsu1zAdPp1s6sXse24slqv5XA8PjTxdisfZgdd9/NKfhFjW7P9XorDgUq73aY4jJekafnJqp/1SpwXhbCBmGXBqeJ9ngsbiFkWnCrGVrOBmGXBqeKdOYlsIGZZcKo43e2EDcQsC04V4/SxgZhl/z3V2yQRJpCew/Bg1BXjz35OdfCmz9XxVHEUx8KkOhGGB6OKQ3NTsYGcZcGp4iAMhQ3ELAtOFfvmhmIDMcuCU8Ub3xc2ELMsOFXsbTbCBmKWBaeKUQLYQMyy4P4Uj8YT+ZnPyzLABGKGA4NmgzpVex97Zla9viXzxUKWq9VDgrE63V7ZQHw/qBdjNuhGfVPSsPLFcnl3hqNxbd+C66pl4gfHdKN72mX13bqVnrf7Rvysjv0y8S8qKUloDR4MNgAAAABJRU5ErkJggg=="},198:function(e,t,l){e.exports=l.p+"_/oppgaver/src/scratch/snoballkrig/snoballkrig.0a78b3.png"},1078:function(e,t,l){e.exports={frontmatter:l(459),content:l(1680)}},1680:function(e,t,l){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven vil vi lage et spill hvor det er om å gjøre å jage bort de slemme guttene ved å kaste snøball på dem. Underveis vil vi lære hvordan vi kan gjøre et spill mer utfordrende etterhvert ved at figurene vi spiller mot blir raskere og vanskeligere å jage bort.</p> <figure><img src="+l(198)+' alt=""/></figure> </section> <section class=activity id=steg-1-en-snoballkaster> <h1 class=activity id=steg-1-en-snoballkaster>Steg 1: En snøballkaster</h1> <p><em>Vi begynner med å lage oss en passelig bakgrunn, samt snøballkasteren som vi skal styre.</em></p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt. Slett kattefiguren.</p> </li> <li> <figure>La oss lage en bakgrunn. Til dette spillet trenger vi en ganske enkel bakgrunn med litt vinterfølelse. Den kan vi tegne selv:</figure> <p>Velg <img src='+l(11)+' alt="Tegn ny bakgrunn"/> for å tegne en ny bakgrunn. Pass på at du bruker vektorgrafikk, og tegn en stor firkant som dekker hele bakgrunnen. Velg så en mørkeblå forgrunnsfarge og en lysere bakgrunnsfarge. Klikk på malingsspannet for å fylle firkanten med farge, og velg en overgang nederst til venstre. Klikk på bakgrunnen for å fylle den med farge.</p> <figure>Velg nå hvit som forgrunnsfarge, og lag en litt mindre boks som dekker nedre del av bakgrunnen. Fyll også denne med passende farger.</figure> <figure><img src='+l(2329)+' alt=""/></figure> <figure>Kall bakgrunnen for <code>Spill</code>.</figure> </li> <li> <p>Legg følgende lille skript på scenen:</p> <pre class=blocks>når grønt flagg klikkes\nsend melding [start v]\n</pre> <p>Du har kanskje sett dette trikset tidligere. Dette gjør det enklere for oss å senere komme tilbake og legge på en startmeny og lignende.</p> </li> <li> <p>Neste steg er å finne en passende figur som vi kan styre rundt og kaste snøballer med. Vi har brukt snømannen, <code>Fantasi/Snowman</code>, men du kan bruke en figur du liker. Gi figuren navnet <code>Helten</code>.</p> </li> <li> <p>Lag en ny variabel, <code class=blockdata>hastighet</code>, som gjelder kun for denne figuren, og lag dette skriptet:</p> <pre class=blocks>når grønt flagg klikkes\nsett størrelse til (75) %\nbegrens rotasjon [vend sideveis v]\nsett [hastighet v] til [5]\n</pre> <p>På det grønne flagget legger vi innstillinger som skal gjelde for <strong>Helten</strong> gjennom hele spillet. Endre gjerne på størrelsen og hastigheten etterhvert som du tester spillet, slik at du finner innstillinger du liker.</p> </li> <li> <p>Nå kan vi lage selve hovedløkken til <strong>Helten</strong>. Lag først en løkke som starter på meldingen <code>start</code>:</p> <pre class=blocks>når jeg mottar [start v]\ngå til x: (0) y: (-75)\nfor alltid\nslutt\n</pre> </li> <li> <p>Inne i løkken trenger vi to <code class=blockcontrol>hvis</code>-klosser som flytter <strong>Helten</strong> <code class=blockdata>hastighet</code> steg mot høyre eller venstre når piltastene høyre og venstre er trykket. Lag disse selv.</p> </li> <li> <p>Til slutt lager du en <code class=blockcontrol>hvis</code>-kloss hvor du sender ut meldingen <code>kast</code> når mellomrom-tasten trykkes.</p> </li> </ul> </section> <section class=flag id=test-prosjektet> <h2 class=flag id=test-prosjektet>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Beveger figuren din seg rundt på scenen når du trykker høyre og venstre piltast? Det skal foreløbig ikke skje noe når du trykker mellomrom, siden ingen figurer svarer på <code>kast</code>-meldingen.</p> </li> <li> <p>Du må sannsynligvis endre litt på <code>y</code>-posisjonen figuren din starter på, slik at det ser naturlig ut i forhold til bakgrunnen.</p> </li> <li> <p>Hvis du har en figur med flere drakter kan du også bruke <code class=blocklooks>neste drakt</code>-klosser for å animere figuren din slik at den beveger seg mer naturlig.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-mange-snoballer> <h1 class=activity id=steg-2-mange-snoballer>Steg 2: Mange snøballer</h1> <p><em>Det blir ingen snøballkrig uten snøballer. La oss lage kjempemange av dem! Med kram snø!</em></p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Tegn en ny figur. Bruk sirkelverkøyet til å tegne en liten hvit sirkel, fargelegg den deretter slik at den blir helt hvit. Trykk på <img src='+l(40)+" alt=\"Velg senterpunkt\"/> og pass på at senterpunktet er satt midt på snøballen. Kall figuren <code>Snøball</code>.</p> </li> <li> <p>På samme måte som for <strong>Helten</strong> setter vi først opp noen standardinnstillinger for snøballen. Lag en variabel <code class=blockdata>hastighet</code> som kun gjelder for denne figuren:</p> <pre class=blocks>når grønt flagg klikkes\nskjul\nsett størrelse til (40) %\nsett [hastighet v] til [10]\n</pre> </li> <li> <p>Vi bruker <code class=blocklooks>skjul</code> fordi vi vil lage kloner (kopier) av denne snøballen som vi kaster av gårde. Dette er et veldig nyttig triks i Scratch. Selve koden som reagerer på <code>kast</code>-meldingen er veldig enkel.</p> <pre class=blocks>når jeg mottar [kast v]\nlag klon av [meg v]\n</pre> </li> <li> <p>Selve oppførselen til hver enkelt snøball programmerer vi så på en <code class=blockcontrol>når jeg starter som klon</code>-kloss.</p> <pre class=blocks>når jeg starter som klon\ngå til [Helten v]\npek i retning ([retning v] av [Helten v])\nvis\ngjenta til &lt;berører [kant v]&gt;\n    gå (hastighet) steg\nslutt\nslett denne klonen\n</pre> </li> </ul> </section> <section class=flag id=test-prosjektet-2> <h2 class=flag id=test-prosjektet-2>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <figure>Hva skjer når du trykker mellomrom-tasten? Kastes det snøballer i riktig retning?</figure> </li> <li> <p>Det ser kanskje ikke ut som om <strong>Helten</strong> kaster snøballene med hendene? Du kan legge på noen <code class=blockmotion>Bevegelse</code>-klosser rett før du <code class=blocklooks>vis</code>er snøballen for at det skal se bedre ut.</p> </li> <li> <p>Som en liten utfordring kan du også prøve å legge på litt effekt av tyngdekraften på snøballen ved å endre litt på <code>y</code> mens snøballen flyr.</p> </li> <li> <p>Et lite problem er at <strong>Helten</strong> vår er <em>for</em> flink til å kaste snøball! Hver gang vi trykker mellomrom blir det kastet mange snøballer. Dette kan vi løse ganske enkelt ved å vente til mellomrom-tasten er sluppet før vi kaster snøballen. Legg til</p> <pre class=blocks>vent til &lt;ikke &lt;tast [mellomrom v] trykket?&gt;&gt;\n</pre> <p>på <strong>Helten</strong>-figuren før <code>kast</code>-meldingen sendes.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-slemme-gutter> <h1 class=activity id=steg-3-slemme-gutter>Steg 3: Slemme gutter</h1> <p><em>Nå skal vi se hvordan vi kan lage slemme gutter som prøver å ta oss. La oss jage dem bort med snøballer.</em></p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny figur. Vi har brukt <code>Mennesker/Boy3 walking</code>, men du kan bruke den figuren du liker. Kanskje det er morsommere å ha snøballkrig mot et monster? Kall figuren <code>Skumling</code>.</p> </li> <li> <p>På samme måte som for snøballene vil vi lage kloner av <strong>Skumling</strong>. Men først bestemmer vi hvordan han skal se ut. Lag igjen en variabel <code class=blockdata>hastighet</code> som gjelder kun for denne figuren. Deretter,</p> <pre class=blocks>når grønt flagg klikkes\nskjul\ngå til x: (0) y: (-70)\nbegrens rotasjon [vend sideveis v]\nsett størrelse til (30) %\nsett [hastighet v] til [3]\n</pre> </li> <li> <figure>Vi vil la klonene dukke opp med litt tilfeldig mellomrom, og fra begge sider av skjermen.</figure> <pre class=blocks>når jeg mottar [start v]\nfor alltid\n    hvis &lt;(tilfeldig tall fra (0) til (1)) = [0]&gt;\n        pek i retning (90 v)\n        sett x til (-250)\n    ellers\n        pek i retning (-90 v)\n        sett x til (250)\n    slutt\n    lag klon av [meg v]\n    vent (tilfeldig tall fra (2) til (4)) sekunder\nslutt\n</pre> </li> <li> <p>På samme måte som for snøballene må vi også bestemme oppførselen til hver enkelt <strong>Skumling</strong>.</p> <p>Lag først en <code class=blockcontrol>når jeg starter som klon</code>-kloss hvor du først viser figuren, og deretter lager en <code class=blockcontrol>for alltid</code>-løkke hvor figuren beveger seg <code class=blockdata>hastighet</code> steg og deretter venter et lite øyeblikk, for eksempel 0.1 sekunder.</p> </li> <li> <p>Deretter lager vi en <em>ny</em> <code class=blockcontrol>når jeg starter som klon</code>-kloss hvor vi undersøker om vi treffer enten en <strong>snøball</strong> eller <strong>Helten</strong>.</p> <pre class=blocks>når jeg starter som klon\nfor alltid\n    hvis &lt;berører [Helten v]?&gt;\n        send melding [slutt v]\n        slett denne klonen\n    slutt\n    hvis &lt;berører [Snøball v]?&gt;\n        slett denne klonen\n    slutt\nslutt\n</pre> <p>Grunnen til at disse må ligge i et eget skript er at det første skriptet venter litt mellom hver gang figuren tar et steg. Hadde vi lagt disse <code class=blockcontrol>hvis</code>-klossene på det skriptet ville vi bare sjekket om <strong>Skumlingen</strong> var truffet av en snøball innimellom ventingen. Ved å lage et eget skript sjekker vi dette hele tiden.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-3> <h2 class=flag id=test-prosjektet-3>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <figure>Dukker det opp skumlinger? Kommer de fra begge sider? Går de mot midten?</figure> </li> <li> <p>Hva skjer når en <strong>Skumling</strong> blir truffet av en <strong>Snøball</strong>? Du kan kanskje legge på en passende lydeffekt og animasjon før klonen slettes? Vi ser også at snøballen flyr videre etter at den har truffet en <strong>Skumling</strong>. Prøv å endre i skriptet for <strong>Snøball</strong> slik at snøballen også blir borte.</p> </li> <li> <p>Hva skjer når en <strong>Skumling</strong> tar <strong>Helten</strong>?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-telle-poeng-og-avslutte-spillet> <h1 class=activity id=steg-4-telle-poeng-og-avslutte-spillet>Steg 4: Telle poeng og avslutte spillet</h1> <figure><em>Nå som vi nesten har et ferdig spill, vil vi også ha poeng!</em></figure> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Å telle poeng er ganske lett. Lag først en variabel som heter <code class=blockdata>Poeng</code> og la den gjelde for alle figurer. La variabelen også vises på scenen, slik at vi ser hvor mange poeng vi har fått.</p> </li> <li> <p>Pass på at <code class=blockdata>Poeng</code> blir satt til 0 når meldingen <code>start</code> sendes, for eksempel med et skript på scenen.</p> </li> <li> <p>Endre <code class=blockdata>Poeng</code> med 1 når en <strong>Skumling</strong> blir truffet av en snøball.</p> </li> </ul> <p>Vi har tidligere laget meldingen <code>slutt</code> som sendes ut når <strong>Helten</strong> blir tatt av en <strong>Skumling</strong>. Nå vil vi bruke denne til å avslutte spillet. Men først, la oss lage en meny og en bakgrunn som forteller oss at vi tapte.</p> <ul> <li> <p>Klikk på <code>Scene</code> til venstre for <code>Figurer</code>, og velg <code>Bakgrunner</code>-fanen. Lag to kopier av bakgrunnen din og kall dem henholdsvis <code>Meny</code> og <code>Slutt</code>.</p> <p>På <code>Meny</code>-bakgrunnen kan du lage en fin tittel. Skriv også <code>Trykk 'S' for å starte</code>.</p> <p>På <code>Slutt</code>-bakgrunnen kan du skrive en passende melding for når spillet er slutt. Skriv også <code>Trykk 'S' for å spille igjen</code>.</p> </li> <li> <figure>Endre nå litt på skriptene på scenen. Først vil vi bare vise menyen når det grønne flagget klikkes:</figure> <pre class=blocks>når grønt flagg klikkes\nbytt bakgrunn til [Meny v]\n</pre> <figure>Deretter vil vi starte spillet når <code>S</code> trykkes:</figure> <pre class=blocks>når [s v] trykkes\nsend melding [start v]\n</pre> <p>Pass også på at du bytter til bakgrunnen <code>Spill</code> når meldingen <code>start</code> mottas, og til bakgrunnen <code>Slutt</code> når meldingen <code>slutt</code> mottas.</p> </li> <li> <p>Til slutt må vi passe på at spillet faktisk avsluttes etter at <code>slutt</code>-meldingen er sendt. Legg på skript for å <code class=blockcontrol>slette denne klonen</code> på <strong>Snøball</strong> og <strong>Skumling</strong>, og skript for å skjule <strong>Helten</strong> når <code>slutt</code> mottas.</p> </li> </ul> </section> <section class=flag id=test-prosjektet-4> <h2 class=flag id=test-prosjektet-4>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Fungerer programflyten? Starter spillet når du trykker <code>S</code>? Avsluttes spillet når <strong>Helten</strong> blir fanget? Vises de riktige bakgrunnene når de skal?</p> </li> <li> <p>Legg gjerne på litt lydeffekter og enkle animasjoner der det passer.</p> </li> </ul> </section> </section> <section class=activity id=steg-5-store-slemme-gutter> <h1 class=activity id=steg-5-store-slemme-gutter>Steg 5: Store, slemme gutter</h1> <figure><em>Til slutt skal vi gjøre spillet vanskeligere jo lengre vi spiller</em></figure> <ul> <li> <p>Vi innfører først en ny variabel <code class=blockdata>Nivå</code> som skal gjelde for alle figurer. Denne styrer hvor vanskelig spillet skal være. La den gjerne være synlig.</p> </li> <li> <p>Vi regner ut nivå basert på <code class=blockdata>Poeng</code>. Utvid skriptet ditt som mottar <code>start</code>-meldingen på scenen med den følgende løkken:</p> <pre class=blocks>for alltid\n    sett [Nivå v] til ((1) + ([gulv v] av ((Poeng) / (5))))\nslutt\n</pre> <p>Funksjonen <code class=blockoperators>gulv</code> runder nedover. Dermed sier vi at <code class=blockdata>Nivå</code> skal øke for hver femte <strong>Skumling</strong> vi jager vekk.</p> </li> <li> <p>Nå kan vi bruke <code class=blockdata>Nivå</code> til å lage <strong>Skumlingene</strong> slemmere. For eksempel kan de bli større, gå raskere og kanskje trenge flere snøballer før de blir borte.</p> <p>Lag et par nye variabler som gjelder for denne figuren: <code class=blockdata>Slem</code> og <code class=blockdata>Liv</code>. <code class=blockdata>Slem</code> vil si noe om hvor stor og slem den enkelte <strong>Skumlingen</strong> er. Ved å la dette være et tall mellom 1 og <code class=blockdata>Nivå</code> blir spillet vanskeligere etterhvert som <code class=blockdata>Nivå</code> øker. For eksempel kan du legge til disse klossene på <strong>Skumling</strong> sitt hovedskript:</p> <pre class=blocks>når jeg starter som klon\nsett [Slem v] til (tilfeldig tall fra (1) til (Nivå))\nsett [Liv v] til (Slem)\nendre [hastighet v] med (Slem)\nendre [farge v] effekt med ((10) * (Slem))\nendre størrelse med ((5) * (Slem))\nvis\nfor alltid\n    gå (hastighet) steg\n    vent (0.1) sekunder\nslutt\n</pre> </li> <li> <p>For at en <strong>Skumling</strong> skal tåle flere snøballer må vi også endre litt på hva som skjer når han blir truffet. I stedet for å bare slette klonen vil vi endre <code class=blockdata>Liv</code> med -1, og deretter gi poeng og slette klonen bare om <code class=blockdata>Liv</code> er 0.</p> </li> <li> <p>Vi bør kanskje gi flere poeng for å jage bort de slemme <strong>Skumlingene</strong>? Dette gjør du ved å endre <code class=blockdata>Poeng</code> med <code class=blockdata>Slem</code> når en <strong>Skumling</strong> jages bort.</p> </li> <li> <p>Om vi får mer enn ett poeng for hver <strong>Skumling</strong> bør vi også endre på hvordan vi regner ut <code class=blockdata>Nivå</code>. Hvis ikke vil spillet bli veldig fort vanskeligere etterhvert. Du kan for eksempel bruke denne utregningen:</p> <pre class=blocks>for alltid\n    sett [Nivå v] til ((1) + ([gulv v] av ([kvadratrot v] av ((Poeng) / (3)))))\nslutt\n</pre> <p>Da vil vi fortsatt øke nivået for omtrent hver femte <strong>Skumling</strong> som jages bort.</p> </li> </ul> <section class=flag id=test-prosjektet-5> <h2 class=flag id=test-prosjektet-5>Test prosjektet</h2> <figure><strong>Klikk på det grønne flagget.</strong></figure> <ul> <li> <p>Blir spillet vanskeligere etterhvert? Prøv å endre på de forskjellige variablene og innstilingene vi har laget slik at spillet blir passe vanskelig.</p> </li> <li> <figure>Har du flere ideer til hvordan spillet kan gjøres enda morsommere? Prøv dem ut!</figure> </li> </ul> </section> </section>"},2329:function(e,t,l){e.exports=l.p+"_/oppgaver/src/scratch/snoballkrig/bakgrunn.4b9533.png"}});