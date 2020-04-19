function baseController({
    db = true,
}) {
    if (db) {
        baseController.prototype.db = require('../models/dbModel.js');
    }
    baseController.prototype.config = require('../config');
}

module.exports = baseController;