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

// app.get('/api/cart_pods', (req, res) => {
//     client.query(`
//         SELECT
//             id,
//             name,
//             no_of_carts,
//             seating,
//             location
//         FROM CART_PODS;
//     `)
//         .then(result => {
//             res.json(result.rows);
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err.message || err
//             });
//         });
// });

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});