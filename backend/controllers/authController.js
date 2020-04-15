const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

controller.login = function(req, res, next) {
    controller.db.getConnection()
    .then(context => {
        context.connection.query('select * from guava_user_table', function(err, row) {
            context.connection.release();
            if (err) {
                const error = new Error(err);
                error.status = 500;
                next(error);
            }
            res.json({row});
        })
    })
    .catch((err) => {
        next(err);
    });
}

module.exports = controller;

module.exports = controller;