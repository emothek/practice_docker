const express = require('express');
const server = express();
const PORT = 3001;
const Pool = require('pg').Pool;

const db = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5433,
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));