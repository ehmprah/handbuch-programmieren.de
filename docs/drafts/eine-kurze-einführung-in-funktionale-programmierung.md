---
type: article
title: Eine kurze Einführung in funktionale Programmierung
chapter: 4. Vom Anfänger zum Profi
weight: 2
published: true
---

Funktionale Programmierung ist in aller Munde und wird von von Ihren Anwendern gerne als das nächste große Ding nach der objektorientierten Programmierung gepriesen – auch wenn es sie im Grunde schon seit Jahrzehnten gibt. Ich für meinen Teil halte es wie immer in diesen Dingen: funktionale Programmierung bringt wie andere Paradigmen auch sehr klare Vorteile, aber ist sicher auch nicht der Weisheit letzter Schluss. Im Folgenden werde ich versuchen eine kurze Einführung in die funktionale Programmierung zu geben und deren Vorteile herauszuarbeiten.

Zunächst ein Wort der Warnung: in der funktionalen Programmierung wird einiges über den Haufen geworfen, an das wir uns längst gewöhnt haben und als selbstverständlich ansehen. Egal ob prozedural oder objektorientiert: wir sind es gewöhnt, die Werte von Variablen zu ändern, den Zustand unseres Programms festzuhalten und herumzureichen, in Funktionen auf globale Variablen zuzugreifen und dergleichen mehr. Funktionale Programmierung erlaubt nichts davon. Desweiteren hat die funktionale Programmierung eine starke akademische und mathematische Komponente und nicht gerade flache Lernkurve, was Anfänger durchaus abschrecken könnte.

Aber auch wenn du von funktionaler Programmierung keine Ahnung hast – du hast wahrscheinlich trotzdem schon jede Menge Code geschrieben, der exakt in dieses Paradigma passt. In der Gesamtheit mögen die folgenden Grundregeln etwas neu wirken, aber für sich gesehen sind es wahrscheinlich allesamt keine Neuigkeiten für dich.

## Seiteneffekte

Als Seiteneffekte werden bei der funktionalen Programmierung alle Aktionen genannt, die nicht die aktuelle Berechnung betreffen: zum Beispiel die Anzeige von Dingen auf einem Bildschirm, Zugriff auf die Festplatte oder das Netzwerk – ja selbst das Werfen eines Fehlers.

Diese Seiteneffekte verunreinigen Funktionen und letztlich auch unser Programm, weshalb in der funktionalen Programmierung versucht wird, diese zumindest lokal einzudämmen und vom Rest der Software abzugrenzen. Das hat den Vorteil, dass das Programm leichter zu debuggen, zu warten und zu erweitern ist.

## Pure Funktionen

Der weitgehende Verzicht auf Seiteneffekte macht mit der nächsten Grundregel noch mehr Sinn, der wohl wichtigsten der funktionalen Programmierung. Diese beschreibt den Idealzustand von Funktionen, die wenn möglich _pure Funktionen_ sein sollten, was bedeutet:

- dass sie für eine bestimmte Eingabe immer dieselbe Ausgabe liefern
- dass sie keine Seiteneffekte haben

Und genau hier liegt der Hund begraben. Dieses Konzept ist, was funktionale Programmierung gerade so beliebt macht, weil es das liefert, was die objektorientierte Programmierung gerne verspricht aber nicht immer halten kann: Code, der in sich geschlossen ist, einfach ausgetauscht werden kann und nach außen einfach abstrahiert ist.

Bei der funktionalen Programmierung werden diese Ziele mehr oder weniger zwangsläufig erreicht: die Definition von puren Funktionen ist so einfach, dass man weniger Gefahr läuft, das Paradigma aus Versehen auf den Kopf zu stellen und keinen der versprochenen Vorteile zu erreichen. Pure Funktionen sind per Definition simpel und generisch, leicht zu testen, leicht austauschbar, leicht kopierbar und leicht kombinierbar, wie wir im nächsten Punkt sehen werden.

## Komposition

Wenn wir mit puren Funktionen arbeiten, wollen wir absichtlich möglichst einfache Funktionen schreiben. Um mit unserem Code trotzdem komplexe Probleme lösen zu können, komponieren wir mehrere pure Funktionen, um unser Ergebnis zu erreichen. Das folgende Beispiel ist etwas an den Haaren herbeigezogen, sollte aber das Prinzip verdeutlichen:

```js
const plusOne = n => n + 1;
const timesTwo = n => n * 2;
const plusOneThenTimesTwo = x => timesTwo(plusOne(x));
plusOneThenTimesTwo(20); // 42
```

Die Kombination aus puren Funktionen und Komposition ist ein mächtiges Werkzeug; insbesondere wenn man mit Currying arbeitet (dem Herunterbrechen von Funktionen mit mehreren Eingaben auf eine Kette von Funktionen, die jeweils nur eine Eingabe haben), ergibt sich hier ein sehr lesbarer, sehr wartbarer und kurzer Code.

## Unveränderbarkeit

Die Unveränderbarkeit von Daten ist ein weiteres Grundprinzip der funktionalen Programmierung. Am praktischen Beispiel: in der funktionalen Programmierung gibt es zum Beispiel keine Loops. Stattdessen arbeiten wir mit rekursiven Funktionen, die an sich selbst stets neue Werte übergeben, statt dieselbe Variable immer und immer wieder zu verändern.

Die funktionale Programmierung versucht, keine Zustände mit Logik zu verändern, sondern unveränderbare Daten zu erzeugen, auf deren Basis pure Funktionen neue unveränderbare Daten erzeugen. Dadurch werden Daten und Logik voneinander getrennt, eine klare Historie für die Daten geschaffen, und damit Debugging, Testbarkeit und am Ende auch wieder die Lesbarkeit klar erhöht.

Dieses Prinzip gilt dementsprechend ganz generell auch für das Teilen von Zuständen (zum Beispiel in globalen Variablen). Bei der funktionalen Programmierung versuchen wir das Teilen von Variablen zwischen verschiedenen Code-Bereichen grundsätzlich zu vermeiden, weil wir so Änderungen an diesem Zustand schlechter nachvollziehen können und sich die Logik und die Zusammenhänge unserer Applikation unnötig verkompliziert.

## Zusammenfassung

- Wir schreiben viele einfache, generische, pure Funktionen
- Pure Funktionen haben keine Seiteneffekte, arbeiten nur mit ihrer Eingabe und geben für diese immer denselben Wert zurück
- Wir komponieren pure Funktionen um komplexere Probleme zu lösen
- Seiteneffekte werden vom Rest des Programms getrennt
- Variablen sind unveränderbar

Wenn wir uns nach diesen Grundprinzipien richten, schreiben wir ganz automatisch sehr übersichtlichen Code, der mit kleinsten Bauteilen arbeitet, die tatsächlich ohne Probleme sogar zwischen verschiedenen Projekten eins zu eins wiederverwendet können. Mit einer der größten Vorteile der funktionalen Programmierung ist allerdings die hervorragende Testbarkeit (da wir keine komplexen Zustände simulieren müssen, sondern Funktionen ganz einfach auf ihre Wirksamkeit testen können). Auch das Risiko von Bugs ist stark minimiert. Ein Nachteil der funktionalen Programmierung ist allerdings ein höherer Speicherbedarf: da wir stets neue unveränderbare Zustände erschaffen, brauchen wir für diese auch mehr Speicher.

## Weiterlesen:

Das Thema funktionale Programmierung ist kein neues: seit Mitte des letzten Jahrhunderts wird funktional programmiert und insbesondere durch den mathematisch-akademischen Hintergrund gibt's zum Thema endlos viel zu lesen. Ich hab ein paar meiner Lieblingsbeiträge zum Thema hier aufgeführt, falls Interesse am tieferen Einstieg besteht:

- https://medium.com/dailyjs/functional-js-1-introduction-7908bfe5ef8d
- https://www.tutorialspoint.com/functional_programming/functional_programming_introduction.htm
- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
- https://alvinalexander.com/scala/fp-book/benefits-of-functional-programming
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536

<img src="https://vg09.met.vgwort.de/na/d91827ac294541168efba0b0f79484ae" width="1" height="1" alt="">
