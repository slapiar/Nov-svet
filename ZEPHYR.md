# ZEPHYR.md

## Zephyr Project Manager ako prvá projektová vrstva systému Nový svet

**Stav dokumentu:** pracovný technický návrh  
**Režim práce:** 3P – pokojne, poriadne, podrobne  
**Účel:** zmapovať, čo môžu pluginy **Zephyr Project Manager** a **Zephyr Project Manager Pro** urobiť pre praktické overovanie systému **Nový svet**.

Tento dokument chápe Zephyr nie ako hotový systém Nového sveta, ale ako prvú dostupnú projektovú dielňu, v ktorej sa dajú bez zbytočného míňania energie, psychiky a peňazí testovať vzťahy, ciele, záväzky, dôkazy, osoh, Autorita a udržateľnosť spolupráce.

---

## 1. Základná myšlienka

Projektový manažment v systéme Nový svet nemá byť chápaný len ako zoznam úloh, termínov a projektov.

Má byť chápaný ako **technická kostra overovania vzťahov a záväzkov**.

V systéme Nový svet potrebujeme prakticky sledovať postupnosť:

```text
cieľ → prísľub → záväzok → skutok → dôkaz → osoh → Autorita → vzťahová udržateľnosť
```

Zephyr Free + Zephyr Pro už obsahujú viacero vrstiev, ktoré sa dajú na túto postupnosť namapovať bez toho, aby sme museli hneď vyvíjať nový softvér od nuly.

---

## 2. Overené pluginy

Archív obsahuje dva WordPress pluginy:

```text
zephyr-project-manager/
zephyr-project-manager-pro/
```

Základný plugin tvorí jadro projektového manažmentu. PRO rozšírenie pridáva vrstvy použiteľné pre pokročilejšiu prácu s cieľmi, vlastnými poľami, reportmi, frontendovým prostredím, Kanbanom a míľnikmi.

Z hľadiska Nového sveta je dôležité, že nejde iba o „task manager“, ale o prostredie, v ktorom sa dá vytvoriť prvý živý model vzťahového vývoja projektu.

---

## 3. Mapovanie pojmov Nového sveta na Zephyr

| Nový svet | Zephyr | Význam |
|---|---|---|
| Cieľ | Project | Priestor, v ktorom sa organizuje zámer |
| Prísľub | Task / assigned task | Konkrétne prisľúbená činnosť |
| Záväzok | Task with assignee, date, status | Prísľub so zodpovednosťou a termínom |
| Skutok | Completed task / update | Viditeľný výsledok činnosti |
| Dôkaz | File, attachment, comment, report | Stopový materiál k splneniu alebo nesplneniu |
| Osoh | Progress, report, outcome note | Hodnota vzniknutá z plnenia |
| Autorita | Role, assignee, project owner, custom field | Oprávnenie konať alebo rozhodovať v priestore projektu |
| Validácia | Status, approval-like workflow, comment, assignment | Potvrdenie prijatia, splnenia alebo odmietnutia |
| Kontrakt | Project + tasks + roles + files + terms | Praktická konštrukcia dohody |
| Vzťah | Project membership / team / discussion | Živý priestor medzi účastníkmi |

---

## 4. Projekty ako ciele

V Zephyre môže každý projekt slúžiť ako praktický model cieľa.

Projekt v Novom svete nemá byť iba technická položka. Je to priestor, kde sa stretáva:

- myšlienka,
- cieľ,
- účastníci,
- zodpovednosti,
- úlohy,
- dôkazy,
- komunikácia,
- výsledok,
- osoh.

Zephyr umožňuje vytvárať projektové priestory, v ktorých sa dá sledovať vývoj cieľa od zámeru po reálne kroky.

---

## 5. Úlohy ako prísľuby a záväzky

Úloha v Zephyre môže byť chápaná ako technická podoba prísľubu.

Ak je úloha priradená konkrétnemu človeku, s termínom, stavom a popisom, stáva sa záväzkom.

