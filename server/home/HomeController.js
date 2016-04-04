var db = require('../db/db');

module.exports = {
	search: function(req, res) {
		var cafe = req.body ? req.body.cafe.toLowerCase() : null;
    //TODO: change this to handle using a DB instead
    if (cafe && db[cafe]) {
				res.status(200).send(JSON.stringify(db[cafe]));
		}
		else{
			res.sendStatus(400);
		}
	}
  //used on POST to api/items/add
  addMenuItem: function(req, res){
    var menuItem = req.body ? req.body.menuItem.toLowerCase() : null;
    //TODO: how to determine which cafe to add new menu item to

    //TODO: CHECK DB IF THIS ALREADY EXISTS
    /*if(JSON.parse(menuItem).rating && JSON.parse(menuItem).name){
      res.status(200).send();
    }
    else{
      res.sendStatus(400).send("Must include a rating and name!")
    } */
  }

  addCafe: function(req, res){
    var newCafe = req.body ? req.body.cafe.toLowerCase() : null;
    //TODO: handle adding this to a real DB
  }
}
