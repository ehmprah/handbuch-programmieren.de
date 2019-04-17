---
type: article
title: Code richtig kommentieren
chapter: 3. Das Handwerkszeug
weight: 0
published: true
---

Wie man Code richtig kommentiert und verständlich ist diskutabel. Es gibt nicht den einen goldenen Weg, sondern verschiedene Ansätze die alle durchaus ihre Daseinsberechtigung haben. Fest steht, dass es sehr viel Sinn macht, Code gut zu kommentieren und verständlich zu halten, egal wie.

Selbst wenn Code, den du schreibst, niemals von einem anderen Programmierer gelesen, verstanden oder vielleicht weiterentwickelt werden muss, wird es passieren, dass du deinen eigenen Code wieder erneut anfassen musst. Und bloss weil du den Code zu dem Zeitpunkt, da du ihn geschrieben hast, kanntest wie deine Westentasche und alles für dich ganz klar und logisch erschien, kann die Welt ganz anders aussehen, wenn du diesen Code für ein paar Monate nicht mehr gesehen hast.

Natürlich findest du dich notfalls auch wieder in schlecht oder gar nicht kommentierten Code rein, aber das ist teilweise unnötig mühsam und kostet Zeit, die du lieber mit anderen Dingen verbringen möchtest, als kryptischen Code zu entziffern, selbst wenn's dein eigener ist.

## Der beste Kommentar ist der, den du nicht schreiben musst

Man kann es mit dem Kommentieren definitiv auch übertreiben. Keiner will über ein paar Codezeilen ganze Romane lesen, sonst ist es einfacher, direkt den Code zu lesen und zu verstehen. Ganz generell solltest du versuchen, Code so zu schreiben, dass er selbst kommentiert, was er macht. Ein Funktionsname sollte beschreiben, was die Funktion macht. Damit kann man einen Funktionsaufruf im Code verstehen, ohne zuerst nachschauen zu müssen, was diese Funktion überhaupt macht. Dementsprechend sollte eine Variable nach ihrem Inhalt benannt werden, um nicht ständig nachgucken zu müssen, sie enthält. Kommentare sollten nicht wiederholen oder umschreiben, was ohnehin im Code darunter steht, sondern die Absicht dahinter erklären, den Code gliedern, Zusammenhänge aufzeigen.

```js
// The first variable is a loaded user
const first = load(id);
```

Der Kommentar bei diesem Beispiel ist überflüssig und übernimmt, was mit sprechenden Funktions- und Variablennamen auch machbar wäre:

```js
const user = loadUser(userId);
```

## Kommentiere so wenig wie möglich, aber so viel wie nötig

Ziel: du oder andere sollten deinen Code einfach verstehen.
