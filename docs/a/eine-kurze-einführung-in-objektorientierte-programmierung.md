---
type: article
title: Eine kurze Einführung in objektorientierte Programmierung
chapter: 3. Das Handwerkszeug
weight: 1
published: false
---

## Was ist objektorientierte Programmierung?

_Objektorientierte Programmierung (OOP)_ ist ein weit verbreitetes Paradigma, nach dem mittlerweile in fast allen Sprachen programmiert wird, und an dem sich heutzutage wahrscheinlich fast jedes größere Software-Projekt orientiert; mal mehr, mal weniger.

Bei der objektorientierten Programmierung wird der Code in voneinander getrennte "Objekte" gekapselt. Ihr Gegenteil ist die _prozedurale Programmierung_, bei der eine lineare Sequenz von Code Stück für Stück abgearbeitet wird. Bei der Objektorientierung entstehen einige Vorteile, die ich beleuchten werde, nachdem ich kurz die Prinzipien dieses Paradigmas umrissen habe:

Objekte in diesem Sinne sind in sich geschlossen und sprechen mit dem Rest des Code nur in wenigen "öffentlichen Methoden". Wie das Objekt im Inneren genau funktioniert, muss den Rest des Code nicht interessieren, was den Code insgesamt in der Regel _wartbarer_ macht; es kann einfach ein Objekt ausgetauscht werden oder großflächig umgeschrieben werden, ohne dass der Rest des Code dafür angepasst werden muss, so lange Input und Output des Objekts sich nicht ändern.

Desweiteren ist die Einstiegshürde in den Code geringer: ein Programmierer, der nicht das ganze Projekt kennt, kann trotzdem einem einzelnen Objekt arbeiten, ohne das Zusammenwirken des Code als Ganzen verstehen zu müssen. Insbesondere bei großen und komplexen Software-Projekten ist die objektorientierte Programmierung deswegen Standard.

Ein weiterer Vorteil liegt in der Vererbbarkeit von Objekten:

...

Dann Abstraktion -> Sindre Sorhus

...

- der Code wird in der Regel wartbarer: eizelne Objekte können ausgetauscht werden, ohne überall Anpassungen nötig zu machen, da den Rest des Code nicht interessiert, wie das Objekt für sich arbeitet, sondern nur, wie der Input und Output dieses Objekts aussieht
- Objekte können vererbt werden:

- einzelne Objekte

Es gibt viele Spielarten von objektorientierter Programmierung und nicht alles, was objektorientiert aussieht, ist es auch. Genauso kann aber Code, der nicht klar den Regeln der objektorientierten Programmierung folgt, trotzdem denselben Prinzipien folgen und denselben Nutzen bringen. Genau das ist der Knackpunkt, den ich im Folgenden herausarbeiten möchte.

Es handelt sich bei der objektorientierten Programmierung um eine Art und Weise Code zu schreiben und zu organisieren, die insbesondere bei komplexeren Projekten dabei helfen sollen gewisse Probleme zu vermeiden und den Code übersichtlicher und wartbarer zu gestalten.

Durch die Kapselung in Objekte entstehen aber einige Vorteile, die den Siegeszug der objektorientierten Programmierung und ihre heutige Verbreitung gut erklären:

- Kapselung, Abstraktion, Vererbung, Polymorphism

https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/

## Schwimmende Grenzen

## Main issue as I see it

## Silver lining

## Zusammenfassung

- Linter zeigen Fehler und Optimierungsvorschläge an und beheben diese auf Wunsch automatisch
- Code Formatter formatieren deinen Code automatisch nach festen Regeln
- Du machst weniger Fehler
- Du sparst Zeit beim Schreiben von Code
- Du sparst dir Diskussionen über Code-Style

## Links

- [Prettier](https://prettier.io/)
- [Die besten Linter für alle Sprachen](https://github.com/caramelomartins/awesome-linters)

<img src="https://vg09.met.vgwort.de/na/686b498761754b8a90899328ae2e399b" width="1" height="1" alt="">
