---
type: article
title: Eine kurze Einführung in objektorientierte Programmierung
chapter: 4. Vom Anfänger zum Profi
weight: 1
published: true
---

## Was ist objektorientierte Programmierung?

_Objektorientierte Programmierung (OOP)_ ist ein weit verbreitetes Paradigma, nach dem mittlerweile in fast allen Sprachen programmiert wird, und an dem sich heutzutage fast jedes größere Software-Projekt orientiert; mal mehr, mal weniger.

Bei der objektorientierten Programmierung wird der Code in "Objekte" getrennt. Ihr Gegenteil ist die _prozedurale Programmierung_, bei der eine Sequenz von Code Stück für Stück abgearbeitet wird.

Bei der Objektorientierung entstehen einige Vorteile, die ich beleuchten werde, nachdem ich kurz die Grundprinzipien umrissen habe:

Objekte sind in diesem Sinne Code-Teile, die in sich geschlossen sind und mit dem Rest des Code nur in wenigen "öffentlichen Methoden" sprechen. Dieses Prinzip nennen wir _Abstraktion_. Wie das Objekt im Inneren genau funktioniert, muss den Rest des Code nicht interessieren, was die Wartbarkeit erhöht: es kann einfach ein Objekt ausgetauscht werden oder großflächig umgeschrieben werden, ohne dass der Rest des Code dafür angepasst werden muss, so lange Input und Output des Objekts sich nicht ändern.

Desweiteren ist so die Einstiegshürde in den Code geringer: ein Programmierer, der nicht das ganze Projekt kennt, kann trotzdem einem einzelnen Objekt arbeiten, ohne das Zusammenwirken des Code als Ganzen verstehen zu müssen. Insbesondere bei großen und komplexen Software-Projekten ist die objektorientierte Programmierung deswegen Standard.

Nicht nur die Funktionsweise von Objekten wird durch wenige spezifische öffentliche Methoden vom Rest des Code verborgen; auch die Daten eines Objekts gehören diesem alleine. Das nennen wir _Datenkapselung_. Der Rest des Code darf auf die Daten eines Objekts nur über dessen öffentliche Methoden zugreifen.

Ein weiterer Vorteil liegt in der _Vererbung_ von Objekten: viele Programmiersprachen bieten eine einfache Syntax dafür an, ein Objekt zu vererben, dessen Funktionsweise zu übernehmen und beispielsweise nur eine einzelne Methode zu überschreiben. Dadurch wird der Code insgesamt schlanker und wir vermeiden unnötige Wiederholung.

_Polymorphismus_ ist weiteres Prinzip der objektorientierten Programmierung und meint das Teilen eines gemeinsamen Interface über verschiedene Objekte hinweg: so können zum Beispiel ein Objekt `Kreis` und ein `Rechteck` beide auf verschiedene Weise ihre Fläche berechnen: durch polymorphes Design stellen wir aber sicher, dass beide die Methode `berechneFläche()` haben und damit im Rest des Code gleichermaßen verwendet werden können.

Je nach Sprache sind die Objekte, wie wir sie bisher definiert haben, entweder Klassen (zum Beispiel in C++) oder Prototypen (zum Beispiel in Javascript). Solche Objekte werden übrigens in den meisten Fällen instanziert: d.h. es kann mehrere Instanzen eines Objekts geben. Es kann aber auch Sinn machen, ein Objekt bewusst nur einmal zu instanzieren, zum Beispiel beim [Singleton-Pattern](https://en.m.wikipedia.org/wiki/Singleton_pattern).

Übrigens können sich in der modularen Programmierung auch Module wie Objekte in diesem Sinne verhalten: das Ökosystem von Node.js-Modulen ist dafür ein schönes Beispiel. Wir installieren Module von anderen, die eine einfache "API" haben, über die wir den Code ansprechen, ohne genau verstehen zu müssen, was darin passiert.

## Zusammenfassung der Grundprinzipien

- _Abstraktion_ (das Objekt kommuniziert nur mit öffentlichen Methoden nach außen, die innere Funktionsweise interessiert nur das Objekt selbst)
- _Datenkapselung_ (die Daten eines Objekts sind nur durch das Objekt selbst les- und schreibbar, Zugriff auf Daten von außen gibt es nur über öffentliche Methoden)
- _Vererbung_ (Objekte können ihre Fähigkeiten von anderen übernehmen und diese überschreiben und erweitern)
- _Polymorphismus_ (verschiedene Objekte implementieren dieselben Methoden und können deshalb gleich verwendet werden)

## Vorteile der objektorientierten Programmierung

- höhere Wartbarkeit durch Abstraktion
- flache Lernkurve durch Abstraktion
- Wiederverwendbarkeit von Code (je mehr desto kleiner und allgemeiner die Objekte gehalten sind)
- schlanker und übersichtlicher Code durch Vererbung

## Warum nicht immer objektorientiert entwickeln?

Der objektorientierten Programmierung wird sicher nicht ganz zu Unrecht zuweilen nachgesagt, etwas klobig zu sein und die Dinge manchmal unnötig zu verkomplizieren. Aber wie bei allen Paradigmen und Patterns in der Programmierung macht es Sinn, nicht alles für bare Münze zu nehmen und als starres Regelwerk zu verstehen, sondern sich an Prinzipien zu orientieren und je nach Situation zu prüfen, was im konkreten Fall Sinn macht und was nicht. Das Paradigma heißt ja nicht umsonst objekt-_orientierte_ Programmierung. Am Ende soll sie uns die Arbeit erleichtern, und das kann sie definitiv, wenn man sie in der richtigen Situation im richtigen Maße anwendet. Zu verstehen welche Vorteile dieses Paradigma bringen kann, bedeutet dann im entsprechenden Kontext zu wissen, wann man es einsetzen kann.

Und zu guter Letzt noch ein Hinweis: objektorientiert zu entwickeln ist durchaus eine Kunst. Auch wenn man grundsätzlich verstanden hat, wie OOP funktioniert, kann man Code schreiben, der objektorientiert aussieht, aber trotzdem klar den Grundprinzipien widerspricht und nicht die gewünschten Vorteile bringt.

Da gilt es nicht zu verzagen: es ist noch kein Meister vom Himmel gefallen. Mit jedem Mal, da dir dieser Fehler passiert, wirst du besser erkennen können, was tatsächlich objektorientierter Code ist und was nicht.

Und am Ende lohnt sich das auch selbst wenn du nicht objektorientiert programmierst: denn auch in anderen Paradigmen wirst du versuchen dieselben Vorteile herauszuarbeiten und wartbaren, übersichtlichen und schlanken Code zu schreiben!

<img src="https://vg09.met.vgwort.de/na/de57c00ea230461babe51183cdc88f86" width="1" height="1" alt="">
