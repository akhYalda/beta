webpackJsonp([75,262],{1064:function(t,e,n){t.exports={frontmatter:n(445),content:n(1666)}},1666:function(t,e,n){t.exports="<section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Tegn et piano ved å lage svarte og hvite rektangler.</p> <figure><img src="+n(2300)+" alt=costume1 /></figure> </li> <li> <figure>Lag et skript som spiller en note når <code>A</code> trykkes.</figure> <pre class=blocks>når [a v] trykkes\nsend melding [piano-1 v]\n\nnår jeg mottar [piano-1 v]\nspill tone (60 v) i (0.5) takter\n</pre> </li> <li> <p>Lag to noter til for når man trykker <code>S</code> eller <code>D</code> på tastaturet.</p> <pre class=blocks>når [a v] trykkes\nsend melding [piano-1 v]\n\nnår [s v] trykkes\nsend melding [piano-2 v]\n\nnår [d v] trykkes\nsend melding [piano-3 v]\n\nnår jeg mottar [piano-1 v]\nspill tone (60 v) i (0.5) takter\n\nnår jeg mottar [piano-2 v]\nspill tone (64 v) i (0.5) takter\n\nnår jeg mottar [piano-3 v]\nspill tone (67 v) i (0.5) takter\n</pre> </li> <li> <p>Kopier drakten 3 ganger og fyll ulike tangenter.</p> <figure><img src="+n(2301)+' alt=""/></figure> </li> <li> <p>Sørg for at hver note bytter til en annen drakt og tilbake til <code>drakt1</code> slik at det ser ut som tangenten blir trykket på.</p> <pre class=blocks>når jeg mottar [piano-1 v]\nbytt drakt til [costume2 v]\nspill tone (60 v) i (0.5) takter\nbytt drakt til [costume1 v]\n\nnår jeg mottar [piano-2 v]\nbytt drakt til [costume3 v]\nspill tone (60 v) i (0.5) takter\nbytt drakt til [costume1 v]\n\nnår jeg mottar [piano-3 v]\nbytt drakt til [costume4 v]\nspill tone (60 v) i (0.5) takter\nbytt drakt til [costume1 v]\n</pre> </li> </ul> </section> <section class=challenge id=utfordring> <h2 class=challenge id=utfordring>Utfordring</h2> <p>En måte å endre hvilket instrument som spilles.</p> <pre class=blocks>når [pil opp v] trykkes\nvelg instrument (tilfeldig tall fra (1) til (99))\n</pre> </section>'},2300:function(t,e,n){t.exports=n.p+"_/oppgaver/src/scratch/lydmaskin/piano-costume-1.753942.png"},2301:function(t,e,n){t.exports=n.p+"_/oppgaver/src/scratch/lydmaskin/piano-costume-3.24cabb.png"}});