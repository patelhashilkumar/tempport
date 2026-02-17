const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (SQLite - file-based, no external server needed)
const db = new Database(path.join(__dirname, 'portfolio.db'));
db.pragma('journal_mode = WAL');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT,
    description TEXT,
    tech TEXT
  )
`);

// Seed default projects if table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM projects').get();
if (count.count === 0) {
    const insert = db.prepare('INSERT INTO projects (title, category, description, tech) VALUES (?, ?, ?, ?)');
    insert.run('Seasonal Sales Predictor', 'Machine Learning', 'End-to-end ML pipeline for seasonal product demand forecasting.', JSON.stringify(['Python', 'XGBoost', 'Streamlit']));
    insert.run('Mindwell-AI', 'Full Stack + AI', 'AI-driven mental wellness app.', JSON.stringify(['React', 'Node', 'Gemini']));
}

console.log('SQLite database connected');

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Projects API
app.get('/api/projects', (req, res) => {
    const projects = db.prepare('SELECT * FROM projects').all();
    // Parse tech JSON strings back to arrays
    const parsed = projects.map(p => ({ ...p, tech: JSON.parse(p.tech) }));
    res.json(parsed);
});

app.post('/api/projects', (req, res) => {
    const { title, category, description, tech } = req.body;
    const result = db.prepare('INSERT INTO projects (title, category, description, tech) VALUES (?, ?, ?, ?)').run(title, category, description, JSON.stringify(tech));
    res.status(201).json({ id: result.lastInsertRowid, title, category, description, tech });
});

// Graceful shutdown
process.on('SIGINT', () => {
    db.close();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
