---
type: article
title: 'Frameworks: Ja? Nein? Wie viele?'
chapter: 4. Vom Anfänger zum Profi
weight: 0
published: true
---

Wir Entwickler sind wie alle anderen auch mit bestem Recht faul: warum sollen wir etwas neu machen, was es so schon gibt? Frameworks und Code von Dritten im Allgemeinen helfen uns dabei, nicht bei jedem Projekt beim Urschleim anfangen zu müssen. Sie nehmen uns Arbeit ab oder bringen Features in unser Projekt, die wir selbst vielleicht gar nicht so umsetzen könnten. Wir können von Frameworks lernen und unseren eigenen Code verbessern. Wir können bei vielen Open-Source-Frameworks aber auch unsere eigenen Verbesserungen beisteuern. Klingt gut soweit — warum also nicht so viele davon verwenden wie möglich?

Das überrascht jetzt wahrscheinlich nicht, aber Frameworks haben auch Nachteile: wenn wir sie verwenden, schaffen wir Abhängigkeiten und technische Schulden. Prinzipiell ist jeder Code, den du nicht selbst geschrieben hast, ein potentielles Sicherheitsrisiko (siehe zum Beispiel der [Event-Stream-Vorfall](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/)). Deshalb müssen wir insbesondere Sicherheitsupdates für unsere verwendeten Frameworks im Auge haben.

Aber selbst wenn wir regelmäßig Updates installieren: Ein inkompatibles Update kann außerdem dafür sorgen, dass wir überall in unserem Code die Einbindung anpassen müssen. Desweiteren können wir mit Drittcode unnötig unsere Codebase aufblähen, wenn wir ein zum Beispiel ein riesiges Framework einbinden, nur um eine kleine Funktion daraus zu verwenden. Und zu guter Letzt können Frameworks dich durchaus davon abhalten, deine Programmierskills weiterzuentwickeln oder mehr über deine Sprache zu lernen: jQuery hat zum Beispiel lange verhindert, dass die Leute richtig Javascript lernen. Das klingt alles übel — also doch keinen Code von Dritten verwenden?

Wie immer im Leben fällt die richtige Antwort weder schwarz, noch weiß aus: richtig verwendet können Frameworks und Code von Dritten nicht nur Zeit und Geld sparen, sondern dein Produkt und deine Skills besser machen. Falsch verwendet können sie dir die Arbeit massiv erschweren oder gar zum Sicherheitsdebakel führen. Ich würde zur folgenden Grundregel raten: so viel Drittcode wie nötig, aber so wenig wie möglich.

Sich darüber im Klaren zu sein, was die Vor- und Nachteile von Frameworks sein können, ist das Wichtigste und hilft, in jeder Situation die richtige Entscheidung zu treffen.

## Vorteile von Frameworks
- Wir können Features einbauen, die wir selbst so nicht umsetzen könnten
- Wir müssen weniger Code schreiben und sparen Zeit und Geld
- Wir können von (guten) Frameworks lernen
- Wir können bei Open Source Frameworks sogar eigene Verbesserungen beisteuern

## Nachteile von Frameworks
- Jeder Code von Dritten ist ein potentielles Sicherheitsrisiko
- Frameworks müssen regelmäßig aktualisiert werden (und infolge dessen eventuell auch dein Code)
- Frameworks können deine Codebase unnötig aufblähen
- Frameworks können dich davon abhalten, deine Skills zu verbessern

Wie bei den meisten Dingen im Leben würde ich hier empfehlen, nach der Grundregel "so viel wie nötig, so wenig wie möglich" zu verfahren und Frameworks sparsam einzusetzen, aber auch nicht unnötig zu geizen.

<img src="https://vg09.met.vgwort.de/na/9a0c4e79047d4a09b3d3e20ff0fd7825" width="1" height="1" alt="">
