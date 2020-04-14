function baseController({
    db = true,
}) {
    if (db) {
        baseController.prototype.db = require('../models/dbModel.js');
    }
}

module.exports = baseController;