// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public'));
app.use(express.json());

app.get('/api/list_items', (req, res) => {
    client.query(`
        SELECT *
        FROM TO_DO;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/list_items', (req, res) => {
    const item = req.body;
    console.log(item, 'in server');
    client.query(`
        INSERT INTO to_do (item)
        VALUES ($1)
        RETURNING *;
    `,
    [item.item]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.put('/api/list_items/:id', (req, res) => {
    const id = req.params.id;
    const item = req.body;
    console.log(id);
    client.query(`
        UPDATE to_do
        SET    completed = $2
        WHERE  id = $1
        RETURNING *;
    `,
    [id, item.completed]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        }); 
});

app.delete('/api/list_items/:id', (req, res) => {
    const id = req.params.id;

    client.query(`
        DELETE FROM to_do
        WHERE  id = $1
        RETURNING *;
    `,
    [id]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        }); 
});

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});