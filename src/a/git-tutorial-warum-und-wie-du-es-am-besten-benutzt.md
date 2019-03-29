---
type: article
title: 'Git-Tutorial: Warum und wie du es am besten benutzt'
chapter: 3. Das Handwerkszeug
weight: 0
published: true
meta:
  - name: description
    content: Hier lernst du warum du Git brauchst und wie du es von Anfang an wie ein Profi benutzt, mit
---

## Warum brauch ich Versionierung?

Neben dem Editor ist die Versionskontrolle meines Erachtens das wichtigste Tool im Programmier-Arsenal. Eine Versionskontrolle protokolliert Änderungen an dem Code den Du schreibst. Wenn dann zum Beispiel etwas kaputt geht, kannst du in der Geschichte "zurückspringen" und dir den funktionierenden Code zurückholen. Oder du hast Code gelöscht, weil Du dachtest, dass er nicht mehr benötigt wird – und brauchst ihn plötzlich doch wieder: mit Versionskontrolle kein Problem.

Du kannst jederzeit an einen beliebigen Punkt in der Geschichte deines Projekts springen. Ich kann nicht genug betonen, wie oft die Versionierung mir schon den Allerwertesten gerettet oder mir das Leben erleichtert hat.

In Kombination mit einem Provider wie GitHub werden mit Versionierung sogar Backups mehr oder weniger überflüssig: dein Code landet automatisch in der Cloud. Selbst wenn dein Code nie veröffentlicht wird und nur von Dir benutzt wird: Du sparst Dir unfassbar viel Zeit damit, nicht ständig Backups machen zu müssen und jeden Code, den du jemals geschrieben hast, auf Anhieb wieder zur Verfügung zu haben.

## Im Team entwickeln geht nur mit Git

Darüber hinaus macht Versionierung das Zusammenarbeiten mehrerer Programmierer an einer Codebase überhaupt erst sinnvoll möglich, insofern musst Du dich spätestens dann damit auseinandersetzen, wenn du nicht auf ewig in deinem Elfenbeinturm vor dich hincoden willst.

Mit Git können mehrere Programmierer sogar an der selben Datei arbeiten, ohne dass sich die Änderungen gegenseitig überschreiben; Git kümmert sich ganz automatisch um das Zusammensetzuen aller Änderungen und meckert wirklich nur dann, wenn es einen Konflikt zwischen zwei Änderungen gibt, weil zum Beispiel zwei Leute die selbe Codezeile geändert haben.

## Und so funktioniert es

Das Ganze funktioniert nach dem folgenden Prinzip: dein Code liegt in einem "Repository", was zunächst mal nichts anderes ist als ein Ordner, in dem alle Dateien von Git überwacht werden. Neben deinem lokalen Ordner gibt es ein "Remote" bzw. "Origin", in dem nicht nur der aktuelle Stand, sondern die gesamte Historie deines Code gespeichert ist.

Neben Wenn du Änderungen gemacht hast, kannst du diese in einem "Commit" zusammenfassen und mit einer Beschreibung der Änderungen als Punkt in der Geschichte des Code festhalten. Dabei arbeitest du immer in einem bestimmten "Branch".

Dein Repository hat mehrere Branches, zum Beispiel einen develop-Branch, an dem entwickelt wird und einen master-Branch, der die aktuelle Live-Version deines Projekts widerspiegelt.

Wenn du nun ein neues Feature entwickelst, erstellst du vom develop-Branch aus einen neuen Feature-Branch, in dem du die Änderung einbauen, testen und finalisieren kannst, bevor sie mit einem "Merge" in den develop-Branch zurückgeführt wird.

Wenn du mehrere Features nach diesem Prinzip fertig gebaut und in deinen develop-Branch gemerged hast, möchtest du vielleicht einen Release machen und eine neue Version deines Projekts veröffentlichen: dazu integrierst du alle Commits aus dem develop-Branch in den Master-Branch, auch das wieder mit einem einfachen "Merge"-Kommando.

