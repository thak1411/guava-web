const baseController = require('./baseController.js');

let controller = new baseController({
    db: false,
});

const self = controller;

controller.cookie = function (req, res, next) {
    return res.status(200).json({
        cookie: self.config.cookie,
    });
};

module.exports = controller;