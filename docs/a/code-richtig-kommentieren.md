---
type: article
title: Code richtig kommentieren
chapter: 3. Das Handwerkszeug
weight: 0
published: true
meta:
  - name: description
    content: Programmieren an sich ist eine Kunst – Code richtig zu kommentieren ebenso. Hier erfährst du, wie du Code kommentierst wie ein Profi.
---

Wie man Code richtig kommentiert und verständlich ist diskutabel. Es gibt nicht den einen goldenen Weg, sondern verschiedene Ansätze die alle durchaus ihre Daseinsberechtigung haben. Fest steht, dass es sehr viel Sinn macht, Code gut zu kommentieren und verständlich zu halten, egal wie.

Selbst wenn Code, den du schreibst, niemals von einem anderen Programmierer gelesen, verstanden oder vielleicht weiterentwickelt werden muss, wird es passieren, dass du deinen eigenen Code wieder erneut anfassen musst; und bloss weil du den Code zu dem Zeitpunkt, da du ihn geschrieben hast, kanntest wie deine Westentasche und alles für dich ganz klar und logisch erschien, kann die Welt ganz anders aussehen, wenn du diesen Code für ein paar Monate nicht mehr gesehen hast.

Natürlich findest du dich notfalls auch wieder in schlecht oder gar nicht kommentierten Code rein, aber das ist teilweise unnötig mühsam und kostet Zeit, die du lieber mit anderen Dingen verbringen möchtest, als kryptischen Code zu entziffern, selbst wenn's dein eigener ist.

## Dokumentierende und erklärende Kommentare

Im Code gibt es im Wesentlichen zwei verschiedene Arten von Kommentaren, die dir begegnen werden: Dokumentierende Kommentare und erklärende Kommentare. Dokumentierende Kommentare halten sich an gewisse Konventionen, damit aus allen Kommentaren im Code automatisch eine lesbare Dokumentation erstellt werden kann. Da diese dokumentierenden Kommentare stets festen Regeln folgen, gibt's hier auch nicht viel zu beachten, weshalb ich im folgenden mit Kommentaren immer erklärende Kommentare meine.

## Der beste Kommentar ist der, den du nicht schreiben musst

Man kann es mit dem Kommentieren definitiv auch übertreiben. Keiner will über ein paar Codezeilen ganze Romane lesen, sonst ist es einfacher, direkt den Code zu lesen und zu verstehen. Ganz generell solltest du versuchen, Code so zu schreiben, dass er selbst kommentiert, was er macht.

Ein Funktionsname sollte beschreiben, was die Funktion macht. Damit kann man einen Funktionsaufruf im Code verstehen, ohne zuerst nachschauen zu müssen, was in dieser Funktion überhaupt passiert. Dementsprechend sollte eine Variable nach ihrem Inhalt benannt werden, um nicht ständig nachgucken zu müssen, sie enthält. Kommentare sollten nicht wiederholen oder umschreiben, was ohnehin im Code darunter steht:

```js
// The first variable is a loaded user
const first = load(id);
```

Der Kommentar bei diesem Beispiel ist überflüssig und übernimmt, was mit sprechenden Funktions- und Variablennamen auch machbar wäre:

```js
const user = loadUser(userId);
```

## Kommentiere so wenig wie möglich, aber so viel wie nötig

Wenn du Code so schreibst, dass er nicht nur seine Funktion erfüllt, sondern gleichzeitig selbst beschreibt, was er tut, brauchst du weniger Kommentare. Das macht deinen Code kürzer und übersichtlicher: je weniger Code und Kommentare du lesen musst, umso besser.

Aber auch wenn du grundsätzlich versuchen solltest, so wenig Code und Kommentare wie möglich zu schreiben: ganz ohne geht's eben auch nicht. Kommentare können die Absicht hinter dem Code erklären, ihn gliedern und Zusammenhänge aufzeigen, was dir und anderen dabei hilft, sich schnell zurecht zu finden.

## Erst durch Iteration werden Kommentare richtig gut

Wie Code auch werden Kommentare mit jeder Iteration besser; während du Code schreibst, macht er für dich normalerweise immer Sinn, die Zusammenhänge sind klar, deine größere Strategie hast du sowieso im Kopf. Deswegen ist es auch schwer, Code direkt während dem Schreiben perfekt zu kommentieren. Es hilft, sich vorzustellen, dass du deinen fertigen Code zum ersten Mal siehst, um ihn besser zu kommentieren – aber all dein implizites Wissen spontan zu vergessen funktioniert dann doch nicht.

Richtig gut werden deine Kommentare erst beim zweiten und dritten Bearbeiten deines Code: wenn du ihn erweiterst oder verbesserst, hab immer auch die Kommentare im Auge: findest du dich in deinem alten Code schnell zurecht? Verstehst du alles auf Anhieb? Wenn du dich erst wieder tief reindenken musst, bevor du an deinem alten Code weiterarbeiten kannst, würden neue oder bessere Kommentare dir dabei helfen, das beim nächsten Mal nicht nochmal tun zu müssen.

## Zusammenfassung

Beim Schreiben von Code und Kommentaren sollte nach der Funktionalität die Verständlichkeit die höchste Priorität sein. Verständlichen, übersichtlichen, gut kommentierten Code zu schreiben ist eine Kunst, und du wirst mit jeder Zeile die du schreibst, besser darin werden.

- Versuche so wenig Code und so wenig Kommentare wie nötig zu schreiben
- Versuche deinen Code so zu schreiben, dass er selbst beschreibt, was er tut
- Schreibe Kommentare, wenn der Code selbst nicht aussagekräftig genug ist oder um Zusammenhänge darzustellen
- Schreibe so wenig Kommentare wie möglich, aber so viele wie nötig
- Versuche bei jeder Iteration über deinen Code auch die Kommentare mitzuverbessern

<img src="https://vg09.met.vgwort.de/na/09a580f4b5714301a099bcf671a3a692" width="1" height="1" alt="">
