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
	db.get("SELECT ID FROM cafes WHERE name = ?", [name], function(err, row){});
}

// takes a string
function addCafe(cafeName, cb){
	db.run("INSERT INTO cafes(name) VALUES(?)", [cafeName], function(err){
		  if(err){
		  	console.log('error inside addcafe: ', err);
		  }
		  if(cb){
  			 cb();
  		}
	});
};

function addCafeMenuItem(menuItemObj, cb){
	var cafeName = menuItemObj.name;
	var menuItemName = menuItemObj.menuItem.name;
	var rating = menuItemObj.menuItem.rating;
  db.get("SELECT ID FROM cafes WHERE name = ?", [cafeName], function(err, row){
  	db.run("INSERT INTO menu(item, rating, cafeID) VALUES(?, ?, ?)", [menuItemName, rating, row.ID], function(err){
  		if(cb){
  			 cb();
  		}
  	});
  });

};

function doesCafeExist(cafeName, cb){
	db.get("SELECT name FROM cafes WHERE name = ?", [cafeName], function(err, row){
		if(cb){
			cb(row);
		}
	});
};

function doesCafeMenuItemExist(menuItemObj, cb){
  
	db.get("SELECT ID FROM cafes WHERE name = ?", [menuItemObj.name], function(err, row){
		  db.get("SELECT item FROM menu WHERE item = ? AND cafeID = ?", [menuItemObj.menuItem.name, row.ID], function(err, row){
		  	if(cb){
		  		cb(row);
		  	}
		  });
	})
};

module.exports = {
	db: db,
	DBQuery: DBQuery,
	addCafe: addCafe,
	addCafeMenuItem: addCafeMenuItem,
	doesCafeExist: doesCafeExist,
	doesCafeMenuItemExist: doesCafeMenuItemExist
}