var db = require('../db/db');

module.exports = {
	search: function(req, res) {
		console.log("req.data: ", req.body);
		var cafe = req.body ? req.body.cafe.toLowerCase() : null;
		if (cafe && db[cafe]) {
				res.status(200).send(JSON.stringify(db[cafe]));
		}
		else{
			res.sendStatus(400);
		}
		// TODO: grab things from database
	}
}
