// Nov-svet – klientska logika

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/zdravo');
    const data = await res.json();
    console.log('Server:', data.sprava);
  } catch (err) {
    console.warn('Server nedostupný, pracujem offline.');
  }
});
