---
lang: sv
slug: anpassa
ref: developer.customize
title: Anpassa Zetkins applikationer
kicker: |
    Om du saknar en funktion i någon av Zetkins applikationer kan det kanske
    vara aktuellt att köra en egen anpassning.
---

Zetkin består bland annat utav tre webbapplikationer som alla är open-source:

* Aktivistportalen (www.zetk.in)
* Zetkin Organize (organize.zetk.in)
* Zetkin Call (call.zetk.in)

De här tre applikationerna utvecklas dels av Zetkin Foundation, och dels genom
[bidrag från ideella utvecklare](../bidra). Om din organisation har förslag på
en funktion som skulle underlätta ert arbete rekommenderar vi att ni i första
hand försöker få till den funktionen i den officiella applikationen.

Om just den funktion ni behöver av någon anledning inte passar in i de
officiella Zetkin-applikationerna kan ni göra en egen anpassning och köra den
som en helt egen version.

Kanske vill ni ha en ny "bulk operation" i Zetkin Organize för något som just
er organisation gör ofta, eller ett sätt för funktionärer att ta bort en person
ur registret direkt i Zetkin Call?

## Klona en officiell app
De officiella webbapplikationerna har inga direkta beroenden på källkod som är
låst. Allt de behöver är att komma åt Zetkin-plattformens API.

Det betyder att ni kan klona en officiell Zetkin-applikation och köra den på er
egen domän, med egna anpassningar.

För att kunna göra det krävs dock en separat API-nyckel. Ur Plattformens
perspektiv är er applikation inte en klon av en officiell applikation, utan en
helt separat applikation som därför behöver registreras separat.

Läs mer om att [registrera applikationer](../egna-appar).
