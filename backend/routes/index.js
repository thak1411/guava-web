const path = require('path');
const apiRoutes = require('./api');
const config = require('../config');
const router = require('express').Router();
const JwtValidator = require('../util/JwtValidator.js');

/**
 * <b> Get Home Page </b>
 */
router.get('/', function(req, res, next) {
    res.sendfile(path.join(__dirname, '..', 'dist', 'index.html'));
});

/**
 * <b> Get Login Page </b>
 */
router.get('/login', function(req, res, next) {
    JwtValidator.validate(req.cookies[config.cookie.session])
    .then(token => {
        res.redirect('/');
    })
    .catch(() => {
        res.sendfile(path.join(__dirname, '..', 'dist', 'login.html'));
    });
});

/**
 * <b> Get Join Page </b>
 */
router.get('/join', function(req, res, next) {
    JwtValidator.validate(req.cookies[config.cookie.session])
    .then(token => {
        res.redirect('/');
    })
    .catch(() => {
        res.sendfile(path.join(__dirname, '..', 'dist', 'join.html'));
    });
});

/**
 * <b> Get Log Out </b>
 */
router.get('/logout', function(req, res, next) {
    res.clearCookie(config.cookie.session, { path: '/', domain: config.cookie.domain });
    res.redirect("/");
});

/**
 * <b> Load Api </b>
 */
router.use("/api", apiRoutes);

module.exports = router;
