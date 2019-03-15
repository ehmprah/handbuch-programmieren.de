---
type: article
title: 'Einführung in Git: warum und wie du es benutzen solltest'
chapter: 3. Das Handwerkszeug
weight: 0
published: false
meta:
  - name: description
    content: Hier lernst du warum du es brauchst und wie du Git von Anfang an wie ein Profi benutzt.
---

## Warum brauch ich Versionierung?

Neben dem Editor ist die Versionskontrolle meines Erachtens das wichtigste Tool im Programmier-Arsenal. Eine Versionskontrolle protokolliert Änderungen an dem Code den Du schreibst. Wenn dann zum Beispiel etwas kaputt geht, kannst du in der Geschichte "zurückspringen" und dir den funktionierenden Code zurückholen. Oder du hast Code gelöscht, weil Du dachtest, dass er nicht mehr benötigt wird – und brauchst ihn plötzlich doch wieder: mit Versionskontrolle kein Problem.

Du kannst jederzeit an einen beliebigen Punkt in der Geschichte deines Projekts springen. Ich kann nicht genug betonen, wie oft die Versionierung mir schon den Allerwertesten gerettet oder mir das Leben erleichtert hat.

In Kombination mit einem Provider wie GitHub werden mit Versionierung sogar Backups mehr oder weniger überflüssig: dein Code landet automatisch in der Cloud. Selbst wenn dein Code nie veröffentlicht wird und nur von Dir benutzt wird: Du sparst Dir unfassbar viel Zeit damit, nicht ständig Backups machen zu müssen und jeden Code, den du jemals geschrieben hast, auf Anhieb wieder zur Verfügung zu haben.

## Im Team entwickeln geht nur mit Git

Darüber hinaus macht Versionierung das Zusammenarbeiten mehrerer Programmierer an einer Codebase überhaupt erst sinnvoll möglich, insofern musst Du dich spätestens dann damit auseinandersetzen, wenn du nicht auf ewig in deinem Elfenbeinturm vor dich hincoden willst.

Mit Git können mehrere Programmier sogar an der selben Datei arbeiten, ohne dass sich die Änderungen gegenseitig überschreiben; Git kümmert sich ganz automatisch um das Zusammensetzuen aller Änderungen und meckert wirklich nur dann, wenn es einen Konflikt zwischen zwei Änderungen gibt, weil zum Beispiel zwei Leute die selbe Codezeile geändert haben.

## Und so funktioniert's!

Das Ganze funktioniert nach dem folgenden Prinzip: dein Code liegt in einem "Repository", was zunächst mal nichts anderes ist als eine Kopie eines Ordners, in dem alle Dateien von Git überwacht werden. Wenn du Änderungen gemacht hast, kannst du diese in einem "Commit" zusammenfassen und mit einer Beschreibung der Änderungen in dein Repository übertragen. Dabei arbeitest du immer in einem bestimmten "Branch".

Dein Repository hat mehrere Branches (zum Beispiel einen develop-Branch, an dem gearb)

viele kleine commits
kurze klare commit messages

## Git

- wie wird es im alltag benutzt
- dev / stage / master, feature branches, merges, hintergrund
- links für ein einsteiger tutorial
- link für ein fortgeschrittenes tut
- link für ein videotut
