const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'testJWT',
    host: 'localhost',
    port: '5432',
    password: '159alex951'
})

module.exports = pool;