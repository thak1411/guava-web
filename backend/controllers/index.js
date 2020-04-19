const auth = require('./authController.js');
const user = require('./userController.js');

const api = {
    auth,
    user,
};

module.exports = api;