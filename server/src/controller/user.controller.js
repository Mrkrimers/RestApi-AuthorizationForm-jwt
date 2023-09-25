const express = require('express');
const { getAllUser, getUserById, createUser, deleteUser, authUser, updateUser } = require('../service/user.service')
const createToken = require('../helper/jwt')

const userRoute = express.Router();

userRoute.get('/', async (request, response) => {
    try {
        response.status(200).send(await getAllUser());
    } catch (err) {
        response.status(404).send(err.message);
    }
})

userRoute.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        response.status(200).send(await getUserById(id));
    } catch (err) {
        response.status(404).send(err.message);
    }
})

userRoute.post('/', async (request, response) => {
    try {
        const { name, surname, email, password } = request.body

        response.status(200).send(await createUser(name, surname, email, password));
    } catch (err) {
        response.status(404).send(err.message);
    }
})

userRoute.post('/auth', async (request, response) => {
    try {
        const { email, password } = request.body
        const data = await authUser(email, password)
        const token = createToken(data)
        response.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })

        response.status(200).send(data);
    } catch (err) {
        response.status(404).send(err.message);
    }
})

userRoute.put('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const { name, surname, email, password } = request.body
        response.status(200).send(await updateUser(name, surname, email, password, id));
    } catch (err) {
        response.status(404).send(err.message);
    }
})

userRoute.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        response.status(200).send(await deleteUser(id));
    } catch (err) {
        response.status(404).send(err.message);
    }
})


module.exports = userRoute;