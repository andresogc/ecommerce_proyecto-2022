const jwt = require('jsonwebtoken');

const secret = 'secret';
const token = 'asdasd.asdasd.asdasdgg';

function verifyToken(token,secret) {
    return jwt.verify(payload,secret);
}


const payload = verifyToken(token,secret);