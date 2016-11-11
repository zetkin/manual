---
lang: sv
slug: autentisering
ref: developer.platform.api.authentication
title: Autentisering i Zetkin Platform API
kicker: |
    För att få maximal nytta av Zetkin Platform API behöver du kunna logga in
    som en Zetkin-användare.
---

Användare loggar alltid in på login.zetk.in. För att din applikation ska kunna
agera som en inloggad användare behöver du skicka användaren till login.zetk.in
tillsammans med ditt app-ID. Efter att användaren loggat in skickas hen tillbaka
till din domän tillsammans med en krypterad sträng som din applikation måste
dekryptera med hjälp av den applikationsspecifika API-nyckeln.

Kontakta oss för att [registrera din app](../registrera-app) och tilldelas ett
app-ID och en API-nyckel.
