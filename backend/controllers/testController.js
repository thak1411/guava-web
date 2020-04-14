const baseController = require('./baseController.js');

let controller = new baseController({
    db: true,
});

controller.test = function(req, res, next) {
    controller.db.getConnection()
    .then(context => {
        context.connection.query('select * from guavadb.guava_user_table', function(err, row) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                next(error);
            }
            context.connection.release();
            res.json({row});
        })
    })
    .catch((err) => {
        next(err);
    });
}

module.exports = controller;