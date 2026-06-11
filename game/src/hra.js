/**
 * Trieda Hra – jadro herného systému
 */

class Hra {
  constructor() {
    this.stav = 'neaktivna';
    this.hrac = null;
    this.uroven = 1;
    this.body = 0;
    this.vztahy = [];
  }

  inicializuj() {
    this.stav = 'inicializovana';
    this.hrac = { meno: 'Hráč', empatia: 10, komunikacia: 10, porozumenie: 10 };
    this.uroven = 1;
    this.body = 0;
    this.vztahy = [];
    return this;
  }

  spusti() {
    this.stav = 'aktivna';
    return this;
  }

  zastavit() {
    this.stav = 'zastavena';
    return this;
  }

  pridajVztah(vztah) {
    if (!vztah || !vztah.meno) {
      throw new Error('Vzťah musí mať meno');
    }
    this.vztahy.push({ ...vztah, sila: vztah.sila || 1 });
    this.body += 10;
    return this;
  }

  ziskajStav() {
    return {
      stav: this.stav,
      uroven: this.uroven,
      body: this.body,
      pocetVztahov: this.vztahy.length,
      hrac: this.hrac,
    };
  }

  zvysUroven() {
    if (this.body >= this.uroven * 100) {
      this.uroven += 1;
      return true;
    }
    return false;
  }
}

module.exports = Hra;
