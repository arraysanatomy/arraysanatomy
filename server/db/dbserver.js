var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var file = "./server/db/cafe.db";
var db = new sqlite3.Database(file);
var exists = fs.existsSync(file);

if(!exists) {
	console.log("Creating DB file.");
	// fs.openSync('./server/db/' + file, 'w');
	// fs.openSync(file, 'w');
	db.serialize(function(){
		 // db.run("PRAGMA foreign_keys = ON");
			db.run("CREATE TABLE cafes \
				(ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
				 name VARCHAR(15), \
				 address VARCHAR(25), \
				 phone VARCHAR(14) \
				)");
			
			db.run("CREATE TABLE menu \
				(ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
					item VARCHAR(15), \
					rating REAL(1), \
			    cafeID INTEGER(10), \
			    FOREIGN KEY(cafeID) REFERENCES cafes(ID) \
        )");
		
		
		//var stmt = db.prepare("INSERT INTO cafes VALUES (?) ")

	});
}


function DBQuery(menuItemObj){
	var name = menuItemObj.name;
	console.log("name is: ", name);
	db.get("SELECT ID FROM cafes WHERE name = ?", [name], function(err, row){
		console.log("row is: ", row);
	});
}

// takes a string
function addCafe(cafeName, cb){
	console.log("cafeName is: ", cafeName);
	db.run("INSERT INTO cafes(name) VALUES(?)", [cafeName], function(err){
		  if(cb){
  			 cb();
  		}
	});
};

function addCafeMenuItem(menuItemObj, cb){
	// doesCafeMenuItemExist()
	var cafeName = menuItemObj.name;
	var menuItemName = menuItemObj.menuItem.name;
	var rating = menuItemObj.menuItem.rating;

	console.log("cafeName: " + cafeName + "menuItemName: " + menuItemName + "rating: " + rating);

  db.get("SELECT ID FROM cafes WHERE name = ?", [cafeName], function(err, row){
  	console.log("row is: ", row);
  	db.run("INSERT INTO menu(item, rating, cafeID) VALUES(?, ?, ?)", [menuItemName, rating, row.ID], function(err){
  		console.log("error is: ", err);
  		if(cb){
  			 cb();
  		}
  	});
  });

};

function doesCafeExist(cafeName, cb){
	db.get("SELECT name FROM cafes WHERE name = ?", [cafeName], function(err, row){
		console.log("ROW is: ", row);
		if(cb){
			cb(row);
		}
	});
};

function doesCafeMenuItemExist(menuItemObj, cb){
  
	db.get("SELECT ID FROM cafes WHERE name = ?", [menuItemObj.name], function(err, row){
		console.log("row in doesCafeMenuItemExist is: ", row);
		  db.get("SELECT item FROM menu WHERE item = ? AND cafeID = ?", [menuItemObj.menuItem.name, row.ID], function(err, row){
		  	if(cb){
		  		cb(row);
		  	}
		  });
	})
};

addCafe("testCafe", function(){});

var menuItemObj = {
  name: "starpoo",
  menuItem: {
  	name: "coffee",
  	rating: 5
  }
}

DBQuery(menuItemObj);
addCafeMenuItem(menuItemObj, function(){});
doesCafeExist('stlolololololarpoo', function(row){
	console.log('this is the row inside invocation', row);
});
doesCafeMenuItemExist(menuItemObj, function(row){
	console.log('we are invocating now', row);
});
db.close();

module.exports = db;