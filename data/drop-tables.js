require('dotenv').config();
// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// note: you will need to create the database!

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS to_do;
    `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });