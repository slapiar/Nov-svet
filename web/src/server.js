require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get('/api/zdravo', (req, res) => {
  res.json({
    sprava: 'Vitajte v Nov-svet!',
    verzia: process.env.npm_package_version || '1.0.0',
  });
});

app.get('/api/status', (req, res) => {
  res.json({ stav: 'aktívny', cas: new Date().toISOString() });
});

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Nov-svet server beží na porte ${PORT}`);
  });
}

module.exports = app;