```text
úloha bez prijatia = návrh
úloha prijatá členom = prísľub
úloha s termínom a zodpovednosťou = záväzok
úloha splnená s dôkazom = skutok
```

Toto je mimoriadne dôležité, pretože Nový svet nemá merať človeka abstraktne, ale cez jeho konkrétne prísľuby, skutky a dôkazy.

---

## 6. Komentáre ako komunikačná stopa

Komentáre a diskusie v Zephyre môžu tvoriť procesnú stopu vzťahu.

Komentár nie je iba poznámka. V našom modeli môže byť:

- vysvetlením rozhodnutia,
- prijatím alebo odmietnutím úlohy,
- doplnením dôkazu,
- upozornením na prekážku,
- záznamom dohody,
- stopou zodpovednosti.

Pre Nový svet je dôležité, aby komunikácia nevznikala mimo projektu a nestrácala sa. Zephyr môže slúžiť ako prvé miesto, kde sa komunikácia viaže na cieľ, úlohu a dôkaz.

---

## 7. Súbory ako dôkazy

Súbory, prílohy a dokumenty v Zephyre môžu tvoriť dôkazovú vrstvu projektu.

Dôkaz môže byť:

- fotka,
- dokument,
- zmluva,
- zápis,
- výstup práce,
- export,
- výkaz,
- potvrdenie.

V Novom svete má dôkaz zásadný význam, pretože Autorita nemá rásť z dojmu, ale zo splnených a doložených skutkov.

---

## 8. Custom fields ako zárodok metrík

PRO vrstva Zephyru obsahuje vlastné polia. Tie sú pre náš vývoj veľmi cenné.

Vlastné polia sa dajú použiť ako prvá jednoduchá forma metrík:

- typ cieľa,
- miera naliehavosti,
- úroveň rizika,
- stav validácie,
- očakávaný osoh,
- typ dôkazu,
- úroveň zodpovednosti,
- vzťah k Autorite,
- stav prijatia.

Custom fields zatiaľ nenahrádzajú plnú metriku Nového sveta, ale umožňujú testovať prvé otázky bez budovania samostatnej databázovej vrstvy.

---

## 9. Míľniky ako hranice vývoja cieľa

Míľniky v PRO vrstve sa dajú chápať ako hranice vývoja cieľa.

Príklad:

```text
myšlienka → otvorený cieľ → pilot → prvý dôkaz → prvý osoh → stabilný proces
```

Míľnik nie je len termín. V Novom svete môže byť chápaný ako overovací prah: systém zisťuje, či cieľ prešiel do ďalšej vrstvy oprávnene.

---

## 10. Kanban ako viditeľný tok záväzkov

Kanban v PRO verzii umožňuje sledovať pohyb úloh medzi stavmi.

Pre Nový svet sa tým dá vizualizovať tok záväzkov:

```text
navrhnuté → prijaté → rozpracované → čaká na dôkaz → splnené → overené
```

Táto vizuálna vrstva môže pomôcť bežným ľuďom pochopiť, kde sa záväzok nachádza bez potreby čítať databázové záznamy.

---

## 11. Reporty ako prvý obraz osohu

Reporty môžu ukazovať, čo bolo splnené, čo mešká, kto je aktívny a kde vzniká problém.

V Novom svete však report nemá byť nástrojom kontroly človeka v zmysle dozoru. Má byť nástrojom rozpoznania pravdy o vývoji cieľa.

Report môže odpovedať na otázky:

- čo bolo prisľúbené,
- čo bolo splnené,
- čo bolo doložené,
- čo ostalo bez dôkazu,
- kde vznikol osoh,
- kde sa záväzok rozpadol,
- kde treba zmeniť postup.

---

## 12. Frontend vrstva ako priestor pre členov

PRO rozšírenie obsahuje frontendové prvky. To je dôležité, pretože Nový svet nemá byť iba administrátorské prostredie vo WordPresse.

Bežný člen potrebuje jednoduché rozhranie:

- vidím cieľ,
- vidím svoju úlohu,
- prijmem alebo odmietnem,
- doplním dôkaz,
- komentujem,
- sledujem stav,
- vidím výsledok.

