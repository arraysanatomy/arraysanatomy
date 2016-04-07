var homecontroller = require('./HomeController');

module.exports = function(app) {
	app.post('/search', homecontroller.search);
  app.post('/api/menu/add', homecontroller.addMenuItem);
  app.post('/api/cafe/add', homecontroller.addCafe);
};
