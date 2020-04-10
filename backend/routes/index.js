const path = require('path');
const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = router;
