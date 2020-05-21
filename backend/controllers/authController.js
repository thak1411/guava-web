const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

const self = controller;

controller.login = function(req, res, next) {
    const { username, password } = req.body;

    const check = context => {
        const user = context.user;
        return bcrypt.hash(password, user.salt)
        .then(hash => {
            if (user.password != hash) {
                const error = new Error('password fail');
                error.status = 1011;
                return Promise.reject(error);
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
                    if (err) {
                        const error = new Error(err);
                        error.status = 500;
                        return reject(err);
                    }
                    context.token = token;
                    return resolve(context);
                });
            });
            return p;
        });
    };

    const saveCookie = context => {
        const token = context.token;
        res.cookie(self.config.cookie.session, token, {
            domain: self.config.cookie.domain,
        });
        return context;
    }

    const response = context => {
        res.json({
            message: 'success login',
            token: context.token,
        });
        context.connection.release();
    };

    const onError = error => {
        if (error && error.context) {
            error.context.connection.release();
            return next(error.error);
        }
        return next(error);
    };

    self.db.getConnection()
    .then(context => {
        return UserModel.checkUser(context, { username: username });
    })
    .then(check)
    .then(saveCookie)
    .then(response)
    .catch(onError);
};

controller.join = function(req, res, next) {
    const { username, password, student_id, name, nickname } = req.body;
    let newUser = new UserModel.User({
        name,
        username,
        nickname,
        password,
        student_id,
    });

    const create = context => {
        const user = context.user;
        console.log('create');
        if (user) {
            const error = new Error('Username Exists');
            error.status = 500;
            return Promise.reject(error);
        } else {
            return UserModel.createUser(context, { user: newUser });
        }
    };

    const response = context => {
        res.json({
            message: 'registered successfully',
        });
        context.connection.release();
    };

    const onError = error => {
        if (error && error.context) {
            error.context.connection.release();
            return next(error.error);
        }
        return next(error);
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
        self.db.getConnection()
        .then(context => {
            return UserModel.checkUserName(context, { username: username });
        })
        .then(create)
        .then(response)
        .catch(onError);
    })
    .catch(onError);
};

module.exports = controller;