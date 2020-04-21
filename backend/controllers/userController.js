const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

const self = controller;

controller.info = function (req, res, next) {
    return res.json({
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
    
};

module.exports = controller;