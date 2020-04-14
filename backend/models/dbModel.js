const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool({
    host               : config.database.user.host,
    user               : config.database.user.user,
    password           : config.database.user.password,
    connectionLimit    : config.database.user.connectionLimit,
    waitForConnections : config.database.user.waitForConnections,
    multipleStatements : config.database.user.multipleStatements,
});

module.exports = {
    getConnection: function() {
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
    },
};