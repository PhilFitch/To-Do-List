require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const items = require('./items');
// note: you will need to create the database!
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            items.map(item => {
                return client.query(`
                    INSERT INTO to_do (item, completed)
                    VALUES ($1, $2);
                `,
                [item.item, item.completed]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });