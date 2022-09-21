(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{281:function(e,n,i){"use strict";i.r(n);var r=i(16),t=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"was-ist-objektorientierte-programmierung"}},[e._v("Was ist objektorientierte Programmierung?")]),e._v(" "),n("p",[n("em",[e._v("Objektorientierte Programmierung (OOP)")]),e._v(" ist ein weit verbreitetes Paradigma, nach dem mittlerweile in fast allen Sprachen programmiert wird, und an dem sich heutzutage fast jedes größere Software-Projekt orientiert; mal mehr, mal weniger.")]),e._v(" "),n("p",[e._v('Bei der objektorientierten Programmierung wird der Code in "Objekte" getrennt. Ihr Gegenteil ist die '),n("em",[e._v("prozedurale Programmierung")]),e._v(", bei der eine Sequenz von Code Stück für Stück abgearbeitet wird.")]),e._v(" "),n("p",[e._v("Bei der Objektorientierung entstehen einige Vorteile, die ich beleuchten werde, nachdem ich kurz die Grundprinzipien umrissen habe:")]),e._v(" "),n("p",[e._v('Objekte sind in diesem Sinne Code-Teile, die in sich geschlossen sind und mit dem Rest des Code nur in wenigen "öffentlichen Methoden" sprechen. Dieses Prinzip nennen wir '),n("em",[e._v("Abstraktion")]),e._v(". Wie das Objekt im Inneren genau funktioniert, muss den Rest des Code nicht interessieren, was die Wartbarkeit erhöht: es kann einfach ein Objekt ausgetauscht werden oder großflächig umgeschrieben werden, ohne dass der Rest des Code dafür angepasst werden muss, so lange Input und Output des Objekts sich nicht ändern.")]),e._v(" "),n("p",[e._v("Desweiteren ist so die Einstiegshürde in den Code geringer: ein Programmierer, der nicht das ganze Projekt kennt, kann trotzdem einem einzelnen Objekt arbeiten, ohne das Zusammenwirken des Code als Ganzen verstehen zu müssen. Insbesondere bei großen und komplexen Software-Projekten ist die objektorientierte Programmierung deswegen Standard.")]),e._v(" "),n("p",[e._v("Nicht nur die Funktionsweise von Objekten wird durch wenige spezifische öffentliche Methoden vom Rest des Code verborgen; auch die Daten eines Objekts gehören diesem alleine. Das nennen wir "),n("em",[e._v("Datenkapselung")]),e._v(". Der Rest des Code darf auf die Daten eines Objekts nur über dessen öffentliche Methoden zugreifen.")]),e._v(" "),n("p",[e._v("Ein weiterer Vorteil liegt in der "),n("em",[e._v("Vererbung")]),e._v(" von Objekten: viele Programmiersprachen bieten eine einfache Syntax dafür an, ein Objekt zu vererben, dessen Funktionsweise zu übernehmen und beispielsweise nur eine einzelne Methode zu überschreiben. Dadurch wird der Code insgesamt schlanker und wir vermeiden unnötige Wiederholung.")]),e._v(" "),n("p",[n("em",[e._v("Polymorphismus")]),e._v(" ist weiteres Prinzip der objektorientierten Programmierung und meint das Teilen eines gemeinsamen Interface über verschiedene Objekte hinweg: so können zum Beispiel ein Objekt "),n("code",[e._v("Kreis")]),e._v(" und ein "),n("code",[e._v("Rechteck")]),e._v(" beide auf verschiedene Weise ihre Fläche berechnen: durch polymorphes Design stellen wir aber sicher, dass beide die Methode "),n("code",[e._v("berechneFläche()")]),e._v(" haben und damit im Rest des Code gleichermaßen verwendet werden können.")]),e._v(" "),n("p",[e._v("Je nach Sprache sind die Objekte, wie wir sie bisher definiert haben, entweder Klassen (zum Beispiel in C++) oder Prototypen (zum Beispiel in Javascript). Solche Objekte werden übrigens in den meisten Fällen instanziert: d.h. es kann mehrere Instanzen eines Objekts geben. Es kann aber auch Sinn machen, ein Objekt bewusst nur einmal zu instanzieren, zum Beispiel beim "),n("a",{attrs:{href:"https://en.m.wikipedia.org/wiki/Singleton_pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("Singleton-Pattern"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v('Übrigens können sich in der modularen Programmierung auch Module wie Objekte in diesem Sinne verhalten: das Ökosystem von Node.js-Modulen ist dafür ein schönes Beispiel. Wir installieren Module von anderen, die eine einfache "API" haben, über die wir den Code ansprechen, ohne genau verstehen zu müssen, was darin passiert.')]),e._v(" "),n("h2",{attrs:{id:"zusammenfassung-der-grundprinzipien"}},[e._v("Zusammenfassung der Grundprinzipien")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("Abstraktion")]),e._v(" (das Objekt kommuniziert nur mit öffentlichen Methoden nach außen, die innere Funktionsweise interessiert nur das Objekt selbst)")]),e._v(" "),n("li",[n("em",[e._v("Datenkapselung")]),e._v(" (die Daten eines Objekts sind nur durch das Objekt selbst les- und schreibbar, Zugriff auf Daten von außen gibt es nur über öffentliche Methoden)")]),e._v(" "),n("li",[n("em",[e._v("Vererbung")]),e._v(" (Objekte können ihre Fähigkeiten von anderen übernehmen und diese überschreiben und erweitern)")]),e._v(" "),n("li",[n("em",[e._v("Polymorphismus")]),e._v(" (verschiedene Objekte implementieren dieselben Methoden und können deshalb gleich verwendet werden)")])]),e._v(" "),n("h2",{attrs:{id:"vorteile-der-objektorientierten-programmierung"}},[e._v("Vorteile der objektorientierten Programmierung")]),e._v(" "),n("ul",[n("li",[e._v("höhere Wartbarkeit durch Abstraktion")]),e._v(" "),n("li",[e._v("flache Lernkurve durch Abstraktion")]),e._v(" "),n("li",[e._v("Wiederverwendbarkeit von Code (je mehr desto kleiner und allgemeiner die Objekte gehalten sind)")]),e._v(" "),n("li",[e._v("schlanker und übersichtlicher Code durch Vererbung")])]),e._v(" "),n("h2",{attrs:{id:"warum-nicht-immer-objektorientiert-entwickeln"}},[e._v("Warum nicht immer objektorientiert entwickeln?")]),e._v(" "),n("p",[e._v("Der objektorientierten Programmierung wird sicher nicht ganz zu Unrecht zuweilen nachgesagt, etwas klobig zu sein und die Dinge manchmal unnötig zu verkomplizieren. Aber wie bei allen Paradigmen und Patterns in der Programmierung macht es Sinn, nicht alles für bare Münze zu nehmen und als starres Regelwerk zu verstehen, sondern sich an Prinzipien zu orientieren und je nach Situation zu prüfen, was im konkreten Fall Sinn macht und was nicht. Das Paradigma heißt ja nicht umsonst objekt-"),n("em",[e._v("orientierte")]),e._v(" Programmierung. Am Ende soll sie uns die Arbeit erleichtern, und das kann sie definitiv, wenn man sie in der richtigen Situation im richtigen Maße anwendet. Zu verstehen welche Vorteile dieses Paradigma bringen kann, bedeutet dann im entsprechenden Kontext zu wissen, wann man es einsetzen kann.")]),e._v(" "),n("p",[e._v("Und zu guter Letzt noch ein Hinweis: objektorientiert zu entwickeln ist durchaus eine Kunst. Auch wenn man grundsätzlich verstanden hat, wie OOP funktioniert, kann man Code schreiben, der objektorientiert aussieht, aber trotzdem klar den Grundprinzipien widerspricht und nicht die gewünschten Vorteile bringt.")]),e._v(" "),n("p",[e._v("Da gilt es nicht zu verzagen: es ist noch kein Meister vom Himmel gefallen. Mit jedem Mal, da dir dieser Fehler passiert, wirst du besser erkennen können, was tatsächlich objektorientierter Code ist und was nicht.")]),e._v(" "),n("p",[e._v("Und am Ende lohnt sich das auch selbst wenn du nicht objektorientiert programmierst: denn auch in anderen Paradigmen wirst du versuchen dieselben Vorteile herauszuarbeiten und wartbaren, übersichtlichen und schlanken Code zu schreiben!")]),e._v(" "),n("img",{attrs:{src:"https://vg09.met.vgwort.de/na/de57c00ea230461babe51183cdc88f86",width:"1",height:"1",alt:""}})])}),[],!1,null,null,null);n.default=t.exports}}]);