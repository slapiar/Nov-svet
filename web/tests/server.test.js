const request = require('supertest');
const app = require('../src/server');

describe('Nov-svet API', () => {
  test('GET /api/zdravo vráti uvítaciu správu', async () => {
    const res = await request(app).get('/api/zdravo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('sprava');
    expect(res.body.sprava).toContain('Nov-svet');
  });

  test('GET /api/status vráti stav servera', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('stav', 'aktívny');
    expect(res.body).toHaveProperty('cas');
  });
});
