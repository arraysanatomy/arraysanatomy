var db = require('../db/db');

module.exports = {
	search: function(req, res) {
		console.log("req.data: ", req.body);
		var cafe = req.body ? req.body.data.cafe.toLowerCase() : null;
		if (cafe) {
			var results = db[cafe];
			if (results) {
				res.status(200).send(JSON.stringify(results));
			}
		} 
		res.sendStatus(400);
		// TODO: grab things from database
	}
}
