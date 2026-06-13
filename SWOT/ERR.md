# ERR – Register chýb / Error register

Tento dokument je pracovný register chýb, nejasností, technických pascí a procesných zistení zdroja SWOT projektu Nový svet.

## Účel

ERR zachytáva zistené chyby, aby nezapadli v rozhovoroch, databázach alebo rozhraní. Každá chyba môže byť zároveň vstupom do SWOT, WHAT IF diagnostiky, TO BE modelovania alebo technickej úlohy v Zephyre.

## Pravidlo zápisu

Každý záznam má byť formulovaný tak, aby bolo jasné:

- čo je chyba alebo nejasnosť,
- kde bola zistená,
- aký má dopad,
- či ide o UI, API, databázu, proces, dokumentáciu alebo metodiku,
- kto alebo aká funkcia ju má posúdiť,
- či môže byť opravená automaticky alebo vyžaduje schválenie.

## Pracovná šablóna záznamu

```text
ID:
Názov:
Dátum zistenia:
Miesto výskytu:
Popis:
Dopad:
Typ chyby: UI / API / DB / proces / dokumentácia / metodika
Napojené moduly: AS_IS / TO_BE / WHAT_IF / ZEPHYR
Vyžaduje schválenie: áno / nie
Navrhovaná reakcia:
Stav: open / in_review / fixed / archived
```

## Záznamy

### ERR-0001 – Nejasný alebo nekorektný breadcrumb v Zephyr projekte

**Dátum zistenia:** 2026-06-13  
**Miesto výskytu:** Zephyr → Nástenka / Projekty / Nový svet / Nový Svet  
**Popis:** Breadcrumb skopírovaný z projektu zobrazuje postupnosť „Nástenka / Projekty / Nový svet / Nový Svet“. Vyzerá to nejednoznačne, pretože sa opakuje názov projektu alebo sa mieša úroveň stránky/projektu. Momentálne to nie je blokujúce, ale je vhodné to evidovať ako UI alebo navigačnú nejasnosť.

**Dopad:** Môže miasť používateľa pri orientácii v projekte a pri rozlišovaní úrovní: administrácia, zoznam projektov, konkrétny projekt, názov projektu.

**Typ chyby:** UI / navigácia  
**Napojené moduly:** AS_IS, TO_BE, WHAT_IF, ZEPHYR  
**Vyžaduje schválenie:** nie na evidenciu; áno na zásah do pluginu alebo návrh Dylanovi  
**Navrhovaná reakcia:** Najprv ponechať ako zistenie v ERR. Pri technickom audite Zephyru preveriť, či ide o vlastnosť pluginu, nastavenie názvu projektu, jazykový preklad, alebo šablónu breadcrumbu.  
**Stav:** open

