var express = require('express');
var router = express.Router();

var users = require('./routes/users')

router.use('/signup', require('./routes/registration'))
router.post('/auth', require('./routes/auth'))
router.use(require('./auth_middleware'))
router.get('/users', users.list)

module.exports = router