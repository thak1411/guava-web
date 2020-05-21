const jwt = require('jsonwebtoken');
const config = require('../config');

const auth = {
    checkUser: function (req, res, next) {
        const token = req.cookies[config.cookie.session];
        if (!token) {
			const error = new Error("Not Logged In");
			error.status = 401;
			return next(error);
        }
        jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
			if (err) {
				if (err.name === "TokenExpiredError") {
					const error = new Error(err);
					error.status = 9000;
					res.clearCookie(config.cookie.session);
					return next(error);
				} else {
					const error = new Error(err);
					error.status = 9000;
					return next(error);
				}
			}

            req.token = decoded;
			return next();
		});
    }
};

module.exports = auth;