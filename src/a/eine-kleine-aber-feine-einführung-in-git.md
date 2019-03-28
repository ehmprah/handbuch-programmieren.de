---
type: article
title: 'Einführung in Git: warum und wie du es benutzen solltest'
chapter: 3. Das Handwerkszeug
weight: 0
published: true
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

Mit Git können mehrere Programmierer sogar an der selben Datei arbeiten, ohne dass sich die Änderungen gegenseitig überschreiben; Git kümmert sich ganz automatisch um das Zusammensetzuen aller Änderungen und meckert wirklich nur dann, wenn es einen Konflikt zwischen zwei Änderungen gibt, weil zum Beispiel zwei Leute die selbe Codezeile geändert haben.

## Und so funktioniert's!

Das Ganze funktioniert nach dem folgenden Prinzip: dein Code liegt in einem "Repository", was zunächst mal nichts anderes ist als eine ein Ordner, in dem alle Dateien von Git überwacht werden. Neben deinem lokalen Ordner gibt es ein "Remote" bzw. "Origin", in dem nicht nur der aktuelle Stand, sondern die gesamte Historie deines Code gespeichert ist.

Neben Wenn du Änderungen gemacht hast, kannst du diese in einem "Commit" zusammenfassen und mit einer Beschreibung der Änderungen als Punkt in der Geschichte des Code festhalten. Dabei arbeitest du immer in einem bestimmten "Branch".

Dein Repository hat mehrere Branches, zum Beispiel einen develop-Branch, an dem entwickelt wird und einen master-Branch, der die aktuelle Live-Version deines Projekts widerspiegelt.

Wenn du nun ein neues Feature entwickelst, erstellst du vom develop-Branch aus einen neuen Feature-Branch, in dem du die Änderung einbauen, testen und finalisieren kannst, bevor sie mit einem "Merge" in den develop-Branch eingefügt wird.

Wenn du mehrere Features nach diesem Prinzip fertig gebaut und in deinen develop-Branch gemerged hast, möchtest du vielleicht einen Release machen und eine neue Version deines Projekts veröffentlichen: dazu integrierst du alle Commits aus dem develop-Branch in den Master-Branch, auch das wieder mit einem einfachen "Merge"-Kommando.

Dieser Workflow bringt zahlreiche Vorteile: du kannst an einem neuen Feature arbeiten, ohne damit die Live-Version deines Produkts zu beeinträchtigen. Du kannst jederzeit Experimente machen und ein Feature auch wieder wegwerfen, ohne irgendwelchen Code aufräumen zu müssen. Du kannst einen Hotfix an der Live-Version machen, ohne alle Änderungen miteinzubauen, die vielleicht schon fertig entwickelt sind, aber trotzdem noch nicht in der Live-Version landen sollen.

Auch wenn du an dieser Stelle noch nicht wirklich den Sinn hinter diesem System sehen solltest: ich empfehle dir, diesen Workflow einfach genau so zu übernehmen; mit der Zeit wirst du verstehen, warum all diese Kleinigkeiten so viel Sinn machen.

## Die wichtigsten Kommandos

Auch wenn du Git heutzutage in modernen Editoren integriert hast und über eine grafische Oberfläche bedienen kannst, macht es Sinn, die wichtigsten Kommandos zu kennen:

- `git pull`: bringt dein lokales Repository auf den neuesten Stand (holt neue Commits auf deinen Rechner, die zum Beispiel andere in der Zwischenzeit in diesem Branch gemacht haben)
- `git push`: lädt alle Commits
- `git checkout dev`: wechselt den aktiven Branch zu "dev"
- `git checkout -b feature/name`: erstellt einen Branch mit dem Namen "feature/name" (auf)
- `git add .`: alle modifizierten Dateien werden gestaged (für den nächsten Commit "ausgewählt")
- `git commit -m "Commit-Message"`: erstellt einen Commit mit der Beschreibung "Commit-Message" (siehe dazu [](#))
- `git status`: zeigt dir Infos zum aktuellen
- `git merge dev`: übernimmt alle Commits aus dem dev branch in deinen aktuell aktiven Branch

viele kleine commits
kurze klare commit messages

## Merge vs Rebase

## Wie sieht eine gute Commit-Message aus?

Die besten Commit-Messages bestehen aus einer oder mehr Zeilen, von denen die erste eine kurze Beschreibung deiner Änderungen beinhaltet, nicht länger als 50 Zeichen ist und folgendem Muster folgt: "Add

Separate subject from body with a blank line
Limit the subject line to 50 characters
Capitalize the subject line
Do not end the subject line with a period
Use the imperative mood in the subject line
Wrap the body at 72 characters
Use the body to explain what and why vs. how

https://chris.beams.io/posts/git-commit/

## Links

- [Offizielle Dokumentation](https://git-scm.com/doc)

- wie wird es im alltag benutzt
- dev / stage / master, feature branches, merges, hintergrund
- links für ein einsteiger tutorial
- link für ein fortgeschrittenes tut
- link für ein videotut
