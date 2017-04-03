
					// View Top 10 Rated Businesses //

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

    

MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } 
    else {
       		var collection = db.collection('business');
    		collection.find().sort({rating: -1}).limit(10).toArray(function(err, docs) {
   			console.log(docs);		
    });
}

		db.close();
});

