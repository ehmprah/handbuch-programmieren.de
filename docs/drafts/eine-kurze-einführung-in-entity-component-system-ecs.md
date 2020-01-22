---
type: article
title: Eine kurze Einführung in Entity Component System (ECS)
chapter: 4. Vom Anfänger zum Profi
weight: 2
published: true
---

Hinter dem etwas sperrigen Namen dieses Paradigmas bzw. architektonischen Musters verstecken sich einige simple und sympatische Prinzipien, mit denen wir eine Reihe von Schmerzen bei der Programmierung mit OOP und anderen Paradigmen beheben wollen. Entity Component System legt zum Beispiel Wert auf die Trennung von Daten und Logik und zieht einfache Komposition komplexen Hierarchien vor. Was das im Detail bedeutet, werden wir uns nach einer grundlegenden Definition im Folgenden anschauen.

## Der Name ist Programm

Der Name Entity Component System beinhaltet bereits alle wesentlichen Bestandteile dieses Paradigmas. Eine *Entity* ist in diesem Sinne nicht mehr als ein Container für Daten und besteht lediglich aus einer einzigartigen ID und der Fähigkeit, mit *Components* versehen werden zu können; diese beinhalten dann die eigentlichen Daten unserer Applikation. Die Logik unserer Applikation lebt schließlich in einem oder mehreren *Systems*,  die über unsere Entitäten iterieren und interagieren, je nach deren Komponenten.

Zum Beispiel könnten wir uns eine Applikation vorstellen, in der eine Reihe von "Menschen" leben; diese sind dann Entitäten mit einer ID und zum Beispiel der Komponente "Alter". Das System "Zeit" würde nun über alle Menschen iterieren und regelmäßig ihr Alter erhöhen.

```js
const entities = [
  {
    id: 1,
    components: { age: 0 }
  }
];

function time() {
  entities.forEach(entity => {
    if (entity.components.age !== undefined) {
      ++entity.components.age;
    }
  })
}
```

## Daten und Logik gesellen sich nicht gern

Diese Trennung von Daten und Logik macht unseren Code übersichtlicher und damit leichter zu debuggen, zu warten und zu erweitern. Wir müssen nicht an verschiedenen Stellen suchen und Anpassungen machen: bei diesem Paradigma ist unser Code per se bestens organisiert. Natürlich kann man auch hier Schindluder treiben und zum Beispiel sämtliche Logik in ein System gießen, anstatt ein eigenes System für wenige sinnvoll zusammengehörige Komponenten zu schreiben – in unserem Beispiel von eben iteriert unser "Zeit"-System auch tatsächlich nur über die "Alter"-Komponente.

Aber selbst in diesem nicht optimalen Fall haben wir trotzdem eine Optimierung im Vergleich zur objektorientierten Programmierung, die uns keineswegs vorschreibt, welches Objekt welche Logik beinhalten darf, weswegen wir diese Freiheit gerne zu unserem eigenen Nachteil missbrauchen und unsere Logik gerne da unterbringen, wo sie uns gerade sinnvoll erscheint – und wir dann erst nach ewigem Suchen in einem halben Dutzend Objekten den Code wiederfinden, den wir bei einem Bugfix oder einer Erweiterung suchen.

Und da die Daten, mit denen wir arbeiten, tatsächlich auch nur Daten sind und keinerlei Logik beinhalten, können wir ganz einfach einen Stand festhalten, speichern, exportieren oder manipulieren, ohne unsere Applikation durcheinanderzubringen. Ich für meinen Teil wusste um diese Vorteile, war aber am Ende nach meinem ersten ECS-Projekt überrascht, wie wertvoll die Trennung zwischen Daten und Logik im Programmieralltag ist.

## Komposition statt Vererbung

Und die Trennung von Daten und Logik ist beileibe nicht der einzige Pluspunkt bei ECS: mindestens genauso wertvoll und das eigentliche Killer-Feature im Vergleich zur objektorientierten Programmierung ist die Komposition. Da unsere Entities lediglich aus einer ID bestehen und aus verschiedenen Komponenten frei zusammengestellt – oder besser "komponiert" werden können, haben wir absolut keine Vererbung zu berücksichtigen und wir verrennen uns auch nicht in unnötig komplexe Hierarchie-Bäume.

Da es bei ECS nur gleichwertige Komponenten gibt, bekommen wir, wenn wir eine Banane wollen, auch tatsächlich nur eine Banane – und nicht auch noch den Gorilla, der die Banane hält und den ganzen Dschungel obenddrauf (was der Erlang-Erfinder Joe Armstrong der objektorientierten Programmierung humorvoll vorwarf).

Natürlich gibt es auch bei ECS Objekte im Sinne der OOP: also Entitäten, die eine bestimmte Kombination aus Komponenten haben, die ich im Folgenden mal Archetyp nenne. Wenn ich nun einen neuen Archetyp brauche, der alle Komponenten eines bestehenden Archetypen hat, bis auf eine einzige – dann kopiere ich den alten Archetyp, entferne die Komponente und bin fertig. In der objektorientierten Programmierung würde ich in diesem Falle meinen kompletten Hierarchie-Baum überarbeiten müssen: mein "Archetyp" bräuchte ein neues Objekt, von dem sowohl die alte Version, als auch die neue Variante erben können. Je nachdem wie tief Vererbungskette hier bereits wäre, bringen wir uns hier in Teufels Küche und haben jede Menge Arbeit umsonst zu erledigen. Natürlich haben wir dieses Problem nicht, wenn wir von Anfang an jedes Objekt in unserer Applikation kennen und einen perfekten Hierarchie- und Vererbungsbaum von Anfang an erstellen können. Aber in über zehn Jahren Software-Entwicklung in allen Farben und Formen ist mir so ein Projekt noch nicht untergekommen.

## Es ist nicht alles gold was glänzt

Die Vorteile von ECS sind nicht von der Hand zu weisen: aber natürlich gibt's auch hier klare Nachteile. Zum einen lädt ECS dazu ein, imperformanten Code zu schreiben: da unser Ziel ist, Systeme mit einem möglichst kleinen Aufgabenbereich zu schreiben, werden wir zwangsläufig viele Systeme haben, die über alle Entities iterieren. Bei vielen System und Entities wird das schnell zum Performance-Problem. Zwar ist es durchaus möglich, diese Performance-Probleme zu vermeiden, aber dass wir uns hier eine von vielen Strategien aussuchen und diese bewusst anwenden müssen, ist ein klarer Nachteil.

Desweiteren sind die Anwendungsfelder für ECS wohl eher beschränkt: seinen Ursprung hat das Paradigma in der Spiele-Entwicklung und nicht umsonst findet es dort die meiste Verwendung. Viele andere Applikationen, die wir entwickeln, funktionieren eher nach dem Prinzip Aktion-Reaktion und haben gar keine Verwendung für Systeme, die dauerhaft über Daten iterieren. Dennoch denke ich dass die Vorteile, die ECS bietet, sehr wertvoll auch für andere Paradigmen und Applikationen sein kann: und am Ende gibt es auch hier wieder die Möglichkeit, nicht das ganze Paradigma zu übernehmen, sondern sich die Rosinen herauszupicken und das zu verwenden, was zu deinem konkreten Projekt passt.


