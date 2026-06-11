const Hra = require('../src/hra');

describe('Hra', () => {
  let hra;

  beforeEach(() => {
    hra = new Hra();
  });

  test('inicializuj nastaví počiatočný stav', () => {
    hra.inicializuj();
    const stav = hra.ziskajStav();
    expect(stav.stav).toBe('inicializovana');
    expect(stav.uroven).toBe(1);
    expect(stav.body).toBe(0);
    expect(stav.pocetVztahov).toBe(0);
    expect(stav.hrac).toBeDefined();
  });

  test('spusti zmení stav na aktívna', () => {
    hra.inicializuj().spusti();
    expect(hra.ziskajStav().stav).toBe('aktivna');
  });

  test('zastavit zmení stav na zastavena', () => {
    hra.inicializuj().spusti().zastavit();
    expect(hra.ziskajStav().stav).toBe('zastavena');
  });

  test('pridajVztah pridá vzťah a aktualizuje body', () => {
    hra.inicializuj();
    hra.pridajVztah({ meno: 'Jana', typ: 'priatelia' });
    const stav = hra.ziskajStav();
    expect(stav.pocetVztahov).toBe(1);
    expect(stav.body).toBe(10);
  });

  test('pridajVztah hodí chybu bez mena', () => {
    hra.inicializuj();
    expect(() => hra.pridajVztah({})).toThrow('Vzťah musí mať meno');
  });

  test('zvysUroven zvýši úroveň pri dostatku bodov', () => {
    hra.inicializuj();
    hra.body = 100;
    const zvysena = hra.zvysUroven();
    expect(zvysena).toBe(true);
    expect(hra.uroven).toBe(2);
  });

  test('zvysUroven nezvýši úroveň pri nedostatku bodov', () => {
    hra.inicializuj();
    hra.body = 50;
    const zvysena = hra.zvysUroven();
    expect(zvysena).toBe(false);
    expect(hra.uroven).toBe(1);
  });
});
