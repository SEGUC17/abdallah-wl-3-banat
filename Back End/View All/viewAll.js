
				// View All Businesses Sorted alphabetically //

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

    

MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } 
    else {
            var collection = db.collection('business');
            collection.find().sort({businessName: 1}).toArray(function(err, docs) {
            console.log(docs);      
    });
}

        db.close();
});

