---
type: article
title: 'Wie schreibe ich guten Code?'
chapter: 4. Vom Anfänger zum Profi
weight: 0
published: true
---

Guten Code zu schreiben ist eine Kunst und es ist noch kein Meister vom Himmel gefallen. Versuche es zu genießen, wie du mit jeder Zeile Code besser wirst! Und damit dass so schnell wie möglich geht, hab ich hier die wichtigsten Grundregeln aufgelistet, um guten Code zu schreiben und dabei so wenig Ärger und so viel Spaß wie möglich zu haben.

Bevor wir uns daran machen, wie man guten Code schreibt, sollten wir definieren, was wir als solchen bezeichnen: in erster Linie sollte guter Code wohl funktionieren und keine Fehler oder Sicherheitslücken beinhalten. Desweiteren sollte er effizient sein – sowohl in der Ausführung als auch in Build-Pipelines. Und natürlich sollte guter Code auf Dauer leicht zu warten, zu überarbeiten und zu erweitern sein.

## Testen, Testen nochmals Testen
Das A und O von gutem Code: stelle sicher, dass dein Code funktioniert. Schreibe so viele automatisierte Tests wie sinnvollerweise möglich. Teste deinen Code selbst so oft und so gründlich wie du kannst. Lass deinen Code von so vielen anderen Leuten wie möglich testen. Teste deinen Code auf so vielen Geräten und Konfigurationen wie möglich. Gerade manuelles Testen kann unfassbar dröge sein, aber ohne gründlichstes Testen nach jeder Änderung wirst du keinen guten Code schreiben, egal wie gut du bist und egal wie du dich an alle sonstigen Grundregeln hältst.

## Don't repeat yourself
Schreibe deinen Code so, dass keine einzige Zeile sinnloserweise zweimal vorkommt. Auch kopieren und einfügen zählt hier nicht: stattdessen lagerst du den Code, den du kopieren wolltest stattdessen in eine Funktion aus und rufst diese an beiden Stellen auf. Der Hintergrund: du blähst
deinen Code unnötig auf und erschwerst dir zukünftige Wartungsarbeiten. Wenn du ein Stück Code an mehrere Stellen kopiert hast, musst du eine Änderung daran auch an all diesen Stellen einbauen.

## Keep it simple
Das Leben ist kompliziert genug, dein Code muss es nicht sein. Je einfacher dein Code, desto einfacher ist er zu verstehen. Das ist nicht nur für andere wichtig, sondern auch für dich selbst: wenn du an einem Stück Code eine Weile nicht gearbeitet hast, musst du dich von Neuem in diesen Code einfinden – und das geht umso schneller und einfacher, je einfacher dein Code ist. Außerdem fallen in einfachem Code Fehler und Bugs viel schneller auf, während sich in unnötig komplizierten Lösungen überall kleine Ecken finden, in denen sich Bugs besonders gerne verstecken. Guter Code ist kurz, übersichtlich und einfach. Je kürzer und einfacher deine Code-Zeilen, deinen Funktionen und deine Dateien sind, desto besser.

## Schreibe sprechenden Code
Dein Code sollte sich selbst erklären und von einem Dritten beim erstmaligen Lesen verstanden werden und nicht komplett durchdacht werden müssen um zu verstehen, was er eigentlich genau macht. Funktions- und Variablennamen sollten beschreiben, was sie tun bzw. beinhalten. Wenn dein Code an sich nicht ausreichend verständlich ist, ergänze ihn mit Kommentaren.

## Stil ist Zeitverschwendung
Verschwende keine Zeit, dir über Code-Formatierung und -Style Gedanken zu machen, oder gar damit Code ständig umzuformatieren. Nutze stattdessen Linter und Code Formatter, die das automatisch für dich übernehmen. Wenn du mit einem Framework arbeitest, halte dich an Konventionen: diese existieren aus guten Gründen und sind für gewöhnlich sinnvoller als das, was wir uns selbst an Regeln ausdenken.

## Dokumentation ist eine Frage des Anstands
Deinen Code ohne zumindest eine grundlegende Dokumentation zu schreiben ist wie eine Party zu feiern ohne die Gäste zu begrüßen. Macht man einfach nicht: zu gutem Code gehört auch eine Dokumentation, die es anderen (und vielleicht auch später mal dir selbst) dabei hilft, dich im Code als Ganzen zurecht zu finden. Was macht das Projekt? Welcher Code ist in welchem Ordner zu finden? Wie laufen Build-Prozesse ab, welche Konsolenbefehle gibt es?

## Embrace iteration
Guter Code ist wie eine Pflanze, die viele Jahre wächst und gehegt und gepflegt werden will. Die wenigsten Lösungen sind auf Anhieb perfekt: dementsprechend ist auch guter Code selten wirklich fertig. Iteriere so oft wie sinnvoll möglich über deinen Code, er wird jedesmal ein bisschen besser, einfacher, kürzer oder wartbarer werden. Außerdem versuche Code immer mit der Iteration im Hinterkopf zu schreiben. Wenn wir Code so schreiben, dass wir ihn nie wieder anfassen müssen, tendieren wir dazu, Kompromisse zu machen und uns mit halbgaren Lösungen zufrieden geben. Schreibe deinen Code so, dass du dich nicht schämst, wenn du ihn wiedersiehst und überprüfe dann auch, ob das tatsächlich so ist. Selbst wenn du dich nicht schämst, wirst du sicher eine Idee haben, wie du deinen guten Code noch besser machen kannst.

<img src="https://vg09.met.vgwort.de/na/c68ecf258bfd4c57b5fea822256876aa" width="1" height="1" alt="">
