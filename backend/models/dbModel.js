const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool({
    host               : config.database.host,
    user               : config.database.user,
    password           : config.database.password,
    database           : config.database.database,
    connectionLimit    : config.database.connectionLimit,
    waitForConnections : config.database.waitForConnections,
    multipleStatements : config.database.multipleStatements,
});

function getConnection() {
    return new Promise(function(resolved, rejected) {
        pool.getConnection(function(err, connection) {
            if (err) {
                let error = new Error(err);
                error.status = 500;
                return rejected(error);
            }
            return resolved({ connection: connection });
        });
    });
}

module.exports = {
    getConnection,
};