Dieser Workflow bringt zahlreiche Vorteile: du kannst an einem neuen Feature arbeiten, ohne damit die Live-Version deines Produkts zu beeinträchtigen. Du kannst jederzeit Experimente machen und ein Feature auch wieder wegwerfen, ohne irgendwelchen Code aufräumen zu müssen. Du kannst einen Hotfix an der Live-Version machen, ohne alle Änderungen miteinzubauen, die vielleicht schon fertig entwickelt sind, aber trotzdem noch nicht in der Live-Version landen sollen.

Auch wenn du an dieser Stelle noch nicht wirklich den Sinn hinter diesem System sehen solltest: ich empfehle dir, diesen Workflow einfach genau so zu übernehmen; mit der Zeit wirst du verstehen, warum all diese Kleinigkeiten so viel Sinn machen.

## Die wichtigsten Kommandos

Auch wenn du Git heutzutage in modernen Editoren integriert hast und über eine grafische Oberfläche bedienen kannst, macht es Sinn, die wichtigsten Kommandos zu kennen:

- `git clone $url` erstellt eine lokale Kopie des Repository unter \$url
- `git pull` bringt dein lokales Repository auf den neuesten Stand (holt neue Commits auf deinen Rechner, die zum Beispiel andere in der Zwischenzeit in diesem Branch gemacht haben)
- `git checkout dev` wechselt den aktiven Branch zu "dev"
- `git checkout -b feature/name` erstellt vom aktiven Branch ausgehend einen neuen mit dem Namen "feature/name"
- `git status` zeigt dir in welchem Branch du dich befindest und welche Dateien verändert wurden
- `git add .` alle modifizierten Dateien werden gestaged (für den nächsten Commit "ausgewählt")
- `git commit -m "Commit-Message"` erstellt einen Commit mit der Nachricht "Commit-Message"
- `git push` lädt alle lokalen Commits hoch in den Origin
- `git merge feature/name` übernimmt alle Commits aus "feature/name" in deinen aktiven Branch

## Exkurs: Merge vs Rebase

Wenn du Commits aus einem Branch in einen anderen einfügen willst, geht das grundsätzlich mit einem Merge, und das in alle Richtungen. Wenn du mit einem Feature-Branch fertig bist, kannst du die Änderungen zurück in den Develop-Branch mergen.

Umgekehrt kannst du genauso den Develop-Branch in älteren Feature-Branch mergen, der vielleicht eine Weile herumlag und noch nicht alle Änderungen hat, die im Develop-Branch mittlerweile vorliegen.

Für diesen Fall gibt es als Alternative noch den "Rebase", was die Änderungen in deinen Feature-Branch einfügt, ohne einen Merge-Commit zu erzeugen. Das hat den Vorteil, dass deine Git-Historie nicht mit unnötigen Merge-Commits zugemüllt wird, aber den Nachteil, dass du nicht einfach pushen kannst, sondern einen --force push machen musst, der die Historie deines Branch neu schreibt, was zu Problemen führen kann, wenn andere an demselben Branch arbeiten.

Die Diskussion ob Merge oder Rebase wird gerne geführt, mit guten Argumenten auf beiden Seiten. Ich für meinen Teil bin im Team Merge – weil ich im Zweifel lieber auf Nummer sicher gehe und mich ein paar Merge-Commits in der Git-Historie nicht groß stören.

## Noch ein paar kleine Tipps zum Schluss

- Es gibt [hervorragende Konventionen](https://chris.beams.io/posts/git-commit/) für das Schreiben von Commit-Messages, an die du dich halten solltest
- Versuche möglichst viele, möglichst kleine Commits zu machen mit Änderungen, die zusammengehören
- Jedes Projekt sollte immer mindestens einen dev und einen master Branch haben
- Arbeite immer in Feature-Branches, um deinen dev und master sauber zu halten

## Links

- [Offizielle Dokumentation](https://git-scm.com/doc)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Guter Anbieter mit CI/CD: GitLab](https://about.gitlab.com/)
- [Der Standard Open-Source-Anbieter: GitHub](https://github.com/)

<img src="https://vg09.met.vgwort.de/na/1a14f60d04a44020a0ae65f27d759025" width="1" height="1" alt="">
