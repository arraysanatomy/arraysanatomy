var db = require('../db/dbserver.js');

module.exports = {
	search: function(req, res) {
		var cafe = req.body ? req.body.cafe.toLowerCase() : null;
    db.doesCafeExist(cafe, function(booler)){
      if(booler){
        db.getCafe(cafe, function(cafeObj){
          res.status(200).send(JSON.stringify(cafeObj));
        });
      }
      else{
        res.status(400).send("That cafe was not found.");
      }
    }
	},

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

  },

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
