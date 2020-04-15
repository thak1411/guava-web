const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

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
    res.sendfile(path.join(__dirname, '..', 'dist', 'login.html'));
});

/**
 * <b> Get Join Page </b>
 */
router.get('/join', function(req, res, next) {
    res.sendfile(path.join(__dirname, '..', 'dist', 'join.html'));
});

/**
 * <b> Load Api </b>
 */
router.use("/api", apiRoutes);

module.exports = router;
