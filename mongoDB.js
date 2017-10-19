var MongoClient = require('mongodb').MongoClient;
// Connection URL


var findWords = function(db, col, callback) {
    // Get the documents collection
    var collection = db.collection(col);
    // Find some documents
    collection.find({}).toArray(function(err, docs) {

        if (err) {
            console.log(err);
            callback(err);
        }

        console.log("Found the following records");
        console.dir(docs);

        callback(docs);
    });
};

module.exports.findWords = findWords;