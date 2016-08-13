webpackJsonp([77,262],{40:function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVEhLxZbbboJAFEX9Nv//oV6w9QLUxqbekJsggno6m0SDkZ7uoNGHnRCzmDUzjJndiqJIXpFWVbr2PLFtR4bDkViDd3nrdBvHsgblWGFYv7CLOAgCGU9sgTyKYsmyTE6nU+Pg/dnsu1zAdPp1s6sXse24slqv5XA8PjTxdisfZgdd9/NKfhFjW7P9XorDgUq73aY4jJekafnJqp/1SpwXhbCBmGXBqeJ9ngsbiFkWnCrGVrOBmGXBqeKdOYlsIGZZcKo43e2EDcQsC04V4/SxgZhl/z3V2yQRJpCew/Bg1BXjz35OdfCmz9XxVHEUx8KkOhGGB6OKQ3NTsYGcZcGp4iAMhQ3ELAtOFfvmhmIDMcuCU8Ub3xc2ELMsOFXsbTbCBmKWBaeKUQLYQMyy4P4Uj8YT+ZnPyzLABGKGA4NmgzpVex97Zla9viXzxUKWq9VDgrE63V7ZQHw/qBdjNuhGfVPSsPLFcnl3hqNxbd+C66pl4gfHdKN72mX13bqVnrf7Rvysjv0y8S8qKUloDR4MNgAAAABJRU5ErkJggg=="},193:function(e,r,t){e.exports=t.p+"_/oppgaver/src/scratch/labyrint/labyrint.bbb65a.png"},1049:function(e,r,t){e.exports={frontmatter:t(430),content:t(1651)}},1651:function(e,r,t){e.exports="<section class=intro id=informasjon-til-veiledere> <h1 class=intro id=informasjon-til-veiledere>Informasjon til veiledere</h1> <p>Labyrint er et enkelt spill hvor man kontrollerer en liten utforsker som leter etter skatten gjemt inne i en labyrint. Dette prosjektet passer bra som en introduksjon til Scratch.</p> <figure><img src="+t(193)+' alt=""/></figure> </section> <section class=activity id=forberedelser> <h1 class=activity id=forberedelser>Forberedelser</h1> <ul> <li> <p><strong>Antatt tidbruk</strong>: 1.5 - 2 timer for hele prosjektet.</p> </li> <li> <p><strong>Nødvendige forkunnskaper</strong>: Ingen.</p> </li> </ul> <p>Dersom dette prosjektet brukes som en introduksjon til Scratch anbefaler vi at du følger veiledningen <a href=../veiledninger/kom_i_gang_med_scratch.html>Kom i gang med Scratch</a>.</p> <p>Om elevene allerede er komfortable med Scratch kan du benytte anledningen til å snakke om <a href=#tema-tegne-bakgrunner-i-scratch>hvordan tegneverktøyet i Scratch fungerer</a>.</p> </section> <section class=activity id=typiske-utfordringer> <h1 class=activity id=typiske-utfordringer>Typiske utfordringer</h1> <figure>Nedenfor er en litste over utfordringer vi har opplevd at noen elever kommer borti.</figure> <ul> <li> <p><strong>Utforskeren kan gå rett gjennom veggen</strong>. Typisk vil dette være fordi man ikke har rett farge i <code class=b>&lt;berører fargen [#cc0000]&gt;</code>-klossen. Eventuelt at man har brukt flere farger på veggene i labyrinten. Det er viktig at alle veggene er tegnet i samme farge.</p> <p>Man kan også oppleve at utforskeren går rett gjennom veggen om <code class=b>(hastighet)</code> er for høy. Dette er fordi utforskeren <em>hopper</em> <code class=b>(hastighet)</code> steg hver gang man trykker en piltast, og den kan da hoppe over en vegg.</p> </li> <li> <p><strong>Utforskeren hopper gjennom vegger når den snur</strong>. Alle figurer har et definert senterpunkt som de roterer rundt (se Steg 2 i prosjektet <a href=../soloball/soloball.html>Soloball</a> for et bra eksempel på hvordan dette virker). Dersom dette senterpunktet ikke er midt på <code>Utforsker</code>-figuren vil det se ut som om den hopper rundt når den snur. For å sette senterpunktet riktig kan dere klikke på <code>Drakter</code>-fanen og deretter på <img src='+t(40)+' alt="Velg senterpunkt"/>. Korset viser hvor senterpunktet er, og kan dras slik at det blir midt på figuren.</p> </li> <li> <p><strong>Det er vanskelig å bevege seg i labyrinten</strong>. Om gangene er for smale eller veggene for skrå blir det vanskelig for utforskeren og froskekongen å bevege seg. Se <a href=#tema-tegne-bakgrunner-i-scratch>nedenfor</a> for flere tips til hvordan man bruker tegneverktøyet effektivt som kan hjelpe elevene.</p> </li> <li> <p><strong>Utforskeren eller froskekongen setter seg fast i veggen</strong>. I dette prosjektet har vi fokusert på å holde koden så enkel som mulig. Spesielt er koden som passer på at figurene ikke går gjennom veggene litt <em>for enkel</em>. Noen enkle tips som vil motvirke problemet er presentert i tipsboksen nederst i <a href=labyrint.html#tips-3>steg 5 i oppgaven</a>.</p> <figure>For de mer avanserte elevene kan du også vise frem følgende kode som gjør en bedre sjekk av kollisjon med veggen. TODO</figure> </li> </ul> </section> <section class=activity id=variasjoner> <h1 class=activity id=variasjoner>Variasjoner</h1> <p>Dette er et introduksjonsprosjekt, og elevene ledes derfor ganske detaljert gjennom hvordan spillet skal programmeres. Det er likevel rom for en del kreativitet. Elevene kan gjerne oppfordres til å</p> <ul> <li> <p><strong>velge sine egne figurer</strong>. De kan fritt velge figurene som brukes for <code>Utforsker</code>, <code>Skatt</code> og <code>Froskekonge</code> uten at det har noen effekt på programmeringen.</p> </li> <li> <p><strong>tegne sin helt egne labyrint</strong>. I oppgaven vises et eksempel (eller to om man også ser på tegningen først i oppgaven) på en labyrint, men elevene kan gjerne tegne denne annerledes. Be gjerne elevene likevel tenke på at det skal være enkelt for utforskeren og froskekongen å bevege seg rundt, slik at de bør ha rette vegger og brede nok ganger.</p> </li> <li> <p><strong>eksperimentere med hastighet</strong>. I <a href=labyrint.html#steg-1-hvordan-styre-figurer-med-piltastene>steg 1 i oppgaven</a> vises det hvordan man lett kan endre hvor raskt en figur flytter seg ved å bruke en <code>(hastighet)</code>-variabel. La elevene eksperimentere med denne og <code>(hastighet)</code>-variabelen for froskekongen, og spør dem hvordan det forandrer vanskelighetsgraden i spillet.</p> </li> </ul> </section> <section class=activity id=tema-tegne-bakgrunner-i-scratch> <h1 class=activity id=tema-tegne-bakgrunner-i-scratch>Tema: Tegne bakgrunner i Scratch</h1> <p>Dersom elevene allerede er komfortable med Scratch er dette prosjektet en bra anledning for å snakke om hvordan tegneverktøyet fungerer og gi dem noen tips til hvordan man bruker det effektivt.</p> </section>'}});