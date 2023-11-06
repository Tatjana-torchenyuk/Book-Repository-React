# 💻 PROJECT: Web Frameworks (avond)

- [💻 PROJECT: Web Frameworks (avond)](#-project-web-frameworks-avond)
  - [🥅 Overzicht en Leerdoelen](#-overzicht-en-leerdoelen)
  - [🔍 Web Frameworks (avond)](#-web-frameworks-avond)
  - [🛠️ Opdrachten](#️-opdrachten)
  - [📚 Bronnen](#-bronnen)
  - [🔒 minimum eisen](#-minimum-eisen)
  - [🏆 **Evaluatie**](#-evaluatie)
    - [React.js (50%)](#reactjs-50)
    - [API's \& web services (20%)](#apis--web-services-20)
    - [Ontwerp \& analyse (15%)](#ontwerp--analyse-15)
    - [GIT \& Documentatie (15%)](#git--documentatie-15)


## 🥅 Overzicht en Leerdoelen

 - De student ontwerpt een web applicatie op basis van een functionele analyse.
 - De student maakt web applicaties in react js
 - De student maakt componenten met properties, hooks en states
 - De student maakt gebruik van een routing library voor een applicatie met meerdere pagina’s
 - De student maakt componenten die met elkaar communiceren aan de hand van een gedeelde state
 - De student maakt web applicaties door gebruik te maken van externe web services
 - De student kan herbruikbare componenten bouwen
 - De student gebruikt GIT bij de ontwikkeling van het project

## 🔍 Web Frameworks (avond)

Je maakt een web-applicatie met de technologieën die werden behandeld tijdens de les: React.js, JSX, CSS.

**⚠️Voor je begint met code schrijven⚠️** teken je éérst **een mock-up** van je web-app. Een mock-up is een zwart-wit tekening van elke pagina van je applicatie (géén kleur) waar je rekening houdt met ruimte en layout.  
De mock-up afbeeldingen plaats je in een aparte map in je Github Repo.

 - [ ] De web-app bevat **verschillende paden**, waarop je verschillende inhoud laat zien.
   - een pad naar een home-pagina. Dit is het root pad (`/`).
   - een pad naar een overzichtspagina.
   - een pad naar een detailpagina, waar je op uitkomt na het klikken op een item in de overzichtspagina.
 - [ ] De web-app maakt gebruik van **een relevante API** waar je inhoud vandaan haalt.  
   > ⚠️ De API die je gebruikt werd *niet* gebruikt tijdens de labo's.
 - [ ] De web-app bevat **een filter-functie** die de gebruiker toestaat om inhoud op de overzichtspagina te filteren. Zorg voor minstens 3 filters om te kunnen toepassen.
 - [ ] De web-app bevat **verschillende instellingen** die het uitzicht en/of gebruik van de website aanpassen. Zorg voor minstens 3 van deze instellingen.
 - [ ] De web-app bevat **een uniforme, duidelijke menu** die op elke pagina beschikbaar is.

## 🛠️ Opdrachten

<details>
<summary>opdracht 1: mock-up</summary>

> - [ ] Maak een mock-up voor elk pad. Hou hierbij rekening met ruimte en layout.
>   - Je mag je baseren op bestaande templates (bv. [de w3.css templates](https://www.w3schools.com/w3css/w3css_templates.asp)) of zelf een ontwerp bedenken.

</details>

---

<details>
<summary>opdracht 2: web-app</summary>

> - [ ] Gebruik client-side routing om de verschillende paden van je web-app te definieren.
> - [ ] Gebruik een root-element om de gemeenschappelijke delen van je web-app te bepalen.
> - [ ] Maak je mock-ups zo nauwgezet mogelijk na.

</details>

---

<details>
<summary>opdracht 3: filter-functie</summary>

> - [ ] Gebruik prop-drilling om de filter-functie op de overzichtspagina te implementeren.
>   - bv.: filter op naam, prijs, grootte, ...

</details>

---

<details>
<summary>opdracht 4: instellingen</summary>

> - [ ] Gebruik `context`s om instellingen toe te passen op de web-app.
>   - bv.: light/dark theme, wisselen tussen verschillende talen, pokémon generation, ...

</details>

---

## 📚 Bronnen

 - [cursus en labo's](https://similonap.github.io/webframeworks-cursus/wf-course)
 - [react website](https://react.dev/)
 - [website templates van W3Schools](https://www.w3schools.com/w3css/w3css_templates.asp)
 - [lijst van leuke API's](https://apilist.fun/)

## 🔒 minimum eisen

 - [ ] de mock-up werd op tijd gemaakt en voor er een react-app werd gemaakt (-4 indien niet)
 - [ ] de web-app bevat alle gevraagde paden (-2 per pad dat niet werkt)
 - [ ] de web-app maakt gebruik van een relevante API (-4 indien niet)
 - [ ] de web-app bevat 3 filters (-1 per filter indien niet)
 - [ ] de web-app bevat 3 verschillende instellingen (-1 per instelling indien niet)
 - [ ] het eindproduct wordt ingeleverd als een .zip bestand (-1 indien niet)
 - [ ] bij het inleveren wordt de node_modules map verwijderd (-1 indien niet)

## 🏆 **Evaluatie**

### React.js (50%)

| doelstelling | 18-20 | 15-17 | 12-14 | 10-12 | 0-9 |
| ------------ | ----- | ----- | ----- | ----- | --- |
***De student maakt web applicaties in react js*** | De applicatie draait zonder warnings of fouten. Componenten worden correct aangemaakt. Componenten en hun afgeleiden worden bijgehouden in een eigen, duidelijke bestandsstructuur in het project. CSS code van een component wordt bijgehouden in een component-specifiek CSS-bestand. De verschillen tussen JSX en HTML worden in acht genomen. | De applicatie draait zonder fouten. Componenten worden correct aangemaakt. Componenten en hun afgeleiden worden bijgehouden in een eigen, duidelijke bestandsstructuur in het project. CSS code van een component wordt bijgehouden in een component-specifiek CSS-bestand. De verschillen tussen JSX en HTML worden in acht genomen. | De applicatie draait zonder fouten. Componenten worden correct aangemaakt. Componenten en hun afgeleiden worden bijgehouden in een eigen, duidelijke bestandsstructuur in het project. De verschillen tussen JSX en HTML worden in acht genomen. CSS code van componenten staat verspreid. | De applicatie draait, maar enkele fouten en warnings zijn aanwezig. Componenten worden correct aangemaakt. De verschillen tussen JSX en HTML worden in acht genomen. CSS code van componenten staat verspreid. Componenten zijn niet duidelijk gestructureerd. | De applicatie werkt niet, of niet volledig. Componenten worden niet correct aangemaakt. Een duidelijke bestandsstructuur is niet aanwezig.
***De student maakt componenten met properties, hooks en states*** | Componenten maken gebruik van properties, hooks en states waar nodig. States worden niet onnodig aangepast of aangemaakt. useEffect wordt gebruikt met een correcte lijst van properties en states. useEffect side-effects worden opgeschoond. | Componenten maken gebruik van properties, hooks en states waar nodig. States worden niet onnodig aangepast of aangemaakt. useEffect wordt gebruikt met een correcte lijst van properties en states. Side-effects worden niet opgeschoond. | Componenten maken gebruik van properties, hooks en states waar nodig. useEffect wordt gebruikt met een correcte lijst van properties en states. States worden onnodig aangepast of aangemaakt. | Componenten maken gebruik van properties, hooks en states waar nodig. useEffect wordt gebruikt met een correcte lijst van properties en states. States worden onnodig aangepast of aangemaakt. Side-effects worden niet opgeschoond. | Componenten maken onnodig of onvoldoende gebruik van properties, hooks en states waar nodig. useEffect wordt niet correct gebruikt of opgeschoond. | 
***De student kan herbruikbare componenten bouwen*** | Componenten worden herbruikt, waarbij rekening gehouden wordt met semantiek. Herbruikte componenten worden aangepast met behulp van properties. | Componenten worden herbruikt, waarbij rekening gehouden wordt met semantiek. Herbruikte componenten worden aangepast met behulp van properties. Er zijn echter optimalere oplossingen die je had kunnen gebruiken. | Componenten worden herbruikt, waarbij rekening gehouden wordt met semantiek. Enkele componenten hadden echter duidelijk herbruikt kunnen worden. | Enkele componenten worden herbruikt, maar er wordt onvoldoende gebruik gemaakt van properties om dit ten volle te benutten. | Componenten worden onvoldoende herbruikt.
***De student maakt componenten die met elkaar communiceren aan de hand van een gedeelde state*** | Er wordt optimaal gebruik gemaakt van property drilling en context waar dit nodig is. | Er wordt gebruik gemaakt van property drilling en context waar dit nodig is. Er zijn echter optimalere oplossingen die je had kunnen gebruiken. | Er wordt overmatig gebruik gemaakt van property drilling en context. | Er wordt voldoende gebruik gemaaakt van property drilling en context, hoewel de implementatie soms niet werkt. | Er wordt onvoldoende gebruik gemaakt van property drilling of context.
***De student maakt gebruik van een routing library voor een applicatie met meerdere pagina’s*** | Gedeelde onderdelen worden verzameld in een root element. Er is een root route voorzien. Pagina's zijn bereikbaar via de web-app interface en de pagina-url. | Gedeelde onderdelen worden verzameld in een root element. Er is een root route voorzien. Pagina's zijn bereikbaar via de web-app interface. | Gedeelde onderdelen worden verzameld in een root element. Er is een root route voorzien. Pagina's zijn bereikbaar via de web-app interface. Er zijn echter optimalere oplossingen die je had kunnen gebruiken.  | Gedeelde onderdelen worden onvoldoende verzameld in een root element. Er is een root route voorzien. Niet alle pagina's zijn bereikbaar via de web-app interface. | De pagina's zijn niet bereikbaar. Een root route werd niet voorzien. Gedeelde onderdelen worden niet verzameld in een root element.

### API's & web services (20%)

| doelstelling | 18-20 | 15-17 | 12-14 | 10-12 | 0-9 |
| ------------ | ----- | ----- | ----- | ----- | --- |
***De student maakt web applicaties door gebruik te maken van externe web services*** | API's worden correct aangesproken. Data wordt asynchroon ingeladen. Data wordt correct bewaard in states of variabelen. | API's worden correct aangesproken. Data wordt asynchroon ingeladen. Data wordt correct bewaard in states of variabelen. Er zijn echter optimalere oplossingen die je had kunnen gebruiken. | API's worden correct aangesproken. Data wordt asynchroon ingeladen. Data wordt bewaard in states of variabelen, maar er worden te veel tussenstappen gebruikt. | API's worden correct aangesproken. Data wordt asynchroon ingeladen. Data wordt bewaard in states of variabelen. API's worden echter te vaak aangesproken. | API's worden niet correct aangesproken. Data wordt niet asynchroon ingeladen.

### Ontwerp & analyse (15%)

| doelstelling | 18-20 | 15-17 | 12-14 | 10-12 | 0-9 |
| ------------ | ----- | ----- | ----- | ----- | --- |
***De student ontwerpt een web applicatie op basis van een functionele analyse.*** | Het ontwerp is goed uitgewerkt. Het resultaat houdt zich zeer sterk aan het ontwerp. Weinig toevoegingen waren nodig om het resultaat in een werkende en afgewerkte staat te krijgen. | Het ontwerp is voldoende uitgewerkt. Het resultaat houdt zich zeer sterk aan het ontwerp. Enkele toevoegingen waren nodig om het resultaat in een werkende en afgewerkte staat te krijgen, omdat het ontwerp enkele zaken had gemist. | Het ontwerp is voldoende uitgewerkt. Het resultaat houdt zich aan het ontwerp, maar er zijn enkele significante verschillen. | Het ontwerp is voldoende uitgewerkt. Het resultaat houdt zich echter niet of onvoldoende aan het ontwerp. | Het ontwerp is onvoldoende uitgewerkt, waardoor het niet mogelijk was om het resultaat hieraan te laten voldoen.

### GIT & Documentatie (15%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student gebruikt GIT bij de ontwikkeling van het project.*** | De code is voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt met duidelijke commentaar om code-wijzigingen bij te houden. | De code is meestal voorzien van duidelijke en uitgebreide commentaar, maar mist dit op minder belangrijke plekken. Een Version Control System wordt regelmatig gebruikt met duidelijke commentaar om code-wijzigingen bij te houden. | De code is meestal voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt, maar mist soms duidelijke commit-commentaren. | De code is onvoldoende voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt. | De code is niet voorzien van commentaar.  Een Version Control System is te weinig gebruikt, of mist te vaak duidelijke commit-commentaren.