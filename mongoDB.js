var MongoClient = require('mongodb').MongoClient;
// Connection URL

var insertWords = function(db, col, data, callback) {
    // Get the documents collection
    var collection = db.collection(col);

    collection.insertMany(
        data,
        function(err, result) {

            if (err) {
                console.log(err);
                callback(err);
            }

            console.log("Inserted documents into the document collection");
            callback(result);
    });

};

var updateWord = function(db, col, condition, data, callback) {
    // Get the documents collection
    var collection = db.collection(col);
    // Update document where a is 2, set b equal to 1
    collection.updateOne(
        condition,
        { $set: data }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
};

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

module.exports.insertWords = insertWords;
module.exports.updateWord = updateWord;
module.exports.findWords = findWords;