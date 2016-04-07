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
    // if(dbquery(menuItem.name)){
    //   dbadd(menuItem);
    //   res.status(200).send(dbquery(menuItem.name));
    // }
    // else{
    //     res.sendStatus(400);
    // }

  }

  addCafe: function(req, res){
    var newCafe = req.body ? req.body.cafe.toLowerCase() : null;
    // if(newCafe){
    //   //check that it doesn't already exist
    //     if(dbDoesExist(newCafe.name)){
    //       //if it does
    //       res.status(400).send('this cafe already exists');
    //     }
    //     else{
    //       dbAddCafe(newCafe);
    //       res.status(200).send(dbGetCafe(newCafe.name));
    //     }
    // }
    //TODO: handle adding this to a real DB
  }
};
