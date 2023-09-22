const pool = require('../bd');

async function getAllUserDB() {
    const client = await pool.connect();

    const sql = `SELECT * FROM users`;
    const { rows } = await client.query(sql);

    return rows
}

async function getUserByIdDB(id) {
    const client = await pool.connect();

    const sql = `SELECT * FROM users 
    WHERE id = $1`;
    const { rows } = await client.query(sql, [id]);

    return rows
}

async function createUserDB(name, surname, email, password) {
    const client = await pool.connect();

    const sql = `INSERT INTO users (name,surname,email,password)
    VALUES ($1, $2, $3, $4)
    RETURNING*`;
    const { rows } = await client.query(sql, [name, surname, email, password])

    return rows;
}

async function updateUserDB(name, surname, email, password, id) {
    const client = await pool.connect();

    const sql = `UPDATE users SET name = $1, surname = $2, email=$3, password=$4
    WHERE id=$5
    RETURNING*`;
    const { rows } = await client.query(sql, [name, surname, email, password, id])

    return rows;
}

async function getByEmailDB(email) {
    const client = await pool.connect();

    const sql = `SELECT * FROM users 
    WHERE email = $1`

    const { rows } = await client.query(sql, [email])

    return rows;
}

async function deleteUserDB(id) {
    const client = await pool.connect();

    const sql = `DELETE FROM users 
    WHERE id = $1 
    RETURNING*`

    const { rows } = await client.query(sql, [id])

    return rows;
}


module.exports = {
    getAllUserDB,
    getUserByIdDB,
    createUserDB,
    getByEmailDB,
    deleteUserDB,
    updateUserDB
}