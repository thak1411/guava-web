const User = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

controller.login = function(req, res, next) {
    const { username, password } = req.body;
    res.json({
        username,
        password,
    });
}

controller.join = function (req, res, next) {
    const { username, password, student_id, name, nickname } = req.body;
    const newUser = new User.User({
        username,
        password,
        student_id,
        name,
        nickname,
    });

    const create = user => {
        if (user) {
            throw new Error('username exists');
        } else {
            return User.createUser(newUser);
        }
    };

    const response = () => {
        res.json({
            message: 'registered successfully',
        });
    };

    const onError = error => {
        res.status(error.status).json({
            error: error.message,
        });
    };

    User.findUserByUsername(username)
    .then(create)
    .then(response)
    .catch(onError);
}

module.exports = controller;