Frontend Zephyru môže byť prvým mostom medzi technickou správou projektu a použiteľnosťou pre bežného človeka.

---

## 13. REST API ako integračná brána

REST vrstva je dôležitá pre budúce napojenie na vlastné moduly Nového sveta.

Cez API sa môže neskôr prepájať:

- profil člena,
- databáza metrík,
- vlastné validačné procesy,
- dôkazové archívy,
- notifikácie,
- externé rozhrania,
- AI modul.

Zephyr teda nemusí byť konečná architektúra. Môže byť prvá projektová vrstva, nad ktorou alebo vedľa ktorej vzniknú ďalšie vrstvy.

---

## 14. Použitie pre prvý pilot Nového sveta

Prvý pilot môže byť veľmi jednoduchý.

Napríklad projekt:

```text
Pilot: overenie cieľa, prísľubu, dôkazu a osohu v Zephyre
```

V ňom sa vytvoria úlohy:

1. definovať cieľ,
2. určiť účastníkov,
3. priradiť prvé záväzky,
4. doplniť dôkazy,
5. vyhodnotiť osoh,
6. zapísať, čo Zephyr zvládol a kde má hranicu.

Cieľom pilotu nie je dokázať, že Zephyr je finálne riešenie. Cieľom je zistiť, či dokáže uniesť prvú praktickú logiku Nového sveta.

---

## 15. Čo Zephyr zatiaľ nie je

Zephyr zatiaľ nie je:

- plná metrika Autority,
- samostatný vzťahový operačný systém,
- dynamický profil člena,
- fraktálová mapa morálnych matríc,
- databáza cností,
- systém právnej alebo komunitnej certifikácie,
- konečný model Nového sveta.

To však nevadí. Naopak, je lepšie začať s existujúcim nástrojom a zistiť, kde presne narazíme na jeho hranice.

---

## 16. Čo môže Zephyr urobiť hneď

Zephyr môže hneď pomôcť:

- vytvoriť projektové priestory pre ciele,
- priradiť úlohy konkrétnym členom,
- sledovať stav záväzkov,
- ukladať dôkazy,
- viesť komunikáciu pri úlohách,
- používať vlastné polia,
- sledovať míľniky,
- používať Kanban,
- vytvárať reporty,
- testovať frontendový prístup,
- exportovať alebo prepájať údaje.

To je dosť na prvú dielňu.

---

## 17. Vzťah k autorovi Zephyru

Autorovi Zephyru netreba hneď predkladať celý Nový svet ako veľký manifest.

Zmysluplnejšie je predstaviť mu praktický nový prípad použitia:

```text
Zephyr ako nástroj na overovanie uskutočniteľnosti a udržateľnosti ľudských záväzkov v projektovom prostredí.
```

To nie je prosba o funkciu. Je to možnosť rozšírenia významu jeho projektu.

Ak sa ukáže, že Zephyr dobre poslúži ako prvá projektová vrstva, môže byť autor neskôr prizvaný k diskusii o tom, ktoré rozšírenia by mali zmysel aj pre širšiu komunitu používateľov Zephyru.

---

## 18. Najbližšie odporúčané kroky

1. Nasadiť Zephyr Free + PRO ako pracovnú dielňu pre projekt Nový svet.
2. Vytvoriť jeden pilotný projekt.
3. Definovať v ňom cieľ, úlohy, dôkazy, míľniky a vlastné polia.
4. Neprepínať hneď na vývoj nového systému.
5. Najprv zistiť, ktoré princípy sa dajú otestovať existujúcimi nástrojmi.
6. Zapisovať hranice Zephyru do changelogu.
7. Až po prvom pilote rozhodnúť, či má zmysel osloviť autora alebo hľadať ďalší open-source PM systém.

---

## Pracovný záver

Zephyr zatiaľ nie je Nový svet.

Ale môže byť prvou dielňou, v ktorej zistíme, či sa Nový svet dá technicky a vzťahovo skladať bez zbytočného plytvania energiou, psychikou a peniazmi.
