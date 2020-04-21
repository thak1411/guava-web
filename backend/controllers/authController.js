const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

const self = controller;

controller.login = function(req, res, next) {
    const { username, password } = req.body;
    const check = user => {
        if (!user) {
            const error = new Error('id fail');
            error.status = 401;
            throw error;
        }
        return bcrypt.hash(password, user.salt)
        .then(hash => {
            if (user.password != hash) {
                const error = new Error('password fail');
                error.status = 401;
                throw error;
            }
        })
        .then(() => {
            const p = new Promise((resolve, reject) => {
                const secret = req.app.get('jwt-secret');
                const expired = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 day
                jwt.sign({
                    id: user.id,
                    exp: expired,
                    name: user.name,
                    created: user.created,
                    username: user.username,
                    nickname: user.nickname,
                    student_id: user.student_id,
                    permission_level: user.permission_level,
                }, secret, {
                    issuer: self.config.jwt.issuer,
                    subject: self.config.jwt.subject,
                    algorithm: self.config.jwt.algorithm,
                }, (err, token) => {
                    if (err) reject(err);
                    resolve(token);
                });
            });
            return p;
        });
    };

    const saveCookie = token => {
        res.cookie(self.config.cookie.session, token, {
            domain: self.config.cookie.domain,
        });
        return token;
    }

    const response = token => {
        res.json({
            message: 'success login',
            token,
        });
    };

    const onError = error => {
        res.status(error.status).json({
            error: error.message,
        });
    };

    User.findUserByUsername(username)
    .then(check)
    .then(saveCookie)
    .then(response)
    .catch(onError);
};

controller.join = function(req, res, next) {
    const { username, password, student_id, name, nickname } = req.body;
    let newUser = new User.User({
        name,
        username,
        nickname,
        password,
        student_id,
    });

    const create = user => {
        if (user) {
            const error = new Error('username exists');
            error.status = 401;
            throw error;
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

    bcrypt.genSalt(self.config.saltRound)
    .then(salt => {
        newUser.salt = salt;
        return bcrypt.hash(password, salt);
    })
    .then(hash => {
        newUser.password = hash;
    })
    .then(() => {
        User.findUserByUsername(username)
        .then(create)
        .then(response)
        .catch(onError);
    })
    .catch(onError);
};

module.exports = controller;