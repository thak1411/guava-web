var jwt_decode = require('jwt-decode');

function validate(token) {
    return new Promise((resolve, reject) => {
        let decoded = {};
        if (token && (decoded = jwt_decode(token))) {
            return resolve(decoded);
        }
        return reject();
    });
}

module.exports = {
    validate,
};