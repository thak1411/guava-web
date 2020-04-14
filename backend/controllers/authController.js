const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

controller.login = function(req, res, next) {
    const data = {
		email: req.params.email,
	};
    res.json(data);
}

module.exports = controller;