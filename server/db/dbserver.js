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
				(ID INT PRIMARY KEY NOT NULL, \
				 name VARCHAR(15) NOT NULL, \
				 address VARCHAR(25) NOT NULL, \
				 phone VARCHAR(14) NOT NULL \
				)");
			
			db.run("CREATE TABLE menu \
				(ID INT PRIMARY KEY NOT NULL, \
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
	db.get("SELECT ID FROM cafes WHERE name = ?", name, function(err, row){
		console.log("row is: ", row);
	});
}

// takes a string
function addCafe(cafeName){
	db.run("INSERT INTO cafes(name) VALUES(?)", cafeName);
};

function addCafeMenuItem(menuItemObj, cb){
	// doesCafeMenuItemExist()
	var cafeName = menuItemObj.name;
	var menuItemName = menuItemObj.menuItem.name;
	var rating = menuItemObj.menuItem.rating;

  db.get("SELECT ID FROM cafes WHERE name = ?", cafeName, function(err, row){
  	console.log("row is: ", row);
  	db.run("INSERT INTO menu(item, rating, cafeID) VALUES(?, ?, ?)", [menuItemName, rating, row.id], function(err){
  		console.log("error is: ", err);
  		cb();
  	});
  });
  
};

// function doesCafeExist(cafeName){

// };
// function doesCafeMenuItemExist(menuItemObj){

// };

addCafe("testCafe");

var menuItemObj = {
  name: "starpoo",
  menuItem: {
  	name: "coffee",
  	rating: 5
  }
}

DBQuery(menuItemObj);


db.close();

module.exports = db;