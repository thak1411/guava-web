const auth = require('./authController.js');
const user = require('./userController.js');
const util = require('./utilController.js');

const api = {
    auth,
    user,
    util,
};

module.exports = api;