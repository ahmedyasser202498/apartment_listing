const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'apartments',
  password: 'yourpassword',
  port: 5432,
});

// List all apartments
app.get('/api/apartments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM apartments');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get apartment details
app.get('/api/apartments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM apartments WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Apartment not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new apartment
app.post('/api/apartments', async (req, res) => {
  try {
    const {name,address,price,area,bedrooms_count,bathrooms_count,furnished,ownership,description,logo} = req.body;
    const result = await pool.query(
      `INSERT INTO apartments (  name, address, price, area, bedrooms_count, bathrooms_count,   furnished, ownership, description, logo) VALUES (  $1, $2, $3, $4, $5, $6,   $7, $8, $9, $10) RETURNING *`,
      [name,address,price,area || null,bedrooms_count || null,bathrooms_count || null,furnished || false,ownership || null,description || null,logo || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
