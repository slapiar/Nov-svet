# Changelog – Nový svet

Záznam zmien a zafixovaných rozhodnutí projektu **Nový svet**.

---
## 2026-06-13 – Zephyr ako prvá PM vrstva Nového sveta

Bol vytvorený súbor `ZEPHYR.md`, ktorý mapuje možnosti pluginov Zephyr Project Manager Free + PRO na prvú projektovú vrstvu systému Nový svet.

Zafixované pracovné rozhodnutie:

```text
Zephyr zatiaľ nie je Nový svet.

Ale môže byť prvou dielňou, v ktorej zistíme, či sa Nový svet dá technicky a vzťahovo skladať bez zbytočného plytvania energiou, psychikou a peniazmi.

## 2026-06-12 – Validácia Autority autora, cieľa a projektu

### Zafixovaný princíp validácie

Komu sa dostalo cti rozhodovať sam nemôže sa zdržať rozhodnutia. Inak sám stratí na autorite a vylúči sa z rozhodovacieho procesu. Proces pokračuje bez neho. Autorita autora, zakladateľa, cieľa, myšlienky, nápadu alebo projektu sa v systéme nevaliduje iba formálnym zápisom.

Validuje sa aj tým, že iný účastník prijme výzvu, vstúpi do komunikácie, pripojí sa k cieľu alebo sa zapojí do projektu.

Každý účastník cieľa, myšlienky, nápadu alebo projektu svojím správaním validuje Autoritu ostatných účastníkov toho istého priestoru.

### Validácia prijatím výzvy

Ak autor alebo zakladateľ osloví účastníka výzvou, účastník má povinnosť zaujať stanovisko.

V aplikácii to bude riešené tak, že rozhodovacie modálne okno nepustí účastníka k ďalšej činnosti, kým výzvu nepotvrdí alebo neodmietne.

Základná odpoveď:

```text
1 = prijímam / potvrdzujem
0 = odmietam / nepotvrdzujem


## 2026-06-12 – Axiómy autority myšlienky, cieľa a projektu

### Zafixovaný princíp bazálnej hodnoty myšlienky

Bolo potvrdené, že **myšlienka, nápad alebo pôvodný zámer je bazálnou hodnotou všetkého ďalšieho vývoja systému**.

Bez myšlienky nevzniká cieľ.  
Bez cieľa nevzniká projekt.  
Bez projektu nevzniká realizácia.  
Bez realizácie nevzniká udržateľný systém.

Preto platí:

