const { getAllUserDB, getUserByIdDB, createUserDB, getByEmailDB, deleteUserDB, updateUserDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt')

const salt = 10;

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDB();
    return data;
}

async function createUser(name, surname, email, password) {
    const user = await getByEmailDB(email);

    if (user.length) throw new Error('user already exist')

    const hashPwd = await bcrypt.hash(password, salt)
    const newUser = await createUserDB(name, surname, email, hashPwd);

    return newUser;
}

async function updateUser(name, surname, email, password, id) {
    const data = await updateUserDB(name, surname, email, password, id);
    return data;
}

async function authUser(email, password) {
    const user = await getByEmailDB(email);

    if (!user.length) throw new Error('user not found')

    const userPwd = user[0].password;

    const isMatch = await bcrypt.compare(password, userPwd)
    if (!isMatch) throw new Error(`pwd not match`);

    return user;
}

async function deleteUser(id) {
    const data = await deleteUserDB(id);
    return data;
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    authUser,
    deleteUser,
    updateUser
}