/**
 * Nov-svet Hra – hlavný modul
 * Interaktívna hra o vývoji medziľudských vzťahov
 */

const Hra = require('./hra');

function main() {
  const hra = new Hra();
  hra.inicializuj();
  console.log('Nov-svet Hra spustená. Napíšte "pomoc" pre zoznam príkazov.');
  hra.spusti();
}

if (require.main === module) {
  main();
}

module.exports = { main };
