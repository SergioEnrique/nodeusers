var User = require('../models/user')

exports.list = function (req, res) {
	User.find({}, function (err, users) {
		res.json(users)
	})
}
