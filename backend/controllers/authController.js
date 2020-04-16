const User = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

controller.login = function(req, res, next) {
    const { username, password } = req.body;

    const search = user => {
        if (!user) throw new Error('id fail');
        else if (password != user.password) throw new Error('password fail');
    };

    const response = () => {
        res.json({message: 'sucess'});
    };

    const onError = error => {
        res.json({
            error: error.message,
        });
    }

    User.findUserByUsername(username)
    .then(search)
    .then(response)
    .catch(onError);
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
        res.json({
            error: error.message,
        });
    };

    User.findUserByUsername(username)
    .then(create)
    .then(response)
    .catch(onError);
}

module.exports = controller;