---
lang: sv
slug: egna-appar
ref: developer.apps
title: Utveckla egna appar med Zetkins API
kicker: |
    Har ni ett alldeles speciellt problem som ni skulle vilja lösa genom att
    integrera en app med Zetkin? Använd Zetkin Platform API.
---

Kanske använder din organisation redan Zetkin för att hantera medlemmar,
kampanjer och enkäter. Kanske har ni ett alldeles unikt problem som Zetkin inte
löser, men som ni skulle kunna lösa med ett eget verktyg. Kanske blir lösningen
allra bäst om den integreras med Zetkin.

För sådana här tillfällen finns möjlighet att utveckla helt egna applikationer
och integrera dem med Zetkin via Zetkin Platform API.

## Problemet (ett exempel)
Din organisation hanterar alla sina medlemmar i Zetkin. Med Zetkin genomför ni
enkäter och gör utskick för att bjuda in till arrangemang.

Vid arrangemang vill ni bara släppa in medlemmar, och behöver ett enkelt sätt
att bocka av i dörren vem som dyker upp. I Zetkin kan man använda etiketter,
aktioner eller en annan lösning för detta, men Zetkins egna gränssnitt är inte
anpassade för det tempo som ni måste hålla för att inte köerna ska växa.

Ni skulle kunna bygga en helt egen lösning, men vill undvika att ha alla
medlemmar på två ställen.

## Lösningen
Din organisation kan utveckla en egen applikation med ett gränssnitt som är
specialiserat för precis era behov. Ni bygger en enkel mobil webbapplikation
där volontärerna i dörren snabbt kan söka upp en person och markera att hen
anlänt.

Ni integrerar appen med Zetkin på så vis att appen söker i registret direkt
i Zetkin. När en person bockas av sätts en etikett i Zetkin som indikerar att
personen var på arrangemanget. På så vis kan samma person bara anmäla sig i
dörren en gång. Dessutom blir det möjligt att i efterhand söka fram alla som
deltog vid ett visst arrangemang med alla de sökfunktioner som Zetkin redan
har att erbjuda.

Mindre arbete för er organisations utvecklare, mer funktionalitet för era
volontärer och organisatörer, alltså!

## Hur gör man?
Vem som helst kan bygga egna appar för Zetkin. Det enda som krävs är att man
[registrerar sin app](/sv/for-utvecklare/plattformen/api/registrera-app) för
att få en API-nyckel. För att det ska vara lönt att använda Zetkin behöver
din organisation så klart vara ansluten.

Läs mer om [Zetkin-plattformen](../plattformen).
