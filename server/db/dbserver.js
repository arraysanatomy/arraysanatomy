var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('cafe');

db.serialize(function(){
	db.run("CREATE TABLE cafes 
		(ID INT PRIMARY KEY NOT NULL,
		 name VARCHAR(15) NOT NULL,
		 address VARCHAR(25) NOT NULL,
		 phone VARCHAR(14) NOT NULL,
		)");
	
	db.run("CREATE TABLE menu
		(ID INT PRIMARY KEY NOT NULL,
			item VARCHAR(15),
			rating VARCHAR(5)")

	var stmt = db.prepare("INSERT INTO cafes VALUES (?) ")

});
