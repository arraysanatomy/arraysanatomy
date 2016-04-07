var db = require('../db/dbserver.js');

module.exports = {
	search: function(req, res) {
		var cafe = req.body ? req.body.cafe.name.toLowerCase() : null;
    db.doesCafeExist(cafe, function(booler){
      if(booler){
        db.getCafe(cafe, function(cafeObj){
          res.status(200).send(JSON.stringify(cafeObj));
        });
      }
      else{
        res.status(400).send("That cafe was not found.");
      }
    });
	},

  //used on POST to api/items/add
  addMenuItem: function(req, res){
    var menuItem = req.body ? req.body.menu[0].item.toLowerCase() : null;
    var rating = req.body ? req.body.menu[0].rating.toLowerCase() : null;
    var cafe = req.body ? req.body.cafe.name.toLowerCase() : null;



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
    var cafe = req.body ? req.body.cafe.name.toLowerCase() : null;
    db.doesCafeExist(cafe, function(booler){
      if(booler){
        res.status(400).send('That cafe already exists.');
      }
      else{
        db.addCafe(cafe, function(){
          db.getCafe(cafe, function(cafeObj){
            res.status(200).send(JSON.stringify(cafeObj));
          });
        });
      }
    });
  }
};
