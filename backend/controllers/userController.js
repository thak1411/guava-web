const userModel = require('../models/userModel.js');
const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

const self = controller;

controller.info = function (req, res, next) {
    return res.status(200).json({
        id: req.token.id,
        name: req.token.name,
        created: req.token.created,
        username: req.token.username,
        nickname: req.token.nickname,
        student_id: req.token.student_id,
        permission_level: req.token.permission_level,
    });
};

controller.userList = function(req, res, next) {
    if (req.token.permission_level < 9999) {
        const error = new Error('Not athorized');
        error.status = 403;
        return next(error);
    }

    const response = context => {
        const resUser = [];
        for (let i = 0; i < context.userList.length; ++i) {
            resUser.push({
                id: context.userList[i].id,
                name: context.userList[i].name,
                created: context.userList[i].created,
                nickname: context.userList[i].nickname,
                student_id: context.userList[i].student_id,
                permission_level: context.userList[i].permission_level,
            })
        }
        res.status(200).json({
            code: 200,
            내용: "유저정보를 불러왔습니다.",
            userList: resUser,
            desciption: 'Load User List Successfully',
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
        return userModel.getAllUsers(context);
    })
    .then(response)
    .catch(onError);
};

controller.deleteUser = function(req, res, next) {
    const { id } = req.query;

    if (req.token.permission_level < 9999) {
        const error = new Error('Not athorized');
        error.status = 403;
        return next(error);
    }
    
    const response = context => {
        res.status(200).json({
            code: 200,
            내용: "유저를 삭제했습니다.",
            desciption: 'Delete User Successfully',
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
        return userModel.deleteUser(context, { id });
    })
    .then(response)
    .catch(onError);
};

controller.editUser = function(req, res, next) {
    const { id, name, nickname, student_id, permission_level } = req.body;

    const newUser = new userModel.User({
        name,
        nickname,
        student_id,
        permission_level,
    });

    if (req.token.permission_level < 9999) {
        const error = new Error('Not athorized');
        error.status = 403;
        return next(error);
    }
    
    const response = context => {
        res.status(200).json({
            code: 200,
            내용: "유저 정보를 수정했습니다.",
            desciption: 'Edit User Successfully',
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
        return userModel.editUser(context, { id: id, user: newUser });
    })
    .then(response)
    .catch(onError);
};

module.exports = controller;