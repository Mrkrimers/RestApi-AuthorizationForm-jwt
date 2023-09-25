const jwt = require('jsonwebtoken')

function createToken(user) {
    const token = jwt.sign(user[0], 'testKey');

    console.log(token);
    return token;
}

module.exports = createToken;