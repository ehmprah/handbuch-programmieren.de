---
type: article
title: 'Refactoring: Nur durch Iteration wird Code richtig gut'
chapter: 3. Das Handwerkszeug
weight: 0
published: true
---

Bevor wir ans Eingemachte gehen, vielleicht eine kleine Begriffsklärung: Wenn wir Code schreiben, machen wir das selten perfekt. Mal finden wir nicht auf Anhieb die perfekte Lösung, mal sind wir zu faul oder entscheiden uns aus Zeitgründen für eine schnelle, unschöne Lösung. Mal haben wir die Anforderungen falsch verstanden, mal ändern sich Anforderungen eines Frameworks, das wir verwenden, kurzum: es gibt endlos viele Gründe, warum wir Code immer und immer wieder anfassen müssen.

## Was sind technische Schulden und Refactoring?

Das bezeichnen wir als technische Schulden. Wenn wir diese nicht regelmäßig abbauen, werden die "Zinsen" zu hoch, und wir verschwenden zuviel Zeit dabei, uns in dem Kuddelmuddel zurechtzufinden und neue Lösungen um altes Code-Gerümpel herumzubauen. Unter Refactoring wiederum verstehen wir den Abbau von technischen Schulden, das Verbessern und Ausmisten unseres Code.

Ich wurde in vor einer Weile von einem Kollegen gebeten, meine Gedanken zum Thema mitzuteilen und habe folgendes geantwortet: Refactoring ist wie Aufräumen zu Hause — wenn man es nicht regelmäßig macht, dauert es irgendwann zwei Stunden, um von der Küche ins Wohnzimmer zu kommen.

Das ist natürlich eher als Witz gemeint: denn zumindest ich persönlich finde, dass Refactoring von Code weitaus mehr Spaß macht als das Aufräumen und Putzen zu Hause. Ich sehe in regelmäßigem Refactoring nicht eine lästige Pflicht, sondern die Chance, immer noch schönere, effizientere und elegantere Lösungen zu finden. Und ich habe zu viele Stunden damit verschwendet, mit unaufgeräumten Code zu kämpfen, so dass Refactoring sich dann gut und richtig anfühlt, selbst wenn es gerade keine besonders spaßige Aufgabe ist.

## Wann und wie mache ich Refactoring am Besten?

Wenn wir an Code arbeiten, dann tun wir das selten linear von A nach B. Wir springen hin und her, ändern etwas an einer Stelle, damit wir an einer anderen Stelle etwas Neues hinzufügen können. Und genau dabei springen uns für gewöhnlich jede Menge Gelegenheiten ins Gesicht, alten Code aufzuhübschen oder zu verbessern. Refactoring ist prinzipiell eine gute Sache, kann aber auch zur Gefahr werden, wenn wir uns von derlei Gelegenheiten verleiten lassen, solche Änderungen immre gleich sofort zu machen und so vom Hundertsten ins Tausende kommen und dabei das eigentliche Ziel aus den Augen verlieren.

Manchmal geht es nicht anders, und wir müssen ein Stück alten Code überarbeiten, bevor wir unser neues Feature hinzufügen können. In allen anderen Fällen würde ich jedoch empfehlen, das Refactoring wie neue Features auch zu schätzen und einzuplanen. Auch beim Schätzen und Planen von Features können wir ein gewisses Kontingent an Zeit für jedwedes Refactoring einplanen, das uns auf dem Weg zu diesem Feature begegnet – aber ich habe die Erfahrung gemacht, dass man seinem Bedürfnis nach sofortigem Refactoring nicht immer sofort nachgehen sollte, weil man sonst drei Tage lang arbeitet und das Feature, das eigentlich drei Stunden hätte dauern sollen, immer noch nicht fertiggestellt hat.

## Refactoring als Mindset

Wenn man diesen Prozess des Verbesserns von Code wieder und wieder durchlebt hat, wird sich zwangsläufig auch die Art und Weise ändern, mit der man Code schreibt. Es macht sehr viel Sinn sich bewusst zu machen, dass Code eine gewisse Halbwertszeit hat, und ihn deshalb so zu schreiben, dass er einfach geändert, verbessert oder gar gelöscht werden kann. Wir kennen selten alle Anforderungen zu Beginn und können nie wissen, was die Zukunft bringt, und genau so sollten wir auch unseren Code schreiben.

Übersichtlicher und lesbarer, richtig kommentierter Code ist einfacher zu überarbeiten als eine unformatierte Code-Tapete. Simple Module, die nicht mit anderen verwoben sind, lassen sich einfacher überarbeiten oder ausstauschen als ein Riesengeflecht von Modulen, bei denen ich alle anfassen muss, wenn ich eines ändere. Schreibe deinen Code so, dass du auch nach einem halben Jahr auf den ersten Blick erkennst, was er macht und wie er funktioniert.

Wenn du Refactoring immer im Hinterkopf hast, werden sich positive Nebeneffekte einstellen: Zum einen bist du weniger versucht, dich für Stunden an dieser einen Zeile Code aufzuhalten, um sie zu perfektionieren – das passiert über das Refactoring auf Dauer ohnehin automatisch und effizienter, weil du den nötigen Abstand hast, um das Problem aus einer neuen Perspektive zu sehen. Und zum anderen wirst du deinen eigenen Code weniger "ernst" nehmen und weniger Abschiedsschmerz dabei empfinden ein Stück Code wegzuwerfen. Wie vieles im Leben wird Code erst durch Iteration richtig gut, und dieses Prinzip zu verinnerlichen und sich der Iteration hinzugeben und in ihr aufzugehen ist ein befreiendes und erhebendes Gefühl. Und am Ende ist es nicht nur meiner Ansicht nach auch noch schneller, deshalb möchte ich diesen Beitrag mit einem Zitat aus einem großartigen Artikel zum Thema schließen:

<blockquote data-lang="en"><p lang="en" dir="ltr">A lot of programming is exploratory, and it's quicker to get it wrong a few times and iterate than think to get it right first time.</p>&mdash;  <a href="https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to">@tef</a></blockquote>
