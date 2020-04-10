'use strict';
var env = process.env.NODE_ENV;
var credentials;

if (env === 'production') {
	credentials = require('./credentials.js');
} else {
	credentials = require('./local_credentials.js');
}

console.log('env: ', env);

module.exports = credentials;