```text
myšlienka → cieľ → štúdia uskutočniteľnosti → otvorený projekt → projekt v realizácii → udržateľný projekt

## 2026-06-12 – SQL mapa kapitol 1.1 a 1.2

### Zafixované mapovanie textov do databázy

Po prečítaní súborov:

- `1. Kapitola.md`
- `1.2 Zmysly a Vnemy.md`

bolo potvrdené, že pred pokračovaním na ďalšie kapitoly treba najprv dokončiť SQL mapovanie toho, čo už je v kapitolách 1.1 a 1.2 popísané.

Základné pravidlo ostáva nezmenené:

```text
Bez placeholderov.
Bez testovacích záznamov.
Do ostrej databázy sa vkladá iba to, čo je už reálne popísané alebo zdrojovo doložené.
```

### Interné zdroje kapitol

Do tabuľky `ns_sources` boli pridané dva interné projektové Markdown zdroje:

| Source code | Súbor | Význam |
|---|---|---|
| `novy_svet_ch_1_1_archetypalne_dominanty` | `1. Kapitola.md` | Zdroj pre archetypálne dominanty, drámy pozornosti, stred kyvadla a praktický význam morálnych matríc |
| `novy_svet_ch_1_2_zmysly_vnemy` | `1.2 Zmysly a Vnemy.md` | Zdroj pre zmysly, vnemy, telesné signály, pudy, myšlienkové výklady a skutky ako dôkazy |

### Drámy pozornosti ako tiene archetypov

Bola vytvorená tabuľka:

```text
ns_archetype_attention_dramas
```

Účel tabuľky:

```text
mapovať konkrétne drámy pozornosti opísané v kapitole 1.1 na príslušné archetypy
```

Do tabuľky bolo vložených 6 riadkov, presne podľa kapitoly 1.1:

| Archetyp | Drama code | Názov drámy |
|---|---|---|
| Oriphiel | `oriphiel_sudca_casu` | Oriphielská dráma: Sudca času |
| Zachariel | `zachariel_vseved_guru` | Zacharielovská dráma: Vševed / Guru |
| Michael | `michael_zastrasovatel` | Michaelovská dráma: Zastrašovateľ |
| Anael | `anael_zvodca_narcis` | Anaelovská dráma: Zvodca / Narcis |
| Rafael | `rafael_chladny_hrac` | Rafaelovská dráma: Chladný hráč |
| Gabriel | `gabriel_chudak_ja` | Gabrielovská dráma: Chudák ja |

Samael nebol do tejto tabuľky doplnený, pretože v kapitole 1.1 zatiaľ nemá samostatne popísanú drámu pozornosti. Tým ostáva databáza verná textu a nič si nevymýšľa.

Kontrolný výpis potvrdil:

```text
ns_archetype_attention_dramas → 6 riadkov
```

### Zmyslové a vnemové brány archetypov

Bola vytvorená tabuľka:

```text
ns_archetype_sensory_gateways
```

Účel tabuľky:

```text
mapovať zmyslové, telesné a vnútorné brány pôsobenia archetypov podľa kapitoly 1.2
```

Do tabuľky bolo vložených 7 riadkov:

| Archetyp | Gateway code | Názov brány |
|---|---|---|
| Oriphiel | `oriphiel_zmyslova_brana` | Oriphielova zmyslová brána času a hranice |
| Zachariel | `zachariel_zmyslova_brana` | Zacharielova zmyslová brána miery a nadhľadu |
| Michael | `michael_zmyslova_brana` | Michaelova zmyslová brána |
| Samael | `samael_zmyslova_brana` | Samaelova vnútorná brána prítomnosti |
| Anael | `anael_zmyslova_brana` | Anaelova zmyslová brána |
| Rafael | `rafael_zmyslova_brana` | Rafaelova zmyslová brána |
| Gabriel | `gabriel_zmyslova_brana` | Gabrielova zmyslová brána |

Kontrolný výpis potvrdil:

```text
ns_archetype_sensory_gateways → 7 riadkov
```

Dôležité rozhodnutie:

```text
Samael má svoje miesto v zmyslovej / vnútornej vrstve podľa kapitoly 1.2,
ale nie je zatiaľ doplnený do drám pozornosti podľa kapitoly 1.1.
```

### Procesná postupnosť z kapitoly 1.2

Bola vytvorená tabuľka:

```text
ns_matrix_process_steps
```

Účel tabuľky:

```text
zachytiť základnú procesnú postupnosť mapovania človeka od prvého vnemu po skutok ako dôkaz
```

Do tabuľky boli vložené 4 kroky:

| Poradie | Step code | Názov kroku | Význam |
|---:|---|---|---|
| 1 | `vnemy_prve_signaly` | Vnemy sú prvé signály | Vnem je prvý signál aktivácie matrice |
| 2 | `pudy_prve_impulzy` | Pudy sú prvé impulzy | Pud ukazuje smer prvotnej reakcie |
| 3 | `myslienky_prve_vyklady` | Myšlienky sú prvé výklady | Myšlienka ukazuje, ako si človek vysvetľuje aktivovanú silu |
| 4 | `skutky_prve_dokazy` | Skutky sú prvé dôkazy | Skutok je rozhodujúci pre pravdivosť prejavu, osoh a rast Autority |

Kontrolný výpis potvrdil:

```text
ns_matrix_process_steps → 4 riadky
```

### Potvrdený procesný most

Týmto bol v databáze ukotvený procesný most:

```text
zmyslový vnem
→ pudový impulz
→ myšlienkový výklad
→ skutok ako dôkaz
→ osoh
→ možný rast Autority
```

Tento most je základom pre ďalšie algoritmické mapovanie profilu člena v systéme Nový svet.

---

## 2026-06-12 – 3M / mapa morálnych matríc a historická vrstva

### Zafixované princípy práce

- Morálne matrice nesúdia.
- Matrica je mapa, nie sudca.
- Morálne matrice sa v systémovej aplikácii chápu ako mapa sledovaných vlastností človeka, prírody, spoločnosti, zákonitostí a udalostí.
- Morálne matrice nie sú hotové otázky a odpovede.
- Matrice slúžia ako referenčná mapa parametrov; konkrétne odpovede a výsledky sa ukladajú osobitne cez ID profilu, ID hodnotiaceho parametra a odpoveď / výsledok.
- Do databázy sa nevkladajú nulové ani nepoužité parametre „nahlucho“ pre každého člena.
- Väzby v databáze sa vedú cez ID, nie cez text.
- Text slúži človeku, ID databáze.
- Do ostrej databázy sa nevkladajú placeholdery, testovacie záznamy ani dočasné údaje.
- Model sa overuje kontrolou štruktúry, SELECT-mi nad reálnymi údajmi alebo vložením reálnych zdrojovo podložených záznamov.
- Ak údaj nie je presne známy alebo doložený, radšej ostáva prázdny, než aby bol vymyslený.

### Kapitoly 1.1 a 1.2

- Kapitola **1.1 Vplyv archetypálnych dominánt na život človeka** bola pracovné ukotvená ako výklad pôsobenia archetypálnych dominánt na človeka a dejiny.
- Rozlíšili sa dve úrovne pôsobenia matríc:
  - úroveň jednotlivca – vrodené psychologické sily, archetypy, hodnoty, talenty a morálne cítenie,
  - úroveň dejín – dominanty historických rytmov podľa Emila Páleša.
- Zmysly a vnemy boli vyčlenené do samostatnej kapitoly **1.2 Zmysly a vnemy**, aby sa nezlievali s kapitolou 1.1.
- Kapitola 1.1 má na kapitolu 1.2 odkazovať, nie ju nahrádzať.

### Archetypálna mapa

Bolo ukotvených sedem základných archetypálnych domén:

| Kód | Anjel | Planéta / princíp |
|---|---|---|
| `oriphiel` | Oriphiel | Saturn |
| `zachariel` | Zachariel | Jupiter |
| `michael` | Michael | Mars |
| `samael` | Samael | Slnko |
| `anael` | Anael | Venuša |
| `rafael` | Rafael | Merkúr |
| `gabriel` | Gabriel | Mesiac |

K archetypom boli doplnené alternatívne názvy v samostatnom poli `alternative_names`.

### Časové manifestácie archetypov

Bola vytvorená a naplnená tabuľka `ns_archetype_time_manifestations`, previazaná cez `archetype_id` na `ns_archetypes.id`.

Overené počty časových manifestácií:

| Cyklus | Počet záznamov |
|---|---:|
| `daily` | 7 |
| `weekly` | 7 |
| `monthly` | 16 |
| `life_stage` | 7 |

Kontrola osirelých časových manifestácií vrátila prázdny výsledok, teda všetky záznamy majú platnú väzbu na archetyp.

#### Denný cyklus

Bolo vložených 7 denných intervalov:

- hlboká noc – Oriphiel,
- večer – Gabriel,
- neskoré popoludnie – Anael,
- popoludnie – Zachariel,
- poludnie – Rafael,
- ráno – Michael,
- slnečný stred – Samael.

#### Týždenný cyklus

Bolo vložených 7 dní:

| Deň | Archetyp |
|---|---|
| Pondelok | Gabriel |
| Utorok | Michael |
| Streda | Rafael |
| Štvrtok | Zachariel |
| Piatok | Anael |
| Sobota | Oriphiel |
| Nedeľa | Samael |

#### Životný cyklus

Bolo vložených 7 životných záznamov:

| Vek | Archetyp |
|---|---|
| 0–7 | Gabriel |
| 7–14 | Rafael |
| 14–21 | Anael |
| 21–42 | Michael |
| 21–42 | Samael |
| 42–49 | Zachariel |
| 49+ | Oriphiel |

Michael a Samael sú v intervale 21–42 vedení ako samostatné záznamy, hoci majú rovnaký vekový interval.

#### Mesačný lunárny cyklus

Mesačný cyklus bol nastavený ako 8 lunárnych fáz s kombinovanými archetypmi, pričom každá kombinácia je uložená ako samostatný riadok:

| Fáza | Archetypy |
|---|---|
| Nov / zárodok | Oriphiel + Gabriel |
| Dorastajúci kosák | Gabriel + Rafael |
| Prvá štvrť | Michael + Rafael |
| Dorastajúci vypuklý mesiac | Michael + Zachariel |
| Spln | Samael + Anael |
| Ubúdajúci vypuklý mesiac | Zachariel + Anael |
| Posledná štvrť | Michael + Oriphiel |
| Ubúdajúci kosák | Oriphiel + Gabriel |

Technické číslovanie lunárneho mesiaca používa rozsah 0.00–29.53 lunárneho dňa.

### Historická sieť

Bol odmietnutý jednoduchý lineárny model historickej vrstvy a nahradený sieťovým modelom:

- `ns_archetypes`,
- `ns_archetype_historical_periods`,
- `ns_historical_evidence`,
- `ns_historical_period_evidence`,
- `ns_archetype_evidence`,
- `ns_sources`,
- `ns_evidence_sources`.

Základný význam vrstvy:

```text
archetyp → historické obdobie → dôkaz → zdroj
```

#### Potvrdené cudzie kľúče

- `ns_archetype_evidence.archetype_id` → `ns_archetypes.id`
- `ns_archetype_evidence.evidence_id` → `ns_historical_evidence.id`
- `ns_archetype_historical_periods.archetype_id` → `ns_archetypes.id`
- `ns_archetype_time_manifestations.archetype_id` → `ns_archetypes.id`
- `ns_evidence_sources.evidence_id` → `ns_historical_evidence.id`
- `ns_evidence_sources.source_id` → `ns_sources.id`
- `ns_historical_period_evidence.evidence_id` → `ns_historical_evidence.id`
- `ns_historical_period_evidence.historical_period_id` → `ns_archetype_historical_periods.id`

### Prvý ostrý zdroj

Do tabuľky `ns_sources` bol vložený prvý reálny zdroj:

| Pole | Hodnota |
|---|---|
| `source_code` | `pales_angelologia_dejin_2001_sk` |
| `source_type` | `book` |
| `title` | Angelológia dejín. Paralelné a periodické javy v dejinách |
| `author` | Emil Páleš |
| `publication_year` | 2001 |
| `language_code` | sk |
| `is_active` | 1 |

Poznámka zdroja:

> Prvé slovenské vydanie bolo jednozväzkové, vydané v roku 2001 a malo 648 strán. Použiť ako základný zdroj pre historické cykly a periodické javy podľa Páleša.

Polia `publisher`, `isbn` a `url` sa majú doplniť až vtedy, keď budú presne známe.

### Prvá historická línia 354-ročných duchov času

Bola vložená reálna historická línia podľa Pálešovej tabuľky 354-ročných duchov času:

| Archetyp | Začiatok | Koniec | Evidence code | Citovaný údaj |
|---|---:|---:|---|---|
| Anael | 108 | 463 | `pales_table_anael_108` | Anael -7332 -4852 -2372 +108 |
| Zachariel | 463 | 817 | `pales_table_zachariel_463` | Zachariel -6978 -4498 -2017 +463 |
| Rafael | 817 | 1171 | `pales_table_rafael_817` | Rafael -6624 -4144 -1663 +817 |
| Samael | 1171 | 1525 | `pales_table_samael_1171` | Samael -6270 -3789 -1309 +1171 |
| Gabriel | 1525 | 1879 | `pales_table_gabriel_1525` | Gabriel -5915 -3435 -955 +1525 |
| Michael | 1879 | 2234 | `pales_table_michael_1879` | Michael -5561 -3080 -600 +1879 |
| Oriphiel | 2234 | 2588 | `pales_table_oriphiel_2234` | Orifiel -5206 -2726 -246 +2234 |

Každý riadok má potvrdený reťazec:

```text
archetyp
→ historické obdobie
→ dôkaz
→ vzťah primary/direct
→ zdroj Angelológia dejín
→ konkrétny citovaný údaj z tabuľky
```

### Funkčný historický dotaz

Bol overený univerzálny SELECT, ktorý podľa zadaného roku nájde príslušný archetypálny historický cyklus.

Pre rok 2026 systém vrátil:

| Rok | Archetyp | Obdobie | Zdrojový citát |
|---:|---|---|---|
| 2026 | Michael | Michaelova 354-ročná historická perióda 1879 – 2234 | Michael -5561 -3080 -600 +1879 |

Tým bolo potvrdené, že databáza vie odpovedať na otázku:

```text
Aký archetypálny duch času pôsobí v roku X?
```

### GitHub

Repozitár projektu bol overený:

| Pole | Hodnota |
|---|---|
| `repository_full_name` | `slapiar/Nov-svet` |
| `default_branch` | `main` |
| `visibility` | public |
| `archived` | false |
| oprávnenia | admin, maintain, pull, push, triage |

Tento changelog bol založený ako `Changelog.md` v repozitári `slapiar/Nov-svet`.
