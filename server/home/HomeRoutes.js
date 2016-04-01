var homecontroller = require('./HomeController');

module.exports = function(app) {
	app.post('/search', homecontroller.search);
}