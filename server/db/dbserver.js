var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var file = "./server/db/cafe.db";
var db = new sqlite3.Database(file);
var exists = fs.existsSync(file);

if(!exists) {
	console.log("Creating DB file.");
	// fs.openSync('./server/db/' + file, 'w');
	// fs.openSync(file, 'w');

}


db.serialize(function(){
	
		db.run("CREATE TABLE cafes \
			(ID INT PRIMARY KEY NOT NULL, \
			 name VARCHAR(15) NOT NULL, \
			 address VARCHAR(25) NOT NULL, \
			 phone VARCHAR(14) NOT NULL \
			)");
		
		db.run("CREATE TABLE menu \
			(ID INT PRIMARY KEY NOT NULL, \
				item VARCHAR(15), \
				rating VARCHAR(5))");
	
	
	//var stmt = db.prepare("INSERT INTO cafes VALUES (?) ")

});
db.close();

module.exports = db;