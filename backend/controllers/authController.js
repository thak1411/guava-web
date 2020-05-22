const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const utilModel = require('../models/utilModel.js');
const UserModel = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

const self = controller;

controller.login = function(req, res, next) {
    const { username, password } = req.body;

    const validateItems  = [ username,  password  ];
    const validateLength = [ [ 4, 16 ], [ 8, 16 ] ];
    for (let i = 0; i < validateItems.length; ++i) {
        const item = validateItems[i];
        const length = validateLength[i];
        if (!this.lengthCheck(item, length[0], length[1])) {
            const error = new Error('Invalid Params');
            error.status = 400;
            return next(error);
        }
    }

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
        res.status(200).json({
            code: 200,
            token: context.token,
            내용: "로그인에 성공하였습니다.",
            desciption: 'Login Successfully',
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

    const validateItems  = [ username,  password,  name,      studentId,  nickname ];
    const validateLength = [ [ 4, 16 ], [ 8, 16 ], [ 2, 16 ], [ 10, 10 ], [4, 16]  ];
    for (let i = 0; i < validateItems.length; ++i) {
        const item = validateItems[i];
        const length = validateLength[i];
        if (!this.lengthCheck(item, length[0], length[1])) {
            const error = new Error('Invalid Params');
            error.status = 400;
            return next(error);
        }
    }

    const create = context => {
        const user = context.user;
        if (user) {
            const error = new Error('Username Exists');
            error.status = 500;
            return Promise.reject(error);
        } else {
            return UserModel.createUser(context, { user: newUser });
        }
    };

    const response = context => {
        res.status(200).json({
            code: 200,
            내용: "회원가입에 성공하였습니다.",
            desciption: 'Registered Successfully',
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
        .then(context => {
            return UserModel.checkStudentId(context, { student_id: student_id });
        })
        .then(context => {
            return UserModel.checkNickName(context, { nickname: nickname });
        })
        .then(create)
        .then(response)
        .catch(onError);
    })
    .catch(onError);
};

module.exports = controller;