const auth = require('./authController.js');
const test = require('./testController.js');

const api = {
    auth,
    test,
};

module.exports = api;