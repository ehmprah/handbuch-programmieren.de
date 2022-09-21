(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{258:function(e,n,t){e.exports=t.p+"assets/img/test.33b51ec7.png"},269:function(e,n,t){"use strict";t.r(n);var i=t(16),s=Object(i.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Genau wie die "),n("RouterLink",{attrs:{to:"/a/git-tutorial-warum-und-wie-du-es-am-besten-benutzt.html"}},[e._v("Versionierung mit Git")]),e._v(" sollten automatisierte Tests zu deinen alltäglichen Tools als Programmierer gehören. Natürlich ist es auch ohne diese möglich perfekt funktionierenden Code zu schreiben – nur kostet es weitaus mehr Zeit und Mühe.")],1),e._v(" "),n("h2",{attrs:{id:"automatisierte-tests-machen-dein-leben-leichter"}},[e._v("Automatisierte Tests machen dein Leben leichter")]),e._v(" "),n("p",[e._v("Wenn du Code schreibst, testest du natürlich im Laufe der Entwicklung immer wieder ob der Code auch funktioniert. Irgendwann schließt du das Feature ab, an dem du gerade arbeitest und testest dann vielleicht nochmal gründlich per Hand ob alles funktioniert – und im besten Fall ist das auch so.")]),e._v(" "),n("p",[e._v("Natürlich könntest du schon hier mit automatisierten Tests arbeiten, um dir das manuelle Testen zu ersparen; diese Form der Entwicklung nennt man dann Test-Driven-Development, auf die werde ich weiter unten noch genauer eingehen.")]),e._v(" "),n("p",[e._v("Aber im Rahmen der Entwicklung eines einzelnen Features sparst du noch nicht wirklich Zeit, wenn du automatische Tests schreibst anstatt manuell zu testen. Unter Umständen brauchst du sogar länger, als wenn du du das neue Feature einfach selbst testest (was übrigens auch der Grund dafür ist, dass automatisiertes Testen gerne hinten runterfällt, wenn die Zeit knapp wird).")]),e._v(" "),n("p",[n("img",{attrs:{src:t(258),alt:"Erfolgreicher Testlauf"}})]),e._v(" "),n("p",[e._v("Richtig wertvoll werden automatisierte Tests erst dann, wenn das Feature zu einem späteren Zeitpunkt aus irgendeinem Grund kaputt geht: zum Beispiel durch ein Plugin-Update oder durch eine kleine Code-Änderung von der du dir sicher warst, dass sie eigentlich keine Auswirkungen haben sollte (möglicherweise an einer ganz anderen Stelle im Code).")]),e._v(" "),n("p",[e._v("Wenn du dein Feature mit automatischen Tests versehen hast, stellt das kein großes Problem dar: Bevor du den neuen Code veröffentlichst werden deine Tests fehlschlagen und du kannst das Problem noch rechtzeitig beheben.")]),e._v(" "),n("p",[e._v("Wenn du keine Tests hast, merkst du unter Umständen gar nicht, dass hier ein neuer Bug entstanden ist und wirst diesen im schlimmsten Fall mitveröffentlichen und erfährst dann irgendwann durch einen Bug-Report deiner Anwender davon, dass du mit deiner Änderung unbeabsichtigt etwas kaputt gemacht hast. Ohne automatisierte Tests musst du entweder damit Leben, dass du regelmäßig unnötige Bugs produzierst oder vor jedem Release alle Features gründlich testen: auch die, an denen du gar nichts geändert hast.")]),e._v(" "),n("p",[e._v("Im Umkehrschluss heißt das ganz einfach: je größer dein Projekt ist, desto schwieriger wird es, fehlerfreien Code zu produzieren, wenn du nicht immer mehr und mehr deiner Zeit mit dem Testen der immerselben Features verbringen möchtest.")]),e._v(" "),n("h2",{attrs:{id:"test-driven-development-tdd"}},[e._v("Test-Driven-Development (TDD)")]),e._v(" "),n("p",[e._v("Wenn absolut keine Tests zu verwenden ein Extrem ist, ist Test-Driven-Development der Gegenpol. Bei diesem Paradigma werden die Anforderungen deiner Software zunächst zu Tests umformuliert und kein Feature ohne den entsprechenden Test entwickelt. Dieser Ansatz bringt natürlich eine exorbitant hohe Qualität mit sich, erfordert aber unter Umständen ein gewisses Umdenken und etwas mehr Zeit bei der anfänglichen Entwicklung – wenn aber ein Feature erstmal steht, dann steht es auch auf stabilen Beinen. Den Mehraufwand, den man hier am Anfang hat, spart man unter Umständen doppelt und dreifach über die Lebenszeit des Projekts.")]),e._v(" "),n("h2",{attrs:{id:"welche-tests-brauche-ich-und-wie-viele"}},[e._v("Welche Tests brauche ich? Und wie viele?")]),e._v(" "),n("p",[e._v('Es gibt ganz verschiedene Arten von Tests: Bei Unit-Tests wird ein kleiner Teil deines Code getestet, zum Beispiel eine Funktion. Mit Integrations-Tests wird sichergestellt, dass die verschiedenen Teile des Codes wie gewünscht zusammenspielen. Und mit funktionalen oder End-to-End-Tests (E2E) wird deine Applikation von "Anfang bis Ende" getestet, also eine Reihe von Aktionen ausgeführt, die auch ein tatsächlicher Nutzer deiner Software so ausführen könnte oder sollte.')]),e._v(" "),n("p",[e._v('Natürlich braucht nicht jedes Software-Projekt unbedingt eine hundertprozentige Testabdeckung über alle Arten von Tests hinweg – aber die Faustregel "viel hilft viel" ist beim Testing sicher nicht ganz unangebracht. Wenn die Zeit knapp ist und man aber dennoch nicht auf automatisierte Tests verzichten möchte, würde ich persönlich empfehlen, mit E2E-Tests deine User-Flows zu testen.')]),e._v(" "),n("p",[e._v("Du wirst vielleicht im Falle eines Fehlers auf die Suche gehen müssen wo genau im Code das Problem liegt – aber immerhin bekommst du mit, wenn irgendwas kaputt gegangen ist.")]),e._v(" "),n("h2",{attrs:{id:"ci-cd-und-automatisierte-tests"}},[e._v("CI/CD und automatisierte Tests")]),e._v(" "),n("p",[e._v("Am meisten Sinn machen automatisierte Tests dann, wenn sie auch tatsächlich automatisiert ablaufen und irgendwie in deinen Release-Workflow integriert sind, das heißt zum Beispiel über einen Git-Hook oder deiner CI/CD-Pipeline automatisch ablaufen, sobald du eine Änderung an deinem Code vornimmst. Automatisierte Tests, die du manuell anstoßen musst sind definitiv besser als keine, aber laden dazu ein, auch mal vergessen zu werden – und genau darum geht es ja: wir wollen uns auf den Code konzentrieren, und nicht auf das Testen.")]),e._v(" "),n("p",[e._v("Ich für meinen Teil kann automatisiertes Testen in egal welcher Form stark empfehlen: und auch wenn ich persönlich noch viel besser und noch viel mehr testen könnte – mir haben automatische Tests schon mehr als einmal den Allerwertesten gerettet.")]),e._v(" "),n("img",{attrs:{src:"https://vg09.met.vgwort.de/na/35ef63f0a1a2400d9624558e01880054",width:"1",height:"1",alt:""}})])}),[],!1,null,null,null);n.default=s.exports}}]);