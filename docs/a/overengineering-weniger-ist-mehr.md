---
type: article
title: 'Overengineering: Weniger ist mehr'
chapter: 4. Vom Anfänger zum Profi
weight: 0
published: true
---

Overengineering ist ein Problem, mit dem jeder Programmierer im Laufe seiner Karriere zu kämpfen hat, wahrscheinlich sogar immer wieder. Wir Entwickler haben schöpferische Qualitäten, können mit ein einfachen Fingerbewegungen ganze Welten erschaffen. Und wenn wir nicht gerade Probleme von Kunden lösen, werkeln wir schon am nächsten Design Pattern um unsere eigenen Probleme bei der Entwicklung zu lösen oder erträglicher zu machen. Selbst wenn es nicht von uns verlangt wird: wir denken voraus, um die Ecke und drüber und drunter, um Probleme zu vermeiden, uns die Arbeit zu erleichtern oder einfach weil wir gerne unsere Welt in Ordnung halten.

An sich sind das alles durchaus wünschenswerte Eigenschaften. Blöderweise sorgen genau diese Dinge dafür, dass wir manchmal über die Stränge schlagen und versuchen Probleme zu lösen, die wir gar nicht haben. Zum Beispiel versuchen wir in der Programmierung gerne die Anforderungen von morgen mitzudenken, um nicht irgendwann alles um- oder neu bauen zu müssen. Das mag heute vielleicht ein bisschen mehr Arbeit sein, spart uns dafür aber in der Zukunft sehr viel Zeit, weil wir ja schon alles vorbereitet haben. Das mag auch so sein, wenn diese Zukunft tatsächlich eintritt; da wir aber nicht hellsehen können, kann es durchaus sein, dass wir uns irren und in der Zukunft ganz andere Anforderungen auf uns zukommen.

Das Schwierige and der Sache ist hier nicht nur, dass wir Arbeitszeit verschwendet haben, um eine Lösung für ein Problem vorzubereiten, dass wir am Ende gar nicht haben. Mindestens genauso kritisch ist, dass wir unseren Code unnötig verkompliziert haben und technische Schulden aufgebaut haben, die wir irgendwann wieder auflösen müssen, um an dem Code sinnvoll weiterarbeiten zu können.

Es macht nicht nur aus Gründen der akuten Zeitersparnis Sinn, deinen Code so einfach wie möglich zu halten. Ganz abgsehen davon, dass weniger Code schneller zu schreiben ist, ist weniger Code desweiteren einfacher zu verstehen, sondern auch leichter zu ändern, zu warten und zu erweitern.

Gerade zu Beginn deiner Karriere wirst du so viele Möglichkeiten kennenlernen, Probleme zu lösen, dass du dich kaum gegen den Wunsch wehren können wirst, diese auch einzusetzen, frei nach dem Prinzip, wer einen Hammer hat, sieht überall Nägel. Aber bei vielen anderen Dingen im Leben ist bei der Programmierung meist weniger mehr. Buzz Andersen hat es mit folgendem Tweet meines Erachtens schön auf den Punkt gebracht:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.</p>&mdash; Buzz Andersen (@buzz) <a href="https://twitter.com/buzz/status/7203012768?ref_src=twsrc%5Etfw">December 30, 2009</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Overengineering betrifft übrigens nicht nur die Lösungen, die du in Code gießt. Auch die Entscheidung zu gewissen Best Practices, Design Patterns und dergleichen kann klar ein Fall von Overengineering sein. Wenn du dich für ein bestimmtes Pattern zu Beginn deines Projekts entscheidest, aber im Laufe der Entwicklung feststellst, dass das Pattern dich mehr Zeit und Mühe kostet als es dir Nutzen bringt, dann solltest du dich nicht scheuen, dieses Pattern über Bord zu werfen.

Am Ende geht es immer darum, deine Zeit möglichst effizient einzusetzen, damit du an den Dingen arbeiten kannst, die Spaß machen. Nicht umsonst gibt's in der Entwicklungswelt gleich mehrere Akronyme, die das Prinzip des Minimalismus bewerben: KISS (keep it simple stupid) oder YAGNI (you ain't gonna need it) zum Beispiel.

Anstatt drauflos zu coden, solltest du zweimal nachdenken, ob du dieses Feature tatsächlich brauchst und ob deine Lösung die einfachste ist, die dir einfällt. Stell dich darauf ein, dass sich die Anforderungen ändern und du deinen Code immer wieder anfassen wirst, was wesentlich einfacher wird, je einfacher dein Code und deine Lösungen sind. Ziehe zwischendurch Bilanz, ob deine Arbeitsweise und Design Patterns ihrem Ziel gerecht werden oder du dir selbst im Weg stehst.

Am Ende wirst du es dir selbst danken. Und mach dir keine Sorgen, wenn das mit der Einfachheit nicht sofort klappt: wahre Einfachheit erreichst du sowieso nicht mit dem ersten Wurf, sondern erst über Iteration.

Wer noch mehr zu diesem Thema lesen möchte, hier eine Auswahl an spannenden Artikeln zum Thema:

- [https://www.codesimplicity.com/post/what-is-overengineering/](https://www.codesimplicity.com/post/what-is-overengineering/)
- [https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to)
- [https://medium.com/@rdsubhas/10-modern-software-engineering-mistakes-bc67fbef4fc8](https://medium.com/@rdsubhas/10-modern-software-engineering-mistakes-bc67fbef4fc8)
- [https://www.petrikainulainen.net/software-development/processes/the-dark-side-of-best-practices/](https://www.petrikainulainen.net/software-development/processes/the-dark-side-of-best-practices/)
